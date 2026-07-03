import { Link } from "react-router-dom";

export default function BlogHeader() {
  return (
    <div className="page-header">
      <div className="add-item d-flex">
        <div className="page-title">
          <h4 className="fw-bold">Create Blog</h4>
          <h6>Create new blog post</h6>
        </div>
      </div>

      <ul className="table-top-head">
        <li>
          <a title="Refresh">
            <i className="ti ti-refresh"></i>
          </a>
        </li>

        <li>
          <a id="collapse-header" title="Collapse">
            <i className="ti ti-chevron-up"></i>
          </a>
        </li>
      </ul>

      <div className="page-btn mt-0">
        <Link to="/posts/all-posts" className="btn btn-secondary">
          <i className="ti ti-arrow-left me-2"></i>
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}