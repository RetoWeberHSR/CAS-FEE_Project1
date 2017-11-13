const store = require("../services/store_noteEntries.js");
//const util = require("../util/security");
const actor = "unknown";

// gets
module.exports.getNoteEntries = function(req, res) {
    console.log("got requst to deliver all Entries");
    store.all(actor, function (err, notes) {
        res.format({
            'text/html': function () {
                res.render("succeeded", notes);
            },
            'application/json': function () {
                res.json(notes || {});
            }
        });
    });
};

module.exports.getNoteEntry = function(req, res){
    store.get(req.params.id, actor, function(err, noteEntry) {
        res.json(noteEntry);
    });
};

// posts
module.exports.addEntry = function(req, res) {
    let noteEntry = store.add(req.body.name, actor, function(err, noteEntry) {
        res.json(noteEntry);
    });
};

module.exports.UpdateEntry = function(req, res) {
    let noteEntry = store.update(req.body.name, actor, function(err, noteEntry) {
        res.json(noteEntry);
    });
};