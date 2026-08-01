import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { rentalService } from "../service/rental.api";

export const useCompleteRental = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: rentalService.completeRental,

    onSuccess: () => {
      toast.success("Rental completed successfully.");

      queryClient.invalidateQueries({
        queryKey: ["provider-orders"],
      });

      queryClient.invalidateQueries({
        queryKey: ["customer-orders"],
      });
    },
  });
};
