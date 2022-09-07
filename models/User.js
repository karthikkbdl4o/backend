const { default: mongoose } = require("mongoose");

// Schema
const schema = mongoose.Schema(
  //Schema Structure
  {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    password: String,
  },
  //Schema Options
  {
    timestamps: true,
  }
);

//Model
const User = mongoose.model("User", schema);

//Export
module.exports = User;
