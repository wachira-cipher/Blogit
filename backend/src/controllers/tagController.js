import Tag from "../models/Tag.js";
import Post from "../models/Post.js";
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

// ===============================
// GET POSTS BY TAG WITH PAGINATION
// ===============================

export const getTagPosts = async (req, res) => {

    try {

        const page = parseInt(req.query.page) || 1;

        const limit = parseInt(req.query.limit) || 6;

        const skip = (page - 1) * limit;


        const tag = await Tag.findOne({
            slug: req.params.slug
        });


        if (!tag) {

            return res.status(404).json({

                success: false,

                message: "Tag not found"

            });

        }



        const query = {

            tags: tag._id,

            status: "published"

        };



        const totalPosts =
            await Post.countDocuments(query);



        const posts =
            await Post.find(query)

                .populate("category")

                .populate("author")

                .populate("tags")

                .sort({
                    createdAt: -1
                })

                .skip(skip)

                .limit(limit);



        res.json({

            success: true,

            tag,

            posts,

            pagination: {

                page,

                limit,

                totalPosts,

                totalPages:
                    Math.ceil(
                        totalPosts / limit
                    )

            }

        });



    } catch(error) {


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};