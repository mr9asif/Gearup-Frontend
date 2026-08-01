import { useQuery } from "@tanstack/react-query";

import { paymentService } from "../service/payment.api";

export const usePayments = () => {
  return useQuery({
    queryKey: ["payments"],
    queryFn: paymentService.getPayments,
  });
};
