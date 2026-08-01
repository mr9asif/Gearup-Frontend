export interface Review {
  id: string;
  customerId: string;
  gearId: string;
  rentalId: string;

  rating: number;
  comment: string;

  createdAt: string;
  updatedAt: string;

  gear: {
    id: string;
    name: string;
    images: string[];
    pricePerDay: string;
  };
}
export interface CreateReviewPayload {
  rentalId: string;
  rating: number;
  comment: string;
}

export interface UpdateReviewPayload {
  rating: number;
  comment: string;
}
