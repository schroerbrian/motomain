
function schedule_is_past_or_near(sched, time, mileage) {
    // Warn a month in advance.
    var time_passed = (sched.time &&
                       time_elapsed_in_months_since(time) >= (sched.time - 1));

    // Warn 100 miles in advance.
    var mileage_passed = (mileage >= (sched.miles - 100));

    return (time_passed || mileage_passed);
}

Template.vehicle_upcoming_events.upcoming_events = function() {

    var vehicle = Vehicles.findOne(Session.get("selected"));
    var schedule = MaintenanceSchedules.findOne(vehicle.schedule_id);
    var events = VehicleEvents.find({vehicle_id: vehicle._id},
                                    {sort: { date_performed: -1 }});

    if (!vehicle || !schedule || !events) {
        console.log("SHOULDN'T BE HERE.");
        return [];
    }

    var vehicle_start_time = vehicle.new_date || Date.now();

    var upcoming = remaining_maintenance_actions(events.fetch(), schedule,
                                                 vehicle_start_time);

    var upcoming_simplified = _.map(upcoming, function (sched) {
        return {
            item: sched.item,
            action: sched.action,
            when: sched.interval || sched.schedule[0]
        };
    });

    return _.filter(upcoming_simplified, function (upcoming) {
        return schedule_is_past_or_near(upcoming.when,
                                        vehicle_start_time, vehicle.mileage);
    });
};
