const express = require("express");
const { signup, login } = require("../services/indexService");
const {
  signupValidator,
  loginValidator,
} = require("../validators/indexValidator");

const indexRoute = express.Router();

indexRoute.post("/signup", signupValidator, signup);

indexRoute.post("/login", loginValidator, login);

module.exports = indexRoute;
