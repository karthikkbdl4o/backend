const { validationResult } = require("express-validator");
const Post = require("../models/Post");

exports.createPost = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const post = new Post({
    text: req.body.text,
  });
  await post.save();
  res.json({ post });
};

exports.readPosts = async (req, res, next) => {
  const posts = await Post.find();
  res.json(posts);
};

exports.readPost = async (req, res, next) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (post == null) return res.status(404).json({ message: "Post Not Found" });
  res.json({ post });
};

exports.deletePost = async (req, res, next) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (post == null) return res.status(404).json({ message: "Post Not Found" });
  await Post.deleteOne({ _id: req.params.id });
  res.json({ message: "Post Deleted Successfully" });
};

exports.updatePost = async (req, res, next) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (post == null) return res.status(404).json({ message: "Post Not Found" });
  await Post.updateOne(
    { _id: req.params.id },
    {
      text: req.body.text,
    }
  );
  res.json({ message: "Post Updated Successfully" });
};
