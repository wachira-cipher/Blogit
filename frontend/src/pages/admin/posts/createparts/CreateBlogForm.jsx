import { useEffect, useState } from "react";
import { getCategories } from "../../../../api/category.api";

import BlogHeader from "./BlogHeader";
import BlogAccordion from "./BlogAccordion";

export default function CreateBlogForm() {

  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    category: ""
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BlogHeader />

      <form className="add-product-form">

        <div className="add-product">

          <BlogAccordion
            categories={categories}
            form={form}
            setForm={setForm}
          />

        </div>

        <div className="col-lg-12">
          <div className="d-flex align-items-center justify-content-end mb-4">
            <button type="button" className="btn btn-secondary me-2">
              Cancel
            </button>

            <button type="submit" className="btn btn-primary">
              Add Blog
            </button>
          </div>
        </div>

      </form>
    </>
  );
}