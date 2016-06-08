'use strict';

define([
  'marionette',
  'views/MenuPrincipalItemView'
],
function(Marionette, MenuPrincipalItemView) {
  return Marionette.CollectionView.extend({
    childView: MenuPrincipalItemView
  });
});
