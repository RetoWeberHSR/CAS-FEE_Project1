"use strict";

class NoteEntry {
    constructor(key, due, title, importence, finished, description, creation){
        this.nKey = key;
        this.nDue = due;
        this.nTitle = title;
        this.nImportence = importence;
        this.nFinished = finished | false;
        this.nDescription = description;
        this.nCreationDate = creation | new Date();
    }
};
