const jsonWebToken = require("jsonwebtoken");

// Created fuction to use in authentication and profile routes
function generateToken(params = {}) {
  return jsonWebToken.sign(params, process.env.TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: "1h",
  });
}

module.exports = generateToken;
