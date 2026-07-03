import React, { useEffect } from "react";
import StatCards from "./dashboard/StatCards";
import RevenueCards from "./dashboard/RevenueCards";
import SalesChartSection from "./dashboard/SalesChartSection";
import TopProducts from "./dashboard/TopProducts";
import LowStock from "./dashboard/LowStock";
import RecentSales from "./dashboard/RecentSales";
import RecentTransactions from "./dashboard/RecentTransactions";
import TopCustomers from "./dashboard/TopCustomers";
import TopCategories from "./dashboard/TopCategories";
import OrderStatistics from "./dashboard/OrderStatistics";
import Footer from "./Footer";
import SalesStatistics from "./dashboard/SalesStatistics";

export default function AdminDashboard() {
  useEffect(() => {
    const preloader = document.getElementById("global-loader");
    if (preloader) preloader.remove();
  }, []);

  return (
    <>


      {/* HEADER */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-2">
        <div className="mb-3">
          <h1 className="mb-1">Welcome, Admin</h1>
          <p className="fw-medium">
            You have <span className="text-primary fw-bold">200+</span> Orders Today
          </p>
        </div>

        <div className="input-icon-start position-relative mb-3">
          <span className="input-icon-addon fs-16 text-gray-9">
            <i className="ti ti-calendar"></i>
          </span>
          <input
            type="text"
            className="form-control date-range bookingrange"
            placeholder="Search Product"
          />
        </div>
      </div>

      {/* ALERT */}
      <div className="alert bg-orange-transparent alert-dismissible fade show mb-4">
        <div>
          <span><i className="ti ti-info-circle fs-14 text-orange me-2"></i></span>
          <span>Your Product </span>
          <span className="text-orange fw-semibold">
            Apple iPhone 15 is running Low
          </span>
        </div>
        <button className="btn-close" data-bs-dismiss="alert"></button>
      </div>

      {/* SECTIONS */}
      <StatCards />
      <RevenueCards />
      <SalesChartSection />

      <div className="row">
        <TopProducts />
        <LowStock />
        <RecentSales />
      </div>

      <div className="row">

        <SalesStatistics />

        <RecentTransactions />

      </div>

      <div className="row">
        <TopCustomers />
        <TopCategories />
        <OrderStatistics />
      </div>


    </>
  );
}