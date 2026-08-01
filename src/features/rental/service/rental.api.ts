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
};
