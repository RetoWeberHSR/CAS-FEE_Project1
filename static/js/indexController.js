"use strict";

const Controller = {
    bootstrap: function (model, view) {
        model.initLoadData();

        view.getElementById("create_new_note").onclick = function() {
            sessionStorage.setItem("noteEntryKey", 0);
            window.location.replace("newNoteEntry.html");
        }
        view.getElementById("editbutton").onclick = function() {
            let noteKey = view.getElementById("note_key").value;
            if (noteKey !== undefined || noteKey > 0) {
                // load entry to newNoteEntry view for modifing
                sessionStorage.setItem("noteEntryKey", noteKey);
                window.location.replace("newNoteEntry.html");
            }
        }
        let sselbox = view.getElementById("style_box");
        sselbox.onblur = function() {
            let selvalue = sselbox.options[sselbox.selectedIndex].value;
            view.getElementById("style_link").setAttribute("href", model.getCSSLink(selvalue));
        }
    }
};

function renderUI() {

}



