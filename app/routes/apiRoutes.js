// LOAD DATA
let noteData = require("../db/noteData");
// ROUTING

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link

  app.get("/api/notes",(req, res)=> {
    res.json(noteData);
  });

  // POST Requests
  app.post("/api/notes",(req, res)=> {
    if (noteData.length < 100) {
      noteData.push(req.body);
      res.json(true);
      console.log("Note updated");
    }
    else {
      noteData.push(req.body);
      res.json(false);
      console.log("Note updated");
    }
  });
  //Query parameter containing the id of a note to delete.
  app.post("/api/notes/:id",(req, res) => {
    // Empty out the arrays of data
    noteData.length = 0;
    res.json({ ok: true });
  });
};
