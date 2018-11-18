const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/signin", (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        // Check if email exists
        if (err) {
          return res.status(401).json({
            failed: "Unauthorized access"
          });
        }

        // Check if password matches
        if (result) {
          const JWTToken = jwt.sign(
            {
              email: user.email
            },
            "secretKey",
            {
              expiresIn: "1h"
            }
          );

          return res.status(200).json({
            success: "Welcome",
            token: JWTToken
          });
        }

        // If password does not match
        return res.status(401).json({
          failed: "Unauthorized access"
        });
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
});

module.exports = router;
