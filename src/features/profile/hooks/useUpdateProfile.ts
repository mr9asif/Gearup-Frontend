import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/getErrorMessage";

import { profileService } from "../service/profile.api";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: profileService.updateProfile,

    onSuccess: () => {
      toast.success("Profile updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["current-user"],
      });
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
