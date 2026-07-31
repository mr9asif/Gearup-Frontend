export interface Gear {
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
  };
}
