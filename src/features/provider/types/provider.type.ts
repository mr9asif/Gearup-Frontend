export interface ProviderDashboard {
  totalGears: number;
  availableGears: number;
  activeRentals: number;
  completedRentals: number;
  totalRevenue: number;
  totalReviews: number;
  averageRating: number;

  recentBookings: {
    id: string;
    status: string;
    createdAt: string;
    customer: {
      name: string;
    };
    gear: {
      name: string;
    };
  }[];

  topGears: {
    id: string;
    name: string;
    images: string[];
    totalRentals: number;
  }[];
}
