
Template.vehicle_event_log.vehicle_events = function () {
    var vehicle_id = Session.get("selected");
    var events = VehicleEvents.find({vehicle_id: vehicle_id},
                                    {sort: { date_performed: -1 }});

    return events;
};

Template.vehicle_event.get_html = function() {
    var html_string;
    if (this.type === "scheduled_event")
        html_string = ("<span>" +
                       this.item +
                       "</span><span>" +
                       this.action +
                       "</span>");
    else if (this.type === "mileage")
        html_string = ("<span>Mileage:</span><span>" +
                       this.value + "</span>");
    return html_string;
};

Template.vehicle_event.iso8601date = function() {
    return (new Date(this.date_performed)).toISOString();
}

Template.vehicle_event.rendered = function() {
    $(this.find("abbr.timeago")).timeago();
}
