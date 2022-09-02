const express = require("express");
const { body } = require("express-validator");
// Constant POST - IGNORE

const Post = require("../models/Post");
const {
  createPost,
  readPosts,
  readPost,
  deletePost,
  updatePost,
} = require("../services/postService");
const { createPostValidator } = require("../validators/postValidator");

const postRoutes = express.Router();

//CRUD
// Create Post
postRoutes.post("/", createPostValidator, createPost);

//Read All
postRoutes.get("/", readPosts);

// Read One
postRoutes.get("/:id", readPost);

//Delete One
postRoutes.delete("/:id", deletePost);

//Update One
postRoutes.put("/:id", updatePost);

module.exports = postRoutes;
