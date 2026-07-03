import React, { useState } from "react";
import { deleteAccount } from "../../../../api/user.api";
import { useAuth } from "../../../../context/AuthContext";
import { toast } from "react-toastify";

export default function DeleteAccountModal() {
  const { logout } = useAuth();

  const [reason, setReason] = useState("No longer using the service");
  const [customReason, setCustomReason] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // HANDLE DELETE
  // =========================
  const handleDelete = async () => {
    setError("");

    if (!password) {
      setError("Password is required");
      return;
    }

    try {
      setLoading(true);

      const finalReason =
        reason === "Other (Please specify)" ? customReason : reason;

      await deleteAccount({
        password,
        reason: finalReason,
      });

      toast.success("Account deactivated successfully");

      // 🔥 LOGOUT ALL DEVICES
      logout();

    } catch (err) {
      const msg = err.response?.data?.message || "Failed to delete account";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal delete-account-modal fade" id="delete-account">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          <div className="modal-header">
            <div className="page-title">
              <h4>Delete Account</h4>
            </div>

            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
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

            <div className="delete-header">
              <h4 className="fs-16 fw-medium mb-1">
                Why Are You Deleting Your Account?
              </h4>

              <p className="fs-16">
                We're sorry to see you go! Please let us know your reason.
              </p>
            </div>

            {/* OPTIONS */}
            {[
              "No longer using the service",
              "Privacy concerns",
              "Too many notifications/emails",
              "Poor user experience",
              "Other (Please specify)",
            ].map((item, i) => (
              <div className="form-check d-flex mb-2" key={i}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="delete"
                  checked={reason === item}
                  onChange={() => setReason(item)}
                  id={`del-${i}`}
                />
                <label className="form-check-label fs-14 ms-2" htmlFor={`del-${i}`}>
                  <span className="text-gray-9 fw-medium">{item}</span>
                </label>
              </div>
            ))}

            {/* CUSTOM REASON */}
            {reason === "Other (Please specify)" && (
              <div className="ms-4">
                <textarea
                  className="form-control"
                  rows="3"
                  value={customReason}
                  onChange={(e) => setCustomReason(e.target.value)}
                />
              </div>
            )}

            {/* PASSWORD CONFIRM */}
            <div className="mt-3">
              <label className="fw-medium">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
              className="btn btn-danger"
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Delete Account"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}