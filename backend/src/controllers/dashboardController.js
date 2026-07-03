import Post from "../models/Post.js";
import User from "../models/User.js";

export const getDashboardStats = async (req, res) => {
  try {
    const authorId = req.user._id;

    // =========================
    // DATE RANGE (TODAY)
    // =========================
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    // =========================
    // USER SESSIONS
    // =========================
    const user = await User.findById(authorId).select("sessions");

    const sessions = user?.sessions || [];

    const sessionsToday = sessions.filter(
      (s) =>
        new Date(s.createdAt) >= startOfToday &&
        new Date(s.createdAt) <= endOfToday
    ).length;

    const activeSessions = sessions.filter((s) => s.isActive).length;

    // =========================
    // BLOG CORE STATS
    // =========================
    const [
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      viewsResult,
      todayPosts,
    ] = await Promise.all([
      Post.countDocuments({ author: authorId }),

      Post.countDocuments({
        author: authorId,
        status: "published",
      }),

      Post.countDocuments({
        author: authorId,
        status: "draft",
      }),

      Post.aggregate([
        {
          $match: { author: authorId },
        },
        {
          $group: {
            _id: null,
            totalViews: { $sum: "$views" },
          },
        },
      ]),

      Post.countDocuments({
        author: authorId,
        createdAt: {
          $gte: startOfToday,
          $lte: endOfToday,
        },
      }),
    ]);

    // =========================
    // ENGAGEMENT METRICS
    // =========================
    const totalViews = viewsResult[0]?.totalViews || 0;

    const engagementRate =
      totalBlogs > 0
        ? Math.round(totalViews / totalBlogs)
        : 0;

    // =========================
    // RESPONSE (FRONTEND READY)
    // =========================
    res.json({
      success: true,

      stats: {
        // 📊 INFO CARDS
        totalBlogs,
        totalViews,
        todayPosts,

        // 📈 AREA CHART DATA (future-ready hook)
        chart: {
          postsOverTime: [], // will be filled later (daily aggregation)
          viewsOverTime: [], // will be filled later (daily aggregation)
        },

        // 🍩 DONUT CHART DATA
        breakdown: {
          published: publishedBlogs,
          draft: draftBlogs,
        },

        // 👤 SESSION DATA
        sessionsToday,
        activeSessions,
        totalSessions: sessions.length,

        // 📊 ENGAGEMENT
        engagementRate,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};