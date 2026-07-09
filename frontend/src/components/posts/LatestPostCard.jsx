import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function LatestPostCard({ post }) {

  const image = post.images?.[0]
    ? `${API_URL}/uploads/${post.images[0]}`
    : "/assets/blog/img/blog/blog-post-1.webp";

  return (
    <div className="col-lg-4">

      <article>

        <div className="post-img">

          <img
            src={image}
            alt={post.title}
            className="img-fluid"
            onError={(e) => {
              e.target.src = "/assets/blog/img/blog/blog-post-1.webp";
            }}
          />

        </div>

        <p className="post-category">
          <Link to={`/category/${post.category?.slug}`}>
            {post.category?.name || "General"}
          </Link>
        </p>

        <h2 className="title">
          <Link to={`/blog-details/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <div className="d-flex align-items-center">

          <img
            src="/assets/blog/img/person/person-m-10.webp"
            alt={post.author?.fullname}
            className="img-fluid post-author-img flex-shrink-0"
          />

          <div className="post-meta">

            <p className="post-author">
              {post.author?.fullname}
            </p>

            <p className="post-date">
              <time>
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </p>

          </div>

        </div>

      </article>

    </div>
  );
}