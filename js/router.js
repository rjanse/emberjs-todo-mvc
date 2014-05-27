// This will tell Ember.js to detect when the application's URL matches '/' and to render the todos template.
Todos.Router.map(function () {
  this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});