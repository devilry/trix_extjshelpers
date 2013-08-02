Ext.define('trix_extjshelpers.DateTime', {
    statics: {
        restfulNow: function() {
            return trix_extjshelpers.DateTime.restfulFormat(new Date(Ext.Date.now()));
        },

        restfulFormat: function(dateobj) {
            return Ext.Date.format(dateobj, Ext.Date.patterns.RestfulDateTime);
        }
    }
});
