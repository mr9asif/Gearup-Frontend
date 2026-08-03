import { axiosInstance } from "@/services/axios";

export const categoryService = {
  getCategories: async (params?: { page?: number; limit?: number }) => {
    const response = await axiosInstance.get("/categories", {
      params,
    });

    return response.data.data.data;
  },
  // For Home / Public
  getAllCategories: async () => {
    const response = await axiosInstance.get("/categories");

    return response.data.data.data;
  },
  createCategory: async (payload: { name: string; description: string }) => {
    const response = await axiosInstance.post("/categories", payload);

    return response.data.data;
  },

  updateCategory: async (
    id: string,
    payload: {
      name: string;
      description: string;
    },
  ) => {
    const response = await axiosInstance.patch(`/categories/${id}`, payload);

    return response.data.data;
  },

  deleteCategory: async (id: string) => {
    const response = await axiosInstance.delete(`/categories/${id}`);

    return response.data.data;
  },
};
