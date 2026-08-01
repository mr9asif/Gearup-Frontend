import { axiosInstance } from "@/services/axios";
import { CustomerDashboard } from "../types/dashboard.types";

export const dashboardService = {
  getCustomerDashboard: async (): Promise<CustomerDashboard> => {
    const { data } = await axiosInstance.get("/dashboard/customer");

    return data.data;
  },
};
