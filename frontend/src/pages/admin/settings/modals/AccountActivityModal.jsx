import React, { useEffect, useState } from "react";
import { getSessions, revokeSession } from "../../../../api/user.api";
import { toast } from "react-toastify";

export default function AccountActivityModal() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);

  // FETCH SESSIONS
  const fetchSessions = async () => {
    try {
      const res = await getSessions();
      setSessions(res.data.sessions || []);
    } catch (err) {
      toast.error("Failed to load sessions");
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  // LOGOUT DEVICE
  const handleLogoutDevice = async (id) => {
    try {
      setLoading(true);

      const res = await revokeSession(id);

      setSessions(res.data.sessions);

      toast.success(res.data.message);
    } catch (err) {
      toast.error("Failed to logout device");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal device-management-modal fade" id="account-activity">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          <div className="modal-header">
            <div className="page-title">
              <h4>Account Activity</h4>
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

            <div className="table-responsive">
              <table className="table">

                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Device</th>
                    <th>Location</th>
                    <th>IP Address</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {sessions.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No active sessions
                      </td>
                    </tr>
                  ) : (
                    sessions.map((s) => (
                      <tr key={s._id}>
                        <td>{new Date(s.createdAt).toLocaleString()}</td>
                        <td>{s.device}</td>
                        <td>{s.location}</td>
                        <td>{s.ip}</td>

                        <td>
                          <button
                            className="btn"
                            onClick={() => handleLogoutDevice(s._id)}
                            disabled={loading}
                          >
                            <i className="ti ti-logout"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>

              </table>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}