import React from "react";
import Chart from "react-apexcharts";


export default function SalesChartsSection() {


  const salesOptions = {
    chart: {
      type: "area",
      height: 300,
      toolbar: {
        show: false,
      },
    },

    stroke: {
      curve: "smooth",
    },

    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    colors: ["#7367F0", "#28C76F"],

    fill: {
      opacity: 0.3,
    },

  };


  const salesSeries = [
    {
      name: "Total Purchase",
      data: [300, 500, 400, 700, 600, 900, 800, 1000, 700, 900, 1100, 1200],
    },
    {
      name: "Total Sales",
      data: [200, 300, 500, 400, 800, 700, 900, 600, 1000, 800, 900, 1100],
    },
  ];



  const customerOptions = {
    chart: {
      type: "donut",
    },

    labels: [
      "First Time",
      "Return",
    ],

    legend: {
      show: false,
    },

    colors: [
      "#FF9F43",
      "#00CFE8",
    ],
  };


  const customerSeries = [
    5500,
    3500
  ];




  const infoCards = [
    {
      title: "Suppliers",
      value: "6987",
      icon: "ti-user-check",
      color: "info",
    },

    {
      title: "Customer",
      value: "4896",
      icon: "ti-users",
      color: "orange",
    },

    {
      title: "Orders",
      value: "487",
      icon: "ti-shopping-cart",
      color: "teal",
    },
  ];



  return (

    <div className="row">


      {/* Sales Purchase */}

      <div className="col-xxl-8 col-xl-7 col-sm-12 col-12 d-flex">

        <div className="card flex-fill">


          <div className="card-header d-flex justify-content-between align-items-center">


            <div className="d-inline-flex align-items-center">

              <span className="title-icon bg-soft-primary fs-16 me-2">
                <i className="ti ti-shopping-cart"></i>
              </span>

              <h5 className="card-title mb-0">
                Sales & Purchase
              </h5>

            </div>



            <div className="btn-group custom-btn-group">

              {
                ["1D","1W","1M","3M","6M","1Y"].map((x,i)=>

                  <button
                    key={x}
                    className={`btn btn-outline-light ${i===5?"active":""}`}
                  >
                    {x}
                  </button>

                )
              }

            </div>


          </div>



          <div className="card-body pb-0">


            <div className="d-flex align-items-center gap-2">


              <div className="border p-2 br-8">

                <p className="mb-1">
                  <i className="ti ti-circle-filled fs-8 text-primary-300 me-1"></i>
                  Total Purchase
                </p>

                <h4>3K</h4>

              </div>



              <div className="border p-2 br-8">

                <p className="mb-1">
                  <i className="ti ti-circle-filled fs-8 text-primary me-1"></i>
                  Total Sales
                </p>

                <h4>1K</h4>

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







      {/* Overall Information */}


      <div className="col-xxl-4 col-xl-5 d-flex">


        <div className="card flex-fill">


          <div className="card-header">


            <div className="d-inline-flex align-items-center">

              <span className="title-icon bg-soft-info fs-16 me-2">

                <i className="ti ti-info-circle"></i>

              </span>


              <h5 className="card-title mb-0">
                Overall Information
              </h5>


            </div>


          </div>




          <div className="card-body">


            <div className="row g-3">


              {
                infoCards.map((item,index)=>(

                  <div className="col-md-4" key={index}>

                    <div className="info-item border bg-light p-3 text-center">


                      <div className={`mb-2 text-${item.color} fs-24`}>

                        <i className={`ti ${item.icon}`}></i>

                      </div>


                      <p className="mb-1">
                        {item.title}
                      </p>


                      <h5>
                        {item.value}
                      </h5>


                    </div>


                  </div>

                ))
              }


            </div>


          </div>





          <div className="card-footer">


            <h5>
              Customers Overview
            </h5>


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

                    <h2>5.5K</h2>

                    <p className="text-orange">
                      First Time
                    </p>

                    <span className="badge badge-success badge-xs">
                      +25%
                    </span>

                  </div>




                  <div className="col-sm-6 text-center">


                    <h2>3.5K</h2>

                    <p className="text-teal">
                      Return
                    </p>

                    <span className="badge badge-success badge-xs">
                      +21%
                    </span>


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