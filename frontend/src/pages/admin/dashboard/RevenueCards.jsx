import React from "react";

export default function RevenueCards() {

  const cards = [
    {
      title: "Profit",
      value: "$8,458,798",
      color: "cyan",
      icon: "fa-layer-group",
      change: "+35%",
      changeColor: "text-success",
      link: "profit-and-loss.html",
    },
    {
      title: "Invoice Due",
      value: "$48,988,78",
      color: "teal",
      icon: "ti-chart-pie",
      change: "+35%",
      changeColor: "text-success",
      link: "invoice-report.html",
    },
    {
      title: "Total Expenses",
      value: "$8,980,097",
      color: "orange",
      icon: "ti-lifebuoy",
      change: "+41%",
      changeColor: "text-success",
      link: "expense-list.html",
    },
    {
      title: "Total Payment Returns",
      value: "$78,458,798",
      color: "indigo",
      icon: "ti-hash",
      change: "-20%",
      changeColor: "text-danger",
      link: "sales-report.html",
    },
  ];


  return (
    <div className="row">

      {cards.map((card, index) => (

        <div 
          className="col-xl-3 col-sm-6 col-12 d-flex"
          key={index}
        >

          <div className="card revenue-widget flex-fill">

            <div className="card-body">

              <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">

                <div>
                  <h4 className="mb-1">
                    {card.value}
                  </h4>

                  <p>
                    {card.title}
                  </p>
                </div>


                <span 
                  className={`revenue-icon bg-${card.color}-transparent text-${card.color}`}
                >

                  {card.icon.startsWith("fa") ? (
                    <i className={`fa-solid ${card.icon} fs-16`}></i>
                  ) : (
                    <i className={`ti ${card.icon} fs-16`}></i>
                  )}

                </span>


              </div>


              <div className="d-flex align-items-center justify-content-between">

                <p className="mb-0">

                  <span className={`fs-13 fw-bold ${card.changeColor}`}>
                    {card.change}
                  </span>

                  {" "}vs Last Month

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