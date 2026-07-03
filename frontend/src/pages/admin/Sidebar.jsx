import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";


export default function Sidebar() {
  const { logout } = useAuth();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target)
      ) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>

      {/* Logo */}
      <div className="sidebar-logo active">
        <Link to="/" className="logo logo-normal">
          <h1 className="sitename">Blogit<span>.</span></h1>

        </Link>

        <Link to="/" className="logo logo-white">

        </Link>

        <Link to="/" className="logo-small">
          <h1 className="sitename">Blogit</h1>
        </Link>

        <Link to="/" className="logo-small-white">
          <h1 className="sitename">Blogit</h1>
        </Link>

        <a id="toggle_btn" href="#!">
          <i data-feather="chevrons-left" className="feather-16"></i>
        </a>
      </div>

      {/* Profile */}
      <div className="modern-profile p-3 pb-0">
        <div className="text-center rounded bg-light p-3 mb-4 user-profile">
          <div className="avatar avatar-lg online mb-3">
            <img
              src="/assets/auth/img/customer/customer15.jpg"
              alt="Img"
              className="img-fluid rounded-circle"
            />
          </div>
          <h6 className="fs-14 fw-bold mb-1">Adrian Herman</h6>
          <p className="fs-12 mb-0">System Admin</p>
        </div>

        <div className="sidebar-nav mb-3">
          <ul
            className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent"
            role="tablist"
          >
            <li className="nav-item">
              <a className="nav-link active border-0" href="#!">Menu</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link border-0" to="/chat">Chats</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link border-0" to="/email">Inbox</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Icons */}
      <div className="sidebar-header p-3 pb-0 pt-2">
        <div className="text-center rounded bg-light p-2 mb-4 sidebar-profile d-flex align-items-center">
          <div className="avatar avatar-md online">
            <img
              src="/assets/auth/img/customer/customer15.jpg"
              alt="Img"
              className="img-fluid rounded-circle"
            />
          </div>

          <div className="text-start sidebar-profile-info ms-2">
            <h6 className="fs-14 fw-bold mb-1">Adrian Herman</h6>
            <p className="fs-12">System Admin</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between menu-item mb-3">

          <Link to="/" className="btn btn-sm btn-icon bg-light">
            <i className="ti ti-layout-grid-remove"></i>
          </Link>

          <Link to="/chat" className="btn btn-sm btn-icon bg-light">
            <i className="ti ti-brand-hipchat"></i>
          </Link>

          <Link to="/email" className="btn btn-sm btn-icon bg-light position-relative">
            <i className="ti ti-message"></i>
          </Link>

          <Link to="/activities" className="btn btn-sm btn-icon bg-light position-relative">
            <i className="ti ti-bell"></i>
            <span className="notification-status-dot"></span>
          </Link>

          <Link to="/settings" className="btn btn-sm btn-icon bg-light">
            <i className="ti ti-settings"></i>
          </Link>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">

          <ul>

            {/* MAIN */}
            <li className="submenu-open">


              <ul>

                {/* Dashboard */}
                <li className="submenu">
                  <Link to="/dashboard" className="subdrop active">
                    <i className="ti ti-layout-grid fs-16 me-2"></i>
                    <span>Dashboard</span>

                  </Link>


                </li>



              </ul>
            </li>

            {/* INVENTORY */}
            <li className="submenu-open">
              <h6 className="submenu-hdr">Blog</h6>
              <ul>
                <li><Link to="/posts/all-posts"><i className="ti ti-box me-2"></i>Posts</Link></li>
                <li><Link to="/posts/create-post"><i className="ti ti-plus me-2"></i>Create Post</Link></li>
                <li><Link to="category/all-categories"><i className="ti ti-list-details fs-16 me-2"></i>Category</Link></li>
                <li><Link to="tags/all-tags"><i className="ti ti-tag me-2"></i>Tags</Link></li>
              </ul>
            </li>


            {/* SETTINGS */}
            <li className="submenu-open">
              <h6 className="submenu-hdr">Settings</h6>

              <ul>
                <li
                  ref={submenuRef}
                  className={`submenu ${settingsOpen ? "subdrop" : ""}`}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSettingsOpen((prev) => !prev);
                    }}
                  >
                    <i className="ti ti-settings me-2"></i>

                    <span>General Settings</span>

                    <span className={`menu-arrow ${settingsOpen ? "rotate" : ""}`}></span>
                  </a>

                  <ul
                    style={{
                      display: settingsOpen ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/settings/general-settings"
                        className={
                          location.pathname === "/settings/general-settings"
                            ? "active"
                            : ""
                        }
                      >
                        Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/settings/security-settings"
                        className={
                          location.pathname === "/settings/security-settings"
                            ? "active"
                            : ""
                        }
                      >
                        Security
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}
                    className="d-flex align-items-center"
                  >
                    <i className="ti ti-logout me-2"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </li>

          </ul>

        </div>
      </div>

    </>
  );
}