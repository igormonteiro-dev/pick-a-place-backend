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
router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const places = await Place.find();

      res.json(places);
    } catch (error) {
      next(error);
    }
  })

  // SHOW PLACES BY THEME👇
  .get(async (req, res, next) => {
    const filters = req.query;
    try {
      //check for each place, if it satisfies all the provided parameters, and if it does, then add it to the placesByTheme list.
      const placesByTheme = await Place.filter((place) => {
        let isValid = true;
        for (key in filters) {
          console.log(key, place[key], filters[key]);
          isValid = isValid && place[key] == filters[key];
        }
        return isValid;
      });
      // .res.status(200)
      // .json(placesByTheme);
      res.send(placesByTheme);
    } catch (error) {
      netx(error);
    }
  });

// SHOW ONE PLACE (FULL PAGE) WHEN THE USER CLICK👇
// Don't need to be authenticated to see the places, only to favorite and give a comment
router.get("/:id", async (req, res, next) => {
  try {
    const placeId = req.params.id;
    res.status(200).json(await Place.findById(placeId));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
