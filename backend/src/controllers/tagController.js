import Tag from "../models/Tag.js";
// =========================
// CREATE TAG
// =========================
export const createTag = async (req, res) => {
    try {
        const { name, slug, status } = req.body;

        const tag = await Tag.create({
            name,
            slug,
            status: status ?? true,
        });

        return res.status(201).json(tag);
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Failed to create tag",
        });
    }
};

// =========================
// GET ALL TAGS
// =========================
export const getTags = async (req, res) => {
    try {
        const tags = await Tag.find().sort({ createdAt: -1 });

        return res.status(200).json(tags);
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Failed to fetch tags",
        });
    }
};

// =========================
// GET SINGLE TAG
// =========================
export const getTag = async (req, res) => {
    try {
        const { id } = req.params;

        const tag = await Tag.findById(id);

        if (!tag) {
            return res.status(404).json({
                message: "Tag not found",
            });
        }

        return res.status(200).json(tag);
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Failed to fetch tag",
        });
    }
};

// =========================
// UPDATE TAG
// =========================
export const updateTag = async (req, res) => {
    try {
        const { id } = req.params;

        const tag = await Tag.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!tag) {
            return res.status(404).json({
                message: "Tag not found",
            });
        }

        return res.status(200).json(tag);
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Failed to update tag",
        });
    }
};

// =========================
// DELETE TAG
// =========================
export const deleteTag = async (req, res) => {
    try {
        const { id } = req.params;

        const tag = await Tag.findByIdAndDelete(id);

        if (!tag) {
            return res.status(404).json({
                message: "Tag not found",
            });
        }

        return res.status(200).json({
            message: "Tag deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Failed to delete tag",
        });
    }
};