import http from "./http";

// =========================
// GET CURRENT USER PROFILE
// =========================
export const getProfile = () => {
  return http.get("/users/me");
};

// =========================
// UPDATE PROFILE
// =========================
export const updateProfile = (data) => {
  return http.put("/users/profile", data);
};

// =========================
// UPDATE AVATAR (if you add file upload later)
// =========================
export const updateAvatar = (formData) => {
  return http.put("/users/avatar", formData);
};

// =========================
// CHANGE PASSWORD
// =========================
export const changePassword = (data) => {
  return http.put("/users/change-password", data);
};


// =========================
// TOGGLE 2FA
// =========================
export const toggleTwoFactor = () => {
  return http.put("/users/two-factor");
};
// =========================
// UPDATE PHONE NUMBER
// =========================
export const updatePhone = (data) => {
  return http.put("/users/update-phone", data);
};
// =========================
// UPDATE EMAIL
// =========================
export const updateEmail = (data) => {
  return http.put("/users/update-email", data);
};

export const getSessions = () => http.get("/users/sessions");

export const revokeSession = (id) =>
  http.delete(`/users/sessions/${id}`);

export const revokeAllSessions = () =>
  http.delete("/users/sessions");

export const deactivateAccount = () => {
  return http.put("/users/deactivate");
};

export const deleteAccount = (data) => {
  return http.put("/users/delete-account", data);
};

export const permanentDeleteAccount = (id) => {
  return http.delete(`/admin/users/${id}`);
};