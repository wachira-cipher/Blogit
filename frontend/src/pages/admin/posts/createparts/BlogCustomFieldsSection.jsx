import { useEffect } from "react";
import { useAuth } from "../../../../context/AuthContext";

export default function BlogCustomFieldsSection({ form, setForm }) {

  const { user } = useAuth();

  // =========================
  // AUTO-FILL AUTHOR ON LOAD
  // =========================
  useEffect(() => {
    if (user?.fullname || user?.name) {
      setForm(prev => ({
        ...prev,
        meta: {
          ...prev.meta,
          author: user.fullname || user.name
        }
      }));
    }
  }, [user, setForm]);

  return (
    <div className="accordion-item border mb-4">

      <h2 className="accordion-header">
        <div
          className="accordion-button collapsed bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#SpacingFour"
        >
          <h5 className="d-flex align-items-center">
            <i className="ti ti-list text-primary me-2"></i>
            Blog Meta Fields
          </h5>
        </div>
      </h2>

      <div id="SpacingFour" className="accordion-collapse collapse show">
        <div className="accordion-body border-top">

          <div className="row">

            {/* AUTHOR (LOCKED / READ ONLY) */}
            <div className="col-sm-6">
              <label>Author</label>
              <input
                className="form-control"
                value={form.meta?.author || ""}
                readOnly
                disabled
              />
            </div>

          </div>

          <div className="row mt-3">

            <div className="col-sm-6">
              <label>Created Date</label>
              <input
                type="date"
                className="form-control"
                value={form.meta?.createdDate || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    meta: {
                      ...form.meta,
                      createdDate: e.target.value
                    }
                  })
                }
              />
            </div>

            <div className="col-sm-6">
              <label>Scheduled Publish</label>
              <input
                type="date"
                className="form-control"
                value={form.meta?.scheduledDate || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    meta: {
                      ...form.meta,
                      scheduledDate: e.target.value
                    }
                  })
                }
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}