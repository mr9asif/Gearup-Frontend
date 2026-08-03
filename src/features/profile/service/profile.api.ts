import { axiosInstance } from "@/services/axios";
import {
  UpdateProfilePayload,
  UpdateProfileResponse,
} from "../types/profile.type";

const updateProfile = async (
  payload: UpdateProfilePayload,
): Promise<UpdateProfileResponse> => {
  const formData = new FormData();

  formData.append("name", payload.name);

  if (payload.phone) {
    formData.append("phone", payload.phone);
  }

  if (payload.profileImage) {
    formData.append("profileImage", payload.profileImage);
  }

  const { data } = await axiosInstance.patch(
    "/profile/updateProfile",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return data.data;
};

export const profileService = {
  updateProfile,
};
