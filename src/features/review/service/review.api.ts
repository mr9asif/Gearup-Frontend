import { axiosInstance } from "@/services/axios";

import {
  CreateReviewPayload,
  Review,
  UpdateReviewPayload,
} from "../types/review.type";

export const reviewService = {
  // Get My Reviews
  getMyReviews: async (): Promise<Review[]> => {
    const { data } = await axiosInstance.get("/reviews/my");

    return data.data;
  },

  // Create Review
  createReview: async (payload: CreateReviewPayload) => {
    const { data } = await axiosInstance.post("/reviews/create", payload);

    return data.data;
  },

  // Update Review
  updateReview: async ({
    reviewId,
    payload,
  }: {
    reviewId: string;
    payload: UpdateReviewPayload;
  }) => {
    const { data } = await axiosInstance.patch(`/reviews/${reviewId}`, payload);

    return data.data;
  },
};
