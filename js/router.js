// This will tell Ember.js to detect when the application's URL matches '/' and to render the todos template.
Todos.Router.map(function () {
  this.resource('todos', { path: '/' }, function () {
    // additional child routes will go here later
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('todos');
  }
});