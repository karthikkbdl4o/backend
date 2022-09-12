const bcrypt = require("bcrypt");
const User = require("../models/User");

const auth = async (req, res, next) => {
  if (req.headers.authorization == null)
    return res
      .status(401)
      .json({ errors: [{ message: "User Authorization Required" }] });

  const authorizationHeader = req.headers.authorization.split(" ");

  const cred = atob(authorizationHeader[1], "base64");

  const credSlit = cred.split(":");

  const user = await User.findOne({ email: credSlit[0] });

  if (user == null)
    return res.status(401).json({ errors: [{ message: "Email Not Found" }] });

  const result = await bcrypt
    .compare(credSlit[1], user.password)
    .then(function (result) {
      return result;
    });

  if (result) {
    req.user = user;
    next();
  } else
    return res
      .status(401)
      .json({ errors: [{ message: "User Authorization Required" }] });
};
module.exports = auth;
