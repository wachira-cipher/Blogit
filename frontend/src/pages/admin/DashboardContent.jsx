import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

// API
import { getDashboardStats } from "../../api/post.api";

// Dashboard Components
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
import SalesStatistics from "./dashboard/SalesStatistics";

export default function AdminDashboard() {
  const { user } = useAuth();

  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalViews: 0,
    todayPosts: 0,
  });

  useEffect(() => {
    const preloader = document.getElementById("global-loader");
    if (preloader) preloader.remove();

    const fetchStats = async () => {
      try {
        const { data } = await getDashboardStats();

        if (data.success) {
          setStats(data.stats);
        }
      } catch (error) {
        console.error("Dashboard stats error:", error);
      }
    };

    fetchStats();
  }, []);

  // =========================
  // DISPLAY NAME
  // username -> first name -> role -> User
  // =========================
  const displayName =
    user?.username?.trim() ||
    user?.fullname?.trim()?.split(" ")[0] ||
    (user?.role
      ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
      : "User");

  return (
    <>
      {/* HEADER */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-2">
        <div className="mb-3">
          <h1 className="mb-1">Welcome, {displayName}</h1>

          <p className="fw-medium">
            You created{" "}
            <span className="text-primary fw-bold">
              {stats.todayPosts}
            </span>{" "}
            blog{stats.todayPosts !== 1 ? "s" : ""} today
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

      {/* DASHBOARD SECTIONS */}
      <StatCards stats={stats} />

      <RevenueCards stats={stats} />
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