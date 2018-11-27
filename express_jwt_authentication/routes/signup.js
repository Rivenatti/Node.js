const express = require("express");
const createUser = express.Router();
const bcrypt = require("bcryptjs");

// Require userSchema
const User = require("../models/User");

// Create route to '/signup' which will save new user in MongoDB with given values
createUser.post("/signup", (req, res) => {
  // If email exists show message, else encrypt password and save user in the db
  User.findOne({ email: req.body.email }).then(user => {
    if (user)
      return res
        .status(400)
        .json({ email: "Given email already exists in the database." });
    else {
      // Create new user correct with given schema
      const newUser = new User({
        name: req.body.name,
        organization: req.body.organization,
        email: req.body.email,
        password: req.body.password
      });

      // Encrypt the password
      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.log(err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.log(err);
            else {
              newUser.password = hash;

              // Save user in the database
              newUser.save().then(user => res.json(user));
            }
          });
        }
      });
    }
  });
});
module.exports = createUser;
