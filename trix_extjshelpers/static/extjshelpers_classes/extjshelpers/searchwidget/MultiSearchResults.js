/**
 * Search results for many results, each result shown in a
 * {@link trix_extjshelpers.searchwidget.SearchResults}.
 * */
Ext.define('trix_extjshelpers.searchwidget.MultiSearchResults', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.multisearchresults',
    cls: 'multisearchresults',
    autoScroll: true,
    
    config: {
        searchWidget: undefined
    }
});
