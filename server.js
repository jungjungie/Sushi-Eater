// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/sushi_controllers.js');
const PORT = process.env.PORT || 8080;

const app = express();

// Serves static content for the app from the "public" directory
app.use(express.static("public"));

// Middleware that parses application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets routes
app.use(routes);

// Starts up server to listen to client requests
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
