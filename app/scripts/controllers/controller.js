'use strict';

define([
  'marionette',
  'views/MenuPrincipalCollectionView',
  'models/MenuPrincipalCollection'
],
function(Marionette, MenuPrincipalCollectionView, MenuPrincipalCollection) {
  var container = new Marionette.Region({
    el: $('#content')
  });
  return Marionette.Object.extend({
    menuPrincipal: function(){
      var menuPrincipalCollection = new MenuPrincipalCollection();
      menuPrincipalCollection.fetch({
        success: function(){
          var menuPrincipalCollectionView = new MenuPrincipalCollectionView({
            collection: menuPrincipalCollection
          });
          container.show(menuPrincipalCollectionView);
        }
      });
    }
  });
});
