const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    place: {
      type: Schema.Types.ObjectId,
      ref: "Place",
    },
    comment: {
      type: Schema.Types.String,
      maxLength: 150,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
