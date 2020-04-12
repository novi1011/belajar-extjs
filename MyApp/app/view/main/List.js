/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Cars ExtJs',
    layout: 'fit',
    autoShow: true,
    
    //tambah data
    initComponent: function(){
        this.items = [
            {
                xtype: 'form',
                id: 'input',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'brands',
                        fieldLabel: 'Brands'
                    },
                    {
                        xtype: 'textfield',
                        name: 'color',
                        fieldLabel: 'Color'
                    }
                ]
            }
        ];

        this.button = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close 
            }
        ];

        this.callParent(arguments);
    },
            
    bind: '{personnel}',
    viewModel:{
        stores:{
            personnel:{
                    type: 'personnel'
            }
        }
    },
    columns: [
        { text: 'Id', dataIndex: 'id', width: 100 },
        { text: 'Name', dataIndex: 'name', width: 200 }, 
        { text: 'Brands', dataIndex: 'brands', width: 150 },
        { text: 'Color', dataIndex: 'color', width: 200},
        { text: 'Createt_At', dataIndex: 'created_at', width: 200 },
        { text: 'Updated_At', dataIndex: 'updated_at', width: 200 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
