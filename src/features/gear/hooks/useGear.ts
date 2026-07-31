import { useQuery } from "@tanstack/react-query";
import { gearService, GetGearParams } from "../service/gear.api";

// Get all gears
export const useGear = (params: GetGearParams) => {
  return useQuery({
    queryKey: ["gear", params],
    queryFn: () => gearService.getAllGear(params),
  });
};

// Get single gear by ID
export const useGearDetails = (id: string) => {
  return useQuery({
    queryKey: ["gear", id],
    queryFn: () => gearService.getGearById(id),
    enabled: !!id,
  });
};
