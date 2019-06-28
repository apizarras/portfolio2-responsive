require("dotenv").config();
const express = require("express");
const db = require("./models");
const router = express.Router();

// Sets up the Express App
// =============================================================
const app = express();
// require('express-router')(app);
const PORT = process.env.PORT || 3000;
// const server = require('http').createServer(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/apiroutes")(app);
const htmlroutes = require('./routes/htmlroutes')(app);
// const apiroutes = require('./routes/apiroutes')(app);
// app.use(routes);
// require("./routes/htmlroutes")(app);
// app.use(htmlroutes);
// app.use("/", router);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Listening at PORT%: ", PORT)
  });
});


