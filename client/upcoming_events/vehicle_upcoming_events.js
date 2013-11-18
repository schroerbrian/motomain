
function is_interval_event_due(interval_event, last_event,
                               vehicle_mileage, vehicle_age_in_months) {
    var last_event_mileage = 0;
    var last_event_time = 0;

    if (last_event !== undefined) {
        if (last_event.mileage !== undefined)
            last_event_mileage = last_event.mileage;

        last_event_time = time_elapsed_in_months_since(
            last_event.date_performed);
    }

    if (interval_event.interval.miles !== undefined) {
        if ((vehicle_mileage - last_event_mileage) >=
            interval_event.interval.miles) {
            return true;
        }
    }

    if (interval_event.interval.time !== undefined) {
        if (last_event_time >= interval_event.interval.time) {
            return true;
        }
    }

    return false;
}

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

    var upcoming_hashes = remaining_maintenance_actions(
        events.fetch(), schedule, vehicle_start_time);

    var upcoming_interval_event_hash = {};

    _.each(upcoming_hashes.interval_event_hash, function(value, key) {
        var last_event = upcoming_hashes.last_interval_event_hash[key];
        if (is_interval_event_due(
            value, last_event, vehicle.mileage,
            time_elapsed_in_months_since(vehicle_start_time))) {
            upcoming_interval_event_hash[key] = value;
        }
    });

    var upcoming = _.extend(upcoming_hashes.expected_event_hash,
                            upcoming_interval_event_hash);

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

Template.vehicle_upcoming_event_item.rendered = function() {
    var self = this;

    if (this.initialized === undefined) {
        var $element = $(this.find("input.check"));
        $element.unbind('click');

        $element.click(function (e) {
            var $this = $(this);

            if ($this.is(':checked')) {

                var vehicle = Vehicles.findOne(Session.get("selected"));

                var event = {
                    type: "scheduled_event",
                    vehicle_id: Session.get("selected"),
                    item: self.data.item,
                    action: self.data.action,
                    mileage: vehicle.mileage,
                    date_performed: Date.now(),
                    date_logged: Date.now()
                };

                VehicleEvents.insert(event);
            }
        });

        this.initialized = true;
    }
};
