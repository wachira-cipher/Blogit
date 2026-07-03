export default function BlogRow({blog}){


return(

<tr>


<td>

<div className="d-flex align-items-center">


<img
src="/assets/img/blog/blog-1.jpg"
className="avatar avatar-md me-2"
/>


<div>

<h6>

{blog.title}

</h6>


</div>


</div>


</td>



<td>
{blog.author}
</td>



<td>

<span className="badge badge-success">

{blog.status}

</span>


</td>



<td>

{blog.date}

</td>



<td>


<div className="edit-delete-action">


<a 
className="me-2 p-2"
href={`/blogs/edit/${blog._id}`}>

<i className="ti ti-edit"/>

</a>



<button
className="btn p-2"
data-bs-toggle="modal"
data-bs-target="#delete-blog">

<i className="ti ti-trash"/>

</button>


</div>


</td>


</tr>


)


}