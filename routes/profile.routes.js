const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const User = require("../models/User.model");

/* 
USER PROFILE
*/

// Create a bio👇
router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const { bio } = req.body;
    const bioToCreate = { bio, user: req.user.id };

    const newBio = await User.create(bioToCreate);
    res.status(201).json(newBio);
  } catch (error) {}
});

// Upload photo👇

// Update username and/or password👇

// Delete account👇

// Show all places with comment ?????

module.exports = router;
