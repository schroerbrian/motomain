
Template.vehicle_event_log.vehicle_events = function () {
    var vehicle_id = Session.get("selected");
    var events = VehicleEvents.find({vehicle_id: vehicle_id},
                                    {sort: { date_performed: -1 }});

    return events;
};
