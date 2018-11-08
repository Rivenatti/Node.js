const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("*", function(req, res) {
  res.status(404).sendFile(__dirname + "/NotFound.html");
});

app.listen(3000, () => {
  console.log("Server is currently running on localhost:3000");
});
