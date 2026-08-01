"use client";

import { MessageSquareText } from "lucide-react";
import { useState } from "react";

import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import { useMyReviews } from "../hooks/useMyReviews";
import { Review } from "../types/review.type";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function MyReviewsPage() {
  const { data: reviews, isLoading } = useMyReviews();

  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  if (isLoading) {
    return (
      <div className="flex h-80 items-center justify-center">
        Loading reviews...
      </div>
    );
  }

  if (!reviews?.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center">
        <MessageSquareText className="mb-4 h-12 w-12 text-muted-foreground" />

        <h2 className="text-2xl font-semibold">No Reviews Yet</h2>

        <p className="text-muted-foreground">
          Your submitted reviews will appear here.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8">
        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold">My Reviews</h1>

          <p className="text-muted-foreground">
            Manage the reviews you have shared for rented gear.
          </p>
        </div>

        {/* Reviews */}

        <div className="grid gap-6 lg:grid-cols-2">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              onEdit={setSelectedReview}
            />
          ))}
        </div>
      </div>

      {/* Edit Review Dialog */}

      <Dialog
        open={!!selectedReview}
        onOpenChange={() => setSelectedReview(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Update Review</DialogTitle>
          </DialogHeader>

          {selectedReview && (
            <ReviewForm
              isEdit
              reviewId={selectedReview.id}
              initialRating={selectedReview.rating}
              initialComment={selectedReview.comment}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
