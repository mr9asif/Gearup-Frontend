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

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: "ADMIN" | "CUSTOMER" | "PROVIDER";
  status: "ACTIVE" | "SUSPENDED";
  profileImage: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AdminUsersResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };

  data: AdminUser[];
}

export interface Rental {
  id: string;
  quantity: number;
  totalPrice: number;
  status: string;
  paymentStatus: string;

  customer: {
    id: string;
    name: string;
  };

  gear: {
    id: string;
    name: string;
  };
}
