Ext.define('MyApp.view.crud.dataview', {
    extend: 'Ext.Container',
    xtype: 'detail',

    requires: [
        
        'Ext.dataview.plugin.ItemTip'
     
    ],

    height: 400,
    layout: 'fit',
    width: 400,

    items: [{
        xtype: 'dataview',
        scrollable: "y",
        inline: true,
        cls: 'dataview-inline',
        itemTpl: 'Name: {name}<br>Brands: {brands}<br>Color: {color}<hr>',
        store: 'personnel',
        plugins: {
            dataviewtip: {
                align: 'tl-bl',
                maxHeight: 200,
                width: 300,
                scrollable: 'y',
                allowOver: true,
                anchor: true,
                bind: '{record}',
                cls: 'dataview-basic',
                tpl: '<strong>Name</strong><div class="info">{name}</div>' +
                    '<strong>Brands</strong><div class="info">{brands}</div>' +
                    '<strong>Color</strong><div class="info">{color}</div>' 
            }
        }
    }]
});