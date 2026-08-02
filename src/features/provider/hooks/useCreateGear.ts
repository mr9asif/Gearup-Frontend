import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { providerService } from "../service/gear.provider.api";

export const useCreateGear = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: providerService.createGear,

    onSuccess: () => {
      toast.success("Gear created successfully.");

      queryClient.invalidateQueries({
        queryKey: ["provider", "gear"],
      });
    },
  });
};
