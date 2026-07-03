import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getCategories } from "../../../api/category.api";
import { getTags } from "../../../api/tag.api";
import { createPost } from "../../../api/post.api";

import BlogHeader from "./createparts/BlogHeader";
import BlogAccordion from "./createparts/BlogAccordion";
import AddCategoryModal from "../categories/components/AddCategoryModal";
import AddTagModal from "../tags/components/AddTagModal";

export default function CreatePost() {

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    category: "",

    // ✅ FIXED: multiple tags support
    tags: [],

    status: "draft",
    visibility: "public",
    featured: false,

    images: [],

    meta: {
      tags: "",
      author: "",
      createdDate: "",
      scheduledDate: ""
    }
  });

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data || []);
    } catch {
      console.log("Failed to load categories");
    }
  };

  const fetchTags = async () => {
    try {
      const res = await getTags();
      setTags(res.data || []);
    } catch {
      console.log("Failed to load tags");
    }
  };

  // ======================
  // VALIDATION
  // ======================
  const validateForm = () => {
    const errors = [];

    if (!form.title.trim()) errors.push("Title is required");
    if (!form.slug.trim()) errors.push("Slug is required");
    if (!form.description.trim()) errors.push("Description is required");
    if (!form.category) errors.push("Category is required");

    // ✅ FIXED TAG VALIDATION
    if (!form.tags || form.tags.length === 0)
      errors.push("Tag is required");

    if (!form.meta.author.trim()) errors.push("Author is required");
    if (!form.meta.createdDate) errors.push("Created date is required");

    return errors;
  };

  // ======================
  // SUBMIT
  // ======================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach(err => toast.error(err));
      return;
    }

    try {
      setLoading(true);

      const payload = new FormData();

      payload.append("title", form.title);
      payload.append("slug", form.slug.toLowerCase().replace(/\s+/g, "-"));
      payload.append("description", form.description);
      payload.append("category", form.category);

      // ✅ FIXED: send array properly
      payload.append("tags", JSON.stringify(form.tags));

      payload.append("status", form.status);
      payload.append("visibility", form.visibility);

      (form.images || []).forEach((image) => {
        payload.append("images", image.file);
      });

      const res = await createPost(payload);

      toast.success("Blog created successfully 🚀");

      console.log("CREATED BLOG:", res.data);

      // RESET
      setForm({
        title: "",
        slug: "",
        description: "",
        category: "",
        tags: [],
        status: "draft",
        visibility: "public",
        featured: false,
        images: [],
        meta: {
          tags: "",
          author: "",
          createdDate: "",
          scheduledDate: ""
        }
      });

    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BlogHeader />

      <form className="add-product-form" onSubmit={handleSubmit}>

        <div className="add-product">

          <BlogAccordion
            categories={categories}
            tags={tags}
            form={form}
            setForm={setForm}
          />

        </div>

        <div className="col-lg-12">
          <div className="d-flex justify-content-end mb-4">

            <button type="button" className="btn btn-secondary me-2">
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Publishing..." : "Add Blog"}
            </button>

          </div>
        </div>

      </form>

      <AddCategoryModal
        form={form}
        setForm={setForm}
        onSuccess={(newCat) =>
          setCategories(prev => [...prev, newCat])
        }
      />

      <AddTagModal
        form={form}
        setForm={setForm}
        onSuccess={(newTag) =>
          setTags(prev => [...prev, newTag])
        }
      />
    </>
  );
}