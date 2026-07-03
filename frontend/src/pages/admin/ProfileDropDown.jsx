import React, { useState, useRef, useEffect } from "react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li
      ref={ref}
      className="nav-item dropdown has-arrow main-drop profile-nav"
    >
      {/* TRIGGER */}
      <a
        href="#"
        className="nav-link userset"
        onClick={(e) => {
          e.preventDefault();
          setOpen((prev) => !prev);
        }}
      >
        <span className="user-info p-0">
          <span className="user-letter">
            <img
              src="assets/img/profiles/avator1.jpg"
              alt="Img"
              className="img-fluid"
            />
          </span>
        </span>
      </a>

      {/* DROPDOWN */}
      <div className={`dropdown-menu menu-drop-user ${open ? "show" : ""}`}>
        <div className="profileset d-flex align-items-center">
          <span className="user-img me-2">
            <img src="assets/img/profiles/avator1.jpg" alt="Img" />
          </span>

          <div>
            <h6 className="fw-medium">John Smilga</h6>
            <p>Admin</p>
          </div>
        </div>

        <a className="dropdown-item" href="profile.html">
          <i className="ti ti-user-circle me-2"></i>
          My Profile
        </a>

        <a className="dropdown-item" href="sales-report.html">
          <i className="ti ti-file-text me-2"></i>
          Reports
        </a>

        <a className="dropdown-item" href="general-settings.html">
          <i className="ti ti-settings-2 me-2"></i>
          Settings
        </a>

        <hr className="my-2" />

        <a className="dropdown-item logout" href="signin.html">
          <i className="ti ti-logout me-2"></i>
          Logout
        </a>
      </div>
    </li>
  );
}