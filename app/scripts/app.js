'use strict';

define([
  'backbone',
  'marionette',
  'route'
],
function(Backbone, Marionette) {
  return Marionette.Application.extend({
    initialize: function(option){
      Backbone.history.start();
    }
  });
});
