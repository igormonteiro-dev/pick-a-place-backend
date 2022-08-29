const { Schema, model } = require("mongoose");

const placeSchema = new Schema({
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
      enum: ["couple", "friends", "family", "with pets"],
    },
  ],
  theme: [
    {
      type: Schema.Types.String,
      enum: ["historic", "trendy", "private", "romantic", "festive", "local"],
    },
  ],
});

const Place = model("Place", placeSchema);

module.exports = Place;
