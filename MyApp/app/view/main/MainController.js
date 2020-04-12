/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Do you want edit?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onReadClicked: function(){
     
        Ext.getStore('personnel').load();
    },

    onAddClicked: function (sender, record) {
       
        var mainGrid = this.getView();
        var mainStore = mainGrid.getStore();

        //tambah data
        var personnelModel = Ext.create('MyApp.model.Personnel');
        personnelModel.set("name", "");
        personnelModel.set("brands", "");
        personnelModel.set("color", "");


        mainStore.insert(0, personnelModel);
    },

    onLoadClick: function (sender, record) {
        var mainGrid = this.getView().getStore();
        var mainStore = mainGrid.getStore();
    },

    onRemoveClick: function (sender, record){

        var mainGrid = this.getView();
        var mainStore = mainGrid.getStore();

        //delete selected rows if selmodel is checkboxmodel
        var selectedRows = mainGrid.getSelectionModel().getSelection();

        mainStore.remove(selectedRows);
    } 


});
