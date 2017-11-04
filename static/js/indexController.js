"use strict";

const Controller = {
    bootstrap: function (model, view) {
        let entries = model.getStoredEntries();
        view.getElementById("style_link").setAttribute("href", model.getCSSLink(null));
        let styleValue = model.getLastStoredStyleValue();
        view.getElementById("style_box").setAttribute("value", styleValue);

        view.getElementById("style_box").onchange = function() {
            view.getElementById("style_link").setAttribute("href", model.getCSSLink(view.getElementById("style_box")));
        };

        view.body.addEventListener("click", function(event) {
            if (event.target.dataset.entry_key) {
                let noteKey = event.target.dataset.entry_key.value;
                // load entry to newNoteEntry view for modifing
                model.storeSessionEntryKey(noteKey);
                window.location.replace("newNoteEntry.html");
            }
            if (event.target.dataset.order_by) {
                let orderBy = event.target.dataset.order_by.value;
                if (orderBy == "finished"){

                }
                if (orderBy == "creationdate"){

                }
                if (orderBy == "importance"){

                }
                if (orderBy == "show_finished"){

                }
            }
        });

        renderUI(view, entries, model)
    },

};

function renderUI(view, entries, model){
    view.getElementById("notetable").innerHTML=createNoteTable(entries);

}


