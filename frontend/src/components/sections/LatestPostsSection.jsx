import { useHome } from "../../context/HomeContext";
import LatestPostCard from "../posts/LatestPostCard";

export default function LatestPostsSection() {

  const { latestPosts } = useHome();

  return (
    <section
      id="latest-posts"
      className="latest-posts section"
    >

      <div
        className="container section-title"
        data-aos="fade-up"
      >

        <h2>Latest Posts</h2>

        <div>
          <span>Check Our</span>{" "}
          <span className="description-title">
            Latest Posts
          </span>
        </div>

      </div>

      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        {
          latestPosts.length === 0 ? (

            <div className="text-center py-5">

              <h4>No latest posts available.</h4>

              <p className="text-muted">
                Check back soon for newly published articles.
              </p>

            </div>

          ) : (

            <div className="row gy-4">

              {latestPosts.map((post) => (

                <LatestPostCard
                  key={post._id}
                  post={post}
                />

              ))}

            </div>

          )
        }

      </div>

    </section>
  );
}