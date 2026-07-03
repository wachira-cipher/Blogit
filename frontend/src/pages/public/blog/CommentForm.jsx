export default function CommentForm() {
  return (
    <section className="blog-comment-form section">
      <div className="container" data-aos="fade-up">

        <h3>Share Your Thoughts</h3>

        <form>
          <div className="row gy-3">

            <div className="col-md-6">
              <input className="form-control" placeholder="Full Name" />
            </div>

            <div className="col-md-6">
              <input className="form-control" placeholder="Email" />
            </div>

            <div className="col-12">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Comment"
              ></textarea>
            </div>

            <div className="col-12">
              <button className="btn btn-primary">
                Post Comment
              </button>
            </div>

          </div>
        </form>

      </div>
    </section>
  );
}