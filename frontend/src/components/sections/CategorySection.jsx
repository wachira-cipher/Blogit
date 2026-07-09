import FeaturedPostCard from "../posts/FeaturedPostCard";
import ListPostCard from "../posts/ListPostCard";

import { useHome } from "../../context/HomeContext";


export default function CategorySection() {


  const {
    latestPosts
  } = useHome();



  // First 3 posts for featured cards
  const featuredPosts = latestPosts.slice(0,3);


  // Remaining posts for list cards
  const listPosts = latestPosts.slice(3,9);



  return (

    <section id="category-section" className="category-section section">


      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">

        <h2>
          Category Section
        </h2>

        <div>

          <span className="description-title">
            Category Section
          </span>

        </div>

      </div>




      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >




        {/* Featured Posts */}
        <div className="row gy-4 mb-4">


        {
          featuredPosts.map((post)=> (

            <div
              className="col-lg-4"
              key={post._id}
            >


              <FeaturedPostCard


                image={
                  post.images?.length
                  ?
                  `http://localhost:5000/uploads/${post.images[0]}`
                  :
                  "/assets/blog/img/blog/blog-post-6.webp"
                }



                category={
                  post.category?.name || "General"
                }



                authorImg={
                  "/assets/blog/img/person/person-f-13.webp"
                }



                author={
                  post.author?.fullname || "Admin"
                }



                date={

                  new Date(post.createdAt)
                  .toLocaleDateString(
                    "en-US",
                    {
                      day:"numeric",
                      month:"long",
                      year:"numeric"
                    }
                  )

                }



                title={
                  post.title
                }



                slug={
                  post.slug
                }



              />


            </div>


          ))
        }



        </div>





        {/* List Posts */}

        <div className="row">



        {
          listPosts.map((post)=>(


            <div

              className="col-xl-4 col-lg-6"

              key={post._id}

            >



              <ListPostCard



                image={

                  post.images?.length

                  ?

                  `http://localhost:5000/uploads/${post.images[0]}`

                  :

                  "/assets/blog/img/blog/blog-post-6.webp"

                }



                category={

                  post.category?.name || "General"

                }



                title={

                  post.title

                }



                readTime={

                  "2 mins read"

                }



                date={


                  new Date(post.createdAt)

                  .toLocaleDateString(

                    "en-US",

                    {

                      day:"numeric",

                      month:"long",

                      year:"numeric"

                    }

                  )


                }



                slug={

                  post.slug

                }



              />



            </div>



          ))
        }



        </div>



      </div>


    </section>

  );

}