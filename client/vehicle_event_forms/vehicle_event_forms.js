
Template.mileage_update_event_form.rendered = function() {
    $('#datepicker');
};

Template.mileage_update_event_form.events({
    'click input[type=submit]': function(e) {
        //assert(Meteor.userId() !== null);

        e.preventDefault();

        var vehicle = Vehicles.findOne(Session.get("selected"));
        if (vehicle === undefined) {
            // something bad.
            alert("Invalid vehicle selection.");
            return;
        }

        var new_mileage = Number($("#vehicle_mileage_input").val());

        var mileage_event = {
            type: "mileage",
            vehicle_id: vehicle._id,
            value: new_mileage,
            date_performed: Date.now(),
            date_logged: Date.now()
        };

        VehicleEvents.insert(mileage_event);


        vehicle.mileage = new_mileage;
        Vehicles.update(vehicle._id, vehicle);
    }
});
