import express from "express";
import {
  getMe,
  updateProfile,
  changePassword,
  uploadAvatar,
  updatePhone,
  updateEmail,
  getAccountSessions,
  revokeAllSessions,
  revokeSession,
  deactivateAccount,
  deleteAccount
} from "../controllers/userController.js";

import { getDashboardStats } from "../controllers/dashboardController.js";

import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();
// GET CURRENT USER
router.get("/me", protect, getMe);

// UPDATE PROFILE
router.put("/profile", protect, updateProfile);

// PASSWORD
router.put("/change-password", protect, changePassword);

// PHONE
router.put("/update-phone", protect, updatePhone);

// EMAIL
router.put("/update-email", protect, updateEmail);

// SESSIONS
router.get("/sessions", protect, getAccountSessions);
router.delete("/sessions/:sessionId", protect, revokeSession);
router.delete("/sessions", protect, revokeAllSessions);

router.put("/deactivate", protect, deactivateAccount);

router.put("/delete-account", protect, deleteAccount);

// AVATAR
router.put("/avatar", protect, upload.single("avatar"), uploadAvatar);


router.get("/dashboard/stats", protect, getDashboardStats);

export default router;