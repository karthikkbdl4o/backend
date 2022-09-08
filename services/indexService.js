const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const hashPassword = await bcrypt.hash(req.body.password, 10).then((hash) => {
    return hash;
  });

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: hashPassword,
  });

  await user.save();

  res.status(201).json({
    message: "Signed Up Successfully!!!",
  });
};

exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = await User.findOne({ email: req.body.email });

  if (user == null)
    res.status(401).json({ errors: [{ message: "Email Not Found" }] });

  const result = await bcrypt
    .compare(req.body.password, user.password)
    .then(function (result) {
      return result;
    });

  console.log(result);
  if (result) {
    res.json({ message: "Login Successful" });
  }
  res.status(401).json({ message: "Login Failed" });
};
