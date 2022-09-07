const express = require("express");

const auth = require("../middlewear/auth");

const { readUsers } = require("../services/userService");

const userRoutes = express.Router();

userRoutes.get("/", auth, readUsers);

module.exports = userRoutes;
