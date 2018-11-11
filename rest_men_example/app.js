const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// setup express app
const app = express();

// connect to MongoDB
mongoose.connect("mongodb://localhost/tut");
mongoose.Promise = global.Promise;

// parse json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

// initialize routes
app.use("/api", routes);

// middleware for error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(3000, () => {
  console.log("Server is currently running at localhost:3000");
});
