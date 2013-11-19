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

Template.vehicle_list_menu.vehicles = function () {
    return Vehicles.find({owner_id: Meteor.userId()});
}

Template.vehicle_list_menu.events({
   
   'change #vehicle_selector': function(e) {
       var currentVehicle = $("#vehicle_selector").val();
       Session.set("selected", currentVehicle);
   },

   'click .vl-add-moto': function (e) {
      e.preventDefault();
      console.log("hiy");
      $("#vehicle_details").fadeOut();
      setTimeout(function() {
        $(".vehicle_create_dialog").fadeIn();
      },800);
    }

});

Template.vehicle_list_item.events({
    'click': function(e) {
        Session.set("selected", this._id);
    }

});

