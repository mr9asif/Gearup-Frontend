import { useQuery } from "@tanstack/react-query";

import { reviewService } from "../service/review.api";

export const useMyReviews = () => {
  return useQuery({
    queryKey: ["my-reviews"],
    queryFn: reviewService.getMyReviews,
  });
};
