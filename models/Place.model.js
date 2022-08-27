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
    enum: ["Wood", "Garden", "Square", "Park"],
  },
  theme: [
    {
      type: Schema.Types.String,
      enum: [
        "Historic",
        "Trendy",
        "Private",
        "Romantic",
        "Popular",
        "Family Friendly",
        "Party", //festif
        "Friends",
      ],
    },
  ],
});

const Place = model("Place", placeSchema);

module.exports = Place;
