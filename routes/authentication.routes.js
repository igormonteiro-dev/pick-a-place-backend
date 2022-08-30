const router = require("express").Router();
const User = require("./../models/User.model");
const bcrypt = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");
const isAuthenticated = require("../middleware/isAuthenticated.js");
const fileUploader = require("../config/cloudinary.config");

const salt = 10;

function generateToken(params = {}) {
  return jsonWebToken.sign(params, process.env.TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: "1h",
  });
}

// SIGN-UP USER👇
router.post(
  "/signup",
  fileUploader.single("avatar"),
  async (req, res, next) => {
    const { email, username, password } = req.body;

    let avatar;
    if (req.file) {
      avatar = req.file.path;
    }

    if (!email || !username || !password) {
      return res.status(400).json({
        error: "All fields are required to signup",
      });
    }

    try {
      if (
        await User.findOne({
          $or: [{ username: username }, { email: email }],
        })
      )
        return res.status(400).json({
          error:
            "This username or email are already registered. Please try to login",
        });

      const generatedSalt = bcrypt.genSaltSync(salt);
      const hashedPassword = bcrypt.hashSync(password, generatedSalt);

      const newUser = {
        email,
        username,
        password: hashedPassword,
        url: avatar,
      };
      const user = await User.create(newUser);

      user.password = undefined;

      res.status(201).json({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (error) {
      next(error);
    }
  }
);

// LOGIN USER👇
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ error: "Invalid password" });

    user.password = undefined;

    res.status(200).json({
      user,
      token: generateToken({ id: user.id }),
    });
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
