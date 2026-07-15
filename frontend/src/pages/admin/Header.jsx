import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [language, setLanguage] = useState("English");

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotificationsOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="header">
      <div className="main-header">

        {/* LOGO */}
        <div className="header-left active">
          <a href="#" className="logo logo-normal">
            <img src="assets/auth/img/logo.svg" alt="logo" />
          </a>
          <a href="#" className="logo logo-white">
            <img src="assets/auth/img/logo-white.svg" alt="logo" />
          </a>
          <a href="#" className="logo-small">
            <img src="assets/auth/img/logo-small.png" alt="logo" />
          </a>
          <a href="#" className="logo-small-white">
            <img src="assets/auth/img/logo-small-white.png" alt="logo" />
          </a>
        </div>

        {/* MOBILE BTN */}
        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <span className="bar-icon">
            <span></span><span></span><span></span>
          </span>
        </a>

        {/* NAV MENU (STRICT TEMPLATE STRUCTURE) */}
        <ul className="nav user-menu">

          {/* SEARCH */}
          <li className="nav-item nav-searchinputs" ref={searchRef}>
            <div className="top-nav-search">

              <a
                href="#"
                className="responsive-search"
                onClick={(e) => {
                  e.preventDefault();
                  setSearchOpen(!searchOpen);
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
                    <h6>Recent Searches</h6>
                  </div>
                )}
              </form>

            </div>
          </li>

          {/* VIEW WEBSITE */}
          <li className="nav-item link-nav">
            <Link className="btn btn-primary btn-md d-inline-flex align-items-center" to="/">
              <i className="bi bi-world me-1"></i>
              View Website
            </Link>
          </li>

        

          {/* FULLSCREEN */}
          <li className="nav-item nav-item-box">
            <button onClick={toggleFullscreen}>
              <i className="ti ti-maximize"></i>
            </button>
          </li>

         

          {/* NOTIFICATIONS */}
          <li className="nav-item dropdown nav-item-box" ref={notifRef}>
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                setNotificationsOpen(!notificationsOpen);
              }}
            >
              <i className="ti ti-bell"></i>
            </a>
          </li>

          {/* SETTINGS */}
          <li className="nav-item nav-item-box">
            <a href="#">
              <i className="ti ti-settings"></i>
            </a>
          </li>

          {/* PROFILE */}
          <li className="nav-item dropdown has-arrow main-drop profile-nav" ref={profileRef}>
            <a
              href="#"
              className="nav-link userset"
              onClick={(e) => {
                e.preventDefault();
                setProfileOpen(!profileOpen);
              }}
            >
              <span className="user-info p-0">
                <span className="user-letter">
                  <img src="assets/auth/img/profiles/avator1.jpg" alt="profile" />
                </span>
              </span>
            </a>

            {profileOpen && (
              <div className="dropdown-menu menu-drop-user show">
                <a className="dropdown-item" href="#">My Profile</a>
                <a className="dropdown-item" href="#">Settings</a>
                <a className="dropdown-item" href="#">Logout</a>
              </div>
            )}
          </li>

        </ul>
      </div>
    </div>
  );
}