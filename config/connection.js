const Sequelize = require("sequelize");
const mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: 'ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'sjcf3j480ufv667t',
      password: 'cs4fdcv0na9hjw0k',
      database: 'vdc39aw0cduqwylg',
      port: 3306
    });
  };

  connection.connect();
  module.exports=connection;

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize("portfolio", process.env.DB_USER, process.env.DB_PASS, {
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;