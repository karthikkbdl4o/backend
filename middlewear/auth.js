const auth = (req, res, next) => {
  //Data Process for Auth
  const user = {
    firstName: "Karthik",
  };

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if ("karthik1@gmail.com".match(validRegex)) {
    req.validate = "valid email";
  } else {
    req.validate = "invalid email";
  }
  req.user = user;
  console.log("Auth");
  next();
};
module.exports = auth;
