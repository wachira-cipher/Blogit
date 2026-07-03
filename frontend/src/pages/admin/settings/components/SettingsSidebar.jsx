import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SettingsSidebar() {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState({
    general: true,
    website: false,
    app: false,
    system: false,
    financial: false,
    other: false,
    email: false,
    sms: false,
  });

  const toggleMenu = (key) => {
    setOpenMenu((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="settings-sidebar" id="sidebar2">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu5" className="sidebar-menu">
          <h4 className="fw-bold fs-18 mb-2 pb-2">Settings</h4>

          <ul>
            <li className="submenu-open">

              {/* ================= GENERAL SETTINGS ================= */}
              <ul>
                <li className="submenu">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMenu("general");
                    }}
                    className={openMenu.general ? "active subdrop" : ""}
                  >
                    <i className="ti ti-settings fs-18"></i>

                    <span className="fs-14 fw-medium ms-2">
                      General Settings
                    </span>

                    <span
                      className="menu-arrow"
                      style={{
                        transform: openMenu.general
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                        transition: "0.2s",
                      }}
                    />
                  </a>

                  <ul
                    style={{
                      display: openMenu.general ? "block" : "none",
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

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}