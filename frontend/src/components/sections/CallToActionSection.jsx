import { Link } from "react-router-dom";


const ctaImage = "/assets/blog/img/misc/misc-1.webp";


export default function CallToAction() {


  return (

    <section
      id="call-to-action-2"
      className="call-to-action-2 section"
    >


      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >


        <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">



          <div
            className="content-left flex-grow-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >


            <span className="badge text-uppercase mb-2">
              Join Our Community
            </span>



            <h2>
              Share Ideas, Discover Stories and Grow With Blogit
            </h2>




            <p className="my-4">

              Create an account and become part of a growing
              community of writers, developers, creators and
              readers sharing knowledge every day.

            </p>




            <div className="features d-flex flex-wrap gap-3 mb-4">


              <div className="feature-item">

                <i className="bi bi-check-circle-fill"></i>

                <span>
                  Publish Your Stories
                </span>

              </div>




              <div className="feature-item">

                <i className="bi bi-check-circle-fill"></i>

                <span>
                  Connect With Readers
                </span>

              </div>




              <div className="feature-item">

                <i className="bi bi-check-circle-fill"></i>

                <span>
                  Explore Latest Trends
                </span>

              </div>


            </div>





            <div className="cta-buttons d-flex flex-wrap gap-3">



              {/* Login */}

              <a
                href="/login"
                className="btn btn-primary"
              >
                Get Started
              </a>





              {/* About */}

              <Link
                to="/about"
                className="btn btn-outline"
              >

                Learn More

              </Link>




            </div>



          </div>





          <div
            className="content-right position-relative"
            data-aos="fade-left"
            data-aos-delay="300"
          >



            <img

              src={ctaImage}

              alt="Blog Platform"

              className="img-fluid rounded-4"

            />





            <div className="floating-card">


              <div className="card-icon">

                <i className="bi bi-journal-richtext"></i>

              </div>




              <div className="card-content">


                <span className="stats-number">

                  10K+

                </span>



                <span className="stats-text">

                  Articles Published

                </span>


              </div>


            </div>




          </div>






          <div className="decoration">

            <div className="circle-1"></div>

            <div className="circle-2"></div>

          </div>




        </div>


      </div>


    </section>

  );

}