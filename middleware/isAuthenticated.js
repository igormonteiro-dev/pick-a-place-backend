const jsonwebtoken = require("jsonwebtoken");
const User = require("../models/User.model");

const isAuthenticated = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).json({ message: "Missing authorization" });
    return;
  }

  const token = authorization.replace("Bearer ", "");
  try {
    const userToken = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    console.log({ userToken });
    const { username } = userToken;
    const user = await User.findOne({ username });
    req.user = user;
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
    return;
  }

  // If the user is authenticated, run next
  next();
};

//TODO install jsonwebtoken / bcryptjs

module.exports = isAuthenticated;
