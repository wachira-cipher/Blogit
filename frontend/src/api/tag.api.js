import http from "./http";

// GET ALL
export const getTags = () => {
  return http.get("/tags");
};

// GET ONE
export const getTag = (id) => {
  return http.get(`/tags/${id}`);
};

// CREATE
export const createTag = (data) => {
  return http.post("/tags", data);
};

// UPDATE
export const updateTag = (id, data) => {
  return http.put(`/tags/${id}`, data);
};

// DELETE
export const deleteTag = (id) => {
  return http.delete(`/tags/${id}`);
};