
function _schedules_for_model_year(model_id, year) {
    var schedules = MaintenanceSchedules.find({
        model_id: model_id}).fetch();

    var matching_schedules = [];

    for (var ii in schedules) {
        var schedule = schedules[ii];

        for (var year_index in schedule.years) {
            if (year == schedule.years[year_index])
                matching_schedules.push(schedule);
        }
    }

    return matching_schedules;
}
schedules_for_model_year = _schedules_for_model_year;
