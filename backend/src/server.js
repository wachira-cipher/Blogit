import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import User from "./models/User.js";

dotenv.config();

connectDB();

// 🔥 AUTO-SEED ADMIN USER
const seedAdmin = async () => {
  try {
    const email = "tysonwachira123@gmail.com";

    const user = await User.findOne({ email });

    if (!user) {
      console.log("⚠️ Admin seed skipped: user not found");
      return;
    }

    if (user.role !== "admin") {
      user.role = "admin";
      await user.save();
      console.log("✅ Admin role assigned automatically");
    } else {
      console.log("ℹ️ Admin already exists");
    }

  } catch (error) {
    console.log("❌ Admin seed error:", error.message);
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  // run seed AFTER server starts
  await seedAdmin();
});