import { axiosInstance } from "@/services/axios";

import { ApiResponse } from "@/types/api";

import { Gear } from "../types/home.types";
import { PaginatedResponse } from "../types/pagination";

export const homeService = {
  getFeaturedGear: async () => {
    const { data } = await axiosInstance.get<
      ApiResponse<PaginatedResponse<Gear>>
    >("/gear", {
      params: {
        page: 1,
        limit: 6,
      },
    });

    return data;
  },
};
