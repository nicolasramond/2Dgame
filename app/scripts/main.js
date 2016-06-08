'use strict';

require.config({
  shim : {
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : [ 'underscore', 'jquery' ],
      exports : 'Backbone'
    },
    marionette: {
      deps: ['backbone'],
      exports: 'Marionette'
    },
    quintus: {
      exports: 'Quintus'
    }
  },
  paths : {
    jquery : '../bower_components/jquery/dist/jquery',
    underscore : '../bower_components/underscore/underscore',
    backbone : '../bower_components/backbone/backbone',
    marionette : '../bower_components/backbone.marionette/lib/backbone.marionette',
    handlebars : '../bower_components/handlebars/handlebars',
    text : '../bower_components/text/text',
    quintus : 'quintus-all'
  }
});
require(['app'], function(App) {
  new App();
});
