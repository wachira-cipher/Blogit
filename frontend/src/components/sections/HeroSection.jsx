import { useHome } from "../../context/HomeContext";
import PostCard from "../posts/PostCard";

const API_URL = import.meta.env.VITE_API_URL;

const FALLBACK_IMAGE =
  "/assets/blog/img/blog/blog-post-3.webp";


export default function HeroSection() {


  const {
    heroPosts
  } = useHome();

  console.log("Hero posts:", heroPosts);
  console.log("Hero count:", heroPosts.length);

  // Only display first 5 posts
  const posts = heroPosts.slice(0, 5);

  console.log("Displayed posts:", posts.length);



  return (


    <div
      className="container"
      data-aos="fade-up"
      data-aos-delay="100"
    >


      {
        posts.length === 0 ? (


          <div className="text-center py-5">


            <h4>
              Posts Unavailable.
            </h4>


            <p className="text-muted">
              Check back soon for newly published articles.
            </p>


          </div>


        ) : (



          <div className="blog-grid">



            {
              posts.map((post, index) => (



                <PostCard


                  key={post._id}



                  image={

                    post.images?.[0]

                      ?

                      `${API_URL}/uploads/${post.images[0]}`

                      :

                      FALLBACK_IMAGE

                  }



                  date={

                    new Date(post.createdAt)
                      .toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        }
                      )

                  }



                  category={

                    post.category?.name ||
                    "General"

                  }



                  title={post.title}



                  slug={post.slug}



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


        )

      }


    </div>


  );

}