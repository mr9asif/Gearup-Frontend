import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/getErrorMessage";
import { categoryService } from "../service/category.api";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: categoryService.deleteCategory,

    onSuccess: () => {
      toast.success("Category deleted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["admin-categories"],
      });
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
