const express = require("express");
const { body } = require("express-validator");
const basicAuth = require("../middlewear/basicAuth");
// Constant POST - IGNORE

const Post = require("../models/Post");
const {
  createPost,
  readPosts,
  readPost,
  deletePost,
  updatePost,
} = require("../services/postService");

const {
  createPostValidator,
  readPostValidator,
  deletePostValidator,
  updatePostValidor,
} = require("../validators/postValidator");

const postRoutes = express.Router();

//CRUD
// Create Post
postRoutes.post("/", basicAuth, createPostValidator, createPost);

//Read All
postRoutes.get("/", basicAuth, readPosts);

// Read One
postRoutes.get("/:id", readPostValidator, readPost);

//Delete One
postRoutes.delete("/:id", deletePostValidator, deletePost);

//Update One
postRoutes.put("/:id", basicAuth, updatePostValidor, updatePost);

module.exports = postRoutes;
