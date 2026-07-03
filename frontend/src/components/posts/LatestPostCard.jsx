import { Link } from "react-router-dom";

export default function LatestPostCard({
  image,
  category,
  title,
  author,
  authorImage,
  date,
}) {
  return (
    <div className="col-lg-4">
      <article>
        <div className="post-img">
          <img
            src={image}
            alt={title}
            className="img-fluid"
          />
        </div>

        <p className="post-category">{category}</p>

        <h2 className="title">
          <Link to="/post/sample-slug">
            {title}
          </Link>
        </h2>

        <div className="d-flex align-items-center">
          <img
            src={authorImage}
            alt={author}
            className="img-fluid post-author-img flex-shrink-0"
          />

          <div className="post-meta">
            <p className="post-author">{author}</p>

            <p className="post-date">
              <time>{date}</time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}