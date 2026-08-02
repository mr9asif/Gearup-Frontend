import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/getErrorMessage";
import { categoryService } from "../service/category.api";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, name }: { id: string; name: string }) =>
      categoryService.updateCategory(id, { name }),

    onSuccess: () => {
      toast.success("Category updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["admin-categories"],
      });
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
