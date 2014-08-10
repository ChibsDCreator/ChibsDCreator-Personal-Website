App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
    this.resource("Home");
});
//App.IndexRoute = Ember.Route.extend({
//  model: function() {
//    return ['red', 'yellow', 'blue'];
//  }
//});

App.HomeController = Ember.ObjectController.extend({

});
