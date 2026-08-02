import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/getErrorMessage";
import { categoryService } from "../service/category.api";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: categoryService.createCategory,

    onSuccess: () => {
      toast.success("Category created successfully.");

      queryClient.invalidateQueries({
        queryKey: ["admin-categories"],
      });
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
