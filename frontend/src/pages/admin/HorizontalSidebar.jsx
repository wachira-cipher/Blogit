import React from "react";

export default function HorizontalSidebar() {
  return (
  <>
      <div id="sidebar-menu-3" className="sidebar-menu">
        <div className="main-menu">
          <ul className="nav-menu">

            {/* MAIN MENU */}
            <li className="submenu">
              <a href="index-2.html">
                <i className="ti ti-layout-grid fs-16 me-2"></i>
                <span> Main Menu</span>
                <span className="menu-arrow"></span>
              </a>

              <ul>

                {/* DASHBOARD */}
                <li className="submenu">
                  <a href="javascript:void(0);" className="active subdrop">
                    <span>Dashboard</span>
                    <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li><a href="index-2.html" className="active">Admin Dashboard</a></li>
                    <li><a href="admin-dashboard.html">Admin Dashboard 2</a></li>
                    <li><a href="sales-dashboard.html">Sales Dashboard</a></li>
                  </ul>
                </li>

                {/* SUPER ADMIN */}
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <span>Super Admin</span>
                    <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li><a href="dashboard.html">Dashboard</a></li>
                    <li><a href="companies.html">Companies</a></li>
                    <li><a href="subscription.html">Subscriptions</a></li>
                    <li><a href="packages.html">Packages</a></li>
                    <li><a href="domain.html">Domain</a></li>
                    <li><a href="purchase-transaction.html">Purchase Transaction</a></li>
                  </ul>
                </li>

                {/* APPLICATION */}
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <span>Application</span>
                    <span className="menu-arrow"></span>
                  </a>

                  <ul>
                    <li><a href="chat.html">Chat</a></li>

                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">
                        Call <span className="menu-arrow inside-submenu"></span>
                      </a>
                      <ul>
                        <li><a href="video-call.html">Video Call</a></li>
                        <li><a href="audio-call.html">Audio Call</a></li>
                        <li><a href="call-history.html">Call History</a></li>
                      </ul>
                    </li>

                    <li><a href="calendar.html">Calendar</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="email.html">Email</a></li>
                    <li><a href="todo.html">To Do</a></li>
                    <li><a href="notes.html">Notes</a></li>
                    <li><a href="file-manager.html">File Manager</a></li>
                    <li><a href="projects.html">Projects</a></li>

                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">
                        Ecommerce <span className="menu-arrow inside-submenu"></span>
                      </a>
                      <ul>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="orders.html">Orders</a></li>
                        <li><a href="customers.html">Customers</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="reviews.html">Reviews</a></li>
                      </ul>
                    </li>

                    <li><a href="social-feed.html">Social Feed</a></li>
                    <li><a href="search-list.html">Search List</a></li>
                  </ul>
                </li>

                {/* LAYOUTS */}
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <span>Layouts</span>
                    <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li><a href="layout-horizontal.html">Horizontal</a></li>
                    <li><a href="layout-detached.html">Detached</a></li>
                    <li><a href="layout-two-column.html">Two Column</a></li>
                    <li><a href="layout-hovered.html">Hovered</a></li>
                    <li><a href="layout-boxed.html">Boxed</a></li>
                    <li><a href="layout-rtl.html">RTL</a></li>
                    <li><a href="layout-dark.html">Dark</a></li>
                  </ul>
                </li>

              </ul>
            </li>

            {/* INVENTORY */}
            <li className="submenu">
              <a href="javascript:void(0);">
                <i className="ti ti-brand-unity fs-16 me-2"></i>
                <span> Inventory</span>
                <span className="menu-arrow"></span>
              </a>

              <ul>
                <li><a href="product-list.html">Products</a></li>
                <li><a href="add-product.html">Create Product</a></li>
                <li><a href="expired-products.html">Expired Products</a></li>
                <li><a href="low-stocks.html">Low Stocks</a></li>
                <li><a href="category-list.html">Category</a></li>
                <li><a href="sub-categories.html">Sub Category</a></li>
                <li><a href="brand-list.html">Brands</a></li>
                <li><a href="units.html">Units</a></li>
                <li><a href="varriant-attributes.html">Variant Attributes</a></li>
                <li><a href="warranty.html">Warranties</a></li>
                <li><a href="barcode.html">Print Barcode</a></li>
                <li><a href="qrcode.html">Print QR Code</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}