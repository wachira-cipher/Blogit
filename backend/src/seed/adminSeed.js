import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const email = "tysonwachira123@gmail.com";

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      console.log("User not found");
      process.exit();
    }

    existingUser.role = "admin";
    await existingUser.save();

    console.log("✅ Admin role assigned successfully");

    process.exit();
  } catch (error) {
    console.log("❌ Error:", error.message);
    process.exit(1);
  }
};

createAdmin();