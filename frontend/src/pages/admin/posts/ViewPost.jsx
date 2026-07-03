import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../../api/post.api";

const API_URL = "http://localhost:5000";

export default function ViewPost() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);

        const res = await getPost(slug);
        setPost(res.data);

      } catch (err) {
        console.log(err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  // ================= SAFE GUARDS =================
  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center p-5">Post not found</div>;
  }

  // ================= IMAGE RESOLVER =================
  const images =
    post.images?.length > 0
      ? post.images
      : post.Image
        ? [post.Image]
        : [];

  return (
    <>

      {/* HEADER */}
      <div className="page-header">
        <div className="add-item d-flex">
          <div className="page-title">
            <h4 className="fw-bold">Blogs</h4>
            <h6>Manage your blogs</h6>
          </div>
        </div>
      </div>

      {/* CONTENT CARD */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">

              {/* ================= IMAGES ================= */}
              <div className="mb-3">
                {images.length > 0 ? (
                  <div className="row g-2">
                    {images.map((img, i) => (
                      <div className="col-md-6" key={i}>
                        <img
                          src={`${API_URL}/uploads/${img}`}
                          className="rounded w-100"
                          alt="blog"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img
                    src="/assets/img/social/blog-detail.jpg"
                    className="rounded w-100"
                    alt="default"
                  />
                )}
              </div>

              {/* ================= TITLE + META ================= */}
              <div className="mb-3 pb-3 border-bottom">
                <div className="row">

                  <div className="col-lg-7">

                    <h4 className="mb-2">
                      {post.title}
                    </h4>

                    <div className="d-flex align-items-center">

                      <p className="me-3 mb-0 border-end pe-3">
                        <i className="ti ti-calendar me-1"></i>
                        {post.createdAt
                          ? new Date(post.createdAt).toLocaleDateString()
                          : ""}
                      </p>

                      <div className="d-flex align-items-center">

                        <img
                          src="/assets/img/users/user-01.jpg"
                          className="avatar avatar-xs rounded-circle me-1"
                          alt="author"
                        />

                        {post.author?.fullname ||
                          post.author?.name ||
                          "Admin"}

                      </div>

                    </div>

                  </div>

                  {/* ================= STATS ================= */}
                  <div className="col-lg-5">

                    <div className="d-flex align-items-center justify-content-between text-center">

                      <div className="me-3">
                        <h6>{post.likes || 0}</h6>
                        <span className="fs-12">Likes</span>
                      </div>

                      <div className="border-start ps-3 me-3">
                        <h6>{post.comments?.length || 0}</h6>
                        <span className="fs-12">Comments</span>
                      </div>

                      <div className="border-start ps-3 me-3">
                        <h6>{post.shares || 0}</h6>
                        <span className="fs-12">Share</span>
                      </div>

                      <div className="border-start ps-3">
                        <h6>{post.views || 0}</h6>
                        <span className="fs-12">Views</span>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

              {/* ================= DESCRIPTION ================= */}
              <div className="mb-3 pb-3 border-bottom">
                <p className="mb-3">
                  {post.description}
                </p>
              </div>

              {/* ================= TAGS ================= */}
              <div className="d-flex align-items-center flex-wrap row-gap-3">

                <h6 className="me-2">Tags :</h6>

                {(post.tags || []).length > 0 ? (
                  post.tags.map((tag, i) => (
                    <span key={i} className="badge bg-soft-info me-2">
                      {tag?.name || tag}
                    </span>
                  ))
                ) : (
                  <span className="text-muted">No tags</span>
                )}

              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}