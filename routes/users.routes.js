const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("./../models/User.model");

// SHOW ALL USERS
router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
});

//TODO DELETE USER HERE OR NOT?

module.exports = router;
