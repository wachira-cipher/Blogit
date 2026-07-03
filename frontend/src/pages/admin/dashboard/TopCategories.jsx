import React from "react";
import {
 PieChart,
 Pie,
 Cell,
 ResponsiveContainer
} from "recharts";


export default function TopCategories(){


const data=[
 {
  name:"Electronics",
  value:698
 },
 {
  name:"Sports",
  value:545
 },
 {
  name:"Lifestyle",
  value:456
 }
];



return (

<div className="col-xxl-4 col-md-6 d-flex">

<div className="card flex-fill">


<div className="card-header">

<div className="d-inline-flex align-items-center">

<span className="title-icon bg-soft-orange fs-16 me-2">
<i className="ti ti-users"/>
</span>

<h5 className="card-title mb-0">
Top Categories
</h5>

</div>

</div>




<div className="card-body">


<div className="d-flex justify-content-between align-items-center">


<div style={{width:200,height:230}}>

<ResponsiveContainer>

<PieChart>

<Pie
data={data}
dataKey="value"
outerRadius={80}
>

{
data.map((_,i)=>
<Cell key={i}/>
)
}

</Pie>

</PieChart>

</ResponsiveContainer>


</div>




<div>


<div className="category-item category-primary">
<p>Electronics</p>
<h2>
698
<span className="fs-13 ms-1">
Sales
</span>
</h2>
</div>


<div className="category-item category-orange">
<p>Sports</p>
<h2>
545
<span className="fs-13 ms-1">
Sales
</span>
</h2>
</div>



<div className="category-item category-secondary">
<p>Lifestyles</p>
<h2>
456
<span className="fs-13 ms-1">
Sales
</span>
</h2>
</div>



</div>


</div>



<h6 className="mt-4">
Category Statistics
</h6>



<div className="border br-8">


<div className="d-flex justify-content-between p-2 border-bottom">

<p>
<i className="ti ti-square-rounded-filled me-2"/>
Total Number Of Categories
</p>

<h5>
698
</h5>

</div>



<div className="d-flex justify-content-between p-2">

<p>
<i className="ti ti-square-rounded-filled me-2"/>
Total Number Of Products
</p>

<h5>
7899
</h5>

</div>


</div>



</div>


</div>

</div>


)

}