import { useQuery } from "@tanstack/react-query";
import { gearService } from "../service/gear.api";

export const useMyGear = () => {
  return useQuery({
    queryKey: ["provider", "gear"],
    queryFn: gearService.getMyGear,
  });
};
