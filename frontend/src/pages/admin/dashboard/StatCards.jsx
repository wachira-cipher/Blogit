import React from "react";

export default function StatCards() {
  const cards = [
    {
      title: "Total Sales",
      value: "$48,988,078",
      color: "primary",
      icon: "ti-file-text",
      badge: "badge-soft-primary",
      trend: "+22%",
      trendIcon: "ti-arrow-up",
    },
    {
      title: "Total Sales Return",
      value: "$16,478,145",
      color: "secondary",
      icon: "ti-repeat",
      badge: "badge-soft-danger",
      trend: "-22%",
      trendIcon: "ti-arrow-down",
    },
    {
      title: "Total Purchase",
      value: "$24,145,789",
      color: "teal",
      icon: "ti-gift",
      badge: "badge-soft-success",
      trend: "+22%",
      trendIcon: "ti-arrow-up",
    },
    {
      title: "Total Purchase Return",
      value: "$18,458,747",
      color: "info",
      icon: "ti-brand-pocket",
      badge: "badge-soft-success",
      trend: "+22%",
      trendIcon: "ti-arrow-up",
    },
  ];

  return (
    <div className="row">
      {cards.map((card, index) => (
        <div 
          className="col-xl-3 col-sm-6 col-12 d-flex" 
          key={index}
        >
          <div className={`card bg-${card.color} sale-widget flex-fill`}>
            
            <div className="card-body d-flex align-items-center">

              <span className={`sale-icon bg-white text-${card.color}`}>
                <i className={`ti ${card.icon} fs-24`}></i>
              </span>

              <div className="ms-2">

                <p className="text-white mb-1">
                  {card.title}
                </p>

                <div className="d-inline-flex align-items-center flex-wrap gap-2">

                  <h4 className="text-white mb-0">
                    {card.value}
                  </h4>

                  <span className={`badge ${card.badge}`}>
                    <i className={`ti ${card.trendIcon} me-1`}></i>
                    {card.trend}
                  </span>

                </div>

              </div>

            </div>

          </div>
        </div>
      ))}
    </div>
  );
}