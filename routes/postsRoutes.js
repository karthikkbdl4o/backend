const express = require("express");
const POST = require("../Constant");
const Post = require("../models/Post");

const postRoutes = express.Router();

//CRUD
postRoutes.get("/", (req, res) => {
  const post = POST;
  res.status(200);
  res.json(post);
});

postRoutes.get("/search", (req, res) => {
  const q = req.query.q;
  console.log(q);
  const posts = POST.filter((post) => post.authorName == q);
  return res.json(posts);
});

postRoutes.get("/:id", (req, res) => {
  const id = req.params.id;
  const post = POST.find((post) => post.id == id);

  if (post == null) {
    return res
      .status(404)
      .json({ message: "Post With id " + id + " Not Found" });
  } else {
    //Success
    return res.status(200).json(post);
  }
});

postRoutes.post("/", async (req, res) => {
  const post = new Post({
    text: req.body.text,
  });

  const savedPost = await post.save();

  res.json({ post: savedPost });
});

module.exports = postRoutes;
