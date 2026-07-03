import React from "react";
import Chart from "react-apexcharts";

export default function SalesChartsSection({ stats }) {

  // =========================
  // AREA CHART (BLOG ACTIVITY)
  // =========================
  const salesOptions = {
    chart: {
      type: "area",
      height: 300,
      toolbar: { show: false },
    },
    stroke: { curve: "smooth" },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
      ],
    },
    colors: ["#7367F0", "#28C76F"],
    fill: { opacity: 0.3 },
  };

  const salesSeries = [
    {
      name: "Posts Created",
      data: stats?.chart?.postsOverTime?.length
        ? stats.chart.postsOverTime
        : [2, 4, 3, 5, 6, 4, 7],
    },
    {
      name: "Views",
      data: stats?.chart?.viewsOverTime?.length
        ? stats.chart.viewsOverTime
        : [20, 40, 35, 60, 80, 55, 90],
    },
  ];

  // =========================
  // DONUT CHART (PUBLISHED vs DRAFT)
  // =========================
  const customerOptions = {
    chart: { type: "donut" },
    labels: ["Published", "Draft"],
    legend: { show: false },
    colors: ["#FF9F43", "#00CFE8"],
  };

  const customerSeries = [
    stats?.breakdown?.published ?? 0,
    stats?.breakdown?.draft ?? 0,
  ];

  // =========================
  // INFO CARDS (BLOG SYSTEM)
  // =========================
  const infoCards = [
    {
      title: "Total Posts",
      value: stats?.totalBlogs ?? 0,
      icon: "ti-notebook",
      color: "info",
    },
    {
      title: "Total Views",
      value: stats?.totalViews ?? 0,
      icon: "ti-eye",
      color: "orange",
    },
    {
      title: "Today Posts",
      value: stats?.todayPosts ?? 0,
      icon: "ti-calendar",
      color: "teal",
    },
  ];

  return (
    <div className="row">

      {/* ========================= */}
      {/* BLOG ACTIVITY CHART */}
      {/* ========================= */}
      <div className="col-xxl-8 col-xl-7 col-sm-12 col-12 d-flex">
        <div className="card flex-fill">

          <div className="card-header d-flex justify-content-between align-items-center">

            <div className="d-inline-flex align-items-center">
              <span className="title-icon bg-soft-primary fs-16 me-2">
                <i className="ti ti-notebook"></i>
              </span>
              <h5 className="card-title mb-0">
                Blog Activity
              </h5>
            </div>

            <div className="btn-group custom-btn-group">
              {["1D","1W","1M","3M","6M","1Y"].map((x,i)=>(
                <button
                  key={x}
                  className={`btn btn-outline-light ${i===5?"active":""}`}
                >
                  {x}
                </button>
              ))}
            </div>

          </div>

          <div className="card-body pb-0">

            <div className="d-flex align-items-center gap-2">

              <div className="border p-2 br-8">
                <p className="mb-1">
                  <i className="ti ti-circle-filled fs-8 text-primary me-1"></i>
                  Posts
                </p>
                <h4>{stats?.totalBlogs ?? 0}</h4>
              </div>

              <div className="border p-2 br-8">
                <p className="mb-1">
                  <i className="ti ti-circle-filled fs-8 text-success me-1"></i>
                  Views
                </p>
                <h4>{stats?.totalViews ?? 0}</h4>
              </div>

            </div>

            <Chart
              options={salesOptions}
              series={salesSeries}
              type="area"
              height={300}
            />

          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* INFO + DONUT SECTION */}
      {/* ========================= */}
      <div className="col-xxl-4 col-xl-5 d-flex">
        <div className="card flex-fill">

          <div className="card-header">
            <div className="d-inline-flex align-items-center">
              <span className="title-icon bg-soft-info fs-16 me-2">
                <i className="ti ti-info-circle"></i>
              </span>
              <h5 className="card-title mb-0">
                Blog Overview
              </h5>
            </div>
          </div>

          {/* INFO CARDS */}
          <div className="card-body">
            <div className="row g-3">
              {infoCards.map((item,index)=>(
                <div className="col-md-4" key={index}>
                  <div className="info-item border bg-light p-3 text-center">

                    <div className={`mb-2 text-${item.color} fs-24`}>
                      <i className={`ti ${item.icon}`}></i>
                    </div>

                    <p className="mb-1">{item.title}</p>

                    <h5>
                      {item.value}
                    </h5>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DONUT */}
          <div className="card-footer">

            <h5>Published vs Draft</h5>

            <div className="row align-items-center">

              <div className="col-sm-5">
                <Chart
                  options={customerOptions}
                  series={customerSeries}
                  type="donut"
                  height={180}
                />
              </div>

              <div className="col-sm-7">

                <div className="row gx-0">

                  <div className="col-sm-6 text-center border-end">
                    <h2>{stats?.breakdown?.published ?? 0}</h2>
                    <p className="text-orange">Published</p>
                  </div>

                  <div className="col-sm-6 text-center">
                    <h2>{stats?.breakdown?.draft ?? 0}</h2>
                    <p className="text-teal">Draft</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}