const bcrypt = require("bcryptjs");
const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");

const salt = 10;

const generateToken = require("../routes/generateTokenControl.routes");
/* 
USER PROFILE PAGE
*/

// Update profile - username, bio and/or avatar👇
router.patch(
  "/user/profile",
  isAuthenticated,
  fileUploader.single("avatar"),
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
router.patch("/reset-password", isAuthenticated, async (req, res, next) => {
  try {
    const { password } = req.body;

    const foundUser = await User.findById(req.user.id).select("+password");
    console.log(bcrypt.compare(password, foundUser.password));
    const isSamePassword = await bcrypt.compare(password, foundUser.password);
    if (isSamePassword)
      return res.status(400).json({
        error: "Please, choose a new password",
      });

    const generatedSalt = bcrypt.genSaltSync(salt);
    const hashedPassword = bcrypt.hashSync(password, generatedSalt);

    const newPassword = {
      password: hashedPassword,
    };
    const user = await User.findByIdAndUpdate(req.user.id, newPassword);

    // To not show the password
    user.password = undefined;

    res.status(201).json({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (error) {
    next(error);
  }
});

// Delete account👇
router.delete("/user", isAuthenticated, async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
