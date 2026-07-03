import { Link } from "react-router-dom";

export default function PostItem({
  img,
  category,
  title,
  authorImg,
  author,
  date
}) {
  return (
    <div className="col-lg-6">
      <article>

        <div className="post-img">
          <img src={img} alt="post" className="img-fluid" />
        </div>

        <p className="post-category">{category}</p>

        <h2 className="title">
          <Link to="/post/sample">{title}</Link>
        </h2>

        <div className="d-flex align-items-center">
          <img src={authorImg} alt="author" className="img-fluid post-author-img flex-shrink-0" />

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