const { validationResult } = require("express-validator");
const Post = require("../models/Post");
const User = require("../models/User");
const { post } = require("../routes/indexRoute");

exports.createPost = async (req, res, next) => {
  console.log(req.user);

  // return res.json({ message: "HEllo" });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const post = new Post({
    text: req.body.text,
    userId: req.user._id,
  });
  await post.save();
  res.json({ post });
};

exports.readPosts = async (req, res, next) => {
  const postsData = await Post.find();

  const posts = [];

  for (let i = 0; i < postsData.length; i++) {
    const post = postsData[i].toJSON();
    const user = await User.findOne({ _id: post.userId }).select({
      firstName: 1,
      lastName: 1,
      email: 1,
      phoneNumber: 1,
    });
    post.user = user;

    delete post.userId;

    posts.push(post);
  }

  res.json(posts);
};

exports.readPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const post = await Post.findOne({ _id: req.params.id });
  if (post == null) return res.status(404).json({ message: "Post Not Found" });
  res.json({ post });
};

exports.deletePost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const post = await Post.findOne({ _id: req.params.id });
  if (post == null) return res.status(404).json({ message: "Post Not Found" });
  await Post.deleteOne({ _id: req.params.id });
  res.json({ message: "Post Deleted Successfully" });
};

exports.updatePost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const post = await Post.findOne({ _id: req.params.id, userId: req.user._id });
  if (post == null) return res.status(404).json({ message: "Post Not Found" });
  await Post.updateOne(
    { _id: req.params.id },
    {
      text: req.body.text,
    }
  );
  res.json({ message: "Post Updated Successfully" });
};
