import express from "express";
import cors from "cors";
import path from "path"; // ✅ ADD THIS

import postRoutes from "./routes/postRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ==========================
// 🔥 FIX: STATIC FILES
// ==========================
app.use("/uploads", express.static(path.resolve("uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/tags", tagRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Blog API Running",
  });
});

export default app;