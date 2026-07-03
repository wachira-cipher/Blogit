import React from "react";

export default function TopProducts() {

  const products = [
    {
      img:"product-01.jpg",
      name:"Charger Cable - Lighting",
      price:"$187",
      sales:"247+ Sales",
      percent:"25%",
      up:true
    },
    {
      img:"product-16.jpg",
      name:"Yves Saint Eau De Parfum",
      price:"$145",
      sales:"289+ Sales",
      percent:"25%",
      up:true
    },
    {
      img:"product-03.jpg",
      name:"Apple Airpods 2",
      price:"$458",
      sales:"300+ Sales",
      percent:"25%",
      up:true
    },
    {
      img:"product-04.jpg",
      name:"Vacuum Cleaner",
      price:"$139",
      sales:"225+ Sales",
      percent:"21%",
      up:false
    },
    {
      img:"product-05.jpg",
      name:"Samsung Galaxy S21 Fe 5g",
      price:"$898",
      sales:"365+ Sales",
      percent:"25%",
      up:true
    }
  ];


return (

<div className="col-xxl-4 col-md-6 d-flex">

<div className="card flex-fill">


<div className="card-header">
<div className="d-inline-flex align-items-center">

<span className="title-icon bg-soft-pink fs-16 me-2">
<i className="ti ti-box"></i>
</span>

<h5 className="card-title mb-0">
Top Selling Products
</h5>

</div>
</div>



<div className="card-body sell-product">


{products.map((p,i)=>(

<div 
key={i}
className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3"
>


<div className="d-flex align-items-center">


<a className="avatar avatar-lg">

<img 
src={`/assets/auth/img/products/${p.img}`} 
alt=""
/>

</a>


<div className="ms-2">

<h6 className="fw-bold mb-1">
{p.name}
</h6>


<div className="d-flex item-list">

<p>{p.price}</p>
<p>{p.sales}</p>

</div>

</div>

</div>



<span className={`badge bg-outline-${p.up?"success":"danger"} badge-xs`}>

<i className={`ti ${p.up?"ti-arrow-up-left":"ti-arrow-down-left"} me-1`}></i>

{p.percent}

</span>



</div>

))}


</div>


</div>

</div>

);

}