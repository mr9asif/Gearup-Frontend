import { useQuery } from "@tanstack/react-query";
import { providerService } from "../service/gear.provider.api";

export const useProviderGear = (id: string) => {
  return useQuery({
    queryKey: ["provider-gear", id],
    queryFn: () => providerService.getMyGearById(id),
    enabled: !!id,
  });
};
