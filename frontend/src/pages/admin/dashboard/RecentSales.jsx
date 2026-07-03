import React from "react";


export default function RecentSales(){


const sales=[

{
img:"product-11.jpg",
name:"Apple Watch Series 9",
cat:"Electronics",
price:"$640",
date:"Today",
status:"Processing",
color:"purple"
},

{
img:"product-12.jpg",
name:"Gold Bracelet",
cat:"Fashion",
price:"$126",
date:"Today",
status:"Cancelled",
color:"danger"
},

{
img:"product-13.jpg",
name:"Parachute Down Duvet",
cat:"Health",
price:"$69",
date:"15 Jan 2026",
status:"Onhold",
color:"cyan"
},

{
img:"product-14.jpg",
name:"YETI Rambler Tumbler",
cat:"Sports",
price:"$65",
date:"12 Jan 2026",
status:"Processing",
color:"purple"
},

{
img:"product-15.jpg",
name:"Osmo Genius Starter Kit",
cat:"Lifestyles",
price:"$87.56",
date:"11 Jan 2026",
status:"Completed",
color:"success"
}

];


return (

<div className="col-xxl-4 col-md-12 d-flex">


<div className="card flex-fill">


<div className="card-header">

<h5 className="card-title mb-0">
Recent Sales
</h5>

</div>


<div className="card-body">


{
sales.map((s,i)=>(


<div 
className="d-flex align-items-center justify-content-between mb-4"
key={i}
>


<div className="d-flex align-items-center">


<a className="avatar avatar-lg">

<img src={`/assets/auth/img/products/${s.img}`} />

</a>


<div className="ms-2">

<h6 className="fw-bold mb-1">
{s.name}
</h6>


<div className="item-list d-flex">

<p>{s.cat}</p>
<p>{s.price}</p>

</div>


</div>


</div>



<div className="text-end">

<p className="fs-13 mb-1">
{s.date}
</p>


<span className={`badge badge-${s.color} badge-xs`}>

<i className="ti ti-circle-filled fs-5 me-1"></i>

{s.status}

</span>


</div>


</div>


))
}



</div>


</div>


</div>


)


}