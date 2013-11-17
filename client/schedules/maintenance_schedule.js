
Template.maintenance_schedule.model = function() {
    return VehicleModels.findOne(this.model_id);
};

Template.maintenance_schedule.action_times = function(schedule) {
    var action_times = [];
    for (var item_index in schedule.items) {
        var item = schedule.items[item_index];

        if (item.interval)
            continue;

        for (var action_time_index in item.schedule) {
            var action_time = item.schedule[action_time_index];

            action_times[action_time.time] = action_time;
        }
    }

    var action_time_array = [];
    for (var time in action_times) {
        action_time_array.push(action_times[time]);
    }

    action_time_array.sort(function(a, b) { return a.time > b.time; });
    return action_time_array;
};

Template.maintenance_schedule.action_times_length = function(schedule) {
    return Template.maintenance_schedule.action_times(schedule).length;
};

Template.maintenance_schedule.action_time_element_of =
    function(schedule_times) {
        for (var ii in schedule_times) {
            var time = schedule_times[ii];
            if (this.time === time.time)
                return true;
        }
        return false;
    };
