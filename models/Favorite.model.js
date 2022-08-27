const { Schema, model } = require("mongoose");

const favoriteSchema = new Schema(
  {
    username: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    place: {
      type: Schema.Types.ObjectId,
      ref: "Place",
    },
  },

  {
    timestamps: true,
  }
);

const Favorite = model("Favorite", favoriteSchema);

module.exports = Favorite;
