import { PaginatedResponse } from "@/features/home/types/pagination";
import { axiosInstance } from "@/services/axios";

import { ApiResponse } from "@/types/api";
import { Gear } from "../types/gear.type";

export interface GetGearParams {
  search?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  isAvailable?: boolean;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

type ProviderGearResponse = {
  data: Gear[];
};
export const gearService = {
  getAllGear: async (params: GetGearParams) => {
    console.log("🚀 PARAMS SENT TO BACKEND:", params);
    const { data } = await axiosInstance.get<
      ApiResponse<PaginatedResponse<Gear>>
    >("/gear/all", {
      params,
    });

    console.log("📦 RESPONSE FROM BACKEND:", data);
    return data;
  },

  getGearById: async (id: string) => {
    const response = await axiosInstance.get(`/gear/${id}`);
    return response.data.data;
  },
  getMyGear: async () => {
    const { data } =
      await axiosInstance.get<ApiResponse<ProviderGearResponse>>(
        "/provider/gear",
      );

    return data.data.data;
  },
};
