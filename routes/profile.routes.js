const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");

/* 
USER PROFILE
*/

// Create a bio👇
router.post(
  "/",
  fileUploader.single("avatar"),
  isAuthenticated,
  async (req, res, next) => {
    try {
      const { bio } = req.body;

      let avatar;
      if (req.file) {
        avatar = req.file.path;
      }
      const bioToCreate = { bio, photo: avatar };

      const newBio = await User.findByIdAndUpdate(req.user.id, bioToCreate, {
        new: true,
      });
      res.status(201).json(newBio);
    } catch (error) {
      next(error);
    }
  }
);

// Update username and/or password👇

// Delete account👇

// Show all places with comment ?????

module.exports = router;
