const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("*", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "notFound.html"));
});

app.listen(3000, () => {
  console.log("Server is currently running on localhost:3000.");
});
