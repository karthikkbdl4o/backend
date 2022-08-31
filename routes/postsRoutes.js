const express = require("express");
// Constant POST - IGNORE
const POST = require("../Constant");

const Post = require("../models/Post");

const postRoutes = express.Router();

//CRUD

//Get all Post
postRoutes.get("/", async (req, res) => {
  //Read All Posts From Mongo Collection
  const posts = await Post.find();

  res.status(200);
  res.json(posts);
});

postRoutes.get("/search", (req, res) => {
  const q = req.query.q;
  console.log(q);
  const posts = POST.filter((post) => post.authorName == q);
  return res.json(posts);
});

//Get Post
postRoutes.get("/:id", async (req, res) => {
  // Get Id From Path Param
  const id = req.params.id;

  // Fetch Post
  const post = await Post.findOne({ _id: id });

  // Verify If Post Exists
  if (post == null) return res.status(404).json({ message: "Post Not Found" });

  res.json({ post });
});

//Create Post
postRoutes.post("/", async (req, res) => {
  //Create Model Object
  const post = new Post({
    text: req.body.text,
  });

  // Create Post
  const savedPost = await post.save();

  res.json({ post: savedPost });
});

// Update One Post With Id
postRoutes.put("/:id", async (req, res) => {
  // Get Id From Path Param
  const id = req.params.id;

  // Fetch Post
  const post = await Post.findOne({ _id: id });

  // Verify If Post Exists
  if (post == null) return res.status(404).json({ message: "Post Not Found" });

  // Update One
  await Post.updateOne({ _id: id }, { text: req.body.text });

  res.json({ message: "Post Updated" });
});

postRoutes.delete("/:id", async (req, res) => {
  // Get Id From Path Param
  const id = req.params.id;

  // Fetch Post
  const post = await Post.findOne({ _id: id });

  // Verify If Post Exists
  if (post == null) return res.status(404).json({ message: "Post Not Found" });

  // Delete
  await Post.deleteOne({ _id: id });

  res.json({ message: "Deleted Successfully!!" });
});

module.exports = postRoutes;
