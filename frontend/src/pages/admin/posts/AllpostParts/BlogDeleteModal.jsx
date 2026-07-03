import { deletePost } from "../../../../api/post.api";
import { toast } from "react-toastify";


export default function BlogDeleteModal({
 post,
 onDeleted
}){


const handleDelete=async()=>{


try{


await deletePost(post._id);


toast.success("Blog deleted");


onDeleted(post._id);


}

catch(err){

toast.error(
"Delete failed"
);

}


};



if(!post) return null;



return(


<div className="modal fade" id="delete_modal">


<div className="modal-dialog modal-dialog-centered">


<div className="modal-content">


<div className="modal-body text-center">


<span className="avatar avatar-xl bg-soft-danger rounded-circle text-danger mb-3">

<i className="ti ti-trash-x fs-36"></i>

</span>


<h4>
Delete Blog
</h4>


<p>
Are you sure you want to delete blog?
</p>



<div className="d-flex justify-content-center">


<button

className="btn btn-secondary me-3"

data-bs-dismiss="modal"

>

Cancel

</button>



<button

className="btn btn-primary"

onClick={handleDelete}

>

Yes, Delete

</button>



</div>


</div>


</div>


</div>


</div>


)

}