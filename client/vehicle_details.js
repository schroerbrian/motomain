Template.vehicle_details.model = function () {
    var model = VehicleModels.findOne(this.model_id);
    return model;
};

Template.vehicle_details.ownerName = function () {
    var owner = Meteor.users.findOne(this.owner_id);
    if (owner._id === Meteor.userId())
        return "me";
    return displayName(owner);
};

Template.vehicle_details.schedule = function () {
    if (!this.schedule_id)
        return null;
    var schedule = MaintenanceSchedules.findOne(this.schedule_id);
    return schedule;
}

Template.vehicle_details.canRemove = function () {
    return this.owner_id === Meteor.userId();
};

Template.vehicle_details.events({
    'click #set_vehicle_schedule': function (e) {
        e.preventDefault();

        var selected_schedule_id = Session.get("selected_schedule");
        if (selected_schedule_id) {
            this.schedule_id = selected_schedule_id;
            Vehicles.update(this._id, this);
        }
    }
});
