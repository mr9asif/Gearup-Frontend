import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/getErrorMessage";
import { reviewService } from "../service/review.api";

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: reviewService.createReview,

    onSuccess: () => {
      toast.success("Review submitted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["my-reviews"],
      });

      queryClient.invalidateQueries({
        queryKey: ["customer-orders"],
      });
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
