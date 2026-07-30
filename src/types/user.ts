export type UserRole = "ADMIN" | "CUSTOMER" | "PROVIDER";

export type UserStatus = "ACTIVE" | "SUSPENDED";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  status: UserStatus;
  profileImage: string | null;
}
