// MotoMain -- client

Meteor.subscribe("vehicle_makes");
Meteor.subscribe("vehicle_models");
Meteor.subscribe("vehicles");
Meteor.subscribe("users"); // Probs don't want this here...
Meteor.subscribe("maintenance_schedules");
Meteor.subscribe("maintenance_events");

Template.page.selected_vehicle = function () {
    var selected_id = Session.get("selected");
    if (!selected_id) {
        return null;
    }

    var selected = Vehicles.findOne(selected_id);

    if (selected && (selected.owner_id != Meteor.userId())) {
        Session.set("selected", null);
        return null;
    }

    return selected;
}
