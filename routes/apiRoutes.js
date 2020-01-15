// LOAD DATA
let noteData = require("../db/noteData.js");
// ROUTING
module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a links

  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });

  // POST Requests
  app.post("/api/notes",(req, res)=> {
      noteData.push(req.body);
      res.json(true);
      console.log("Note updated");
  });

  app.post("/api/notes", (req, res) => {
    var newNote = req.body;
    if (noteData.length == 0) {
      newNote.id = 1
    } else newNote.id = noteData[noteData.length - 1].id + 1;
    console.log(newNote);
    noteData.push(newNote)
    fs.writeFileSync(path.join(__dirname, "../db/noteData.json"), JSON.stringify(noteData))
    res.send(newNote);
  });
  //Query parameter containing the id of a note to delete.
  app.post("/api/notes/:id", (req, res) => {
    // Empty out the arrays of data
    noteData.length = 0;
    res.json({ ok: true });
  });
};

// app.post("/api/notes", (req, res) => {
//   var newNote = req.body;
//   if (notes.length == 0) {
//     newNote.id = 1
//   } else newNote.id = notes[notes.length - 1].id + 1;
//   console.log(newNote);
//   notes.push(newNote)
//   fs.writeFileSync(path.join(__dirname, "../db/noteData.json"), JSON.stringify(notes))
//   res.send(newNote);
// }); 