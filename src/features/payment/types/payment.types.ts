export interface Payment {
  id: string;
  orderId: string;
  transactionId: string;
  amount: string;
  provider: string;
  status: string;
  paidAt: string;
  createdAt: string;
  updatedAt: string;

  order: {
    id: string;
    quantity: number;
    startDate: string;
    endDate: string;
    status: string;

    gear: {
      id: string;
      name: string;
      brand: string;
      images: string[];

      category: {
        id: string;
        name: string;
      };
    };
  };
}
