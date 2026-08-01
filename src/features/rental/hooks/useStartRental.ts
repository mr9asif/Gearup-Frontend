import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/getErrorMessage";
import { rentalService } from "../service/rental.api";

export const useStartRental = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: rentalService.startRental,

    onSuccess: () => {
      toast.success("Rental started successfully.");

      queryClient.invalidateQueries({
        queryKey: ["provider-orders"],
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
