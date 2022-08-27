const router = require("express").Router();
const User = require("./../models/User.model");
const bcrypt = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");
const isAuthenticated = require("../middleware/isAuthenticated.js");

const salt = 10;

// SIGN-UP USER👇
router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  if (!password || !username) {
    return res
      .status(400)
      .json({ message: "Please enter a password and username !" });
  }
  try {
    const foundUser = await User.findOne({ username });
    if (foundUser) {
      return res.status(400).json({
        message:
          "This username is already taken, try to log in or register with an other username !",
      });
    }
    const generatedSalt = bcrypt.genSaltSync(salt);
    const hashedPassword = bcrypt.hashSync(password, generatedSalt);

    const newUser = {
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
      return res.status(400).json({ message: "Wrong username" });
    }

    const matchingPassword = bcrypt.compareSync(password, foundUser.password);

    if (!matchingPassword) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const payload = { username };
    const token = jsonWebToken.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "3h",
    });

    res.status(200).json(token);
  } catch (error) {
    next(error);
  }
});

//TODO UPDATE PASSWORD
// UPDATE USER👇
router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await User.findOneAndUpdate({ username, password });

    return res.sendStatus(204);
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
