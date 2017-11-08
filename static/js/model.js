"use strict";

import { stylemodel } from './StyleSheetModule.js';

const datamodel = {

    getStoredEntries: function() {
        return _getStoredEntries();
    },

    createDataTable: function(entries) {
        return _createDataTable(entries);
    },

    storeEntries: function(listOfEntries) {
        _storeEntries(listOfEntries);
    },

    loadSessionEntryKey: function() {
        let entryKey = sessionStorage.getItem("noteAppEntryKey");
        return _getEntryFromList(entryKey);
    },

    storeSessionEntryKey: function(noteKey) {
        sessionStorage.setItem("noteAppEntryKey", noteKey);
    },

    getCSSLink: function(styleSelectBoxId){
        // default selection value
        return stylemodel.getCSSLink(styleSelectBoxId);
    },

    getLastStoredStyleValue: function(styleSelectBoxId){
        return stylemodel.getStyleValue(styleSelectBoxId);
    }
};


function _getStoredEntries(){
    let noteEntryList = localStorage.getItem("noteAppEntries");
    if( !noteEntryList )
    {
        _storeEntries([]);
        noteEntryList = localStorage.getItem("noteAppEntries");
    }
    return JSON.parse(noteEntryList);
}

function _storeEntries(listOfEntries){
    localStorage.setItem("noteAppEntries", JSON.stringify(listOfEntries));
}


function _getEntryFromList(searchKey) {
    if (searchKey !== undefined && searchKey > 0){
        for (let i = 0; i < noteEntries.lenth; i++){
            let entryKey = noteEntries[i].nKey;
            if (searchKey == entryKey){
                return noteEntries[i];
            }
        }
    }
}

export { datamodel }