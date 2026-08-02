import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../service/category.api";

interface CategoryParams {
  page?: number;
  limit?: number;
}

export const useGetCategories = (params?: CategoryParams) => {
  return useQuery({
    queryKey: ["admin-categories", params],
    queryFn: () => categoryService.getCategories(params),
  });
};
