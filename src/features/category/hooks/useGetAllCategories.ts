import { useQuery } from "@tanstack/react-query";

import { categoryService } from "../service/category.api";

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["categories-all"],
    queryFn: categoryService.getAllCategories,
  });
};
