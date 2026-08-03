export interface Profile {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
  role: "ADMIN" | "PROVIDER" | "CUSTOMER";
}

export interface UpdateProfilePayload {
  name: string;
  phone: string;
  profileImage?: File;
}

export interface UpdateProfileResponse {
  success: boolean;
  message: string;
  data: Profile;
}
