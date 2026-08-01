import { axiosInstance } from "@/services/axios";
import { Payment } from "../types/payment.types";

export const paymentService = {
  createPayment: async (orderId: string) => {
    const { data } = await axiosInstance.post("/payments/create", {
      orderId,
    });

    return data.data;
  },

  getPayments: async (): Promise<Payment[]> => {
    const { data } = await axiosInstance.get("/payments");

    return data.data;
  },
};
