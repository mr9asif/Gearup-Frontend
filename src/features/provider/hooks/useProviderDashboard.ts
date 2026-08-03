import { useQuery } from "@tanstack/react-query";

import { providerService } from "../service/provider.api";

export const useProviderDashboard = () => {
  return useQuery({
    queryKey: ["provider-dashboard"],
    queryFn: providerService.getDashboard,
  });
};
