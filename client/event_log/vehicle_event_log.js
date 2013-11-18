
Template.vehicle_event_log.vehicle_events = function () {
    var vehicle_id = Session.get("selected");
    var events = VehicleEvents.find({vehicle_id: vehicle_id},
                                    {sort: { date_performed: -1 }});

    return events;
};

Template.vehicle_event_log.vehicle_event_groups = function () {
    var vehicle_id = Session.get("selected");
    var events = VehicleEvents.find({vehicle_id: vehicle_id},
                                    {sort: { date_performed: -1 }}).fetch();

    var event_groups = [];
    _.each(events, function (event) {
        var date = new Date(event.date_performed);
        var day_string = date.toString("MMM dd, yyyy");

        if (event_groups.length === 0 ||
            event_groups[event_groups.length-1].day_string !== day_string) {
            event_groups.push({
                day_string: day_string,
                group_events: []
            });
        }

        event_groups[event_groups.length-1].group_events.push(event);
    });

    return event_groups;
};

Template.vehicle_event.get_html = function() {
    if (this.type === "scheduled_event")
        return Template.scheduled_event(this);
    else if (this.type === "mileage")
        html_string = ("<span>Mileage:</span><span>" +
                       this.value + "</span>");
    return html_string;
};

Template.vehicle_event.iso8601date = function() {
    return (new Date(this.date_performed)).toISOString();
};

Template.vehicle_event.rendered = function() {
    $(this.find("abbr.timeago")).timeago();
};
