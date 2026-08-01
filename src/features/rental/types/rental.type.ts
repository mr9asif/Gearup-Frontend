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

export interface RentalOrder {
  id: string;
  customerId: string;
  gearId: string;

  quantity: number;
  startDate: string;
  endDate: string;
  totalAmount: string;

  status: "PLACED" | "CONFIRMED" | "PICKED_UP" | "RETURNED" | "CANCELLED";

  customer: {
    id: string;
    name: string;
    email: string;
    phone: string;
    profileImage: string;
  };

  gear: {
    id: string;
    name: string;
    brand: string;
    description: string;
    pricePerDay: string;
    stock: number;
    images: string[];

    category: {
      id: string;
      name: string;
    };
    provider: {
      name: string;
    };
  };

  payment: {
    id: string;
    amount: string;
    status: "PENDING" | "COMPLETED" | "FAILED";
  } | null;
}
