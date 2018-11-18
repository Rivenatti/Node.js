const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/signup", (req, res) => {
  // Hash password with bcryptjs
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    // Check for error
    if (err) {
      return res.status(500).json({
        error: err
      });
    }
    // Create new user
    else {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
      });
      // Save new user in the DB
      user
        .save()
        .then(user => {
          res.status(200).json({
            success: "New user has been created"
          });
        })
        .catch(error => {
          res.status(500).json({
            error: error
          });
        });
    }
  });
});

module.exports = router;
