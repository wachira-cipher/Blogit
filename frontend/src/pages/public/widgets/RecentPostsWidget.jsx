import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecentPosts } from "../../../api/post.api";



export default function RecentPostsWidget() {


  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {


    const loadPosts = async () => {

      try {


        const res = await getRecentPosts();


        if (res.data.success) {

          setPosts(
            res.data.posts
          );

        }


      } catch (error) {

        console.log(error);

      }

      finally {

        setLoading(false);

      }


    };


    loadPosts();


  }, []);





  return (

    <div className="recent-posts-widget widget-item">


      <h3 className="widget-title">
        Recent Posts
      </h3>



      {
        loading && (

          <p>
            Loading posts...
          </p>

        )

      }



      {
        !loading && posts.length === 0 && (

          <p>
            No recent posts found
          </p>

        )

      }




      {
        posts.map((post) => (


          <div
            className="post-item"
            key={post._id}
          >


            <img

              src={
                post.images?.length

                  ?

                  `${import.meta.env.VITE_API_URL}/uploads/${post.images[0]}`

                  :

                  "/assets/blog/img/blog/blog-post-square-1.webp"

              }

              alt={post.title}

              className="flex-shrink-0"

            />



            <div>


              <h4>

                <Link
                  to={`/blog-details/${post.slug}`}
                >

                  {post.title}

                </Link>

              </h4>



              <time>

                {
                  new Date(
                    post.createdAt
                  )
                    .toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      }
                    )
                }

              </time>


            </div>


          </div>


        ))

      }



    </div>


  );


}