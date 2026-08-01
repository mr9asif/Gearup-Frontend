import { format } from "date-fns";

import { axiosInstance } from "@/services/axios";

export interface CreateRentalPayload {
  gearId: string;
  quantity: number;
  startDate: Date;
  endDate: Date;
}

export const rentalService = {
  createRental: async (payload: CreateRentalPayload) => {
    const { data } = await axiosInstance.post("/rentals/customer", {
      ...payload,
      startDate: format(payload.startDate, "yyyy-MM-dd"),
      endDate: format(payload.endDate, "yyyy-MM-dd"),
    });

    return data;
  },

  getCustomerOrders: async () => {
    const { data } = await axiosInstance.get("/rentals/customer/my-orders");

    return data.data;
  },

  getProviderOrders: async () => {
    const { data } = await axiosInstance.get("/rentals/provider/orders");
    console.log(data);
    return data.data;
  },

  acceptRental: async (orderId: string) => {
    const { data } = await axiosInstance.patch(
      `/rentals/provider/${orderId}/accept`,
    );

    return data;
  },

  rejectRental: async (orderId: string) => {
    const { data } = await axiosInstance.patch(
      `/rentals/provider/${orderId}/reject`,
    );

    return data;
  },
  startRental: async (orderId: string) => {
    const { data } = await axiosInstance.patch(
      `/rentals/provider/${orderId}/start`,
    );

    return data;
  },
  completeRental: async (orderId: string) => {
    const { data } = await axiosInstance.patch(
      `/rentals/provider/${orderId}/complete`,
    );

    return data.data;
  },
};
