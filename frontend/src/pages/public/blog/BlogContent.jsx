import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;


export default function BlogContent({ post }) {
  const { user } = useAuth();


  if (!post) {
    return (
      <div className="container py-5">
        <p>Loading article...</p>
      </div>
    );
  }


  const mainImage = post.images?.length
    ? `${API_URL}/uploads/${post.images[0]}`
    : "/assets/blog/img/blog/blog-post-3.webp";



  const authorImage =
    post.author?.avatar
      ? `${API_URL}/${post.author.avatar}`
      : "/assets/blog/img/person/person-f-8.webp";



  const formattedDate = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      }
    )
    : "";



  return (
    <section
      id="blog-details"
      className="blog-details section"
    >

      <div
        className="container"
        data-aos="fade-up"
      >

        <article className="article">



          {/* Hero Image */}

          <div
            className="hero-img"
            data-aos="zoom-in"
          >


            <img
              src={mainImage}
              alt={post.title}
              className="img-fluid"
              loading="lazy"
            />



            <div className="meta-overlay">


              <div className="meta-categories">


                {post.category && (

                  <Link
                    to={`/category/${post.category.slug}`}
                    className="category"
                  >

                    {post.category.name}

                  </Link>

                )}



                {post.category && (

                  <span className="divider">
                    •
                  </span>

                )}



                <span className="reading-time">

                  <i className="bi bi-clock"></i>

                  {post.readTime || "5 min read"}

                </span>



              </div>


            </div>


          </div>





          <div
            className="article-content"
            data-aos="fade-up"
            data-aos-delay="100"
          >




            {/* Header */}

            <div className="content-header">


              <h1 className="title">

                {post.title}

              </h1>





              <div className="author-info">


                <div className="author-details">


                  <img
                    src={authorImage}
                    alt={post.author?.fullname}
                    className="author-img"
                  />



                  <div className="info">


                    <h4>

                      {post.author?.fullname || "Unknown Author"}

                    </h4>




                    <span className="role">

                      {post.author?.role || "Author"}

                    </span>



                  </div>


                </div>





                <div className="post-meta">


                  <span className="date">


                    <i className="bi bi-calendar3"></i>

                    {formattedDate}


                  </span>





                  <span className="divider">

                    •

                  </span>





                  <span className="comments">


                    <i className="bi bi-chat-text"></i>


                    {post.comments?.length || 0}
                    {" "}
                    Comments


                  </span>



                </div>




              </div>




            </div>






            {/* Article Body */}


            <div className="content">



              {post.excerpt && (

                <p className="lead">

                  {post.excerpt}

                </p>

              )}






              {post.description && (

                <p>

                  {post.description}

                </p>

              )}


              {/* Additional Images */}

              {post.images?.length > 1 && (

                <div className="content-image right-aligned">


                  <img
                    src={`${API_URL}/uploads/${post.images[1]}`}
                    className="img-fluid"
                    alt={post.title}
                    loading="lazy"
                  />


                  <figcaption>

                    Additional article image

                  </figcaption>


                </div>

              )}






              {/* Optional Content Sections */}

              {post.sections?.map((section, index) => (

                <div key={index}>


                  {section.heading && (

                    <h2>

                      {section.heading}

                    </h2>

                  )}



                  {section.text && (

                    <p>

                      {section.text}

                    </p>

                  )}




                  {section.list?.length > 0 && (

                    <ul>

                      {
                        section.list.map((item, i) => (

                          <li key={i}>

                            {item}

                          </li>

                        ))
                      }

                    </ul>

                  )}



                </div>

              ))}






              {/* Highlight Box */}


              {post.highlights?.length > 0 && (

                <div className="highlight-box">


                  <h3>

                    Key Highlights

                  </h3>



                  <ul className="trend-list">


                    {
                      post.highlights.map((item, index) => (

                        <li key={index}>


                          <i className="bi bi-lightning-charge"></i>


                          <span>

                            {item}

                          </span>


                        </li>


                      ))
                    }


                  </ul>



                </div>

              )}






              {/* Quote */}


              {post.quote?.text && (

                <blockquote>


                  <p>

                    "{post.quote.text}"

                  </p>


                  {post.quote.author && (

                    <cite>

                      {post.quote.author}

                    </cite>

                  )}


                </blockquote>

              )}







              {/* Content Cards */}


              {post.cards?.length > 0 && (

                <div className="content-grid">


                  <div className="row g-4">


                    {
                      post.cards.map((card, index) => (

                        <div
                          className="col-md-6"
                          key={index}
                        >


                          <div className="info-card">


                            {card.icon && (

                              <i className={card.icon}></i>

                            )}



                            <h4>

                              {card.title}

                            </h4>




                            <p>

                              {card.description}

                            </p>


                          </div>


                        </div>


                      ))
                    }



                  </div>


                </div>


              )}







            </div>









            {/* Bottom Meta */}



            <div className="meta-bottom">





              {/* Tags */}


              {post.tags?.length > 0 && (

                <div className="tags-section">


                  <h4>

                    Related Topics

                  </h4>



                  <div className="tags">


                    {
                      post.tags.map((tag) => (


                        <Link

                          key={tag._id}

                          to={`/tag/${tag.slug}`}

                          className="tag"

                        >

                          {tag.name}


                        </Link>


                      ))
                    }


                  </div>


                </div>

              )}








              {/* Share Section */}


              <div className="share-section">


                <h4>

                  Share Article

                </h4>




                <div className="social-links">



                  <Link
                    to="#"
                    className="twitter"
                  >

                    <i className="bi bi-twitter-x"></i>

                  </Link>





                  <Link
                    to="#"
                    className="facebook"
                  >

                    <i className="bi bi-facebook"></i>

                  </Link>





                  <Link
                    to="#"
                    className="linkedin"
                  >

                    <i className="bi bi-linkedin"></i>

                  </Link>





                  <a
                    href="#"
                    className="copy-link"
                    title="Copy Link"
                    onClick={(e) => {
                      e.preventDefault();

                      navigator.clipboard.writeText(
                        window.location.href
                      );
                    }}
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>




                </div>



              </div>




            </div>







          </div>





        </article>


      </div>


    </section>
  );

}