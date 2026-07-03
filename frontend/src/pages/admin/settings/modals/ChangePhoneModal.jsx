import React, { useState, useEffect } from "react";
import { updatePhone } from "../../../../api/user.api";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context/AuthContext";

export default function ChangePhoneModal() {

  const { user, setUser } = useAuth();

  const [form, setForm] = useState({
    currentPhone: "",
    newPhone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // =========================
  // SYNC USER PHONE FROM CONTEXT
  // =========================
  useEffect(() => {
    if (user?.phone) {
      setForm((prev) => ({
        ...prev,
        currentPhone: user.phone,
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
    const modalEl = document.getElementById("phone-verification");

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

    if (!form.newPhone || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await updatePhone({
        newPhone: form.newPhone,
        password: form.password,
      });

      // 🔥 UPDATE GLOBAL USER (REAL TIME UI UPDATE)
      setUser(res.data.user);

      toast.success(res.data.message || "Phone updated successfully");

      // reset new fields only
      setForm((prev) => ({
        ...prev,
        newPhone: "",
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
    <div className="modal fade" id="phone-verification">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <div className="page-title">
              <h4>Change Phone Number</h4>
            </div>

            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">

            {error && (
              <div className="alert alert-danger py-2">
                {error}
              </div>
            )}

            <div className="row">

              {/* CURRENT PHONE */}
              <div className="col-lg-12">
                <div className="input-blocks">
                  <label className="fw-medium">
                    Current Phone Number <span className="text-danger">*</span>
                  </label>

                  <input
                    className="form-control"
                    name="currentPhone"
                    value={form.currentPhone}
                    type="text"
                    disabled
                  />
                </div>
              </div>

              {/* NEW PHONE */}
              <div className="col-lg-12">
                <div className="input-blocks">
                  <label className="fw-medium">
                    New Phone Number <span className="text-danger">*</span>
                  </label>

                  <input
                    className="form-control"
                    name="newPhone"
                    value={form.newPhone}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="input-blocks">
                  <p className="fs-14">
                    <i className="ti ti-info-circle me-1"></i>
                    New phone number only updated once you verified
                  </p>
                </div>
              </div>

              {/* PASSWORD */}
              <div className="col-lg-12">
                <div className="input-blocks mb-0">
                  <label className="fw-medium">
                    Confirm Password <span className="text-danger">*</span>
                  </label>

                  <div className="pass-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control settings-pass-inputa"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                    />

                    <span
                      className="toggle-passworda ti ti-eye-off"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  </div>
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