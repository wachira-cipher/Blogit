import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // =========================
    // AUTH CORE
    // =========================
    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    passwordChangedAt: {
      type: Date,
      default: null,
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },

    // =========================
    // PROFILE EXTENSIONS
    // =========================

    username: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    country: {
      type: String,
      default: "",
    },

    state: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "",
    },

    postalCode: {
      type: String,
      default: "",
    },

    // =========================
    // SECURITY FLAGS
    // =========================

    isTwoFactorEnabled: {
      type: Boolean,
      default: false,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isPhoneVerified: {
      type: Boolean,
      default: false,
    },

    // =========================
    // ACCOUNT SESSIONS (FIXED)
    // =========================

    sessions: [
      {
        device: {
          type: String,
          default: "Unknown Device",
        },

        ip: {
          type: String,
          default: "",
        },

        userAgent: {
          type: String,
          default: "",
        },

        location: {
          type: String,
          default: "Unknown",
        },

        isActive: {
          type: Boolean,
          default: true,
        },

        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    // ACCOUNT LIFECYCLE
    isActive: {
      type: Boolean,
      default: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    deactivatedAt: {
      type: Date,
      default: null,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);