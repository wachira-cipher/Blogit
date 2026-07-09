import { useHome } from "../../context/HomeContext";
import PostCard from "../posts/PostCard";


export default function HeroSection() {


  const {
    heroPosts
  } = useHome();



  return (

    <div
      className="container"
      data-aos="fade-up"
      data-aos-delay="100"
    >


      <div className="blog-grid">


        {
          heroPosts.map((post,index)=>(


            <PostCard

              key={post._id}


              image={
                post.image
                ? `http://localhost:5000/${post.image}`
                : "/assets/blog/img/blog/blog-post-3.webp"
              }


              date={
                new Date(post.createdAt)
                .toLocaleDateString(
                  "en-US",
                  {
                    month:"short",
                    day:"numeric",
                    year:"numeric"
                  }
                )
              }


              category={
                post.category?.name || "General"
              }


              title={
                post.title
              }


              slug={
                post.slug
              }


              featured={
                index === 0
              }


              delay={
                index * 100
              }


            />


          ))
        }


      </div>


    </div>

  );

}