
Template.vehicle_event_log.vehicle_events = function () {
    var vehicle_id = Session.get("selected");
    var events = VehicleEvents.find({vehicle_id: vehicle_id},
                                    {sort: { date_performed: -1 }});

    return events;
};

Template.vehicle_event.get_html = function() {
    if (this.type === "scheduled_event")
        return ("<div><span>" +
                this.item +
                "</span><span>" +
                this.action +
                "</span></div>");
    else if (this.type === "mileage")
        return ("<div><span>Mileage:</span><span>"+this.value+"</span></div>");
};
