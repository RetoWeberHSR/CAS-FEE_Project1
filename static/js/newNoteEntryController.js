"use strict";


const Controller = {
    bootstrap: function (model, view) {
        // save
        view.getElementById("saveButton").onclick = function() {
            let noteEntries = JSON.parse(localStorage.getItem("noteEntries"));
            let entry = new noteEntry( 0,
                document.getElementById("noteDue").value,
                document.getElementById("noteTitle").value,
                document.getElementById("noteFinished").value,
                document.getElementById("noteDescription").value);

            noteEntries.push(entry);
            sessionStorage.setItem("noteEntries", JSON.stringify(users));
            window.location.replace("index.html");
        }
        // cancel
        view.getElementById("cancelButton").onclick = function () {

        }

        model.loadEntryData();
        renderUI();
    }

};

function renderUI() {

}