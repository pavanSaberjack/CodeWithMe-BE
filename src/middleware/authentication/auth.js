const jwt = require("jsonwebtoken");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const AuthKey = "Authorization";
const BearerKey = "Bearer ";

const auth = (req, res, next) => {
  const authValue = req.header(AuthKey);
  if (!authValue) {
    return res.status(401).send("Access Denied. No token provided");
  }

  const token = authValue.replace(BearerKey, "");

  if (!token) {
    return res.status(401).send("Access Denied. No token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = auth;
