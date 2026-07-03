import React, { useState } from "react";
import { changePassword } from "../../../../api/user.api";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context/AuthContext";

export default function ChangePasswordModal() {
  const { setUser } = useAuth();
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError(""); // clear error on typing
  };
  const closeModalCleanly = () => {
    const modalEl = document.getElementById("change-password");

    if (!modalEl) return;

    const modalInstance =
      window.bootstrap?.Modal.getInstance(modalEl);

    if (modalInstance) {
      modalInstance.hide();
    }

    // 🔥 HARD CLEANUP (fix stuck backdrop issue)
    setTimeout(() => {
      document.body.classList.remove("modal-open");

      document
        .querySelectorAll(".modal-backdrop")
        .forEach((el) => el.remove());
    }, 150);
  };
  const handleSubmit = async () => {
    setError("");

    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await changePassword({
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      });

      // update auth context + localStorage
      setUser(res.data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user));

      toast.success(res.data.message);

      toast.success("Password updated successfully");

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      closeModalCleanly();

    } catch (err) {
      const msg =
        err.response?.data?.message || "Update failed";

      setError(msg); // 👈 inline error
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade" id="change-password">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          {/* HEADER */}
          <div className="modal-header">
            <div className="page-title">
              <h4>Change Password</h4>
            </div>

            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
            >
              <span>&times;</span>
            </button>
          </div>

          {/* BODY */}
          <div className="modal-body">

            {/* ERROR DISPLAY */}
            {error && (
              <div className="alert alert-danger py-2">
                {error}
              </div>
            )}

            <div className="row">

              {/* CURRENT PASSWORD */}
              <div className="col-lg-12">
                <div className="input-blocks">
                  <label className="fw-medium">
                    Current Password <span className="text-danger">*</span>
                  </label>

                  <div className="pass-group">
                    <input
                      type={show.current ? "text" : "password"}
                      className="form-control settings-pass-input"
                      name="currentPassword"
                      value={form.currentPassword}
                      onChange={handleChange}
                    />

                    <span
                      className="toggle-password ti ti-eye-off"
                      onClick={() =>
                        setShow((p) => ({
                          ...p,
                          current: !p.current,
                        }))
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>

              {/* NEW PASSWORD */}
              <div className="col-lg-12">
                <div className="input-blocks">
                  <label className="fw-medium">
                    New Password <span className="text-danger">*</span>
                  </label>

                  <div className="pass-group">
                    <input
                      type={show.new ? "text" : "password"}
                      className="form-control settings-pass-inputs"
                      name="newPassword"
                      value={form.newPassword}
                      onChange={handleChange}
                    />

                    <span
                      className="toggle-passwords ti ti-eye-off"
                      onClick={() =>
                        setShow((p) => ({
                          ...p,
                          new: !p.new,
                        }))
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>

              {/* CONFIRM */}
              <div className="col-lg-12">
                <div className="input-blocks mb-0">
                  <label className="fw-medium">
                    Confirm Password <span className="text-danger">*</span>
                  </label>

                  <div className="pass-group">
                    <input
                      type={show.confirm ? "text" : "password"}
                      className="form-control settings-pass-inputa"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                    />

                    <span
                      className="toggle-passworda ti ti-eye-off"
                      onClick={() =>
                        setShow((p) => ({
                          ...p,
                          confirm: !p.confirm,
                        }))
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </div>
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
              onClick={handleSubmit}
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}