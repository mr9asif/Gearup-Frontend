"use client";

import { Dialog } from "@base-ui/react/dialog";

import { EditableReview } from "../types/review.type";
import ReviewForm from "./ReviewForm";

interface LeaveReviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  rentalId?: string;

  review?: EditableReview;
}

export default function LeaveReviewModal({
  open,
  onOpenChange,
  rentalId,
  review,
}: LeaveReviewModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />

        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-background p-6 shadow-2xl">
          <Dialog.Title className="mb-6 text-2xl font-bold">
            {review ? "Update Review" : "Leave a Review"}
          </Dialog.Title>

          {review ? (
            <ReviewForm
              isEdit
              reviewId={review.id}
              initialRating={review.rating}
              initialComment={review.comment}
            />
          ) : (
            rentalId && <ReviewForm rentalId={rentalId} />
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
