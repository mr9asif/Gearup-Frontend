import { axiosInstance } from "@/services/axios";

export const paymentService = {
  createPayment: async (orderId: string) => {
    const { data } = await axiosInstance.post("/payments/create", {
      orderId,
    });

    return data.data;
  },
};
