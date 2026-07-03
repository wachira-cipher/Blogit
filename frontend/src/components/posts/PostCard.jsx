import { Link } from "react-router-dom";


export default function PostCard({

  image,
  date,
  category,
  title,
  featured,
  delay = 0,

}) {


  return (

    <article

      className={`blog-item ${featured ? "featured" : ""}`}

      data-aos="fade-up"

      data-aos-delay={delay}

    >


      <img

        src={image}

        alt="Blog Image"

        className="img-fluid"

      />


      <div className="blog-content">


        <div className="post-meta">


          <span className="date">

            {date}

          </span>


          <span className="category">

            {category}

          </span>


        </div>



        {featured ? (


          <h2 className="post-title">


            <Link to="/post/sample-slug">

              {title}

            </Link>


          </h2>


        ) : (


          <h3 className="post-title">


            <Link to="/post/sample-slug">

              {title}

            </Link>


          </h3>


        )}



      </div>


    </article>

  );

}