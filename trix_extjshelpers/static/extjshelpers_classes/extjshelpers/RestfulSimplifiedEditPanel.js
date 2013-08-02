/** Apanel for editing RestfulSimplified models. */
Ext.define('trix_extjshelpers.RestfulSimplifiedEditPanel', {
    extend: 'trix_extjshelpers.RestfulSimplifiedEditPanelBase',
    alias: 'widget.restfulsimplified_editpanel',
    requires: [
        'trix_extjshelpers.RestSubmit',
        'trix_extjshelpers.NotificationManager'
    ],

    /**
     * @cfg {String} [saveSuccessMessage]
     * help
     */
    saveSuccessMessage: undefined,

    onSave: function() {
        this.errorlist.clearErrors();
        this.beforeSave();
    },

    beforeSave: function() {
        this.doSave();
    },

    doSave: function() {
        var me = this;
        this.setLoading(gettext('Saving') + ' ...');
        this.editform.getForm().doAction('devilryrestsubmit', {
            submitEmptyText: true,
            model: this.model,
            scope: this,
            success: function(form, action) {
                this.setLoading(false);
                me.onSaveSuccess(form, action);
            },
            failure: function(form, action) {
                this.setLoading(false);
                me.onSaveFailure(form, action);
            }
        });
    },

    onSaveSuccess: function(form, action) {
        var record = action.record;        
        trix_extjshelpers.NotificationManager.show({
            title: 'Save successful',
            message: this.saveSuccessMessage
        });
        this.fireEvent('saveSucess', record);
    },

    onSaveFailure: function(record, action) {
        var errormessages = action.operation.responseData.items.errormessages;
        var me = this;
        Ext.each(errormessages, function(errormessage) {
            me.errorlist.addError(errormessage);
        });
    }
});
