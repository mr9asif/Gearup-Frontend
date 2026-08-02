// dashboard.type.ts

export interface AdminDashboard {
  totalUsers: number;
  totalProviders: number;
  totalCustomers: number;

  totalGears: number;
  availableGears: number;

  activeRentals: number;
  completedRentals: number;

  totalRevenue: string;

  totalCategories: number;

  totalReviews: number;
}
