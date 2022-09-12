const { mongoose, model } = require("mongoose");

// Structure
const schema = mongoose.Schema(
  // Schema Structure
  {
    text: String,
    userId: String,
  },
  // Schema Options
  { timestamps: true }
);

// Create Collection Using Schema
const Post = mongoose.model("Post", schema);

//Export The Created Model
module.exports = Post;
