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

  createdAt: string;
  updatedAt: string;

  gear: {
    id: string;
    providerId: string;
    categoryId: string;

    name: string;
    brand: string;
    description: string;

    pricePerDay: string;
    stock: number;

    images: string[];

    isAvailable: boolean;

    createdAt: string;
    updatedAt: string;

    category: {
      id: string;
      name: string;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };

    provider: {
      id: string;
      name: string;
      email: string;
      phone: string;
      profileImage: string;
    };
  };

  payment: {
    id: string;
    orderId: string;
    transactionId: string;
    amount: string;
    provider: "STRIPE";
    status: "PENDING" | "COMPLETED" | "FAILED";
    paidAt: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}
