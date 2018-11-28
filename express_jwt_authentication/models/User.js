const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validate = require("mongoose-validator");
const validation = require("../validation/validation");

const nameValidator = [
  validate({
    validator: "matches",
    arguments: /^[A-Z]\w{4,18}$/,
    message:
      "Name incorrect: Minimum 4 and maximum 18 alphanumeric characters, first letter uppercase."
  })
];

const emailValidator = [
  validate({
    validator: "matches",
    arguments: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Incorrect email."
  })
];

const passwordValidator = [
  validate({
    validator: "matches",
    arguments: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message:
      "Password incorrect: Minimum eight characters, at least one letter, one number and one special character."
  })
];

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "",
    unique: true,
    validate: nameValidator
  },
  organization: {
    type: String,
    required: true,
    default: ""
  },
  email: {
    type: String,
    required: true,
    default: "",
    lowercase: true,
    trim: true,
    unique: true,
    validate: emailValidator
  },
  password: {
    type: String,
    required: true,
    validate: passwordValidator
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("users", UserSchema);
