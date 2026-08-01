import { useQuery } from "@tanstack/react-query";

import { rentalService } from "../service/rental.api";
console.log(rentalService);
console.log(rentalService.getProviderOrders);
export const useProviderOrders = () => {
  return useQuery({
    queryKey: ["provider-orders"],
    queryFn: rentalService.getProviderOrders,
  });
};
