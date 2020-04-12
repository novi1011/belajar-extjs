/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
       // 'MyApp.view.dataview'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    //button
    items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            items:[
                {   xtype: 'button',
                    text: 'Read',
                    ui: 'action',
                    scope: this,
                    listeners:{
                    tap:'onReadClicked'
                    }
                }
            ]
        },
        {
            docked: 'top',
            xtype: 'toolbar',
            items: [
                {   align: 'left',
                    xtype: 'button',
                    text: 'Add',
                    ui: 'action',
                    scope: this,
                    listeners:{
                    tap: 'onAddClicked'
                    }
                }
            ]
        },   
        
        // {
        //     itemId: 'remove',
        //     text: 'Remove',
        //     reference: 'btnRemove',
        //     handler: 'onRemoveClick',
        //     disabled: true    
        // },
       
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'detail'
            }]
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            bind: {
                html: '{loremIpsum}'
            }
       
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
