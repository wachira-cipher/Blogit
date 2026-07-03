import { useEffect } from "react";

export default function TwoColSidebar() {
  useEffect(() => {
    // Optional: any sidebar init logic can go here
  }, []);

  return (
<>
      <div className="sidebar sidebar-twocol">
        {/* LEFT MINI SIDEBAR */}
        <div className="twocol-mini">
          <div className="sidebar-left slimscroll">
            <div
              className="nav flex-column align-items-center nav-pills"
              id="sidebar-tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                href="#"
                className="nav-link active"
                title="Dashboard"
                data-bs-toggle="tab"
                data-bs-target="#dashboard"
              >
                <i className="ti ti-smart-home"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Super Admin"
                data-bs-toggle="tab"
                data-bs-target="#super-admin"
              >
                <i className="ti ti-user-star"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Apps"
                data-bs-toggle="tab"
                data-bs-target="#application"
              >
                <i className="ti ti-layout-grid-add"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Layout"
                data-bs-toggle="tab"
                data-bs-target="#layout"
              >
                <i className="ti ti-layout-board-split"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Inventory"
                data-bs-toggle="tab"
                data-bs-target="#inventory"
              >
                <i className="ti ti-table-plus"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Stock"
                data-bs-toggle="tab"
                data-bs-target="#stock"
              >
                <i className="ti ti-stack-3"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Sales"
                data-bs-toggle="tab"
                data-bs-target="#sales"
              >
                <i className="ti ti-device-laptop"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Finance"
                data-bs-toggle="tab"
                data-bs-target="#finance"
              >
                <i className="ti ti-shopping-cart-dollar"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="HRM"
                data-bs-toggle="tab"
                data-bs-target="#hrm"
              >
                <i className="ti ti-cash"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Reports"
                data-bs-toggle="tab"
                data-bs-target="#reports"
              >
                <i className="ti ti-license"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Pages"
                data-bs-toggle="tab"
                data-bs-target="#pages"
              >
                <i className="ti ti-page-break"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Settings"
                data-bs-toggle="tab"
                data-bs-target="#settings"
              >
                <i className="ti ti-lock-check"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="UI Elements"
                data-bs-toggle="tab"
                data-bs-target="#ui-elements"
              >
                <i className="ti ti-ux-circle"></i>
              </a>

              <a
                href="#"
                className="nav-link"
                title="Extras"
                data-bs-toggle="tab"
                data-bs-target="#extras"
              >
                <i className="ti ti-vector-triangle"></i>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sidebar-right">
          {/* Logo */}
          <div className="sidebar-logo">
            <a href="index-2.html" className="logo logo-normal">
              <img src="assets/img/logo.svg" alt="Logo" />
            </a>

            <a href="index-2.html" className="logo logo-white">
              <img src="assets/img/logo-white.svg" alt="Logo" />
            </a>

            <a href="index-2.html" className="logo-small">
              <img src="assets/img/logo-small.png" alt="Logo" />
            </a>

            <a href="index-2.html" className="logo-small-white">
              <img src="assets/img/logo-small-white.png" alt="Logo" />
            </a>
          </div>

          {/* User Info */}
          <div className="sidebar-scroll">
            <div className="text-center rounded bg-light p-3 mb-3 border">
              <div className="avatar avatar-lg online mb-3">
                <img
                  src="assets/img/customer/customer15.jpg"
                  alt="User"
                  className="img-fluid rounded-circle"
                />
              </div>
              <h6 className="fs-14 fw-bold mb-1">Adrian Herman</h6>
              <p className="fs-12 mb-0">System Admin</p>
            </div>

            {/* TAB CONTENT */}
            <div className="tab-content" id="v-pills-tabContent">
              {/* DASHBOARD */}
              <div className="tab-pane fade show active" id="dashboard">
                <ul>
                  <li className="menu-title">
                    <span>MAIN</span>
                  </li>
                  <li>
                    <a href="index-2.html" className="active">
                      Admin Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="admin-dashboard.html">Admin Dashboard 2</a>
                  </li>
                  <li>
                    <a href="sales-dashboard.html">Sales Dashboard</a>
                  </li>
                </ul>
              </div>

              {/* SUPER ADMIN */}
              <div className="tab-pane fade" id="super-admin">
                <ul>
                  <li className="menu-title">
                    <span>SUPER ADMIN</span>
                  </li>
                  <li><a href="dashboard.html">Dashboard</a></li>
                  <li><a href="companies.html">Companies</a></li>
                  <li><a href="subscription.html">Subscriptions</a></li>
                  <li><a href="packages.html">Packages</a></li>
                  <li><a href="domain.html">Domain</a></li>
                  <li><a href="purchase-transaction.html">Purchase Transaction</a></li>
                </ul>
              </div>

              {/* APPLICATION */}
              <div className="tab-pane fade" id="application">
                <ul>
                  <li><a href="chat.html">Chat</a></li>
                  <li><a href="calendar.html">Calendar</a></li>
                  <li><a href="contacts.html">Contacts</a></li>
                  <li><a href="email.html">Email</a></li>
                  <li><a href="todo.html">To Do</a></li>
                  <li><a href="notes.html">Notes</a></li>
                  <li><a href="file-manager.html">File Manager</a></li>
                  <li><a href="projects.html">Projects</a></li>
                </ul>
              </div>

              {/* You can continue same pattern for: layout, inventory, stock, sales, finance, hrm, reports, pages, settings, ui-elements, extras */}
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}