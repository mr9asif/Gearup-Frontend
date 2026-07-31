import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/query-keys";
import { homeService } from "../service/home.service";

export const useFeaturedGear = () => {
  return useQuery({
    queryKey: QUERY_KEYS.GEAR,
    queryFn: homeService.getFeaturedGear,
  });
};
