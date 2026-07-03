import React from "react";
//import HeatMap from "react-heatmap-grid";

export default function OrderStatistics() {

  // X axis labels (days / time slots)
  const xLabels = [
    "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
  ];

  // Y axis labels (order categories / intensity rows)
  const yLabels = [
    "0-10", "10-20", "20-30", "30-40", "40+"
  ];

  // Heatmap values (dummy data matching order intensity)
  const data = [
    [1, 2, 3, 2, 1, 0, 2],
    [2, 3, 4, 3, 2, 1, 3],
    [3, 4, 5, 4, 3, 2, 4],
    [2, 3, 4, 5, 4, 3, 2],
    [1, 2, 3, 4, 5, 4, 3]
  ];

  return (
    <div className="col-xxl-4 col-md-12 d-flex">

      <div className="card flex-fill">

        {/* HEADER (unchanged structure) */}
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">

          <div className="d-inline-flex align-items-center">

            <span className="title-icon bg-soft-indigo fs-16 me-2">
              <i className="ti ti-package" />
            </span>

            <h5 className="card-title mb-0">
              Order Statistics
            </h5>

          </div>

          <div className="dropdown">
            <button
              className="btn btn-sm btn-white dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-calendar me-1"></i>
              Weekly
            </button>

            <ul className="dropdown-menu p-3">
              <li><a className="dropdown-item">Today</a></li>
              <li><a className="dropdown-item">Weekly</a></li>
              <li><a className="dropdown-item">Monthly</a></li>
            </ul>
          </div>

        </div>

        {/* BODY (heatmap replaces #heat_chart) */}
        <div className="card-body pb-0">

          <div style={{ width: "100%", overflowX: "auto" }}>
 {/* 
            <HeatMap
              xLabels={xLabels}
              yLabels={yLabels}
              yLabelWidth={60}
              data={data}
              squares
              height={35}
              cellStyle={(background, value) => ({
                background: `rgba(99, 102, 241, ${value / 5})`,
                fontSize: "11px",
                color: value > 3 ? "#fff" : "#333",
                borderRadius: "4px"
              })}
              cellRender={value => value && value}
            />
*/}
          </div>

        </div>

      </div>

    </div>
  );
}