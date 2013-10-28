// MotoMain -- server
/*
Meteor.publish("directory", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});
*/
Meteor.publish("vehicle_makes", function () {
  return VehicleMakes.find();
});

Meteor.publish("vehicle_models", function () {
  return VehicleModels.find();
});

Meteor.publish("vehicles", function () {
    return Vehicles.find();
});

Meteor.publish("maintenance_schedules", function () {
    return MaintenanceSchedules.find();
});

Meteor.publish("maintenance_events", function () {
    return MaintenanceEvents.find();
});
