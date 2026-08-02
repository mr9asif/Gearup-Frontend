import { axiosInstance } from "@/services/axios";

export const adminService = {
  // Dashboard
  getDashboard: async () => {
    const response = await axiosInstance.get("/dashboard/admin");

    return response.data.data;
  },

  // Users
  getUsers: async () => {
    const response = await axiosInstance.get("/admin/users");

    return response.data.data;
  },

  getUser: async (id: string) => {
    const response = await axiosInstance.get(`/admin/users/${id}`);

    return response.data.data;
  },

  updateUserStatus: async (id: string, status: string) => {
    const response = await axiosInstance.patch(`/admin/users/${id}/status`, {
      status,
    });

    return response.data.data;
  },

  // Gears
  getGears: async () => {
    const response = await axiosInstance.get("/admin/gears");

    return response.data.data;
  },

  getGear: async (id: string) => {
    const response = await axiosInstance.get(`/admin/gears/${id}`);

    return response.data.data;
  },

  // Rentals
  getRentals: async () => {
    const response = await axiosInstance.get("/admin/rentals");

    return response.data.data;
  },

  getRental: async (id: string) => {
    const response = await axiosInstance.get(`/admin/rentals/${id}`);

    return response.data.data;
  },

  // Categories
  getCategories: async () => {
    const response = await axiosInstance.get("/admin/categories");

    return response.data.data;
  },
};
