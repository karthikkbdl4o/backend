const { body, check } = require("express-validator");

exports.createPostValidator = [
  body("text").exists().withMessage("Data Not Found"),
];

exports.readPostValidator = [
  check("id").isMongoId().withMessage("Id Is Invalid"),
];

exports.deletePostValidator = [
  check("id").isMongoId().withMessage("Id Is Invalid"),
];

exports.updatePostValidor = [
  check("id").isMongoId().withMessage("Id Is Invalid"),
  body("text").exists().withMessage("Data Not Found"),
];
