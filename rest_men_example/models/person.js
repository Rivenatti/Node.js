const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create person Schema & model
const PersonSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
    default: "",
    trim: true
  },
  available: {
    type: Boolean,
    default: false
  }
});

const Person = mongoose.model("person", PersonSchema);

module.exports = Person;
