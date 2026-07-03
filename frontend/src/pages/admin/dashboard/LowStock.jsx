import React from "react";


export default function LowStock(){


const products=[

{
img:"product-06.jpg",
name:"Dell XPS 13",
id:"#665814",
stock:"08"
},

{
img:"product-07.jpg",
name:"Vacuum Cleaner Robot",
id:"#940004",
stock:"14"
},

{
img:"product-08.jpg",
name:"KitchenAid Stand Mixer",
id:"#325569",
stock:"21"
},

{
img:"product-09.jpg",
name:"Levi's Trucker Jacket",
id:"#124588",
stock:"12"
},

{
img:"product-10.jpg",
name:"Lay's Classic",
id:"#365586",
stock:"10"
}

];


return (

<div className="col-xxl-4 col-md-6 d-flex">


<div className="card flex-fill">


<div className="card-header">

<div className="d-inline-flex align-items-center">

<span className="title-icon bg-soft-danger fs-16 me-2">
<i className="ti ti-alert-triangle"></i>
</span>

<h5 className="card-title mb-0">
Low Stock Products
</h5>

</div>

</div>




<div className="card-body">


{
products.map((p,i)=>(

<div 
className="d-flex align-items-center justify-content-between mb-4"
key={i}
>


<div className="d-flex align-items-center">


<a className="avatar avatar-lg">

<img src={`/assets/auth/img/products/${p.img}`} />

</a>


<div className="ms-2">

<h6 className="fw-bold mb-1">
{p.name}
</h6>

<p className="fs-13">
ID : {p.id}
</p>

</div>

</div>



<div className="text-end">

<p className="fs-13 mb-1">
Instock
</p>

<h6 className="text-orange">
{p.stock}
</h6>


</div>



</div>


))
}



</div>


</div>


</div>

)

}