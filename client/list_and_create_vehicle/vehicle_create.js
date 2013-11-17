///////////////////////////////////////////////////////////////////////////////
// Create Vehicle dialog

function assert(exp) { if (!exp) alert("Assertion failure."); }

Template.vehicle_create.vehicle_makes = function () {
    return VehicleMakes.find({}, {sort: {name: 1}});
};

Template.vehicle_create.vehicle_models = function () {
    var new_make_id = Session.get("new_make_id");
    var models = VehicleModels.find({make_id: new_make_id}).fetch();

    if (models.length > 0)
        Session.set("new_model_id", models[0]._id);
    else
        Session.set("new_model_id", undefined);
    return models;
};

Template.vehicle_create.created = function () {
}

Template.vehicle_create.rendered = function () {
}

Template.vehicle_create.vehicle_years = function () {
    var new_model_id = Session.get("new_model_id");
    var model = VehicleModels.findOne({_id: new_model_id});

    if (model === undefined) {
        return [];
    } else {
        var years = [];
        for (var ii in model.years) {
            for (var jj in model.years[ii]) {
                years.push({ year: model.years[ii][jj] });
            }
        }
        return years;
    }
};

Template.vehicle_create.events({
    'click input[type=submit]': function(e) {
        assert(Meteor.userId() !== null);

        e.preventDefault();

        var model_id = $('#model_selector').val();
        var year = $('#year_selector').val();
        var name = $('#vehicle_name').val();

        var new_vehicle_id = Vehicles.insert({
            owner_id: Meteor.userId(),
            model_id: model_id,
            year: year,
            name: name,
            mileage: 0,
            new_date: (new Date(year, 0)).getTime()
        });

        Session.set("selected", new_vehicle_id);
    },
    'change #make_selector': function(e) {
        Session.set("new_make_id", $("#make_selector").val());

        $("#model_selector").change();
        $("#year_selector").change();
    },
    'change #model_selector': function(e) {
        Session.set("new_model_id", $("#model_selector").val());
        $("#year_selector").change();
    },
});
