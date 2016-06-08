define([
    'backbone',
    'models/menuPrincipalModel'
], function(Backbone, menuPrincipalModel) {
    return Backbone.Collection.extend({
        model: menuPrincipalModel,
        url: 'data/menuPrincipal.json'
    });
});
