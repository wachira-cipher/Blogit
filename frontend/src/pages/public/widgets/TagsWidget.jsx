import { Link } from "react-router-dom";


export default function TagsWidget({
  tags=[]
}) {


return (

<div className="tags-widget widget-item">


<h3 className="widget-title">
Tags
</h3>



<ul>


{
tags.length === 0 && (

<li>
<a href="#">
No tags
</a>
</li>

)

}



{
tags.map((tag)=>(


<li key={tag._id}>


<Link
to={`/tag/${tag.slug}`}
>

{tag.name}

</Link>


</li>


))

}



</ul>


</div>

);


}