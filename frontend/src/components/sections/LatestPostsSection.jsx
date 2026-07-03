import LatestPostCard from "../posts/LatestPostCard";

import blog1 from "/assets/blog/img/blog/blog-post-1.webp";
import blog2 from "/assets/blog/img/blog/blog-post-2.webp";
import blog3 from "/assets/blog/img/blog/blog-post-3.webp";
import blog4 from "/assets/blog/img/blog/blog-post-4.webp";
import blog5 from "/assets/blog/img/blog/blog-post-5.webp";
import blog6 from "/assets/blog/img/blog/blog-post-6.webp";

import author1 from "/assets/blog/img/person/person-f-12.webp";
import author2 from "/assets/blog/img/person/person-f-13.webp";
import author3 from "/assets/blog/img/person/person-m-10.webp";
import author4 from "/assets/blog/img/person/person-f-14.webp";
import author5 from "/assets/blog/img/person/person-m-11.webp";
import author6 from "/assets/blog/img/person/person-f-15.webp";

export default function LatestPosts() {
  const posts = [
    {
      image: blog1,
      category: "Politics",
      title: "Dolorum optio tempore voluptas dignissimos",
      author: "Maria Doe",
      authorImage: author1,
      date: "Jan 1, 2022",
    },
    {
      image: blog2,
      category: "Sports",
      title: "Nisi magni odit consequatur autem nulla dolorem",
      author: "Allisa Mayer",
      authorImage: author2,
      date: "Jun 5, 2022",
    },
    {
      image: blog3,
      category: "Entertainment",
      title:
        "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
      author: "Mark Dower",
      authorImage: author3,
      date: "Jun 22, 2022",
    },
    {
      image: blog4,
      category: "Sports",
      title:
        "Non rem rerum nam cum quo minus olor distincti",
      author: "Lisa Neymar",
      authorImage: author4,
      date: "Jun 30, 2022",
    },
    {
      image: blog5,
      category: "Politics",
      title:
        "Accusamus quaerat aliquam qui debitis facilis consequatur",
      author: "Denis Peterson",
      authorImage: author5,
      date: "Jan 30, 2022",
    },
    {
      image: blog6,
      category: "Entertainment",
      title:
        "Distinctio provident quibusdam numquam aperiam aut",
      author: "Mika Lendon",
      authorImage: author6,
      date: "Feb 14, 2022",
    },
  ];

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
        <div className="row gy-4">
          {posts.map((post, index) => (
            <LatestPostCard
              key={index}
              {...post}
            />
          ))}
        </div>
      </div>
    </section>
  );
}