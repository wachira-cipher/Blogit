import React from "react";

export default function StatCards({ stats }) {
  const cards = [
    {
      title: "Total Blogs",
      value: stats?.totalBlogs ?? 0,
      color: "primary",
      icon: "ti-notebook",
    },
    {
      title: "Published Blogs",
      value: stats?.publishedBlogs ?? 0,
      color: "secondary",
      icon: "ti-world",
    },
    {
      title: "Draft Blogs",
      value: stats?.draftBlogs ?? 0,
      color: "teal",
      icon: "ti-file-description",
    },
    {
      title: "Total Views",
      value: stats?.totalViews ?? 0,
      color: "info",
      icon: "ti-eye",
    },
  ];

  return (
    <div className="row">
      {cards.map((card, index) => (
        <div className="col-xl-3 col-sm-6 col-12 d-flex" key={index}>
          <div className={`card bg-${card.color} sale-widget flex-fill`}>
            <div className="card-body d-flex align-items-center">
              <span className={`sale-icon bg-white text-${card.color}`}>
                <i className={`ti ${card.icon} fs-24`}></i>
              </span>

              <div className="ms-2">
                <p className="text-white mb-1">{card.title}</p>

                <h4 className="text-white mb-0">
                  {(card.value || 0).toLocaleString()}
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}