import { Link } from "react-router-dom";

export default function BlogGrid({
  posts = [],
  onEdit,
  onDelete
}) {

  const getImage = (post) => {
    if (post?.images?.length > 0) {
      return `http://localhost:5000/uploads/${post.images[0]}`;
    }
    return "/assets/auth/img/blogs/blog-01.jpg";
  };

  return (
    <div className="row justify-content-center">

      {posts.map((post) => (
        <div className="col-xxl-4 col-md-6" key={post._id}>

          <div className="card">
            <div className="card-body">

              {/* IMAGE SECTION */}
              <div className="img-sec w-100 position-relative mb-3">

                <Link to={`/posts/view-post/${post.slug}`}>
                  <img
                    src={getImage(post)}
                    className="img-fluid rounded w-100"
                    alt={post.title || "blog"}
                  />
                </Link>

                <div>

                  <span className="trend-tag badge bg-soft-info shadow-none fs-10 fw-medium">
                    {post.category?.name || "General"}
                  </span>

                  <span className="badge badge-success dot-icon">
                    <i className="ti ti-point-filled"></i>
                    {post.status || "draft"}
                  </span>

                </div>
              </div>

              {/* META */}
              <div className="d-flex align-items-center justify-content-between mb-3">

                <div className="d-flex align-items-center">

                  <span className="me-2 d-flex align-items-center">
                    <i className="ti ti-calendar me-1"></i>

                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString()
                      : "N/A"
                    }
                  </span>

                  <span className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center">

                    <img
                      src="/assets/auth/img/users/user-02.jpg"
                      className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                      alt="user"
                    />

                    {post.author?.fullname || post.author?.name || "Admin"}

                  </span>

                </div>

                {/* ACTIONS */}
                <div className="d-flex align-items-center">

                  {/* EDIT */}
                  <a
                    href="#"
                    className="p-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_blog"
                    onClick={() => onEdit?.(post)}
                  >
                    <i className="ti ti-edit"></i>
                  </a>

                  {/* DELETE */}
                  <a
                    href="#"
                    className="p-1"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    onClick={() => onDelete?.(post)}
                  >
                    <i className="ti ti-trash"></i>
                  </a>

                </div>

              </div>

              {/* TITLE */}
              <h5>
                <Link
                  to={`/posts/view-post/${post.slug}`}
                  className="fs-16 text-truncate"
                >
                  {post.title || "Untitled"}
                </Link>
              </h5>

            </div>
          </div>

        </div>
      ))}

      {/* EMPTY STATE */}
      {posts.length === 0 && (
        <div className="text-center">
          No posts found
        </div>
      )}

    </div>
  );
}