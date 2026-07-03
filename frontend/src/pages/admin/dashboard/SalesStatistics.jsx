import React from "react";
import Chart from "react-apexcharts";


export default function SalesStatistics(){


const options = {

chart:{
 type:"bar",
 height:300,
 toolbar:{
  show:false
 }
},

plotOptions:{
 bar:{
  borderRadius:5,
  columnWidth:"45%"
 }
},

dataLabels:{
 enabled:false
},


xaxis:{
 categories:[
 "Jan","Feb","Mar","Apr",
 "May","Jun","Jul","Aug",
 "Sep","Oct","Nov","Dec"
 ]
},

colors:[
 "#20c997",
 "#ff9f43"
]

};



const series=[

{
 name:"Revenue",
 data:[
 12000,15000,11000,19000,
 17000,22000,25000,21000,
 30000,28000,35000,40000
 ]
},


{
 name:"Expense",
 data:[
 8000,9000,7000,12000,
 14000,13000,17000,15000,
 19000,20000,23000,25000
 ]
}

];



return (

<div className="col-xl-6 col-sm-12 d-flex">


<div className="card flex-fill">


<div className="card-header d-flex justify-content-between align-items-center">


<div className="d-inline-flex align-items-center">

<span className="title-icon bg-soft-danger fs-16 me-2">

<i className="ti ti-alert-triangle"></i>

</span>


<h5 className="card-title mb-0">
Sales Statistics
</h5>


</div>



<button className="btn btn-sm btn-white">
<i className="ti ti-calendar me-1"></i>
2026
</button>


</div>





<div className="card-body pb-0">


<div className="d-flex align-items-center flex-wrap gap-2">


<div className="border p-2 br-8">


<h5 className="text-teal">

$12,189

<span className="badge badge-success badge-xs ms-2">
+25%
</span>

</h5>


<p>
Revenue
</p>


</div>



<div className="border p-2 br-8">


<h5 className="text-orange">

$48,988,078

<span className="badge badge-danger badge-xs ms-2">
-25%
</span>

</h5>


<p>
Expense
</p>


</div>



</div>



<Chart

options={options}
series={series}
type="bar"
height={300}

/>



</div>



</div>


</div>

)

}