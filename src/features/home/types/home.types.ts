export interface Gear {
  id: string;
  name: string;
  brand: string;
  description: string;
  pricePerDay: string;
  stock: number;
  isAvailable: boolean;
  images: string[];

  averageRating?: number;
  totalReviews?: number;

  provider: {
    id: string;
    name: string;
  };

  category: {
    id: string;
    name: string;
  };
}
