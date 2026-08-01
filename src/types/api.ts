export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface ApiErrorResponse {
  success?: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
