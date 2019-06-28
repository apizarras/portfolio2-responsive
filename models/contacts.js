// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
const express = require("express");


// Creates a "Character" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define("Contact", {
  // the routeName gets saved as a string
  name: Sequelize.STRING,
  // the name of the character (a string)
  email: Sequelize.STRING,
  // the character's role (a string)
  subject: Sequelize.STRING,
  message: Sequelize.TEXT
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});
return Contact;
};


