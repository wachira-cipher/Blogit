import React from "react";


export default function EditTagModal({

form,

handleChange,

updateTag

}) {


return (

<div className="modal fade" id="edit-tag">


<div className="modal-dialog modal-dialog-centered">


<div className="modal-content">



<div className="modal-header">


<div className="page-title">


<h4>Edit Tag</h4>


</div>




<button

type="button"

className="close bg-danger text-white fs-16"

data-bs-dismiss="modal"

>

<span>

&times;

</span>


</button>



</div>






<form onSubmit={updateTag}>


<div className="modal-body">



<div className="mb-3">


<label className="form-label">


Tag

<span className="text-danger ms-1">
*
</span>


</label>



<input

type="text"

className="form-control"

name="name"

value={form.name}

onChange={handleChange}

/>



</div>






<div className="mb-3">


<label className="form-label">


Tag Slug

<span className="text-danger ms-1">
*
</span>


</label>




<input

type="text"

className="form-control"

name="slug"

value={form.slug}

onChange={handleChange}

/>



</div>







<div className="mb-0">


<div className="status-toggle modal-status d-flex justify-content-between align-items-center">



<span className="status-label">


Status


</span>






<input

type="checkbox"

id="tag-status-edit"

className="check"

checked={form.status}

onChange={(e)=>

handleChange({

target:{

name:"status",

value:e.target.checked

}

})

}

/>





<label

htmlFor="tag-status-edit"

className="checktoggle"

/>





</div>


</div>



</div>









<div className="modal-footer">


<button

type="button"

className="btn me-2 btn-secondary"

data-bs-dismiss="modal"

>

Cancel

</button>





<button

type="submit"

className="btn btn-primary"

data-bs-dismiss="modal"

>

Save Changes

</button>




</div>






</form>





</div>


</div>


</div>



)


}