const express = require("express");
const userProfile = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

userProfile.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      id: req.user.id,
      name: req.user.name,
      organization: req.user.organization,
      email: req.body.email
    });
  }
);

module.exports = userProfile;
