import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  getHomePosts,
  searchPosts,
  getRecentPosts,
  deletePostImage
} from "../controllers/postController.js";


const router = express.Router();


//router.post(
// "/",
// protect,
// upload.array("images", 10), // ✅ REQUIRED
// createPost
//);
router.post(
  "/",
  protect,
  upload.array("images", 10),
  (req, res, next) => {
    console.log("🔥 FILES RECEIVED:", req.files);
    next();
  },
  createPost
);

router.get("/search", searchPosts);


// READ ALL
router.get(
  "/",
  getPosts
);

router.get(
  "/home",
  getHomePosts
);

router.get(
  "/recent",
  getRecentPosts
);


router.get(
  "/:slug",
  getPost
);
// READ SINGLE BY SLUG
router.get(
  "/:slug",
  getPost
);


// UPDATE
router.put(
  "/:id",
  protect,
  upload.array("images", 10),
  updatePost
);
// DELETE SINGLE POST IMAGE
router.delete(
  "/:id/image",
  protect,
  deletePostImage
);

// DELETE
router.delete(
  "/:id",
  deletePost
);







export default router;