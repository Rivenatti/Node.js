const express = require("express");
const loginUser = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SecretKey = require("../config/secretKeys");

// Require userSchema
const User = require("../models/User");

// Create new route to '/signin' which will allow user to sign in.
loginUser.post("/signin", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (!user)
      return res.status(400).json({ email: "Given email has not been found." });
    else {
      bcrypt.compare(req.body.password, user.password).then(match => {
        if (match) {
          const payload = {
            id: user.id,
            name: user.name
          };
          jwt.sign(
            payload,
            SecretKey.SECRET_KEY,
            {
              expiresIn: 86400
            },
            (err, token) => {
              if (err) console.log(err);
              else {
                res.json({
                  signin: true,
                  token: `Bearer ${token}`
                });
              }
            }
          );
        } else return res.status(400).json("Password is incorrect");
      });
    }
  });
});

module.exports = loginUser;
