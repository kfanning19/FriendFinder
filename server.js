// Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

// Sets up the Express App
let app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routing
require('./app/routing/apiRoutes')(app); 
require('./app/routing/htmlRoutes')(app);
app.use(express.static(path.join(__dirname, './app/public')));

app.listen(PORT, function() {
  console.log("Server created on port " + PORT);
});