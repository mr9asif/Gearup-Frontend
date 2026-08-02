import { Gear } from "@/features/gear/types/gear.type";

import { axiosInstance } from "@/services/axios";
import { ApiResponse } from "@/types/api";
import { CreateGearFormValues } from "../schema/gear.schema";

type ProviderGearResponse = {
  data: Gear[];
};

export const providerService = {
  getMyGear: async () => {
    const { data } =
      await axiosInstance.get<ApiResponse<ProviderGearResponse>>(
        "/provider/gear",
      );

    return data.data.data;
  },

  createGear: async (payload: CreateGearFormValues) => {
    const { data } = await axiosInstance.post<ApiResponse<Gear>>(
      "/provider/gear",
      payload,
    );

    return data.data;
  },
};
