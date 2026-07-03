import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const [store, setStore] = useState({
    name: "Freshmart",
    logo: "assets/auth/img/store/store-01.png",
  });

  const searchRef = useRef(null);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="header">
      <div className="main-header">

        {/* Logo */}
        <div className="header-left active">
          <a href="index-2.html" className="logo logo-normal">
            <img src="assets/auth/img/logo.svg" alt="Img" />
          </a>
          <a href="index-2.html" className="logo logo-white">
            <img src="assets/auth/img/logo-white.svg" alt="Img" />
          </a>
          <a href="index-2.html" className="logo-small">
            <img src="assets/auth/img/logo-small.png" alt="Img" />
          </a>
          <a href="index-2.html" className="logo-small-white">
            <img src="assets/auth/img/logo-small-white.png" alt="Img" />
          </a>
        </div>

        {/* Mobile button */}
        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <span className="bar-icon">
            <span></span><span></span><span></span>
          </span>
        </a>

        <ul className="nav user-menu">

          {/* SEARCH */}
          <li className="nav-item nav-searchinputs" ref={searchRef}>
            <div className="top-nav-search">

              <a
                href="#"
                className="responsive-search"
                onClick={(e) => {
                  e.preventDefault();
                  setSearchOpen((p) => !p);
                }}
              >
                <i className="fa fa-search"></i>
              </a>

              <form className="dropdown">
                <div className="searchinputs input-group">
                  <input type="text" placeholder="Search" />

                  <div className="search-addon">
                    <span><i className="ti ti-search"></i></span>
                  </div>
                </div>

                {searchOpen && (
                  <div className="dropdown-menu search-dropdown show">
                    <div className="search-info">
                      <h6>Recent Searches</h6>
                      <ul className="search-tags">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Applications</a></li>
                      </ul>
                    </div>
                  </div>
                )}
              </form>

            </div>
          </li>

          {/* ADD NEW (kept Bootstrap dropdown structure unchanged) */}
          <li className="nav-item dropdown link-nav">
            <a className="btn btn-primary btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
              <i className="ti ti-circle-plus me-1"></i>Add New
            </a>

            <div className="dropdown-menu dropdown-xl dropdown-menu-center">
              <div className="row g-2">
                <div className="col-md-2"><a className="link-item">Category</a></div>
                <div className="col-md-2"><a className="link-item">Product</a></div>
                <div className="col-md-2"><a className="link-item">Purchase</a></div>
                <div className="col-md-2"><a className="link-item">Sale</a></div>
              </div>
            </div>
          </li>

          {/* LANGUAGE */}
          <li className="nav-item dropdown has-arrow flag-nav nav-item-box">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              {language}
            </a>

            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" onClick={() => setLanguage("English")}>
                English
              </button>
              <button className="dropdown-item" onClick={() => setLanguage("Arabic")}>
                Arabic
              </button>
            </div>
          </li>

          {/* FULLSCREEN */}
          <li className="nav-item nav-item-box">
            <button onClick={toggleFullscreen}>
              <i className="ti ti-maximize"></i>
            </button>
          </li>

          {/* EMAIL */}
          <li className="nav-item nav-item-box">
            <a href="email.html">
              <i className="ti ti-mail"></i>
              <span className="badge rounded-pill">1</span>
            </a>
          </li>

          {/* NOTIFICATIONS */}
          <li className="nav-item dropdown nav-item-box" ref={notifRef}>
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                setNotificationsOpen((p) => !p);
              }}
            >
              <i className="ti ti-bell"></i>
            </a>

            {notificationsOpen && (
              <div className="dropdown-menu notifications show">
                <div className="topnav-dropdown-header">
                  <h5 className="notification-title">Notifications</h5>
                </div>

                <ul className="notification-list">
                  <li>Order confirmed</li>
                  <li>Payment received</li>
                </ul>
              </div>
            )}
          </li>

          {/* SETTINGS */}
          <li className="nav-item nav-item-box">
            <a href="general-settings.html">
              <i className="ti ti-settings"></i>
            </a>
          </li>

          {/* PROFILE (FIXED PROPER REACT DROPDOWN) */}
          <li
            className="nav-item dropdown has-arrow main-drop profile-nav"
            ref={profileRef}
          >
            <a
              href="#"
              className="nav-link userset"
              onClick={(e) => {
                e.preventDefault();
                setProfileOpen((p) => !p);
              }}
            >
              <span className="user-info p-0">
                <span className="user-letter">
                  <img
                    src="assets/auth/img/profiles/avator1.jpg"
                    alt="Img"
                    className="img-fluid"
                  />
                </span>
              </span>
            </a>

            {profileOpen && (
              <div className="dropdown-menu menu-drop-user show">
                <div className="profileset d-flex align-items-center">
                  <span className="user-img me-2">
                    <img src="assets/auth/img/profiles/avator1.jpg" alt="Img" />
                  </span>
                  <div>
                    <h6 className="fw-medium">John Smilga</h6>
                    <p>Admin</p>
                  </div>
                </div>

                <a className="dropdown-item" href="profile.html">
                  My Profile
                </a>
                <a className="dropdown-item" href="sales-report.html">
                  Reports
                </a>
                <a className="dropdown-item" href="general-settings.html">
                  Settings
                </a>

                <hr className="my-2" />

                <a className="dropdown-item logout" href="signin.html">
                  Logout
                </a>
              </div>
            )}
          </li>

        </ul>
      </div>
    </div>
  );
}