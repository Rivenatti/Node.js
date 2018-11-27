const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: ""
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
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("users", UserSchema);
