var mysql = require('mysql');
const env = require('./db.config.js');

var con = mysql.createConnection({
  host: env.host,
  user: env.username,
  password: env.password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE IF NOT EXISTS employeePortal", function (err, result) {
    if (err) throw err;
    console.log("Database created");
    con.end();
  });
});