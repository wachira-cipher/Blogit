import React from "react";

export default function RevenueCards({ stats }) {
  const cards = [
    {
      title: "Active Sessions Today",
      value: stats?.sessionsToday ?? 0,
      color: "cyan",
      icon: "ti-device-desktop",
      change: "+Live",
      changeColor: "text-success",
      link: "#",
    },
    {
      title: "New Blog Activity",
      value: stats?.todayPosts ?? 0,
      color: "teal",
      icon: "ti-notebook",
      change: "+Today",
      changeColor: "text-success",
      link: "#",
    },
    {
      title: "Total Engagement",
      value: stats?.totalViews ?? 0,
      color: "orange",
      icon: "ti-eye",
      change: "Views",
      changeColor: "text-primary",
      link: "#",
    },
    {
      title: "Active Sessions",
      value: stats?.activeSessions ?? 0,
      color: "indigo",
      icon: "ti-users",
      change: "+Online",
      changeColor: "text-success",
      link: "#",
    },
  ];

  return (
    <div className="row">
      {cards.map((card, index) => (
        <div className="col-xl-3 col-sm-6 col-12 d-flex" key={index}>
          <div className="card revenue-widget flex-fill">
            <div className="card-body">

              {/* TOP SECTION */}
              <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                <div>
                  <h4 className="mb-1">
                    {card.value?.toLocaleString?.() ?? card.value}
                  </h4>
                  <p>{card.title}</p>
                </div>

                <span
                  className={`revenue-icon bg-${card.color}-transparent text-${card.color}`}
                >
                  <i className={`ti ${card.icon} fs-16`}></i>
                </span>
              </div>

              {/* BOTTOM SECTION */}
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0">
                  <span className={`fs-13 fw-bold ${card.changeColor}`}>
                    {card.change}
                  </span>{" "}
                  stats overview
                </p>

                <a
                  href={card.link}
                  className="text-decoration-underline fs-13 fw-medium"
                >
                  View All
                </a>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}