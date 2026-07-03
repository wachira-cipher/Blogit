import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    excerpt: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      default: []
    },


    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },


    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      }
    ],


    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },


    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },

        name: String,

        email: String,

        message: {
          type: String,
          required: true
        },

        likes: {
          type: Number,
          default: 0
        },


        replies: [
          {
            user: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User"
            },

            message: String,

            createdAt: {
              type: Date,
              default: Date.now
            }
          }
        ],


        createdAt: {
          type: Date,
          default: Date.now
        }

      }
    ],

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published"
    },

    views: {
      type: Number,
      default: 0
    }


  },
  {
    timestamps: true
  });


export default mongoose.model(
  "Post",
  postSchema
);