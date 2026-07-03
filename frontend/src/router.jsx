import { createBrowserRouter, Navigate } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Category from "./pages/public/Category";
import BlogDetails from "./pages/public/BlogDetails";
import Contact from "./pages/public/Contact";
import AuthorProfile from "./pages/public/AuthorProfile";
import NotFound from "./pages/public/NotFound";

import Dashboard from "./pages/admin/Dashboard";
import AdminRoute from "./routes/AdminRoute";
import CreatePost from "./pages/admin/posts/CreatePost";
import ViewPost from "./pages/admin/posts/ViewPost";
import AllPosts from "./pages/admin/posts/AllPosts";
import CreateCategory from "./pages/admin/categories/CreateCategory";
import AllCategories from "./pages/admin/categories/AllCategories";
import AllTags from "./pages/admin/tags/AllTags";
import CreateTag from "./pages/admin/tags/CreateTag";
import GeneralSettings from "./pages/admin/settings/GeneralSettings";
import SecuritySettings from "./pages/admin/settings/SecuritySettings";


const router = createBrowserRouter([


  // PUBLIC ROUTES
  {
    path: "/",
    element: <PublicLayout />,
    children: [

      {
        index: true,
        element: <Home />
      },


      {
        path: "about",
        element: <About />
      },


      {
        path: "category",
        element: <Category />
      },


      {
        path: "blog-details",
        element: <BlogDetails />
      },


      {
        path: "author-profile",
        element: <AuthorProfile />
      },


      {
        path: "contact",
        element: <Contact />
      },


      // MUST BE LAST PUBLIC CHILD
      {
        path: "*",
        element: <NotFound />
      }

    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [

      {
        index: true,
        element: <CreatePost />
      },




    ]
  },




  // AUTH ROUTES
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  },


  {
    path: "/register",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />
      }
    ]
  },

  // ================= ADMIN (PROTECTED AREA WRAPPER ONLY) =================
  {
    path: "/",
    element: <AdminRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [

          {
            path: "dashboard",
            element: <Dashboard />,
          },
         
          {
            path: "settings",
            children: [
              {
                path: "general-settings",
                element: <GeneralSettings />,
              },
               {
                path: "security-settings",
                element: <SecuritySettings />,
              }
            ],
          },
          {
            path: "posts",
            children: [
              {
                path: "create-post",
                element: <CreatePost />,
              },
              {
                path: "all-posts",
                element: <AllPosts />
              },
              {
                path: "view-post/:slug",
                element: <ViewPost />
              }

            ],
          },
          {
            path: "category",
            children: [
              {
                path: "create-category",
                element: <CreateCategory />,
              },
              {
                path: "all-categories",
                element: <AllCategories />
              }

            ],
          },
          {
            path: "tags",
            children: [
              {
                path: "create-tags",
                element: <CreateTag />,
              },
              {
                path: "all-tags",
                element: <AllTags />
              }

            ],
          },

        ],
      },
    ],
  },



]);


export default router;