export interface CreateRentalPayload {
  gearId: string;
  quantity: number;
  startDate: string;
  endDate: string;
}

export interface Rental {
  id: string;
  customerId: string;
  gearId: string;
  quantity: number;
  startDate: string;
  endDate: string;
  totalAmount: string;
  status: "PLACED" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
  createdAt: string;
  updatedAt: string;
}
