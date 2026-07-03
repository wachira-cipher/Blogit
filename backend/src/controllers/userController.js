import User from "../models/User.js";
import bcrypt from "bcryptjs";


// =========================
// GET CURRENT USER
// =========================
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// =========================
// UPDATE PROFILE
// =========================
export const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const {
            fullname,
            username,
            phone,
            address,
            country,
            state,
            city,
            postalCode,
        } = req.body;

        if (fullname !== undefined) user.fullname = fullname;
        if (username !== undefined) user.username = username;
        if (phone !== undefined) user.phone = phone;
        if (address !== undefined) user.address = address;
        if (country !== undefined) user.country = country;
        if (state !== undefined) user.state = state;
        if (city !== undefined) user.city = city;
        if (postalCode !== undefined) user.postalCode = postalCode;

        const updated = await user.save();

        res.json({
            message: "Profile updated successfully",
            user: updated,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// =========================
// change password
// =========================

// =========================
// CHANGE PASSWORD
// =========================
export const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        // Validate input
        if (!currentPassword || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "Current password and new password are required",
            });
        }

        // Get authenticated user
        const user = await User.findById(req.user._id).select("+password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Verify current password
        const isCurrentPasswordCorrect = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!isCurrentPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Current password is incorrect",
            });
        }

        // Prevent reusing current password
        const isSamePassword = await bcrypt.compare(
            newPassword,
            user.password
        );

        if (isSamePassword) {
            return res.status(400).json({
                success: false,
                message: "New password must be different from the current password",
            });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);

        // Record password change time
        user.passwordChangedAt = new Date();

        await user.save();

        // Return updated user WITHOUT password
        const updatedUser = await User.findById(user._id).select("-password");

        return res.status(200).json({
            success: true,
            message: "Password updated successfully",
            user: updatedUser,
        });

    } catch (error) {
        console.error("CHANGE PASSWORD ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// =========================
// UPDATE PHONE NUMBER
// =========================
export const updatePhone = async (req, res) => {
    try {
        const { newPhone, password } = req.body;

        // =========================
        // VALIDATION
        // =========================
        if (!newPhone || !password) {
            return res.status(400).json({
                success: false,
                message: "New phone and password are required",
            });
        }

        // =========================
        // GET USER WITH PASSWORD
        // =========================
        const user = await User.findById(req.user._id).select("+password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // =========================
        // VERIFY PASSWORD
        // =========================
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            });
        }

        // =========================
        // CHECK SAME PHONE
        // =========================
        if (user.phone === newPhone) {
            return res.status(400).json({
                success: false,
                message: "This is already your current phone number",
            });
        }

        // =========================
        // UPDATE PHONE
        // =========================
        user.phone = newPhone;

        await user.save();

        // =========================
        // RETURN UPDATED USER (NO PASSWORD)
        // =========================
        const updatedUser = await User.findById(user._id).select("-password");

        return res.status(200).json({
            success: true,
            message: "Phone number updated successfully",
            user: updatedUser,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// =========================
// UPDATE EMAIL
// =========================

export const updateEmail = async (req, res) => {
    try {
        const { newEmail, password } = req.body;

        if (!newEmail || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const user = await User.findById(req.user._id).select("+password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // verify password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            });
        }

        // optional: prevent same email
        if (user.email === newEmail) {
            return res.status(400).json({
                success: false,
                message: "New email must be different",
            });
        }

        user.email = newEmail;

        await user.save();

        const updatedUser = await User.findById(user._id).select("-password");

        return res.status(200).json({
            success: true,
            message: "Email updated successfully",
            user: updatedUser,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// =========================
// UPLOAD AVATAR (basic version)
// =========================
export const uploadAvatar = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // store relative URL instead of raw path (IMPORTANT)
        user.avatar = `/uploads/${req.file.filename}`;

        await user.save();

        res.json({
            message: "Avatar updated successfully",
            avatar: user.avatar,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAccountSessions = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("sessions");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            sessions: user.sessions || [],
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const revokeSession = async (req, res) => {
    try {
        const { sessionId } = req.params;

        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // remove session
        user.sessions = user.sessions.filter(
            (s) => s._id.toString() !== sessionId
        );

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Device logged out successfully",
            sessions: user.sessions,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const revokeAllSessions = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        user.sessions = [];

        await user.save();

        return res.status(200).json({
            success: true,
            message: "All sessions cleared successfully",
            sessions: [],
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deactivateAccount = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.isActive = false;
        user.deactivatedAt = new Date();

        // 🚨 logout ALL sessions instantly
        user.sessions = [];

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Account deactivated successfully",
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export const reactivateAccount = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.isDeleted) {
            return res.status(403).json({
                message: "Account permanently deleted",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        // Reactivate
        user.isActive = true;
        user.deactivatedAt = null;

        await user.save();

        res.json({
            success: true,
            message: "Account reactivated successfully",
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAccountPermanently = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.isDeleted = true;
        user.isActive = false;
        user.deletedAt = new Date();

        user.sessions = [];

        await user.save();

        res.json({
            success: true,
            message: "Account permanently deleted",
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};
export const deleteAccount = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("+password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const { password } = req.body;

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password required",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            });
        }

        user.isActive = false;
        user.deactivatedAt = new Date();
        user.sessions = [];

        await user.save();

        res.json({
            success: true,
            message: "Account deactivated",
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};