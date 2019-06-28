const Sequelize = require("sequelize");
const connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root2',
      password: 'root',
      database: 'portfolio'
    });
  };

  connection.connect();
  module.exports=connection;

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize("portfolio", process.env.DB_USER, process.env.DB_PASS, {
  host: "localhost",
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