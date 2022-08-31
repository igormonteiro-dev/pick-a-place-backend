const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");

/* 
USER PROFILE
*/

// Update profile - username, bio and avatar👇
router.post(
  "/",
  fileUploader.single("avatar"),
  isAuthenticated,
  async (req, res, next) => {
    try {
      const { bio, username } = req.body;

      let avatar;
      if (req.file) {
        avatar = req.file.path;
      }
      const bioToCreate = { bio, username, photo: avatar };

      const newBio = await User.findByIdAndUpdate(req.user.id, bioToCreate, {
        new: true,
      });
      res.status(201).json(newBio);
    } catch (error) {
      next(error);
    }
  }
);
// UPDATE PASSWORD👇
router.post("/user/reset-password", isAuthenticated, async (req, res, next) => {
  try {
    const { password } = req.body;

    if (password === req.user.password) {
      res.status(400).json({ message: "Please, choose a new password" });
      return;
    }

    const decodedJwt = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);

    if (token) {
      const generatedSalt = bcrypt.genSaltSync(salt);
      const hashedPassword = bcrypt.hashSync(password, generatedSalt);

      await User.findOneAndUpdate(
        { username: decodedJwt.username },
        { password: hashedPassword }
      );
    }
    res.status(200).json({
      message: "You've successfully updated your password!",
    });
  } catch (error) {
    next(error);
  }
});

// Delete account👇
router.delete("/", isAuthenticated, async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

// Show all places with comment ?????

module.exports = router;
