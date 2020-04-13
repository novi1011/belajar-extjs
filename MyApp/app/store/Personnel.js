Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'personnel',
    // autoLoad: true,
   fields: [
       'id','name','brands', 'color','created_at','updated_at'
   ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/belajar-extjs/MyApp_php/readpersonnel.php"
        },  
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
