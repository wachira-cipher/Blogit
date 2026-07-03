import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";

export default function AuthorProfile() {
  return (
    <>
<br />
<br />
<br />
      {/* Page Title */}
      <PageTitle
        title="Author Profile"
        breadcrumb={[
          {
            label: (
              <>
                <i className="bi bi-house"></i> Home
              </>
            ),
            to: "/"
          },
          {
            label: "Category",
            to: "/category"
          },
          {
            label: "Author Profile",
            active: true
          }
        ]}
      />


      {/* Author Profile */}
      <section id="author-profile" className="author-profile section">

        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          <div className="author-profile-1">


            <div className="row">


              {/* Author Info */}
              <div className="col-lg-4 mb-4 mb-lg-0">

                <div className="author-card" data-aos="fade-up">


                  <div className="author-image">

                    <img
                      src="/assets/blog/img/person/person-m-5.webp"
                      alt="Author"
                      className="img-fluid rounded"
                    />

                  </div>



                  <div className="author-info">

                    <h2>Kevin Anderson</h2>

                    <p className="designation">
                      Senior Technology Writer
                    </p>


                    <div className="author-bio">

                      Through my articles, I explore the intersection
                      of technology and society, focusing on how emerging
                      tech shapes our daily lives and future possibilities.

                    </div>



                    <div className="author-stats d-flex justify-content-between text-center my-4">


                      <div className="stat-item">

                        <h4
                          data-purecounter-start="0"
                          data-purecounter-end="147"
                          data-purecounter-duration="1"
                          className="purecounter"
                        />

                        <p>Articles</p>

                      </div>



                      <div className="stat-item">

                        <h4
                          data-purecounter-start="0"
                          data-purecounter-end="13"
                          data-purecounter-duration="1"
                          className="purecounter"
                        />

                        <p>Awards</p>

                      </div>



                      <div className="stat-item">

                        <h4
                          data-purecounter-start="0"
                          data-purecounter-end="25"
                          data-purecounter-duration="1"
                          className="purecounter"
                        />

                        <p>Followers</p>

                      </div>


                    </div>



                    <div className="social-links">


                      <a href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>

                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>

                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>

                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>


                    </div>


                  </div>


                </div>


              </div>





              {/* Content */}
              <div className="col-lg-8">


                <div
                  className="author-content"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >


                  <div className="content-header">

                    <h3>About Me</h3>

                  </div>



                  <div className="content-body">


                    <p>

                      With over a decade of experience in technology journalism,
                      I've had the privilege of witnessing and documenting the
                      rapid evolution of our digital landscape. My work spans
                      from in-depth analysis of artificial intelligence and its
                      implications to hands-on reviews of the latest consumer technology.

                    </p>




                    <div className="expertise-areas">


                      <h4>
                        Areas of Expertise
                      </h4>



                      <div className="tags">

                        <span>Artificial Intelligence</span>
                        <span>Cybersecurity</span>
                        <span>Smart Home Technology</span>
                        <span>Digital Privacy</span>
                        <span>Consumer Electronics</span>
                        <span>Future Tech Trends</span>

                      </div>


                    </div>





                    {/* Articles */}

                    <div className="featured-articles mt-5">


                      <h4>
                        Featured Articles
                      </h4>



                      <div className="row g-4">


                        <div
                          className="col-md-6"
                          data-aos="fade-up"
                          data-aos-delay="300"
                        >

                          <article className="article-card">


                            <div className="article-img">

                              <img
                                src="/assets/blog/img/blog/blog-post-10.webp"
                                alt="Article"
                                className="img-fluid"
                              />

                            </div>



                            <div className="article-details">


                              <div className="post-category">
                                Technology
                              </div>


                              <h5>

                                <Link to="/blog-details">
                                  The Future of AI in Everyday Computing
                                </Link>

                              </h5>



                              <div className="post-meta">

                                <span>
                                  <i className="bi bi-clock"></i>
                                  Jan 15, 2024
                                </span>

                                <span>
                                  <i className="bi bi-chat-dots"></i>
                                  24 Comments
                                </span>

                              </div>


                            </div>


                          </article>


                        </div>






                        <div
                          className="col-md-6"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >

                          <article className="article-card">


                            <div className="article-img">

                              <img
                                src="/assets/blog/img/blog/blog-post-6.webp"
                                alt="Article"
                                className="img-fluid"
                              />

                            </div>



                            <div className="article-details">


                              <div className="post-category">
                                Privacy
                              </div>



                              <h5>

                                <Link to="/blog-details">
                                  Understanding Digital Privacy in 2024
                                </Link>

                              </h5>



                              <div className="post-meta">

                                <span>
                                  <i className="bi bi-clock"></i>
                                  Feb 3, 2024
                                </span>

                                <span>
                                  <i className="bi bi-chat-dots"></i>
                                  18 Comments
                                </span>

                              </div>


                            </div>


                          </article>


                        </div>



                      </div>


                    </div>



                  </div>


                </div>


              </div>



            </div>


          </div>


        </div>


      </section>


    </>
  );
}