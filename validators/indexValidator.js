const { body } = require("express-validator");
const User = require("../models/User");

exports.signupValidator = [
  body("firstName").exists().withMessage("First Name Cant Be Empty"),
  body("lastName").exists().withMessage("Last Name Cant Be Empty"),
  body("email")
    .exists()
    .withMessage("Email Cant Be Empty")
    .isEmail()
    .withMessage("Invalid Email Address")
    .custom((email) => {
      return User.findOne({ email }).then((user) => {
        if (user) {
          return Promise.reject("Email Already Used");
        }
      });
    }),
  body("phoneNumber")
    .exists()
    .withMessage("Phone Number Cant Be Empty")
    .isMobilePhone()
    .withMessage("Invalid Phone Number")
    .custom((phoneNumber) => {
      return User.findOne({ phoneNumber }).then((user) => {
        if (user) {
          return Promise.reject("Phone Number Already Used");
        }
      });
    }),
  body("password")
    .exists()
    .withMessage("Password Cant Be Empty")
    .isStrongPassword()
    .withMessage("Password Is Not Strong"),
];
