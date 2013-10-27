
/**
 * 
 *
 * name - Name of the make.
 *
 *
 */
VehicleMakes = new Meteor.Collection("vehicle_makes");

/**
 *
 */

VehicleModels = new Meteor.Collection("vehicle_models");

/**
 * VehicleModel id, year, userId, name
 */
Vehicles = new Meteor.Collection("vehicles");

/**
 *
 */
MaintenanceEvents = new Meteor.Collection("maintenance_events");

MaintenanceScheduleItems = new Meteor.Collection("maintenace_schedule_items");

MaintenanceSchedules = new Meteor.Collection("maintenace_schedules");

Meteor.methods({
});

