export default function BlogFilters() {
  return (
    <>
      {/* product list */}
      <div className="card">
        <div className="card-body p-3">

          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">

            {/* SEARCH (First) */}
            <div className="position-relative input-icon me-3">
              <span className="input-icon-addon">
                <i className="ti ti-search"></i>
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>

            {/* FILTERS (Second) */}
            <div className="d-flex align-items-center flex-wrap row-gap-3">

              {/* Status Filter */}
              <div className="dropdown me-3">
                <a
                  href="#"
                  className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  Select Status
                </a>

                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <a className="dropdown-item rounded-1" href="#">
                      Active
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="#">
                      Inactive
                    </a>
                  </li>
                </ul>
              </div>

              {/* Sort Filter */}
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  Sort By : Last 7 Days
                </a>

                <ul className="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <a className="dropdown-item rounded-1" href="#">
                      Recently Added
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="#">
                      Ascending
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded-1" href="#">
                      Descending
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}