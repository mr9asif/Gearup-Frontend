import { Gear } from "@/features/gear/types/gear.type";

import { axiosInstance } from "@/services/axios";
import { ApiResponse } from "@/types/api";

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

  // 👇 ADD THIS
  getMyGearById: async (id: string) => {
    const { data } = await axiosInstance.get<ApiResponse<Gear>>(
      `/provider/gear/${id}`,
    );

    return data.data;
  },

  createGear: async (payload: FormData) => {
    const { data } = await axiosInstance.post("/provider/gear", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data.data;
  },

  updateGear: async ({ id, formData }: { id: string; formData: FormData }) => {
    const { data } = await axiosInstance.patch(
      `/provider/gear/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return data.data;
  },
};
