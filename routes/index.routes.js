const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//////////////////////////////////////
// All routes here 👇
//////////////////////////////////////

router.use("/places", require("../routes/places.routes"));
router.use("/auth", require("../routes/authentication.routes"));
router.use("/", require("../routes/profile.routes")); //profile page
router.use("/user/favorites", require("../routes/favorites.routes"));
router.use("/", require("./RandomPlaces.routes"));
router.use("/comment", require("../routes/comments.routes"));

// If user forget the password
router.use("/", require("../routes/resetPassword.routes"));

module.exports = router;
