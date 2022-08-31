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
        "https://voyage-onirique.com/wp-content/uploads/2021/08/chat-drole-funny-.jpg",
    },
    bio: { type: Schema.Types.String, maxLength: 150 },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
