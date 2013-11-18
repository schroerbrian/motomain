
function addInitialMakesModels() {
    var su_id = VehicleMakes.insert({name: 'Suzuki'});
    var tr_id = VehicleMakes.insert({name: 'Triumph'});

    VehicleModels.insert({
        make_id: su_id,
        name: 'DL650A',
        years: [[2012, 2013]]
    });
}

Meteor.startup(function () {
    if (VehicleMakes.find().count() === 0) {
        addInitialMakesModels();
    }

    var dl650a_maintenance_items = [
        { item: 'Air cleaner element', action: "inspect",
          schedule: [{time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Air cleaner element', action: "replace",
          schedule: [{time: 36, miles:11000, kilometers:18000}]
        },

        { item: 'Exhaust pipe bolts and muffler bolts', action: "tighten",
          schedule: [{time: 2, miles:600,    kilometers:1000},
                     {time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Valve clearance', action: "inspect",
          schedule: [{time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Spark plugs', action: "inspect",
          schedule: [{time: 12, miles:4000,  kilometers:6000},
                     {time: 36, miles:11000, kilometers:18000}]
        },
        { item: 'Spark plugs', action: "replace",
          schedule: [{time: 24, miles:7500,  kilometers:12000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Fuel hose', action: "inspect",
          schedule: [{time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Engine oil', action: "replace",
          schedule: [{time: 2, miles:600,    kilometers:1000},
                     {time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Engine oil filter', action: "replace",
          schedule: [{time: 2, miles:600,    kilometers:1000},
                     {time: 36, miles:11000, kilometers:18000}]
        },

        { item: 'Throttle cable play', action: "inspect",
          schedule: [{time: 2, miles:600,    kilometers:1000},
                     {time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Throttle valve synchronization', action: "inspect",
          schedule: [{time: 2, miles:600,    kilometers:1000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Evaporative emission control system (CA model only)',
          action: "inspect",
          schedule: [{time: 24, miles:7500,  kilometers:12000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'SUZUKI LONG LIFE COOLANT (blue)', action: "replace",
          interval: {time: 48, miles: 29000, kilometers: 48000}
        },

        { item: 'SUZUKI SUPER LONG LIFE COOLANT (green)', action: "replace",
          schedule: [{time: 24, miles:7500,  kilometers:12000},
                     {time: 48, miles:14500, kilometers:24000}]          
        },

        { item: 'Radiator hose', action: "inspect",
          schedule: [{time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Clutch cable play', action: "inspect",
          schedule: [{time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Drive chain', action: "inspect",
          schedule: [{time: 2, miles:600,    kilometers:1000},
                     {time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Drive chain', action: "clean and lubricate",
          interval: {miles: 600, kilometers: 1000}
        },

        { item: 'Brakes', action: "inspect",
          schedule: [{time: 2, miles:600,    kilometers:1000},
                     {time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Brake hose', action: "inspect",
          schedule: [{time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Brake hose', action: "replace",
          interval: {time: 48}
        },

        { item: 'Brake fluid', action: "inspect",
          schedule: [{time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Brake fluid', action: "replace",
          interval: {time: 24}
        },

        { item: 'Tires', action: "inspect",
          schedule: [{time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Steering', action: "inspect",
          schedule: [{time: 2, miles:600,    kilometers:1000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Front forks', action: "inspect",
          schedule: [{time: 24, miles:7500,  kilometers:12000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Rear suspension', action: "inspect",
          schedule: [{time: 24, miles:7500,  kilometers:12000},
                     {time: 48, miles:14500, kilometers:24000}]
        },

        { item: 'Chassis bolts and nuts', action: "tighten",
          schedule: [{time: 2, miles:600,    kilometers:1000},
                     {time: 12, miles:4000,  kilometers:6000},
                     {time: 24, miles:7500,  kilometers:12000},
                     {time: 36, miles:11000, kilometers:18000},
                     {time: 48, miles:14500, kilometers:24000}]
        },
    ];

    var dl650_model = VehicleModels.findOne({name:"DL650A"});
    if (MaintenanceSchedules.find({model_id: dl650_model._id}).count() === 0) {
        MaintenanceSchedules.insert({
            name: "Suzuki DL650A 2012 Maintenance Schedule",
            creator_id: null,
            model_id: dl650_model._id,
            years: [2012, 2013],
            items: dl650a_maintenance_items
        });
    }
});
