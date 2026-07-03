import mongoose from "mongoose";


const commentSchema = new mongoose.Schema(
  {

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },


    // Logged in user (optional)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },


    name: {
      type: String,
      required: true,
      trim: true,
    },


    email: {
      type: String,
      required: true,
      trim: true,
    },


    message: {
      type: String,
      required: true,
      trim: true,
    },


    // Reply system
    parentComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },


    status: {
      type: String,
      enum: [
        "pending",
        "approved",
        "rejected"
      ],
      default: "pending",
    },


    likes: {
      type: Number,
      default: 0,
    }

  },
  {
    timestamps:true
  }
);



export default mongoose.model(
  "Comment",
  commentSchema
);