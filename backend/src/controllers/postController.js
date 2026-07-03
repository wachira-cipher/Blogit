import Post from "../models/Post.js";


/* =========================
   CREATE POST
========================= */export const createPost = async (req, res) => {

  try {

    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const {
      title,
      slug,
      description,
      category,
      tag,
      tags,   // ✅ ADD THIS
      status,
      visibility
    } = req.body;

    // =========================
    // MULTIPLE IMAGE UPLOAD
    // =========================
    const images = req.files
      ? req.files.map(file => file.filename)
      : [];

    // =========================
    // FIX: PARSE TAGS PROPERLY
    // =========================
    let parsedTags = [];

    if (tags) {
      try {
        parsedTags =
          typeof tags === "string"
            ? JSON.parse(tags)
            : tags;
      } catch (err) {
        parsedTags = [];
      }
    }

    // =========================
    // CREATE POST
    // =========================
    const post = await Post.create({

      title,
      slug,
      description,
      category,

      // 🔥 FIXED HERE (THIS IS THE KEY)
      tags: parsedTags,

      status: status || "draft",
      visibility: visibility || "public",
      images,

      author: req.user._id

    });

    const populated = await Post.findById(post._id)
      .populate("category")
      .populate("tags")
      .populate("author");

    res.status(201).json(populated);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });
  }
};

/* =========================
   GET ALL POSTS
========================= */
export const getPosts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const { search = "", category = "", status = "" } = req.query;

    const query = {};

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    if (category) {
      query.category = category;
    }

    if (status) {
      query.status = status;
    }

    const total = await Post.countDocuments(query);

    const posts = await Post.find(query)
      .populate("category")
      .populate("tags")
      .populate("author")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      posts,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* =========================
   GET SINGLE POST (FIXED)
========================= */
export const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({
      slug: req.params.slug,
    })
      .populate("category")
      .populate("tags")
      .populate("author");

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    post.views += 1;
    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* =========================
   UPDATE POST (FIXED)
========================= */
export const updatePost = async (req, res) => {
  try {
    const { tags, ...rest } = req.body;

    const updateData = {
      ...rest,
    };

    // handle Image consistency
    if (rest.Image !== undefined) {
      updateData.Image = rest.Image;
    }

    // safe tags handling
    if (tags !== undefined) {
      updateData.tags = Array.isArray(tags)
        ? tags.filter(Boolean)
        : typeof tags === "string"
          ? JSON.parse(tags || "[]")
          : [];
    }

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    )
      .populate("category")
      .populate("tags")
      .populate("author");

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* =========================
   DELETE POST
========================= */
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.json({
      message: "Post deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deletePostImage = async (req, res) => {
  try {
    const { filename } = req.body;

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // remove from DB array
    post.images = post.images.filter(img => img !== filename);
    await post.save();

    // remove from filesystem
    const filePath = path.join("uploads", filename);

    fs.unlink(filePath, (err) => {
      if (err) console.log("File delete error:", err.message);
    });

    res.json(post);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};