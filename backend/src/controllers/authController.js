import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

//Register User
export const registerUser = async (req, res) => {
  try {
    const {
      fullname,
      email,
      password,
    } = req.body;

    const userExists =
      await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const userCount =
      await User.countDocuments();

    const role =
      userCount === 0 ? "admin" : "user";

    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Login User

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // =========================
    // INIT SESSIONS ARRAY SAFELY
    // =========================
    if (!user.sessions) {
      user.sessions = [];
    }

    const userAgent = req.headers["user-agent"] || "Unknown Device";
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      req.ip ||
      "Unknown";

    // =========================
    // OPTIONAL: PREVENT DUPLICATE DEVICE SESSIONS
    // =========================
    const existingSessionIndex = user.sessions.findIndex(
      (s) => s.userAgent === userAgent && s.isActive === true
    );

    const newSession = {
      device: userAgent,
      ip,
      userAgent,
      location: "Unknown",
      isActive: true,
      createdAt: new Date(),
    };

    if (existingSessionIndex !== -1) {
      // update existing session instead of duplicating
      user.sessions[existingSessionIndex] = newSession;
    } else {
      user.sessions.push(newSession);
    }

    // =========================
    // LIMIT SESSIONS (LAST 10 ONLY)
    // =========================
    if (user.sessions.length > 10) {
      user.sessions = user.sessions.slice(-10);
    }

    await user.save();

    return res.json({
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
      token: generateToken(user._id),
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//Current Logged User
export const getProfile = async (
  req,
  res
) => {
  res.json(req.user);
};