import PostItem from "./TagPostItem";

const API_URL = import.meta.env.VITE_API_URL;

export default function TagPosts({
  posts = []
}) {

  if (posts.length === 0) {

    return (

      <section className="category-posts section">

        <div className="container">

          <div className="alert alert-info">

            No posts found with this tag yet.

          </div>

        </div>

      </section>

    );

  }

  return (

    <section className="category-posts section">

      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        <div className="row gy-4">

          {

            posts.map((post) => {

              const image =
                post.images?.length
                  ? `${API_URL}/uploads/${post.images[0]}`
                  : "/assets/blog/img/blog/blog-post-1.webp";

              return (

                <PostItem

                  key={post._id}

                  post={post}

                  img={image}

                  category={
                    post.category?.name ||
                    "General"
                  }

                  title={post.title}

                  authorImg={
                    post.author?.avatar
                      ? `${API_URL}${post.author.avatar.startsWith("/") ? "" : "/"}${post.author.avatar}`
                      : "/assets/blog/img/person/author.jpg"
                  }

                  author={
                    post.author?.fullname ||
                    "Unknown Author"
                  }

                  date={
                    new Date(
                      post.createdAt
                    ).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )
                  }

                />

              );

            })

          }

        </div>

      </div>

    </section>

  );

}