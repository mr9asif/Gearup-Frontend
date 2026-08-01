import { useQuery } from "@tanstack/react-query";

import { rentalService } from "../service/rental.api";

export const useCustomerRentals = () => {
  return useQuery({
    queryKey: ["customer-rentals"],
    queryFn: rentalService.getCustomerOrders,
  });
};
