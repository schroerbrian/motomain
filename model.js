
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
 * name, owner_id, model_id, year
 */
Vehicles = new Meteor.Collection("vehicles");

/**
 *
 *
 *
 */
MaintenanceScheduleItems = new Meteor.Collection("maintenace_schedule_items");


/**
 * name: String,
 * creator_id: <id_type>,
 * maintenance_schedule_item_ids: Array of <id_type>,
 * model_id: <id_type>,
 * year: int
 */
MaintenanceSchedules = new Meteor.Collection("maintenace_schedules");


/*

MaintenanceEvents = new Meteor.Collection("maintenance_events");


Meteor.methods({
});
*/
