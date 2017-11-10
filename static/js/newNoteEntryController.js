"use strict";

import { NoteEntry } from './data.js';
import { datamodel as model } from './model.js';

const Controller = {
    bootstrap: function (view) {
        view.getElementById("style_link").setAttribute("href", model.getCSSLink(null));
        let entry = model.loadSessionEntryKey();
        renderEntryToUI(view, entry);

        // save
        view.getElementById("saveButton").onclick = function () {
            let noteEntries = model.getStoredEntries();
            let entry = getRenderedEntry(view);
            if (entry.nKey == 0){
                entry.nKey = noteEntries.length;
                noteEntries.push(entry);
            }
            model.storeEntries(noteEntries);
            window.location.replace("index.html");
        };
        // cancel
        view.getElementById("cancelButton").onclick = function () {
            window.location.replace("index.html");
        };
    }
};

function getRenderedEntry(view) {
    let entry = new NoteEntry(
        view.getElementById("entrykey").value,
        view.getElementById("done_until").value,
        view.getElementById("title").value,
        view.getElementById("importance").value,
        view.getElementById("task_finished").value,
        view.getElementById("description").value,
        view.getElementById("creation_date").value
    );
    return entry;
}

function renderEntryToUI(view, entry){
    if (entry !== undefined){
        view.getElementById("entrykey").value = entry.nKey;
        view.getElementById("done_until").value = entry.nDue;
        view.getElementById("title").value = entry.nTitle;
        view.getElementById("importance").value = entry.nImportence;
        view.getElementById("task_finished").value = entry.nFinished;
        view.getElementById("description").value = entry.nDescription;
        view.getElementById("creation_date").value = entry.nCreationDate;
    }
}

export { Controller }