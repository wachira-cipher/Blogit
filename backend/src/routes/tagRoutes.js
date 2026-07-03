import express from "express";
import {
  createTag,
  getTags,
  getTag,
  updateTag,
  deleteTag
} from "../controllers/tagController.js";

const router = express.Router();

// CREATE
router.post("/", createTag);

// GET ALL
router.get("/", getTags);

// GET ONE
router.get("/:id", getTag);      // ✅ FIXED (no double //)

// UPDATE
router.put("/:id", updateTag);   // ✅ FIXED

// DELETE
router.delete("/:id", deleteTag);

export default router;