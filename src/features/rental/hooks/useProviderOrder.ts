import { useQuery } from "@tanstack/react-query";

import { rentalService } from "../service/rental.api";

export const useProviderOrders = () => {
  return useQuery({
    queryKey: ["provider-orders"],
    queryFn: rentalService.getProviderOrders,
  });
};
