Ext.define('trix_extjshelpers.assignmentgroup.MultiCreateNewDeadlineWindow', {
    extend: 'trix_extjshelpers.RestfulSimplifiedEditWindowBase',
    alias: 'widget.multicreatenewdeadlinewindow',
    title: 'Create deadline',
    width: 700,
    height: 450,

    requires: [
        'trix_extjshelpers.RestfulSimplifiedEditPanelBase',
        'trix_extjshelpers.forms.Deadline'
    ],

    config: {

        /**
         * @cfg
         * Deadline ``Ext.data.Model``.
         */
        deadlinemodel: undefined,

        suggestedDeadline: undefined,
        deadlineRecord: undefined
    },

    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    
    initComponent: function() {
        if(this.suggestedDeadline && !this.deadlineRecord) {
            this.deadlineRecord = Ext.create(this.deadlinemodel, {
                deadline: this.suggestedDeadline
            });
        }
        Ext.apply(this, {
            editpanel: Ext.widget('restfulsimplified_editpanel_base', {
                model: this.deadlinemodel,
                editform: Ext.create('trix_extjshelpers.forms.Deadline'),
                record: this.deadlineRecord
            }),
        });
        this.callParent(arguments);
    }
});
