export default function Pagination() {
  return (
    <section id="pagination-2" className="pagination-2 section">
      <div className="container">
        <div className="d-flex justify-content-center">

          <ul className="pagination-list">
            
            {/* Previous */}
            <li>
              <a href="#" aria-label="Previous">
                <i className="bi bi-chevron-left"></i>
              </a>
            </li>

            {/* Pages */}
            <li>
              <a href="#">1</a>
            </li>

            <li>
              <a href="#" className="active">2</a>
            </li>

            <li>
              <a href="#">3</a>
            </li>

            <li>
              <a href="#">4</a>
            </li>

            <li className="disabled">
              <span>...</span>
            </li>

            <li>
              <a href="#">10</a>
            </li>

            {/* Next */}
            <li>
              <a href="#" aria-label="Next">
                <i className="bi bi-chevron-right"></i>
              </a>
            </li>

          </ul>

        </div>
      </div>
    </section>
  );
}