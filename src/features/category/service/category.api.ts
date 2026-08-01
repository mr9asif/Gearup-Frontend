import { axiosInstance } from "@/services/axios";
import { Category } from "../types/category.type";

export const categoryService = {
  getAllCategories: async (): Promise<Category[]> => {
    const { data } = await axiosInstance.get("/categories");

    return data.data.data;
  },
};
