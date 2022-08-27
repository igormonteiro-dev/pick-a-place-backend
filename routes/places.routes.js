const router = require("express").Router();
const mongoose = require("mongoose");
const Place = require("../models/Place.model");
const isAuthenticated = require("../middleware/isAuthenticated.js");

// CREATE PLACE👇
router.post("/", async (req, res, next) => {
  try {
    const placeToCreate = await Place.create(req.body);

    res.status(201).json(placeToCreate);
  } catch (error) {
    next(error);
  }
});

// UPDATE PLACE BY ID👇
router
  .route("/:id")
  .post(async (req, res, next) => {
    try {
      const placeToUpdate = await Place.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(placeToUpdate);
    } catch (error) {
      next(error);
    }
  })

  // DELETE PLACE BY ID👇
  .delete(async (req, res, next) => {
    try {
      const removedPlace = await Place.findByIdAndDelete(req.params.id);
      res.sendStatus(204)({
        message: `You've removed ${removedPlace} from the database! `,
      });
    } catch (error) {
      next(error);
    }
  });

// SHOW ALL PLACES👇
router.get("/", async (req, res, next) => {
  try {
    const places = await Place.find();

    res.json(places);
  } catch (error) {
    next(error);
  }
});

// SHOW ONE PLACE (FULL PAGE) WHEN THE USER CLICK
router.get("/:id", isAuthenticated, async (req, res, next) => {
  try {
    placeId = req.params.id;
    res.status(200).json(await Place.findById(placeId));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
