Ext.define('trix_extjshelpers.RestFactory', {
    requires: [
        'trix_extjshelpers.Store',
        'trix_extjshelpers.RestProxy'
    ],
    statics: {
        createProxy: function(role, name_lower) {
            return Ext.create('trix_extjshelpers.RestProxy', {
                url: Ext.String.format('/{0}/restfulsimplified{1}/', role, name_lower)
            });
        },

        getModelName: function(role, name) {
            return Ext.String.format('devilry.{0}.models.{1}', role, name);
        },

        getModel: function(role, name) {
            return Ext.ModelManager.getModel(trix_extjshelpers.RestFactory.getModelName(role, name));
        },

        createStore: function(role, name, config) {
            var args = {
                model: trix_extjshelpers.RestFactory.getModelName(role, name)
            };
            Ext.apply(args, config);
            return Ext.create('trix_extjshelpers.Store', args);
        }
    }
});
