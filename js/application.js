// This will create a new instance of Ember.Application and make it available as a variable named Todos within your browser's JavaScript environment.
window.Todos = Ember.Application.create();

// Todos.ApplicationAdapter = DS.FixtureAdapter.extend(); !! No fixures!!

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});