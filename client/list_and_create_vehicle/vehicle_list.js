// If no vehicle selected, try to select one.
Meteor.startup(function () {
  Deps.autorun(function () {
    if (!Session.get("selected")) {
      var vehicle = Vehicles.findOne({owner_id: Meteor.userId()});
      if (vehicle)
        Session.set("selected", vehicle._id);
    }
  });
});

Template.vehicle_list.vehicles = function () {
    return Vehicles.find({owner_id: Meteor.userId()});
}

Template.vehicle_list_item.selected = function () {
    return Session.equals("selected", this._id) ? "active" : '';
};

Template.vehicle_list_item.events({
    'click': function(e) {
        Session.set("selected", this._id);
    }
});
