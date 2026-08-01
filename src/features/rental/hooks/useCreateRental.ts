import { useMutation } from "@tanstack/react-query";
import { rentalService } from "../service/rental.api";

export const useCreateRental = () => {
  return useMutation({
    mutationFn: rentalService.createRental,
  });
};
