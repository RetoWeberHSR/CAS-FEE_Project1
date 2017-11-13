var express = require('express');
var router = express.Router();
var notes = require('../controller/notesController.js');

console.log("start routing");

router.get("/allEntries", notes.getNoteEntries);
router.post("/", notes.addEntry);
//router.put("/", notes.updateEntry);
//router.post("/update", notes.updateEntry);
router.get("/:id/", notes.getNoteEntry);
// otherwise do nothing

module.exports = router;