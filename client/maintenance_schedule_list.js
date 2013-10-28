Template.maintenance_schedule_list.schedules = function() {
    var schedules = MaintenanceSchedules.find({
        model_id: this.model_id}).fetch();

    var matching_schedules = [];

    for (var ii in schedules) {
        var schedule = schedules[ii];

        for (var year_index in schedule.years) {
            if (this.year == schedule.years[year_index])
                matching_schedules.push(schedule);
        }
    }

    return matching_schedules;
}


Template.maintenance_schedule_list_item.selected = function () {
    return Session.equals("selected_schedule", this._id) ? "selected" : '';
};

Template.maintenance_schedule_list_item.events({
    'click': function(e) {
        Session.set("selected_schedule", this._id);
    }
});
