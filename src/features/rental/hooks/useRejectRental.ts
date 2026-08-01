import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/getErrorMessage";
import { rentalService } from "../service/rental.api";

export const useRejectRental = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: rentalService.rejectRental,

    onSuccess: () => {
      toast.success("Rental rejected successfully.");

      queryClient.invalidateQueries({
        queryKey: ["provider-orders"],
      });
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
