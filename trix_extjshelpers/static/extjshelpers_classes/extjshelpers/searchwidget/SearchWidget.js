/**
 * Search widget with a {@link trix_extjshelpers.searchwidget.MultiSearchField} on top
 * and results in a {@link trix_extjshelpers.searchwidget.MultiSearchResults} below.
 *
 *     Search: ______________
 *    
 *     |Result1             |
 *     +--------------------|
 *     |                    |
 *     |                    |
 *     |                    |
 *     +--------------------+
 *    
 *     |Result2             |
 *     +--------------------|
 *     |                    |
 *     |                    |
 *     |                    |
 *     +--------------------+
 *
 * */
Ext.define('trix_extjshelpers.searchwidget.SearchWidget', {
    extend: 'Ext.container.Container',
    alias: 'widget.searchwidget',
    cls: 'widget-searchwidget',
    requires: [
        'trix_extjshelpers.SearchField',
        'trix_extjshelpers.searchwidget.SearchResults',
        'trix_extjshelpers.searchwidget.MultiSearchResults',
        'trix_extjshelpers.SearchStringParser',
        'trix_extjshelpers.searchwidget.SearchWindow'
    ],

    /**
     * @cfg {trix_extjshelpers.searchwidget.SearchResults} [searchResultItems]
     * The SearchResults widget to use when searching.
     */

    /**
     * @cfg {string} [emptyText]
     * Empty text of the search field.
     */
    emptyText: gettext('Search for anything...'),

    initComponent: function() {
        this.searchwindow = Ext.create('trix_extjshelpers.searchwidget.SearchWindow', {
            searchResultItems: this.searchResultItems,
            searchWidget: this,
            emptyText: this.emptyText
        });
        this.searchwindow.on('hide', function() {
            this.getSearchField().setValue('');
        }, this);
        this.searchfield = Ext.widget('searchfield', {
            emptyText: this.emptyText,
            flex: 1
        });

        Ext.apply(this, {
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            height: 40,
            items: [this.searchfield, {
                xtype: 'button',
                text: gettext('Browse') + ' ...',
                scale: 'medium',
                listeners: {
                    scope: this,
                    click: function() {
                        this.search('');
                    }
                }
            }]
        });

        this.callParent(arguments);
        this.setupSearchEventListeners();
    },

    setupSearchEventListeners: function() {
        var me = this;
        this.getSearchField().addListener('newSearchValue', function(value) {
            me.search(value);
        });
    },

    getSearchField: function() {
        return this.searchfield;
    },

    focusOnSearchfield: function() {
        this.getSearchField().focus();
    },

    search: function(value) {
        this.searchwindow.show();
        this.searchwindow.setSearchValue(value);
        this.searchwindow.getSearchField().triggerSearch(value);
    },

    loadInitialValues: function() {
        //var value = 'type:delivery deadline__assignment_group:>:33 3580';
        //var value = 'type:delivery assignment__short_name:week1';
        //var value = 'type:delivery group:'
        //var value = 'type:delivery deadline__assignment_group__parentnode__parentnode__short_name:duck3580';
        //var value = '';
        //this.search(value);
    }
});
