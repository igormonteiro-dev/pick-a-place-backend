const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: Schema.Types.String, unique: true },
    username: {
      type: Schema.Types.String,
      unique: true,
    },
    password: { type: Schema.Types.String, required: true, select: false },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
