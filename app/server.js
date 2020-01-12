// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
let bodyParser = require('body-parser');
let express = require('express');
let path = require('path');
// Create instance
let app = new express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
// parse applciation/json
app.use(bodyParser.json())
// ROUTES
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


