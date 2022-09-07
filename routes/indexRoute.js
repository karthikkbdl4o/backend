const express = require("express");
const { signup } = require("../services/indexService");
const { signupValidator } = require("../validators/indexValidator");

const indexRoute = express.Router();

indexRoute.post("/signup", signupValidator, signup);

module.exports = indexRoute;
