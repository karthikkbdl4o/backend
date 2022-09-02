const { body } = require("express-validator");

exports.createPostValidator = [
  body("text")
    .exists()
    .withMessage("Text Not Found")
    .isEmail()
    .withMessage("Invalid Email"),
];
