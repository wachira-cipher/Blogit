import React from "react";

export default function BlogCategorySection({
  categories = [],
  form,
  setForm
}) {

  return (
    <div className="col-sm-6 col-12">

      <div className="mb-3">

        <div className="add-newplus">

          <label className="form-label">
            Category
            <span className="text-danger ms-1">*</span>
          </label>

          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#add-category"
          >
            <i className="ti ti-circle-plus plus-down-add" />
            <span>Add New</span>
          </a>

        </div>

        <select
          className="select form-control"
          value={form.category || ""}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >

          <option value="">
            Select
          </option>

          {categories.map(item => (
            <option
              key={item._id}
              value={item._id}
            >
              {item.name}
            </option>
          ))}

        </select>

      </div>

    </div>
  );
}