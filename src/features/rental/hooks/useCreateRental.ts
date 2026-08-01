import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/getErrorMessage";

import { rentalService } from "../service/rental.api";

export const useCreateRental = () => {
  return useMutation({
    mutationFn: rentalService.createRental,

    onSuccess: () => {
      toast.success("Rental request sent successfully.");
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
