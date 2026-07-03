import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function FeaturedPostsSection() {
  return (
    <section id="featured-posts" className="featured-posts section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Posts</h2>
        <div>
          <span>Check Our</span>{" "}
          <span className="description-title">Featured Posts</span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={800}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >

          {/* Slide 1 */}
          <SwiperSlide>
            <div className="blog-post-item">
              <img src="/assets/blog/img/blog/blog-post-portrait-1.webp" alt="" />
              <div className="blog-post-content">
                <div className="post-meta">
                  <span><i className="bi bi-person"></i> Julia Parker</span>
                  <span><i className="bi bi-clock"></i> Jan 15, 2025</span>
                  <span><i className="bi bi-chat-dots"></i> 6 Comments</span>
                </div>
                <h2>
                  <a href="#">Neque porro quisquam est qui dolorem ipsum</a>
                </h2>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="blog-post-item">
              <img src="/assets/blog/img/blog/blog-post-portrait-2.webp" alt="" />
              <div className="blog-post-content">
                <div className="post-meta">
                  <span><i className="bi bi-person"></i> Mark Wilson</span>
                  <span><i className="bi bi-clock"></i> Jan 18, 2025</span>
                  <span><i className="bi bi-chat-dots"></i> 6 Comments</span>
                </div>
                <h2>
                  <a href="#">Sed ut perspiciatis unde omnis iste natus</a>
                </h2>
                <p>
                  Maecenas tempus tellus eget condimentum rhoncus sem quam
                  semper libero.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="blog-post-item">
              <img src="/assets/blog/img/blog/blog-post-portrait-3.webp" alt="" />
              <div className="blog-post-content">
                <div className="post-meta">
                  <span><i className="bi bi-person"></i> Sarah Johnson</span>
                  <span><i className="bi bi-clock"></i> Jan 21, 2025</span>
                  <span><i className="bi bi-chat-dots"></i> 15 Comments</span>
                </div>
                <h2>
                  <a href="#">At vero eos et accusamus et iusto odio</a>
                </h2>
                <p>
                  Nullam dictum felis eu pede mollis pretium integer tincidunt.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="blog-post-item">
              <img src="/assets/blog/img/blog/blog-post-portrait-4.webp" alt="" />
              <div className="blog-post-content">
                <div className="post-meta">
                  <span><i className="bi bi-person"></i> David Brown</span>
                  <span><i className="bi bi-clock"></i> Jan 24, 2025</span>
                  <span><i className="bi bi-chat-dots"></i> 10 Comments</span>
                </div>
                <h2>
                  <a href="#">Et harum quidem rerum facilis est</a>
                </h2>
                <p>
                  Donec quam felis ultricies nec pellentesque eu pretium quis sem.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  );
}