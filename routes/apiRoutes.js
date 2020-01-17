// Import express and path modules
let path = require('path');
let fs = require('fs');
// LOAD DATA
let noteData = [];
module.exports = function (app) {
  // ROUTES
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "/../db/db.json"))
  });
  app.post("/api/notes", (req, res) => {
    var newNote = req.body;
    // console.log(newNote);
    if (noteData.length == 0) {
        newNote.id = 1;
    } else {
        newNote.id = noteData[noteData.length - 1].id + 1;
    }

    noteData.push(newNote);
    console.log(noteData);
    fs.writeFileSync(path.join(__dirname + '/../db/db.json'), JSON.stringify(noteData));
    res.send(noteData);

    // fs.readFileSync(path.join(__dirname + '/db/db.json'), (err, data) => {
    //     if (err) throw (err);
    //     // let json = [JSON.parse(data)];
    //     // json.push('{title:"how you doin", text:"Im Guud"}');
    // })
})}