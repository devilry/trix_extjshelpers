/** Base class for windows used to Edit/Create RestfulSimplified models. */
Ext.define('trix_extjshelpers.RestfulSimplifiedEditWindowBase', {
    extend: 'trix_extjshelpers.AutoSizedWindow',
    //width: 800,
    //height: 600,
    layout: 'fit',
    modal: true,

    /**
     * @cfg
     * The {@link trix_extjshelpers.RestfulSimplifiedEditPanel} to use for editing.
     */
    editpanel: undefined,
    
    initComponent: function() {
        var me = this;

        var form = this.editpanel.down('form');
        if(!this.width && form.suggested_windowsize) {
            this.width = form.suggested_windowsize.width;
            this.height = form.suggested_windowsize.height;
        }
        this.maximizable = false; // Mazimize does not work with autosizing.

        this.editpanel.addListener('saveSucess', function(record) {
            me.onSaveSuccess(record);
        });

        Ext.apply(this, {
            items: this.editpanel
        });
        this.callParent(arguments);
    },

    onSaveSuccess: function(record) {
        throw "Must implement onSaveSuccess()";
    }
});
