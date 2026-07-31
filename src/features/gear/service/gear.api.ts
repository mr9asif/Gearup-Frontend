import { PaginatedResponse } from "@/features/home/types/pagination";
import { axiosInstance } from "@/services/axios";

import { ApiResponse } from "@/types/api";
import { Gear } from "../types/gear.type";

export interface GetGearParams {
  search?: string;
  categoryId?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  isAvailable?: boolean;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export const gearService = {
  getAllGear: async (params: GetGearParams) => {
    const { data } = await axiosInstance.get<
      ApiResponse<PaginatedResponse<Gear>>
    >("/gear/all", {
      params,
    });

    return data;
  },
};
