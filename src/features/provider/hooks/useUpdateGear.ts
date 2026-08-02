import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { providerService } from "../service/gear.provider.api";

export const useUpdateGear = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: providerService.updateGear,

    onSuccess: () => {
      toast.success("Gear updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["provider", "gear"],
      });
    },
  });
};
