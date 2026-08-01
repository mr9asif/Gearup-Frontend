import { axiosInstance } from "@/services/axios";

export interface CreateRentalPayload {
  gearId: string;
  quantity: number;
  startDate: Date;
  endDate: Date;
}

export const rentalService = {
  createRental: async (payload: CreateRentalPayload) => {
    const { data } = await axiosInstance.post("/rentals", {
      ...payload,
      startDate: payload.startDate,
      endDate: payload.endDate,
    });

    return data;
  },
};
