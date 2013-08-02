Ext.define('trix_extjshelpers.searchwidget.DashboardSearchWidget', {
    extend: 'trix_extjshelpers.searchwidget.SearchWidget',
    requires: [
        'trix_extjshelpers.searchwidget.FilterConfigDefaults',
    ],
    mixins: {
        comboBoxTemplates: 'trix_extjshelpers.ComboboxTemplatesMixin'
    },

    _createStore: function(modelname) {
        var model = Ext.ModelManager.getModel(modelname);
        var store = Ext.create('Ext.data.Store', {
            model: model,
            remoteFilter: true,
            remoteSort: true,
            proxy: model.proxy.copy()
        });
        return store;
    }
});
