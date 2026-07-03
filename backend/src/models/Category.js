import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

     status: {
    type: String,
    enum: [
      "draft",
      "published"
    ],
    default: "draft",
  },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Category", categorySchema);