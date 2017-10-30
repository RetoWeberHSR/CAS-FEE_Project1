"use strict";

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
        let selectedValue = "white";
        let style;
        if (styleSelectBoxId !== null){
            selectedValue = styleSelectBoxId.options[styleSelectBoxId.selectedIndex].value;
        } else {
            // get previous selected style value if it has already been set.
            let storedStyle = this.getLastStoredStyleValue();
            if (storedStyle !== undefined && storedStyle !== null && storedStyle != ""){
                selectedValue = storedStyle;
                if (styleSelectBoxId !== null) {
                    styleSelectBoxId.value = storedStyle;
                }
            }
        }
        if (selectedValue == "green") {
            style = "css/stylesheetGreen.css";
        }
        if (selectedValue == "white") {
            style = "css/stylesheetWhite.css";
        }
        localStorage.setItem("noteAppStyleVal", selectedValue);
        return style;
    },

    getLastStoredStyleValue: function(){
        return localStorage.getItem("noteAppStyleVal");
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

function _createDataTable(entries){
    let df = document.createDocumentFragment();
    const table = document.createElement("table");
    df.appendChild(table);
    for (let i = 0; i < entries.length; i++){
        const tableLine = document.createElement("tr");
        const lineContent = document.createElement("td");
        tableLine.appendChild(lineContent);
        lineContent.innerHTML = _createTableEntryRow(entries[i]);
        table.appendChild(tableLine);
    }
    return df;
}

function _createTableEntryRow(entry){
    let htmlString = `<td>${entry.nDue}</td><td>${entry.nTitle}</td><td>${entry.nImportence}</td>
    <td rowspan="2"><button data-entry_key=${entry.nKey} class="editbutton"></button></td></tr><tr>
    <td>${entry.nFinished}</td><td colspan="2"><textarea readonly>${entry.nDescription}</textarea></td>`;
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