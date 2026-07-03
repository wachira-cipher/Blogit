import http from "./http";

// GET ALL
export const getCategories = () => {
  return http.get("/categories");
};

// GET ONE
export const getCategory = (id) => {
  return http.get(`/categories/${id}`);
};

// CREATE
export const createCategory = (data) => {
  return http.post("/categories", data);
};

// UPDATE
export const updateCategory = (id, data) => {
  return http.put(`/categories/${id}`, data);
};

// DELETE
export const deleteCategory = (id) => {
  return http.delete(`/categories/${id}`);
};