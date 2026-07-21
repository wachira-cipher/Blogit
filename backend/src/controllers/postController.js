import Post from "../models/Post.js";
import fs from "fs";
import path from "path";


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
   UPDATE POST
   Supports multiple images
========================= */
export const updatePost = async (req, res) => {
  try {

    const body = req.body || {};

    const {
      tags,
      ...rest
    } = body;


    const updateData = {
      ...rest,
    };


    // =========================
    // TAGS HANDLING
    // =========================
    if (tags !== undefined) {

      updateData.tags =
        Array.isArray(tags)

          ? tags.filter(Boolean)

          : typeof tags === "string"

            ? JSON.parse(tags || "[]")

            : [];

    }



    // =========================
    // MULTIPLE IMAGE UPLOAD
    // =========================
    if (req.files && req.files.length > 0) {


      const newImages = req.files.map(
        file => file.filename
      );


      const existingPost = await Post.findById(
        req.params.id
      );


      if (!existingPost) {

        return res.status(404).json({
          message: "Post not found"
        });

      }


      updateData.images = [
        ...(existingPost.images || []),
        ...newImages
      ];


    }



    // =========================
    // UPDATE DATABASE
    // =========================
    const post = await Post.findByIdAndUpdate(

      req.params.id,

      updateData,

      {
        new: true
      }

    )
      .populate("category")
      .populate("tags")
      .populate("author");



    if (!post) {

      return res.status(404).json({

        message: "Post not found"

      });

    }



    res.json(post);



  } catch (error) {


    console.error("UPDATE POST ERROR:", error);


    res.status(500).json({

      message: error.message

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

    const { id } = req.params;

    const { filename } = req.body;


    if (!filename) {

      return res.status(400).json({

        message: "Image filename required"

      });

    }


    const post = await Post.findById(id);


    if (!post) {

      return res.status(404).json({

        message: "Post not found"

      });

    }


    // remove from database
    post.images = post.images.filter(
      img => img !== filename
    );


    await post.save();



    // remove physical file
    const imagePath = path.join(
      process.cwd(),
      "uploads",
      filename
    );


    if (fs.existsSync(imagePath)) {

      fs.unlinkSync(imagePath);

    }



    res.json({

      message: "Image deleted",

      images: post.images

    });



  } catch (error) {


    console.error(
      "DELETE IMAGE ERROR:",
      error
    );


    res.status(500).json({

      message: error.message

    });


  }

};

export const getHomePosts = async (req, res) => {

  try {

    const publishedPosts = {
      status: "published"
    };


    let [
      heroPosts,
      featuredPosts,
      latestPosts
    ] = await Promise.all([


      // Hero - most viewed posts
      Post.find(publishedPosts)
        .sort({ views: -1 })
        .limit(10)
        .populate("author category"),



      // Featured posts
      Post.find({
        ...publishedPosts,
        featured: true
      })
        .sort({ createdAt: -1 })
        .limit(6)
        .populate("author category"),



      // Latest posts
      Post.find(publishedPosts)
        .sort({ createdAt: -1 })
        .limit(10)
        .populate("author category")


    ]);



    // ===============================
    // FEATURED POSTS FALLBACK
    // ===============================

    if (featuredPosts.length === 0) {

      featuredPosts = await Post.find(publishedPosts)
        .sort({ createdAt: -1 })
        .limit(5)
        .populate("author category");

    }



    res.json({

      success: true,

      heroPosts,

      featuredPosts,

      latestPosts

    });



  } catch (error) {


    res.status(500).json({

      success: false,

      message: error.message

    });


  }

};

export const searchPosts = async (req, res) => {

  try {

    const query = req.query.q?.trim();


    if (!query) {

      return res.json({
        success: true,
        posts: []
      });

    }


    const posts = await Post.find({

      status: "published",

      $or: [

        {
          title: {
            $regex: query,
            $options: "i"
          }
        },


        {
          excerpt: {
            $regex: query,
            $options: "i"
          }
        },


        {
          description: {
            $regex: query,
            $options: "i"
          }
        }

      ]

    })

      .populate(
        "category",
        "name slug"
      )

      .populate(
        "author",
        "fullname"
      )

      .sort({
        createdAt: -1
      })

      .limit(5);



    res.json({

      success: true,

      posts

    });


  } catch (error) {


    console.error(
      "Search Error:",
      error
    );


    res.status(500).json({

      success: false,

      message: error.message

    });


  }

};

// GET RECENT POSTS FOR SIDEBAR
export const getRecentPosts = async (req, res) => {

  try {

    const posts = await Post.find({
      status: "published"
    })

      .select(
        "title slug images createdAt"
      )

      .sort({
        createdAt: -1
      })

      .limit(5);



    res.json({

      success: true,

      posts

    });


  } catch (error) {


    res.status(500).json({

      success: false,

      message: error.message

    });


  }

};