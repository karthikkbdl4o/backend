const express = require("express");
const { Router } = require("express");
const POST = require("../Constant");

const postsRoutes = Router();

postsRoutes.post("/", (req, res) => {
  const post = req.body;
  console.log(post);
  post.createdAt = new Date();
  console.log(post);

  res.json({ message: post });
});

postsRoutes.put("/", (req, res) => {
  console.log(req.query.name);
  res.json({ message: "OK" });
});

postsRoutes.get("/", (req, res) => {
  // const posts = POST.filter((post) => post.includes(req.query.string));
  res.json({ POST });
});

postsRoutes.get("/:id", (req, res) => {
  const post = POST.find((post) => post.id == req.params.id);
  return res.json({ post });
});

postsRoutes.delete("/", (req, res) => {
  console.log(req.query);
  res.json({ message: "OK" });
});

module.exports = postsRoutes;
