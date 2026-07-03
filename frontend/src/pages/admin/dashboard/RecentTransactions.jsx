import React, { useState } from "react";

export default function RecentTransactions() {

  const tabs = {

    Sale: [
      {
        date: "24 May 2026",
        name: "Andrea Willer",
        img: "customer16.jpg",
        status: "Completed",
        color: "success",
        total: "$4,560"
      },
      {
        date: "23 May 2026",
        name: "Timothy Sandsr",
        img: "customer17.jpg",
        status: "Completed",
        color: "success",
        total: "$3,569"
      },
      {
        date: "22 May 2026",
        name: "Bonnie Rodrigues",
        img: "customer18.jpg",
        status: "Draft",
        color: "pink",
        total: "$4,560"
      },
      {
        date: "21 May 2026",
        name: "Randy McCree",
        img: "customer15.jpg",
        status: "Completed",
        color: "success",
        total: "$2,155"
      },
      {
        date: "21 May 2026",
        name: "Dennis Anderson",
        img: "customer13.jpg",
        status: "Completed",
        color: "success",
        total: "$5,123"
      }
    ],


    Purchase: [
      {
        date:"24 May 2026",
        name:"Electro Mart",
        status:"Completed",
        color:"success",
        total:"$1000"
      },
      {
        date:"23 May 2026",
        name:"Quantum Gadgets",
        status:"Completed",
        color:"success",
        total:"$1500"
      },
      {
        date:"22 May 2026",
        name:"Prime Bazaar",
        status:"Pending",
        color:"cyan",
        total:"$2000"
      },
      {
        date:"21 May 2026",
        name:"Alpha Mobiles",
        status:"Completed",
        color:"success",
        total:"$1200"
      },
      {
        date:"21 May 2026",
        name:"Aesthetic Bags",
        status:"Completed",
        color:"success",
        total:"$1300"
      }
    ],



    Quotation: [

      {
        date:"24 May 2026",
        name:"Andrea Willer",
        img:"customer16.jpg",
        status:"Sent",
        color:"success",
        total:"$4,560"
      },

      {
        date:"23 May 2026",
        name:"Timothy Sandsr",
        img:"customer17.jpg",
        status:"Ordered",
        color:"warning",
        total:"$3,569"
      },

      {
        date:"22 May 2026",
        name:"Bonnie Rodrigues",
        img:"customer18.jpg",
        status:"Pending",
        color:"cyan",
        total:"$4,560"
      },

      {
        date:"21 May 2026",
        name:"Randy McCree",
        img:"customer15.jpg",
        status:"Ordered",
        color:"warning",
        total:"$2,155"
      },

      {
        date:"21 May 2026",
        name:"Dennis Anderson",
        img:"customer13.jpg",
        status:"Sent",
        color:"success",
        total:"$5,123"
      }

    ],



    Expenses:[

      {
        date:"24 May 2026",
        name:"Electricity Payment",
        status:"Approved",
        color:"success",
        total:"$200"
      },

      {
        date:"23 May 2026",
        name:"Electricity Payment",
        status:"Approved",
        color:"success",
        total:"$200"
      },

      {
        date:"22 May 2026",
        name:"Stationery Purchase",
        status:"Approved",
        color:"success",
        total:"$50"
      },

      {
        date:"21 May 2026",
        name:"AC Repair Service",
        status:"Pending",
        color:"cyan",
        total:"$800"
      },

      {
        date:"21 May 2026",
        name:"Client Meeting",
        status:"Approved",
        color:"success",
        total:"$100"
      }

    ],




    Invoices:[

      {
        name:"Andrea Willer",
        img:"customer16.jpg",
        date:"24 May 2026",
        status:"Paid",
        color:"success",
        total:"$1300"
      },

      {
        name:"Timothy Sandsr",
        img:"customer17.jpg",
        date:"23 May 2026",
        status:"Overdue",
        color:"warning",
        total:"$1250"
      },

      {
        name:"Bonnie Rodrigues",
        img:"customer18.jpg",
        date:"22 May 2026",
        status:"Paid",
        color:"success",
        total:"$1700"
      },

      {
        name:"Randy McCree",
        img:"customer15.jpg",
        date:"21 May 2026",
        status:"Unpaid",
        color:"danger",
        total:"$1500"
      },

      {
        name:"Dennis Anderson",
        img:"customer13.jpg",
        date:"21 May 2026",
        status:"Paid",
        color:"success",
        total:"$1000"
      }

    ]

  };




  const [active,setActive] = useState("Sale");



  return (

    <div className="col-xl-6 col-sm-12 d-flex">


      <div className="card flex-fill">


        <div className="card-header d-flex justify-content-between">

          <div className="d-inline-flex align-items-center">

            <span className="title-icon bg-soft-orange fs-16 me-2">
              <i className="ti ti-flag"></i>
            </span>

            <h5 className="card-title mb-0">
              Recent Transactions
            </h5>

          </div>


          <a className="fs-13 fw-medium text-decoration-underline">
            View All
          </a>

        </div>




        <div className="card-body p-0">


          <ul className="nav nav-tabs nav-justified transaction-tab">


            {
              Object.keys(tabs).map(tab => (

                <li className="nav-item" key={tab}>

                  <button

                    className={`nav-link ${
                      active === tab ? "active" : ""
                    }`}

                    onClick={()=>setActive(tab)}

                  >
                    {tab}

                  </button>

                </li>

              ))
            }


          </ul>





          <div className="table-responsive">


            <table className="table table-borderless custom-table">


              <thead className="thead-light">

                <tr>
                  <th>Date</th>
                  <th>
                    {active === "Purchase" ? "Supplier" : "Customer"}
                  </th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>

              </thead>



              <tbody>


                {
                  tabs[active].map((row,index)=>(


                    <tr key={index}>


                      <td>
                        {row.date}
                      </td>



                      <td>


                        <div className="d-flex align-items-center file-name-icon">


                          {
                            row.img &&
                            <img

                              src={`/assets/auth/img/customer/${row.img}`}

                              className="avatar avatar-md"

                            />
                          }



                          <div className="ms-2">

                            <h6 className="fw-bold mb-0">
                              {row.name}
                            </h6>

                          </div>


                        </div>


                      </td>



                      <td>


                        <span className={`badge badge-${row.color} badge-xs`}>

                          <i className="ti ti-circle-filled fs-5 me-1"></i>

                          {row.status}

                        </span>


                      </td>




                      <td className="fw-bold text-gray-9">

                        {row.total}

                      </td>


                    </tr>


                  ))
                }


              </tbody>


            </table>


          </div>



        </div>


      </div>


    </div>

  );

}