import Category from "../models/Category.js";
import Post from "../models/Post.js";

//create category

export const createCategory = async (
  req,
  res
) => {
  try {
    const category =
      await Category.create(req.body);

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//GET CATEGORIES

export const getCategories = async (
  req,
  res
) => {
  try {
    const categories =
      await Category.find().sort({
        name: 1,
      });

    res.json(categories);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE CATEGORY
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCategoriesWithCount = async (req, res) => {
  try {

    const categories = await Category.aggregate([

      {
        $lookup: {
          from: "posts",
          let: { categoryId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$category", "$$categoryId"] },
                    { $eq: ["$status", "published"] }
                  ]
                }
              }
            }
          ],
          as: "posts"
        }
      },

      {
        $project: {
          name: 1,
          slug: 1,
          count: { $size: "$posts" }
        }
      },

      {
        $sort: {
          name: 1
        }
      }

    ]);

    res.json({
      success: true,
      categories
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


export const getCategoryPosts = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const category = await Category.findOne({
      slug: req.params.slug
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }

    const totalPosts = await Post.countDocuments({
      category: category._id,
      status: "published"
    });

    const posts = await Post.find({
      category: category._id,
      status: "published"
    })
      .populate("category")
      .populate("author")
      .populate("tags")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      success: true,
      category,
      posts,

      pagination: {
        page,
        limit,
        totalPosts,
        totalPages: Math.ceil(totalPosts / limit),
        hasPrev: page > 1,
        hasNext: page < Math.ceil(totalPosts / limit)
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
//