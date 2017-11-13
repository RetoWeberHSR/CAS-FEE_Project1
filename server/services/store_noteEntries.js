const Datastore = require('nedb');
const db = new Datastore({ filename: './data/noteEntries.db', autoload: true });

function NoteEntry(due, title, importence, finished, description){
    // id as key
    this.nDue = due;
    this.nTitle = title;
    this.nImportence = importence;
    this.nFinished = finished | false;
    this.nDescription = description;
    this.nCreationDate = JSON.stringify(new Date());
}


function publicAddEntry(due, title, importence, finished, description, callback)
{
    let noteEntry = new NoteEntry(due, title, importence, finished, description);
    db.insert(order, function(err, newDoc){
        if(callback){
            callback(err, newDoc);
        }
    });
}

function publicUpdate(id, due, title, importence, finished, description, callback) {
    db.update({_id: id}, {
        $set: {
            "nDue": due,
            "ntitle": title,
            "nImportance": importence,
            "nFinished": finished,
            "nDescription": description
        }
    }, {returnUpdatedDocs:true}, function (err, numDocs, doc) {
        callback(err, doc);
    });
}



function publicGet(id, callback)
{   db.findOne({ _id: id }, function (err, doc, callback) {
    callback( err, doc);
});
}

function publicAll()
{
    db.find({}, function (err, docs) {
        callback( err, docs);
    });
}

module.exports = {add : publicAddEntry, update : publicUpdate, get : publicGet, all : publicAll};