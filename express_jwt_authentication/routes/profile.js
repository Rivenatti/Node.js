const express = require("express");
const userProfile = express.Router();
const checkAuth = require("../middleware/check-auth");

userProfile.get("/profile", checkAuth, (req, res) => {
  return res.json({
    id: req.user.id,
    name: req.user.name,
    organization: req.user.organization,
    email: req.body.email
  });
});

module.exports = userProfile;
