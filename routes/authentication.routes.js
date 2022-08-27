const router = require("express").Router();
const User = require("./../models/User.model");
const bcrypt = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");
const isAuthenticated = require("../middleware/isAuthenticated.js");

const salt = 10;

// SIGN-UP USER👇
router.post("/signup", async (req, res, next) => {
  const { email, username, password } = req.body;
  if (!password || !username || !email) {
    return res.status(400).json({
      message:
        "All fields are mandatory. Please enter your email, password and username!",
    });
  }
  try {
    const foundUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (foundUser) {
      return res.status(401).json({
        message: "Username or email already exist. Please try to loggin",
      });
    }
    const generatedSalt = bcrypt.genSaltSync(salt);
    const hashedPassword = bcrypt.hashSync(password, generatedSalt);

    const newUser = {
      email,
      username,
      password: hashedPassword,
    };
    const createdUser = await User.create(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
});

// LOGIN USER👇
router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please enter a password and username !" });
  }

  try {
    const foundUser = await User.findOne({ username });
    if (!foundUser) {
      return res.status(400).json({ message: "Username does not exist" });
    }

    const matchingPassword = bcrypt.compareSync(password, foundUser.password);

    if (!matchingPassword) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const payload = { username };
    const token = jsonWebToken.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "1h",
    });

    res.status(200).json(token);
  } catch (error) {
    next(error);
  }
});

// DELETE USER👇
router.delete("/:id", isAuthenticated, async (req, res, next) => {
  try {
    await User.findByIdAndRemove(req.params.id);

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
