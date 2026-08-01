import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/getErrorMessage";
import { paymentService } from "../service/payment.api";

export const useCreatePayment = () => {
  return useMutation({
    mutationFn: paymentService.createPayment,

    onSuccess: (data) => {
      window.location.href = data.checkoutUrl;
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
