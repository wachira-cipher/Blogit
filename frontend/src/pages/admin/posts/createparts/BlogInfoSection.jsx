import BlogCategorySection from "./BlogCategorySection";
import BlogTagSection from "./BlogTagSection";

export default function BlogInfoSection({
  categories,
  tags,
  form,
  setForm
}) {
  return (
    <div className="accordion-item border mb-4">

      <h2 className="accordion-header">
        <div
          className="accordion-button collapsed bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#SpacingOne"
        >
          <h5 className="d-flex align-items-center">
            <i className="ti ti-info-circle text-primary me-2"></i>
            Blog Information
          </h5>
        </div>
      </h2>

      <div id="SpacingOne" className="accordion-collapse collapse show">

        <div className="accordion-body border-top">

          <div className="row">

            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  className="form-control"
                  value={form.title || ""}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="mb-3">
                <label className="form-label">Slug</label>
                <input
                  className="form-control"
                  value={form.slug || ""}
                  onChange={(e) =>
                    setForm({ ...form, slug: e.target.value })
                  }
                />
              </div>
            </div>

          </div>

          <div className="addservice-info">

            <div className="row">

              <BlogCategorySection
                categories={categories}
                form={form}
                setForm={setForm}
              />

              {/* ✅ FIX: pass selected tags explicitly */}
              <BlogTagSection
                tags={tags}
                form={form}
                setForm={setForm}
                selectedTags={form.tags || []}
              />

            </div>

          </div>

          <div className="mt-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={form.description || ""}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

        </div>

      </div>

    </div>
  );
}