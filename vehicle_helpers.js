
function _time_elapsed_in_months_since(time) {
    var then = new Date(time);
    var now  = new Date(Date.now());

    var months = (now.getFullYear() - then.getFullYear()) * 12;
    months -= then.getMonth() + 1;
    months += now.getMonth();

    return months <= 0 ? 0 : months;
}
time_elapsed_in_months_since = _time_elapsed_in_months_since;

function _remaining_maintenance_actions(past_events, schedule,
                                        vehicle_start_date) {
    past_events.sort(function(a, b) {
        return b.date_performed < a.date_performed;
    });

    function make_maintenance_item_key(item, action) {
        return item + "," + action;
    }

    var expected_event_hash = {};
    var interval_event_hash = {};
    for (var i = 0; i < schedule.items.length; ++i) {
        var item_info = schedule.items[i];

        var key = make_maintenance_item_key(item_info.item,
                                            item_info.action);

        if (item_info.schedule) {
            expected_event_hash[key] = item_info;
        } else {
            interval_event_hash[key] = item_info;
        }
    }

    var mileage = 0;
    function set_mileage(m) { mileage = m; }

    var vehicle_age_in_months = time_elapsed_in_months_since(
        vehicle_start_date);

    var last_interval_event = {};

    _.each(past_events, function(event, index) {
        if (event.type === "mileage") {
            set_mileage(event.value);
            return;
        }

        if (event.type === 'maintenance') {
            if (event.mileage)
                set_mileage(event.mileage);

            var key = make_maintenance_item_key(event.item, event.action);

            if (key in expected_event_hash) {
                var expected_event = expected_event_hash[key];
                expected_event.schedule = expected_event.schedule.filter(
                    function (event) {
                        return (event.time  > vehicle_age_in_months &&
                                event.miles > mileage);
                    });
            } else if (key in interval_event_hash) {
                last_interval_event[key] = event;
            }
        }
    });

    var result_hash = expected_event_hash;
    _.each(interval_event_hash, function(value, key) {
        result_hash[key] = value;
    });

    return result_hash;
}

remaining_maintenance_actions = _remaining_maintenance_actions;
