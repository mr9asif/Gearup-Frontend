import { axiosInstance } from "@/services/axios";
import { ProviderDashboard } from "../types/provider.type";

const getDashboard = async (): Promise<ProviderDashboard> => {
  const { data } = await axiosInstance.get("/dashboard/provider");

  console.log(data);
  return data.data;
};

export const providerService = {
  getDashboard,
};
