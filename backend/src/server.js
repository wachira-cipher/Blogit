import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs";



dotenv.config();

connectDB();

// 🔥 AUTO-SEED ADMIN USER
const seedAdmin = async () => {
  try {

    const email = "tysonwachira123@gmail.com";
    const hashedPassword = await bcrypt.hash("password@2031", 10);

    let user = await User.findOne({ email });


    if (!user) {

      user = await User.create({

        fullname: "Tyson Wachira",

        username: "WachiraCipher",

        email:email,

        password:hashedPassword,

        role: "admin",

        isActive: true

      });


      console.log("✅ Admin user created");

      return;

    }



    if (user.role !== "admin") {

      user.role = "admin";

      await user.save();

      console.log("✅ Existing user promoted to admin");

    } 
    else {

      console.log("ℹ️ Admin already exists");

    }


  } catch(error){

    console.log(
      "❌ Admin seed error:",
      error.message
    );

  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  // run seed AFTER server starts
  await seedAdmin();
});