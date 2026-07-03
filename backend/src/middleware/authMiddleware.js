import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    let token;

    const authHeader = req.headers.authorization;

    if (authHeader?.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        message: "Not authorized, no token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // =========================
    // 1. HARD DELETE CHECK
    // =========================
    if (user.isDeleted) {
      return res.status(403).json({
        message: "Account permanently deleted",
      });
    }

    // =========================
    // 2. DEACTIVATION CHECK (ADMIN OVERRIDE)
    // =========================
    const isPrivileged = ["admin", "superadmin"].includes(user.role);

    if (!user.isActive && !isPrivileged) {
      return res.status(403).json({
        message: "Account deactivated",
      });
    }

    // =========================
    // 3. PASSWORD CHANGE INVALIDATION
    // =========================
    if (
      user.passwordChangedAt &&
      decoded.iat * 1000 < user.passwordChangedAt.getTime()
    ) {
      return res.status(401).json({
        message: "Session expired. Please login again.",
      });
    }

    req.user = user;
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Token invalid or expired",
    });
  }
};