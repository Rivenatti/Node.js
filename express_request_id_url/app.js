const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("about", (req, res) => {
  res.send("about page");
});

app.get("/users/:id", (req, res) => {
  res.send(`User id: ${req.params.id}`);
});

app.get("/users/:nick", (req, res) => {
  res.send(`User nickname: ${req.params.nick}`);
});

app.listen(3000, () => {
  console.log("Server is currently running on localhost:3000");
});
