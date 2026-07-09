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

export const getCategoriesWithCount = () => {

  return http.get(
    "/categories/with-count"
  );

};

export const getCategoryPosts = (
    slug,
    page = 1,
    limit = 6
) => {

    return http.get(
        `/categories/${slug}/posts?page=${page}&limit=${limit}`
    );

};