
// DEPENDENCIES
let path = require("path");
// ROUTING

module.exports = function(app) {
  // HTML GET Requests
  app.get("/notes",(req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // If no matching route is found default to home
  app.use(function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
