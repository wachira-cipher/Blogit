import { useEffect, useState } from "react";
import { updatePost, deletePostImage } from "../../../../api/post.api";
import { toast } from "react-toastify";
import BlogCategorySection from "../createparts/BlogCategorySection";
import BlogTagSection from "../createparts/BlogTagSection";

const API_URL = import.meta.env.VITE_API_URL;

const FALLBACK_IMAGE =
  "/assets/blog/img/blog/blog-post-3.webp";


export default function BlogEditModal({
  post,
  categories = [],
  tags = [],
  onUpdated
}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "",
    tags: [],
    description: "",
    status: "draft",

    // new uploaded images
    imageFiles: [],

    // preview URLs for new images
    imagePreviews: [],

    // existing database images
    existingImages: []
  });

  // ======================
  // HYDRATION
  // ======================
  useEffect(() => {

    if (!post) return;


    setForm({

      title: post.title || "",

      category: post.category?._id || "",


      tags: Array.isArray(post.tags)

        ? post.tags
          .map(t =>
            typeof t === "string"
              ? t
              : t?._id
          )
          .filter(Boolean)

        : [],


      description: post.description || "",

      status: post.status || "draft",


      imageFiles: [],

      imagePreviews: [],


      existingImages: post.images || []

    });


  }, [post]);

  // ======================
  // TOGGLE TAG (MULTI SELECT FIX)
  // ======================
  const toggleTag = (tagId) => {
    setForm(prev => {
      const exists = prev.tags.includes(tagId);

      return {
        ...prev,
        tags: exists
          ? prev.tags.filter(id => id !== tagId)
          : [...prev.tags, tagId]
      };
    });
  };

  // ======================
  // IMAGE UPLOAD (NEW)
  // ======================
  const handleImage = (e) => {

    const files = Array.from(e.target.files);


    if (!files.length) return;


    const previews = files.map(file =>
      URL.createObjectURL(file)
    );


    setForm(prev => ({

      ...prev,

      imageFiles: [
        ...prev.imageFiles,
        ...files
      ],


      imagePreviews: [
        ...prev.imagePreviews,
        ...previews
      ]

    }));

  };

  // ======================
  // DELETE IMAGE FROM DB
  // ======================
  const handleDeleteImage = async (filename) => {

    try {

      const res = await deletePostImage(
        post._id,
        filename
      );


      toast.success("Image removed");


      // update parent
      onUpdated?.({
        ...post,
        images: res.data.images
      });



      setForm(prev => ({

        ...prev,

        existingImages:
          res.data.images || [],


        // clear new previews if needed
        imagePreviews:
          prev.imagePreviews.filter(
            img => !img.includes(filename)
          )

      }));


    } catch (err) {

      console.error(err);

      toast.error(
        err.response?.data?.message ||
        "Failed to delete image"
      );

    }

  };
  // ======================
  // SUBMIT
  // ======================
  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);


      const payload = new FormData();


      payload.append(
        "title",
        form.title
      );


      payload.append(
        "category",
        form.category
      );


      payload.append(
        "description",
        form.description
      );


      payload.append(
        "status",
        form.status
      );


      payload.append(
        "tags",
        JSON.stringify(form.tags)
      );


      // multiple images
      form.imageFiles.forEach(file => {

        payload.append(
          "images",
          file
        );

      });



      const res = await updatePost(
        post._id,
        payload
      );


      toast.success(
        "Blog updated successfully"
      );


      // update parent
      onUpdated?.(res.data);



      // ==========================
      // CLOSE BOOTSTRAP MODAL
      // ==========================

      const modalElement =
        document.getElementById("edit_blog");


      const modal =
        window.bootstrap.Modal.getInstance(
          modalElement
        );


      if (modal) {

        modal.hide();

      }



    } catch (err) {


      toast.error(
        err.response?.data?.message ||
        "Update failed"
      );


    } finally {


      setLoading(false);


    }

  };

  if (!post) return null;

  return (
    <div className="modal fade" id="edit_blog">

      <div className="modal-dialog modal-dialog-centered modal-lg">

        <div className="modal-content">

          {/* HEADER */}
          <div className="modal-header">
            <h4 className="modal-title">Edit Blog</h4>

            <button
              type="button"
              className="btn-close custom-btn-close p-0"
              data-bs-dismiss="modal"
            >
              <i className="ti ti-x"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="modal-body pb-0">

              <div className="row">

                {/* IMAGE */}
                {/* MAIN IMAGE */}
                <div className="col-md-12">
                  <div className="profile-pic-upload">

                    <div className="profile-pic edit-review people-profile-pic p-2 border rounded">

                      {/* show uploaded preview OR fallback OR first DB image */}
                      <img
                        src={
                          form.imagePreviews?.length
                            ? form.imagePreviews[0]
                            : form.existingImages?.length
                              ? `${API_URL}/uploads/${form.existingImages[0]}`
                              : FALLBACK_IMAGE
                        }
                        alt="Img"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = FALLBACK_IMAGE;
                        }}
                      />

                    </div>

                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImage}
                    />

                  </div>
                </div>

                {/* EXISTING IMAGES */}
                <div className="col-md-12 mt-2">

                  <div className="d-flex flex-wrap gap-2">

                    {(form.existingImages || []).map((img, i) => (
                      <div key={i} className="position-relative d-inline-block">

                        <img
                          src={img ? `${API_URL}/uploads/${img}` : FALLBACK_IMAGE}
                          className="img-thumbnail"
                          width="80"
                          height="80"
                          style={{ objectFit: "cover" }}
                          alt="Blog post"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = FALLBACK_IMAGE;
                          }}
                        />

                        {/* DELETE ICON */}
                        <button
                          type="button"
                          className="btn btn-danger btn-sm position-absolute top-0 end-0"
                          onClick={() => handleDeleteImage(img)}
                        >
                          <i className="ti ti-x"></i>
                        </button>

                      </div>
                    ))}

                  </div>

                </div>
                <div className="col-md-12 mt-2">

                  <div className="d-flex flex-wrap gap-2">


                    {
                      form.imagePreviews.map((img, index) => (

                        <div
                          key={index}
                          className="position-relative"
                        >

                          <img
                            src={img}
                            className="img-thumbnail"
                            width="80"
                            height="80"
                            style={{
                              objectFit: "cover"
                            }}
                            alt="preview"
                          />


                        </div>

                      ))
                    }


                  </div>

                </div>

                {/* TITLE */}
                <div className="col-md-12">
                  <div className="mb-3">

                    <label className="form-label">
                      Blog Title <span className="text-danger">*</span>
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                    />

                  </div>
                </div>

                {/* CATEGORY + TAGS (UNCHANGED STRUCTURE) */}
                <div className="addservice-info">
                  <div className="row">

                    <BlogCategorySection
                      categories={categories}
                      form={form}
                      setForm={setForm}
                    />

                    <BlogTagSection
                      tags={tags}
                      form={form}
                      setForm={setForm}
                    />

                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="col-lg-12">
                  <div className="mb-3">

                    <label className="form-label">Description</label>

                    <textarea
                      className="form-control"
                      rows="5"
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                    />

                  </div>
                </div>

                {/* STATUS */}
                <div className="col-md-6">
                  <div className="d-flex align-items-center justify-content-between mb-3">

                    <label className="form-label">Status</label>

                    <label className="switch">

                      <input
                        type="checkbox"
                        checked={form.status === "published"}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            status: e.target.checked ? "published" : "draft"
                          })
                        }
                      />

                      <span className="slider round"></span>

                    </label>

                  </div>
                </div>

              </div>

            </div>

            {/* FOOTER */}
            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >

                {
                  loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>

                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )
                }

              </button>

            </div>

          </form>

        </div>
      </div>

    </div>
  );
}