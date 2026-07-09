import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserMenu from "./UserMenu";
import { getCategories } from "../../api/category.api";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const loadCategories = async () => {
    try {
      const res = await getCategories();

      console.log("Categories API:", res.data);

      setCategories(res.data);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Initial load
    loadCategories();

    // Refresh every minute
    const interval = setInterval(loadCategories, 60000);

    return () => clearInterval(interval);
  }, []);
  return (
    <header id="header" className="header position-relative">
      <div className="container-fluid container-xl position-relative">

        {/* Top Row */}
        <div className="top-row d-flex align-items-center justify-content-between">

          {/* Logo */}
          <Link to="/" className="logo d-flex align-items-end">
            <h1 className="sitename">Blogit</h1>
            <span>.</span>
          </Link>

          {/* Right side */}
          <div className="d-flex align-items-center">

            {/* Social links */}
            <div className="social-links">
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div className="social-links">
              <a href="#" className="facebook">

              </a>
              <a href="#" className="twitter">

              </a>
              <a href="#" className="instagram">

              </a>
            </div>
            {/* Auth links */}
            <div className="social-links">
              <UserMenu />
            </div>

            {/* Search form */}
            <form className="search-form ms-4">
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
              />
              <button type="submit" className="btn">
                <i className="bi bi-search"></i>
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-wrap">
        <div className="container d-flex justify-content-center position-relative">

          <nav id="navmenu" className="navmenu">
            <ul>

              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/about">About</Link></li>

              <li><Link to="/blog-details">Blog Details</Link></li>


              {/* Pages Dropdown */}
              <li className={`dropdown ${categoriesOpen ? "dropdown-active" : ""}`}>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCategoriesOpen(prev => !prev);
                  }}
                >

                  <span>Categories</span>

                  <i
                    className={`bi bi-chevron-down toggle-dropdown ${categoriesOpen ? "rotate-180" : ""
                      }`}
                  ></i>

                </a>


                <ul>

                  {categories.length > 0 ? (

                    categories.map((category) => (

                      <li key={category._id}>

                        <Link
                          to={`/category/${category.slug}`}
                          onClick={() => setCategoriesOpen(false)}
                        >
                          {category.name}
                        </Link>

                      </li>

                    ))

                  ) : (

                    <li>
                      <span className="dropdown-empty">
                        No categories found
                      </span>
                    </li>

                  )}

                </ul>

              </li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

        </div>
      </div>
    </header>
  );
}