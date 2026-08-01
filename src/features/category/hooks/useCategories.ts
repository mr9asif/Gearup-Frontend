import { useQuery } from "@tanstack/react-query";

import { categoryService } from "../service/category.api";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: categoryService.getAllCategories,
  });
};
