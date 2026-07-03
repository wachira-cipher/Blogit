import FeaturedPostCard from "../posts/FeaturedPostCard";
import ListPostCard from "../posts/ListPostCard";

export default function CategorySection() {
  return (
    <section id="category-section" className="category-section section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Category Section</h2>
        <div>
          <span className="description-title">Category Section</span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        {/* Featured Posts */}
        <div className="row gy-4 mb-4">

          <div className="col-lg-4">
            <FeaturedPostCard
              image="/assets/blog/img/blog/blog-post-6.webp"
              category="Health"
              authorImg="/assets/blog/img/person/person-f-13.webp"
              author="William G."
              date="28 April 2024"
              title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
            />
          </div>

          <div className="col-lg-4">
            <FeaturedPostCard
              image="/assets/blog/img/blog/blog-post-7.webp"
              category="Education"
              authorImg="/assets/blog/img/person/person-m-10.webp"
              author="Emma D."
              date="30 May 2024"
              title="Ut enim ad minima veniam, quis nostrum exercitationem ullam"
            />
          </div>

          <div className="col-lg-4">
            <FeaturedPostCard
              image="/assets/blog/img/blog/blog-post-5.webp"
              category="Gaming"
              authorImg="/assets/blog/img/person/person-f-14.webp"
              author="James F."
              date="3 June 2024"
              title="Nemo enim ipsam voluptatem quia voluptas sit aspernatur"
            />
          </div>

        </div>

        {/* List Posts */}
        <div className="row">

          <div className="col-xl-4 col-lg-6">
            <ListPostCard
              image="/assets/blog/img/blog/blog-post-6.webp"
              category="Gaming"
              title="Quis autem vel eum iure reprehenderit"
              readTime="2 mins read"
              date="6 April 2026"
            />
          </div>

          <div className="col-xl-4 col-lg-6">
            <ListPostCard
              image="/assets/blog/img/blog/blog-post-9.webp"
              category="Gaming"
              title="At vero eos et accusamus et iusto"
              readTime="2 mins read"
              date="12 June 2026"
            />
          </div>

          <div className="col-xl-4 col-lg-6">
            <ListPostCard
              image="/assets/blog/img/blog/blog-post-10.webp"
              category="Gaming"
              title="Et harum quidem rerum facilis est"
              readTime="2 mins read"
              date="9 May 2026"
            />
          </div>

          <div className="col-xl-4 col-lg-6">
            <ListPostCard
              image="/assets/blog/img/blog/blog-post-2.webp"
              category="Gaming"
              title="Nam libero tempore"
              readTime="2 mins read"
              date="15 July 2026"
            />
          </div>

          <div className="col-xl-4 col-lg-6">
            <ListPostCard
              image="/assets/blog/img/blog/blog-post-1.webp"
              category="Gaming"
              title="Temporibus autem quibusdam"
              readTime="2 mins read"
              date="18 August 2026"
            />
          </div>

          <div className="col-xl-4 col-lg-6">
            <ListPostCard
              image="/assets/blog/img/blog/blog-post-3.webp"
              category="Gaming"
              title="Itaque earum rerum hic tenetur"
              readTime="2 mins read"
              date="21 September 2026"
            />
          </div>

        </div>

      </div>
    </section>
  );
}