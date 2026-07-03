import React from "react";

export default function TopCustomers() {

  const customers = [
    {
      name:"Carlos Curran",
      country:"USA",
      orders:"24 Orders",
      amount:"$8,9645",
      img:"customer11.jpg"
    },
    {
      name:"Stan Gaunter",
      country:"UAE",
      orders:"22 Orders",
      amount:"$16,985",
      img:"customer12.jpg"
    },
    {
      name:"Richard Wilson",
      country:"Germany",
      orders:"14 Orders",
      amount:"$5,366",
      img:"customer13.jpg"
    },
    {
      name:"Mary Bronson",
      country:"Belgium",
      orders:"08 Orders",
      amount:"$4,569",
      img:"customer14.jpg"
    },
    {
      name:"Annie Tremblay",
      country:"Greenland",
      orders:"14 Orders",
      amount:"$3,5698",
      img:"customer15.jpg"
    }
  ];


  return (

    <div className="col-xxl-4 col-md-6 d-flex">

      <div className="card flex-fill">


        <div className="card-header d-flex justify-content-between align-items-center">

          <div className="d-inline-flex align-items-center">

            <span className="title-icon bg-soft-orange fs-16 me-2">
              <i className="ti ti-users"/>
            </span>

            <h5 className="card-title mb-0">
              Top Customers
            </h5>

          </div>


          <a className="fs-13 fw-medium text-decoration-underline">
            View All
          </a>

        </div>




        <div className="card-body">


        {
          customers.map((c,i)=>(

            <div 
              key={i}
              className={`d-flex align-items-center justify-content-between 
              ${i !== customers.length-1 ? "border-bottom mb-3 pb-3":""}`}
            >


              <div className="d-flex align-items-center">


                <img
                  src={`/assets/auth/img/customer/${c.img}`}
                  className="avatar avatar-lg"
                />


                <div className="ms-2">

                  <h6 className="fs-14 fw-bold mb-1">
                    {c.name}
                  </h6>


                  <div className="d-flex item-list">


                    <p>
                      <i className="ti ti-map-pin me-1"/>
                      {c.country}
                    </p>


                    <p>
                      {c.orders}
                    </p>


                  </div>


                </div>


              </div>



              <h5>
                {c.amount}
              </h5>


            </div>

          ))
        }


        </div>


      </div>


    </div>

  );
}