/** A button bar containing {@link trix_extjshelpers.ButtonBarButton} many.
 *
 * Add buttons as items to the container.
 * */
Ext.define('trix_extjshelpers.ButtonBar', {
    extend: 'Ext.container.Container',
    requires: ['trix_extjshelpers.ButtonBarButton'],
    alias: 'widget.buttonbar',
    border: 0,
    height: 40,
    layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'center'
    },

    config: {
        emptyHtml: undefined,
    },

    constructor: function(config) {
        this.loadedItems = 0;
        this.loadedWithRecords = 0;
        this.initConfig(config);
        this.callParent([config]);
    },

    initComponent: function() {
        this.callParent(arguments);
        this.on('render', this.updateMask, this);
    },

    updateMask: function() {
        if(this.loadedItems == this.items.items.length) {
            this.getEl().unmask();
	    console.log("loaded w/ records: " + this.loadedWithRecords);
            if(this.loadedWithRecords == 0) {
                this.height = 'auto';
                this.update(this.emptyHtml);
            };
        } else {
            this.getEl().mask('Loading...');
        }
    },

    notifyStoreLoad: function(hasRecords) {
        this.loadedItems ++;
        if(hasRecords) {
	    console.log("HAS RECORDS!")
            this.loadedWithRecords ++;
        }
        this.updateMask();
    }
});
