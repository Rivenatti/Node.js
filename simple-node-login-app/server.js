const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// MongoDB server connection
const mongoConfig = require("./config/db");
mongoose
  .connect(
    mongoConfig.DB,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected successfuly."))
  .catch(err => console.log(`MongoDB connection error: ${err}`));

// Initialize app
const app = express();

// Parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.json({ Connection: "successful" });
});

// Sign up route
const signUp = require("./routes/signUp");
app.use("/user", signUp);

// Sign up route
const signIn = require("./routes/signIn");
app.use("/user", signIn);

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is currently running on localhost:${PORT}`);
});
