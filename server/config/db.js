const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "pms",
});

module.exports = db;
