const express = require("express");
const mysql = require("mysql");
const app = express();

const mySQLConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass123",
  database: "example"
});

// TO HANDLE MULTIPLE CONNECTION ATTEMPTES
// const mySQLConnection = mysql.createPool({
//     connectionLimit: 20,
//     host: "localhost",
//     user: "root",
//     password: "pass123",
//     database: "example"
//   });

mySQLConnection.connect(err => {
  if (err) console.log(err);
  else console.log("Connected to mySQL database.");
});

app.get("/", (req, res) => {
  mySQLConnection.query("SELECT * FROM Data", (err, rows, fields) => {
    if (err) console.log(err);
    else {
      console.log("Successfull!");
      res.send(rows);
    }
  });
});

app.listen(3000, () => {
  console.log("Server is currently running on localhost:3000.");
});
