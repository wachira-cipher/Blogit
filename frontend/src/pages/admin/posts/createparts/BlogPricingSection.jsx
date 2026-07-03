export default function BlogPricingSection({ form, setForm }) {
  return (
    <div className="accordion-item border mb-4">
      <h2 className="accordion-header">
        <div
          className="accordion-button collapsed bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#SpacingTwo"
        >
          <h5 className="d-flex align-items-center">
            <i className="ti ti-life-buoy text-primary me-2"></i>
            Blog Settings
          </h5>
        </div>
      </h2>

      <div id="SpacingTwo" className="accordion-collapse collapse show">
        <div className="accordion-body border-top">

          <div className="row">

            {/* Publish Status */}
            <div className="col-lg-4 col-sm-6">
              <div className="mb-3">
                <label className="form-label">Publish Status</label>
                <select
                  className="form-control select"
                  value={form.status}
                  onChange={(e) =>
                    setForm({ ...form, status: e.target.value })
                  }
                >
                  <option value="Select">Select</option>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            {/* Visibility */}
            <div className="col-lg-4 col-sm-6">
              <div className="mb-3">
                <label className="form-label">Visibility</label>
                <select
                  className="form-control select"
                  value={form.visibility}
                  onChange={(e) =>
                    setForm({ ...form, visibility: e.target.value })
                  }
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="members Only">Members Only</option>
                </select>
              </div>
            </div>

            {/* Featured */}
            <div className="col-lg-4 col-sm-6">
              <div className="mb-3">
                <label className="form-label">Featured Post</label>
                <select
                  className="form-control select"
                  value={form.featured ? "Yes" : "No"}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      featured: e.target.value === "Yes"
                    })
                  }
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}