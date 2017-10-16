"use strict";

class NoteEntry {
    constructor(key, due, title, desc){
        this.noteKey = key;
        this.noteDue = due;
        this.noteTitle = title;
        this.noteFinished = false;
        this.noteDescription = desc;
    }
}

