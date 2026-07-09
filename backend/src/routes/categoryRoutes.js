import express from "express";

import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,getCategoriesWithCount,
  getCategoryPosts,

} from "../controllers/categoryController.js";

const router = express.Router();

// CREATE
router.post("/", createCategory);

router.get("/with-count", getCategoriesWithCount);

// GET ALL
router.get("/", getCategories);

// GET ONE
router.get("/:id", getCategory);

// UPDATE
router.put("/:id", updateCategory);

// DELETE
router.delete("/:id", deleteCategory);

router.get(
 "/:slug/posts",
 getCategoryPosts
);

export default router;