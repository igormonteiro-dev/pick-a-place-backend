const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: Schema.Types.String, unique: true },
    username: {
      type: Schema.Types.String,
      unique: true,
    },
    // with select, we don't show the password in back-end
    password: { type: Schema.Types.String, required: true, select: false },
    photo: {
      type: Schema.Types.String,
      default:
        "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1661934847/istockphoto-1208175274-612x612_xtu9fa.jpg",
    },
    bio: { type: Schema.Types.String, maxLength: 150 },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
