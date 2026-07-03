import { Link } from "react-router-dom";

export default function ListPostCard({
  image,
  category,
  title,
  readTime,
  date,
}) {
  return (
    <article className="list-post">
      <div className="post-img">
        <img src={image} alt="" className="img-fluid" />
      </div>

      <div className="post-content">
        <div className="category-meta">
          <span className="post-category">{category}</span>
        </div>

        <h3 className="title">
          <Link to="/post/sample-slug">{title}</Link>
        </h3>

        <div className="post-meta">
          <span className="read-time">{readTime}</span>
          <span className="post-date">{date}</span>
        </div>
      </div>
    </article>
  );
}