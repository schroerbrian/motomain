
function addInitialMakesModels() {
    var su_id = VehicleMakes.insert({name: 'Suzuki'});
    var ho_id = VehicleMakes.insert({name: 'Honda'});
    var ya_id = VehicleMakes.insert({name: 'Yamaha'});
    var du_id = VehicleMakes.insert({name: 'Ducati'});
    var tr_id = VehicleMakes.insert({name: 'Triumph'});
    var hd_id = VehicleMakes.insert({name: 'Harley-Davidson'});

    VehicleModels.insert({
        make_id: su_id,
        name: 'DL650 ABS',
        years: [[2012, 2013]]
    });

    VehicleModels.insert({
        make_id: su_id,
        name: 'TestModel',
        years: [[2012, 2013]]
    });
}

Meteor.startup(function () {
    if (VehicleMakes.find().count() === 0) {
        addInitialMakesModels();
    }

    var MaintenanceItems = [
        { element: 'Air cleaner element',
          schedule: [[4000, 12*30, 'I'], [7500, 24*30, 'I'],
                     [11000, 36*30, 'R'], [14500, 48*30, 'I']]
        },

        { element: 'Exhaust pipe bolts and muffler bolts',
          schedule: [[600, 2*30, 'T'], [4000, 12*30, 'T'], [7500, 24*30, 'T'],
                     [11000, 36*30, 'T'], [14500, 48*30, 'T']]
        },

        { element: 'Valve clearance',
          schedule: []
        },

        { element: 'Spark plugs' },
        { element: 'Fuel hose' },
        { element: 'Engine oil' },
        { element: 'Engine oil filter' },
        { element: 'Throttle cable play' },
        { element: 'Throttle valve synchronization' },
        { element: 'Evaporative emission control system (CA model only)' },
        { element: 'SUZUKI SUPER LONG LIFE COOLANT (blue)' },
        { element: 'SUZUKI SUPER LONG LIFE COOLANT (green)' },
        { element: 'Radiator hose' },
        { element: 'Clutch cable play' },
        { element: 'Drive chain' },
        { element: 'Brakes' },
        { element: 'Brake hose' },
        { element: 'Brake fluid' },
        { element: 'Tires' },
        { element: 'Steering' },
        { element: 'Front forks' },
        { element: 'Rear suspension' },
        { element: 'Chassis bolts and nuts' },
    ];
});
