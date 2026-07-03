import { Link } from "react-router-dom";

export default function PageTitle({
  title = "Page Title",
  subtitle = "",
  breadcrumbs = [],
}) {
  return (
    <div className="page-title position-relative">

      {/* BREADCRUMBS */}
      <div className="breadcrumbs">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">

            {/* Always include Home */}
            <li className="breadcrumb-item">
              <Link to="/">
                <i className="bi bi-house"></i> Home
              </Link>
            </li>

            {/* Dynamic breadcrumbs */}
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li
                  key={index}
                  className={`breadcrumb-item ${isLast ? "active current" : ""}`}
                >
                  {isLast ? (
                    item.label
                  ) : (
                    <Link to={item.path}>{item.label}</Link>
                  )}
                </li>
              );
            })}

          </ol>
        </nav>
      </div>

      {/* TITLE */}
      <div className="title-wrapper">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

    </div>
  );
}