"use strict";

const datamodel = {

    noteEntries: function() {
        return this.noteEntries();
    },

    initLoadData: function() {
        let noteEntries = localStorage.getItem("noteEntries");
        if( !noteEntries )
        {
            localStorage.setItem("noteEntries", JSON.stringify([]));
            noteEntries = localStorage.getItem("noteEntries");
        }
        noteEntries = JSON.parse(noteEntries);
    },

    loadEntryData: function () {
        return sessionStorage.getItem("noteEntryKey");
    },

    getCSSLink: function(selvalue){
        if (selvalue == "green") {
            return "css/stylesheetGreen.css";
        }
        if (selvalue == "white") {
            return  "css/stylesheetWhite.css";
        }
        return selectedStyle;
    }
};

// style variable
let selectedStyle = "css/stylesheetWhite.css";