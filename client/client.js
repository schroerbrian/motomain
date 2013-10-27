// MotoMain -- client

Meteor.subscribe("vehicle_makes");
Meteor.subscribe("vehicle_models");
Meteor.subscribe("vehicles");

// If no vehicle selected, try to select one.
Meteor.startup(function () {
  Deps.autorun(function () {
    if (!Session.get("selected")) {
      var vehicle = Vehicles.findOne({owner: Meteor.userId()});
      if (vehicle)
        Session.set("selected", vehicle._id);
    }
  });
});


///////////////////////////////////////////////////////////////////////////////
// Vehicle details sidebar

Template.details.vehicle = function () {
  return Vehicles.findOne(Session.get("selected"));
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


///////////////////////////////////////////////////////////////////////////////
// Create Vehicle dialog

Template.vehicleCreation.vehicleMakes = function () {
    return VehicleMakes.find({}, {sort: {name: 1}});
};

Template.vehicleCreation.vehicleModels = function () {
    var new_make_id = Session.get("new_make_id");
    return VehicleModels.find({make_id: new_make_id});
};

Template.vehicleCreation.vehicleYears = function () {
    var new_model_id = Session.get("new_model_id");
    var model = VehicleModels.findOne({_id: new_model_id});

    if (model === undefined) {
        return [];
    } else {
        return reduce(function (prevVal, curVal, idx, arr) {
            return prevVal + curVal;
        }).map(function(year) { return { year: year }; });
    }
};
