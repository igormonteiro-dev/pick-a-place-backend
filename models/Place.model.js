const { Schema, model } = require("mongoose");

const placeSchema = new Schema({
  image: Schema.Types.String,
  name: Schema.Types.String,
  adress: Schema.Types.String,
  zipCode: Schema.Types.Number,
  metroLine: Schema.Types.String,
  metroStation: Schema.Types.String,
  open24Hours: Schema.Types.Boolean,
  category: {
    type: Schema.Types.String,
    enum: ["wood", "garden", "square", "park"],
  },
  withWho: [
    {
      type: Schema.Types.String,
      enum: ["couple", "friends", "family"],
    },
  ],
  theme: [
    {
      type: Schema.Types.String,
      enum: [
        "historic",
        "trendy",
        "private",
        "romantic",
        "festive",
        "local",
        "with pets",
      ],
    },
  ],
});

const Place = model("Place", placeSchema);

module.exports = Place;
