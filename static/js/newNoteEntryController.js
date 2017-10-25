"use strict";

const Controller = {
    bootstrap: function (model, view) {
        view.getElementById("style_link").setAttribute("href", model.getCSSLink(null));
        let entry = model.loadSessionEntryKey();
        renderEntryToUI(view, entry);

        // save
        view.getElementById("saveButton").onclick = function () {
            let noteEntries = model.getStoredEntries();
            let entry = getRenderedEntry(view);
            noteEntries.push(entry);
            localStorage.setItem("noteEntries", JSON.stringify(noteEntries));
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
        view.getElementById("noteKey").value,
        view.getElementById("done_until").value,
        view.getElementById("title").value,
        view.getElementById("noteFinished").value,
        view.getElementById("description").value,
        view.getElementById("creation_date").value
    );
    return entry;
}

function renderEntryToUI(view, entry){
    if (entry !== undefined){
        view.getElementById("noteKey").value = entry.nKey;
        view.getElementById("done_until").value = entry.nDue;
        view.getElementById("title").value = entry.nTitle;
        view.getElementById("noteFinished").value = entry.nFinished;
        view.getElementById("description").value = entry.nDescription;
        view.getElementById("creation_date").value = entry.nCreationDate;
    }
}