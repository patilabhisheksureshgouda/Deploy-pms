const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "pms",
});

module.exports = db;
