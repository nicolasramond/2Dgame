'use strict';

define([
  'marionette',
  'controllers/controller'
],
function(Marionette, controller) {
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'menuPrincipal'
    }
  });
  var controllerRouter = new Router({
    controller: new controller()
  });
  return controllerRouter;
});
