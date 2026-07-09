import { Link } from "react-router-dom";

export default function TagPostItem({
  post,
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

          <Link to={`/blog-details/${post?.slug}`}>

            <img
              src={img}
              alt={title}
              className="img-fluid"
            />

          </Link>

        </div>

        <p className="post-category">

          <Link to={`/category/${post?.category?.slug}`}>

            {category}

          </Link>

        </p>

        <h2 className="title">

          <Link to={`/blog-details/${post?.slug}`}>

            {title}

          </Link>

        </h2>

        <div className="d-flex align-items-center">

          <img
            src={authorImg}
            alt={author}
            className="img-fluid post-author-img flex-shrink-0"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <div className="post-meta">

            <p className="post-author">

              <Link
                to={`/author/${post?.author?._id}`}
                className="text-decoration-none"
              >

                {author}

              </Link>

            </p>

            <p className="post-date">

              <time>{date}</time>

            </p>

          </div>

        </div>

      </article>

    </div>

  );

}