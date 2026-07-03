import PostItem from "./PostItem";

export default function CategoryPosts() {
  return (
    <section className="category-postst section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <PostItem
            img="assets/blog/img/blog/blog-post-1.webp"
            category="Politics"
            title="Dolorum optio tempore voluptas dignissimos"
            authorImg="assets/blog/img/person/person-f-12.webp"
            author="Maria Doe"
            date="Jan 1, 2022"
          />

          <PostItem
            img="assets/blog/img/blog/blog-post-2.webp"
            category="Sports"
            title="Nisi magni odit consequatur autem nulla dolorem"
            authorImg="assets/blog/img/person/person-f-13.webp"
            author="Allisa Mayer"
            date="Jun 5, 2022"
          />

          <PostItem
            img="assets/blog/img/blog/blog-post-3.webp"
            category="Entertainment"
            title="Possimus soluta ut id suscipit ea ut in quo quia"
            authorImg="assets/blog/img/person/person-m-10.webp"
            author="Mark Dower"
            date="Jun 22, 2022"
          />

        </div>

      </div>

    </section>
  );
}