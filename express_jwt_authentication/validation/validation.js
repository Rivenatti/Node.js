const validate = require("mongoose-validator");

const nameValidator = [
  validate({
    validator: "matches",
    arguments: /^[a-zA-Z]+$/
  })
];

module.exports = nameValidator;
