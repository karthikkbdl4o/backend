exports.readUsers = (req, res, next) => {
  res.json({ message: "User Get", user: req.user, validate: req.validate });
};
