import PostCard from "../posts/PostCard";


export default function HeroSection() {

  return (

  <>

      <div 
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >


        <div className="blog-grid">


          <PostCard

            image="/assets/blog/img/blog/blog-post-3.webp"

            date="Apr. 14th, 2025"

            category="Technology"

            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"

            featured={true}

          />


          <PostCard

            image="/assets/blog/img/blog/blog-post-portrait-1.webp"

            date="Apr. 14th, 2025"

            category="Security"

            title="Sed do eiusmod tempor incididunt ut labore"

            delay={100}

          />


          <PostCard

            image="/assets/blog/img/blog/blog-post-9.webp"

            date="Apr. 14th, 2025"

            category="Career"

            title="Ut enim ad minim veniam, quis nostrud exercitation"

            delay={200}

          />


          <PostCard

            image="/assets/blog/img/blog/blog-post-7.webp"

            date="Apr. 14th, 2025"

            category="Cloud"

            title="Adipiscing elit, sed do eiusmod tempor incididunt"

            delay={300}

          />


          <PostCard

            image="/assets/blog/img/blog/blog-post-6.webp"

            date="Apr. 14th, 2025"

            category="Programming"

            title="Excepteur sint occaecat cupidatat non proident"

            delay={400}

          />


        </div>


      </div>


    </>

  );

}