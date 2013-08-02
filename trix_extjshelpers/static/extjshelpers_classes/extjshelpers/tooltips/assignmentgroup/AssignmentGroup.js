/**
 * Tooltip classes for Assignmentgroup.
 * 
 */
Ext.define('trix_extjshelpers.tooltips.assignmentgroup.AssignmentGroup', {
 
    tooltip_models: ["StaticFeedbackNext", 'StaticFeedbackPrevious',
                        'BrowseFiles', 'AboutTheDelivery',
                        'CreateNewDeadline', 'OtherDeliveries',
                        'SearchField'
                    ],
 
    prefix: 'trix_extjshelpers.tooltips.assignmentgroup.AssignmentGroup',
 
    requires: [
        'trix_extjshelpers.tooltips.assignmentgroup.StaticFeedbackNext',
        'trix_extjshelpers.tooltips.assignmentgroup.BrowseFiles'
    ],
    
    initComponent: function() { 

        this.feedback_next = Ext.create('trix_extjshelpers.tooltips.assignmentgroup.StaticFeedbackNext', {});
        this.feedback_previous = Ext.create('trix_extjshelpers.tooltips.assignmentgroup.StaticFeedbackPrevious', {});   
        //this.browse_files = Ext.create('trix_extjshelpers.tooltips.assignmentgroup.BrowseFiles', {});
        this.about = Ext.create('trix_extjshelpers.tooltips.assignmentgroup.AboutTheDelivery', {});
        this.create_new_deadline = Ext.create('trix_extjshelpers.tooltips.assignmentgroup.CreateNewDeadline', {});
        this.other_deliveries = Ext.create('trix_extjshelpers.tooltips.assignmentgroup.OtherDeliveries', {});
        this.search_field = Ext.create('trix_extjshelpers.tooltips.assignmentgroup.SearchField', {});
        this.warning_field = Ext.create('trix_extjshelpers.tooltips.assignmentgroup.WarningField', {});
        this.feedback_window = Ext.create('trix_extjshelpers.tooltips.assignmentgroup.FeedbackWindow', {});
    },
    /**
     * Animate all tooltips as a wizard.
     * 
     */    
    animateAndShowAll: function() {
        //TODO activated when HELP button in the upper right corner is pressed
        for (tooltip in this.tooltip_models) {
            console.log(this.tooltip_models[tooltip]);
        }
        console.log(this.prefix);
    },
    
    toString: function() {
        return "Hei dette er klassen sin det!";
    }

});
