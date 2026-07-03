import { Link } from "react-router-dom";

export default function FeaturedPostCard({
  image,
  category,
  authorImg,
  author,
  date,
  title,
}) {
  return (
    <article className="featured-post">
      <div className="post-img">
        <img src={image} alt="" className="img-fluid" />
      </div>

      <div className="post-content">
        <div className="category-meta">
          <span className="post-category">{category}</span>

          <div className="author-meta">
            <img src={authorImg} alt="" className="author-img" />
            <span className="author-name">{author}</span>
            <span className="post-date">{date}</span>
          </div>
        </div>

        <h2 className="title">
          <Link to="/post/sample-slug">{title}</Link>
        </h2>
      </div>
    </article>
  );
}