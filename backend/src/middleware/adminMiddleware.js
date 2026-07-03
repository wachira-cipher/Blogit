export const adminOnly = (req, res, next) => {
  try {
    // Ensure user exists (comes from auth middleware)
    if (!req.user) {
      return res.status(401).json({
        message: "Not authorized, no user found",
      });
    }

    // Check role
    if (req.user.role === "admin") {
      return next();
    }

    return res.status(403).json({
      message: "Admin access required",
    });

  } catch (error) {
    return res.status(403).json({
      message: "Authorization failed",
    });
  }
};