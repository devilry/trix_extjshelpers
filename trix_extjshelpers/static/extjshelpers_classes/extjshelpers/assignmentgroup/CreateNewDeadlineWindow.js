Ext.define('trix_extjshelpers.assignmentgroup.CreateNewDeadlineWindow', {
    extend: 'trix_extjshelpers.RestfulSimplifiedEditWindowBase',
    alias: 'widget.createnewdeadlinewindow',
    cls: 'widget-createnewdeadlinewindow',
    title: 'Create deadline',
    width: 700,
    height: 450,

    requires: [
        'trix_extjshelpers.RestfulSimplifiedEditPanel',
        'trix_extjshelpers.forms.Deadline'
    ],

    assignmentgroupid: undefined,
    deadlinemodel: undefined,

    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    
    initComponent: function() {
        var deadlineRecord = Ext.create(this.deadlinemodel, {
            'assignment_group': this.assignmentgroupid
        });

        Ext.apply(this, {
            editpanel: Ext.widget('restfulsimplified_editpanel', {
                model: this.deadlinemodel,
                editform: Ext.create('trix_extjshelpers.forms.Deadline'),
                record: deadlineRecord
            })
        });
        this.callParent(arguments);
    }
});
