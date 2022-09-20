const router = require("express").Router();
const User = require("./../models/User.model");

const bcrypt = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");
const isAuthenticated = require("../middleware/isAuthenticated.js");

const fileUploader = require("../config/cloudinary.config");

const salt = 10;

// generateToken function from generateTokenControl.routes
const generateToken = require("../routes/generateTokenControl.routes");

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
      const compareCredentials = await User.findOne({
        $or: [{ username: username }, { email: email }],
      });

      if (compareCredentials)
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
        photo: avatar,
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
    //Using select("+password") to get the user password - select:false in user model
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword)
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

router.get("/me", isAuthenticated, (req, res) => res.json(req.user));

module.exports = router;
