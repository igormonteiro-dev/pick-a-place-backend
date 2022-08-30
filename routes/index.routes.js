const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// Put the next routes here 👇

router.use("/places", require("../routes/places.routes"));
router.use("/auth", require("../routes/authentication.routes"));

router.use("/user/favorites", require("../routes/favorites.routes"));
router.use("/user", require("./user.routes"));
router.use("/comments", require("../routes/comments.routes"));

router.use("/", require("../routes/resetPassword.routes"));

module.exports = router;
