const express = require("express");

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.json({ message: "User Get" });
});

module.exports = userRoutes;
