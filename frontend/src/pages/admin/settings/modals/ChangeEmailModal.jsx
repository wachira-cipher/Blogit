import React, { useState, useEffect } from "react";
import { updateEmail } from "../../../../api/user.api";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context/AuthContext";

export default function ChangeEmailModal() {

  const { user, setUser } = useAuth();

  const [form, setForm] = useState({
    currentEmail: "",
    newEmail: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // PREFILL FROM CONTEXT
  // =========================
  useEffect(() => {
    if (user?.email) {
      setForm((prev) => ({
        ...prev,
        currentEmail: user.email,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  // =========================
  // CLOSE MODAL CLEANLY
  // =========================
  const closeModalCleanly = () => {
    const modalEl = document.getElementById("email-verification");

    const modalInstance = window.bootstrap?.Modal.getInstance(modalEl);

    if (modalInstance) modalInstance.hide();

    setTimeout(() => {
      document.body.classList.remove("modal-open");
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
    }, 150);
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async () => {
    setError("");

    if (!form.newEmail || !form.password) {
      setError("All fields are required");
      return;
    }

    // ⚡ optional browser confirmation (safe alternative to prompt)
    const confirmChange = window.confirm(
      "Are you sure you want to change your email?"
    );

    if (!confirmChange) return;

    try {
      setLoading(true);

      const res = await updateEmail({
        newEmail: form.newEmail,
        password: form.password,
      });

      setUser(res.data.user); // 🔥 update global state

      toast.success(res.data.message || "Email updated");

      setForm((prev) => ({
        ...prev,
        newEmail: "",
        password: "",
      }));

      closeModalCleanly();

    } catch (err) {
      const msg = err.response?.data?.message || "Update failed";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade" id="email-verification">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <div className="page-title">
              <h4>Change Email</h4>
            </div>

            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
            >
              <span>&times;</span>
            </button>
          </div>

          <div className="modal-body">

            {error && (
              <div className="alert alert-danger py-2">
                {error}
              </div>
            )}

            <div className="row">

              {/* CURRENT EMAIL */}
              <div className="col-lg-12">
                <div className="input-blocks">
                  <label className="fw-medium">
                    Current Email <span className="text-danger">*</span>
                  </label>

                  <input
                    className="form-control"
                    type="text"
                    name="currentEmail"
                    value={form.currentEmail}
                    disabled
                  />
                </div>
              </div>

              {/* NEW EMAIL */}
              <div className="col-lg-12">
                <div className="input-blocks">
                  <label className="fw-medium">
                    New Email <span className="text-danger">*</span>
                  </label>

                  <input
                    className="form-control"
                    type="email"
                    name="newEmail"
                    value={form.newEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="input-blocks">
                  <p className="fs-14">
                    <i className="ti ti-info-circle me-1"></i>
                    New email only updates after password confirmation
                  </p>
                </div>
              </div>

              {/* PASSWORD */}
              <div className="col-lg-12">
                <div className="input-blocks">
                  <label className="fw-medium">
                    Current Password <span className="text-danger">*</span>
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}