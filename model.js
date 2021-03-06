
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
 * name, owner_id, model_id, year, schedule_id, mileage
 */
Vehicles = new Meteor.Collection("vehicles");

/**
 *
 * item, description, list of mileages/times at which it ought to be performed.
 * E.g. { item: "Engine oil", action: "change",
 *        schedule: [{time:1,  miles:500,  kilometers:800},
 *                    {time:12, miles:6000, kilometers:10000},
 *                    etc.]
 *        interval: {time: 12, miles: 10000, kilometers 18000}
 *      }
 *
 */
//MaintenanceScheduleItems = new Meteor.Collection("maintenace_schedule_items");
// Currently a part of the schedule itself.

/**
 * name: String,
 * creator_id: <id_type>,
 * maintenance_schedule_item_ids: Array of <id_type>,
 * model_id: <id_type>,
 * years: Array of Integers
 */
MaintenanceSchedules = new Meteor.Collection("maintenace_schedules");

/**
 * type:       String
 *
 * if (type == scheduled_event)
 *     vehicle_id:  String
 *     schedule_id: String
 *     item:        String
 *     action:      String
 *     mileage (optional): Number
 * else if (type == mileage)
 *     value: Number
 * else
 *     synopsis:    String
 *     description: String
 *
 * date_performed: Number (seconds since epoch)
 * date_logged:    Number (seconds since epoch)
 */
VehicleEvents = new Meteor.Collection("vehicle_events");

/*
Meteor.methods({
});
*/
