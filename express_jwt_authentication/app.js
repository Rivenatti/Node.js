//--------- NODE MODULES
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//--------- CONFIGS
const app = express();
const mongoDB = require("./config/mongoDB");
const PORT = process.env.PORT || 5000;

//--------- MongoDB connection
mongoose
  .connect(
    mongoDB.URL,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected."))
  .catch(err => console.log(err));

//--------- Parse JSON data with body-parser module
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//--------- Define JWTStrategy
app.use(passport.initialize());
require("./passport")(passport);

//--------- ROUTES

//* create user route
const createUserRoute = require("./routes/signup");
app.use("/user", createUserRoute);

//* login user route
const loginUser = require("./routes/signin");
app.use("/user", loginUser);

//* user profile route
const userProfile = require("./routes/profile");
app.use("/user", userProfile);

//--------- SERVER
app.listen(PORT, () => {
  console.log(`Server is currently running on localhost:${PORT}.`);
});
