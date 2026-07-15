import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";

import "swiper/css";

import { useHome } from "../../context/HomeContext";


const API_URL = import.meta.env.VITE_API_URL;

const FALLBACK_IMAGE =
"/assets/blog/img/blog/blog-post-portrait-1.webp";


export default function FeaturedPostsSection() {


  const {
    featuredPosts
  } = useHome();



  return (

    <section id="featured-posts" className="featured-posts section">


      <div className="container section-title" data-aos="fade-up">

        <h2>
          Featured Posts
        </h2>

        <div>

          <span>
            Check Our
          </span>{" "}

          <span className="description-title">
            Featured Posts
          </span>

        </div>

      </div>



      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        {
          featuredPosts.length === 0 ? (

            <div className="text-center py-5">

              <h4>
                No featured posts available.
              </h4>

              <p className="text-muted">
                Check back soon for newly published articles.
              </p>

            </div>

          ) : (


          <Swiper

            modules={[Autoplay]}

            loop={featuredPosts.length > 1}

            speed={800}

            autoplay={{
              delay:5000
            }}

            spaceBetween={30}


            breakpoints={{

              320:{
                slidesPerView:1,
                spaceBetween:20
              },


              768:{
                slidesPerView:3,
                spaceBetween:20
              },


              1200:{
                slidesPerView:4,
                spaceBetween:30
              }

            }}

          >


          {
            featuredPosts.map((post)=>(


              <SwiperSlide key={post._id}>


                <div className="blog-post-item">


                  <img

                    src={
                      post.images?.[0]
                      ?
                      `${API_URL}/uploads/${post.images[0]}`
                      :
                      FALLBACK_IMAGE
                    }

                    alt={post.title}

                    onError={(e)=>{

                      e.currentTarget.onerror=null;

                      e.currentTarget.src =
                      FALLBACK_IMAGE;

                    }}

                  />



                  <div className="blog-post-content">



                    <div className="post-meta">


                      <span>

                        <i className="bi bi-person"></i>

                        {
                          post.author?.fullname ||
                          "Admin"
                        }

                      </span>



                      <span>

                        <i className="bi bi-clock"></i>

                        {
                          new Date(
                            post.createdAt
                          )
                          .toLocaleDateString(
                            "en-US",
                            {
                              month:"short",
                              day:"numeric",
                              year:"numeric"
                            }
                          )
                        }

                      </span>



                      <span>

                        <i className="bi bi-chat-dots"></i>

                        {
                          post.comments?.length || 0
                        }
                        {" "}
                        Comments

                      </span>


                    </div>




                    <h2>

                      <Link
                        to={`/blog-details/${post.slug}`}
                      >

                        {
                          post.title
                        }

                      </Link>

                    </h2>




                    <p>

                      {
                        post.description?.substring(0,120)
                        ||
                        "Read more about this article..."
                      }

                    </p>




                    <Link

                      to={`/blog-details/${post.slug}`}

                      className="read-more"

                    >

                      Read More

                      <i className="bi bi-arrow-right"></i>


                    </Link>



                  </div>


                </div>


              </SwiperSlide>


            ))
          }


          </Swiper>


          )
        }


      </div>


    </section>

  );

}