import http from "./http";

// GET ALL POSTS (pagination supported)
export const getPosts = (params) => {
  return http.get("/posts", { params });
};

// GET SINGLE POST (by slug)
export const getPost = (slug) => {
  return http.get(`/posts/${slug}`);
};

// CREATE POST
export const createPost = (data) => {
  return http.post("/posts", data);
};

// UPDATE POST
export const updatePost = (id, data) => {
  return http.put(`/posts/${id}`, data);
};

// DELETE POST
export const deletePost = (id) => {
  return http.delete(`/posts/${id}`);
};

// DELETE SINGLE IMAGE FROM POST (DB + FILESYSTEM)
export const deletePostImage = (postId, filename) => {
  return http.delete(`/posts/${postId}/image`, {
    data: { filename }
  });
};

export const getDashboardStats = () => {
  return http.get("/users/dashboard/stats");
};