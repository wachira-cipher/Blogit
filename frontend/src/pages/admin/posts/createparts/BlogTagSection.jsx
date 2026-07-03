import React from "react";

export default function BlogTagSection({
  tags = [],
  form,
  setForm
}) {

  // ensure safe array always
  const selectedTags = Array.isArray(form.tags)
    ? form.tags
    : form.tags
      ? [form.tags]
      : [];

  return (
    <div className="col-sm-6 col-12">

      <div className="mb-3">

        <div className="add-newplus">

          <label className="form-label">
            Tag
            <span className="text-danger ms-1">*</span>
          </label>

          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#add-tag"
          >
            <i className="ti ti-circle-plus plus-down-add" />
            <span>Add New</span>
          </a>

        </div>

        {/* =======================
            MULTI-TAG FIX HERE
        ======================= */}
        <select
          className="select form-control"
          multiple   // ✅ ENABLE MULTI SELECT
          value={selectedTags}
          onChange={(e) => {

            const values = Array.from(
              e.target.selectedOptions
            ).map(opt => opt.value);

            setForm(prev => ({
              ...prev,
              tags: values
            }));

          }}
        >

          <option disabled value="">
            Select tags
          </option>

          {tags.map(item => (
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