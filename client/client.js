// MotoMain -- client

Meteor.subscribe("vehicle_makes");
Meteor.subscribe("vehicle_models");
Meteor.subscribe("vehicles");
Meteor.subscribe("users");

///////////////////////////////////////////////////////////////////////////////
// Vehicle details sidebar

Template.details.vehicle = function () {
  return Vehicles.findOne(Session.get("selected"));
};

Template.details.name = function () {
    return this.vehicle().name;
};

Template.details.ownerName = function () {
  var owner = Meteor.users.findOne(this.owner);
  if (owner._id === Meteor.userId())
    return "me";
  return displayName(owner);
};

Template.details.canRemove = function () {
  return this.owner === Meteor.userId();
};
