import { useQuery } from "@tanstack/react-query";
import { gearService, GetGearParams } from "../service/gear.api";

export const useGear = (params: GetGearParams) => {
  return useQuery({
    queryKey: ["gear", params],
    queryFn: () => gearService.getAllGear(params),
  });
};
