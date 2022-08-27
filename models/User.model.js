const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      unique: true,
    },
    password: { type: Schema.Types.String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
