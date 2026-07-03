import PageTitle from "./PageTitle";
import BlogContent from "./blog/BlogContent";
import BlogAuthor from "./blog/BlogAuthor";
import BlogComments from "./blog/BlogComments";
import CommentForm from "./blog/CommentForm";
import Sidebar from "./category/Sidebar";

export default function BlogDetails() {
  return (
    <>
      <br />
      <br />
      <br />
      <PageTitle
        title="Blog Details"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Category", to: "/category" },
          { label: "Blog Details", active: true }
        ]}
      />

      <div className="container">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-8">

            <section id="blog-details" className="blog-details section">
              <div className="container" data-aos="fade-up">

                <article className="article">



                  <BlogContent />

                </article>

              </div>
            </section>

            <BlogAuthor />
            <BlogComments />
            <CommentForm />

          </div>

          {/* RIGHT SIDEBAR */}
          
          <Sidebar />

        </div>
      </div>

    </>
  );
}