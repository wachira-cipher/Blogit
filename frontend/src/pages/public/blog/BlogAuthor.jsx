import { Link } from "react-router-dom";

export default function BlogAuthor() {
  return (
    <section id="blog-author" className="blog-author section">

      <div className="container" data-aos="fade-up">

        <div className="author-box">

          <div className="row align-items-center">

            {/* Author Image + Socials */}
            <div className="col-lg-3 col-md-4 text-center">

              <img
                src="/assets/blog/img/person/person-f-12.webp"
                className="author-img rounded-circle"
                alt="Sarah Anderson"
                loading="lazy"
              />


              <div className="author-social-links mt-3">

                <a
                  href="https://twitter.com/#"
                  className="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>


                <a
                  href="https://linkedin.com/#"
                  className="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>


                <a
                  href="https://github.com/#"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>


                <a
                  href="https://facebook.com/#"
                  className="facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>


                <a
                  href="https://instagram.com/#"
                  className="instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>

              </div>

            </div>


            {/* Author Content */}
            <div className="col-lg-9 col-md-8">

              <div className="author-content">

                <h3 className="author-name">
                  Sarah Anderson
                </h3>


                <span className="author-title">
                  Senior Tech Writer &amp; Developer Advocate
                </span>


                <div className="author-bio mt-3">

                  Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium.
                  Passionate about creating content that bridges
                  the gap between developers and end-users.

                </div>



                <div className="author-website mt-3">


                  <Link
                    to="#"
                    className="website-link"
                  >

                    <i className="bi bi-globe"></i>

                    <span>
                      sarahanderson.dev
                    </span>

                  </Link>



                  <Link
                    to="#"
                    className="more-posts"
                  >

                    Read More from Sarah

                    <i className="bi bi-arrow-right"></i>

                  </Link>


                </div>


              </div>

            </div>


          </div>

        </div>

      </div>

    </section>
  );
}