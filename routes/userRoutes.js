const express = require("express");

const basicAuth = require("../middlewear/basicAuth");

const { readUsers } = require("../services/userService");

const userRoutes = express.Router();

userRoutes.get("/", basicAuth, readUsers);

module.exports = userRoutes;
