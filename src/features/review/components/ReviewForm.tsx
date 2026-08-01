"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import RatingStars from "./RatingStars";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import { useCreateReview } from "../hooks/useCreateReview";
import { useUpdateReview } from "../hooks/useUpdateReview";

interface ReviewFormProps {
  rentalId?: string;
  reviewId?: string;
  initialRating?: number;
  initialComment?: string;
  isEdit?: boolean;
  onSuccess?: () => void;
}

interface ReviewFormValues {
  rating: number;
  comment: string;
}

export default function ReviewForm({
  rentalId,
  reviewId,
  initialRating = 5,
  initialComment = "",
  isEdit = false,
}: ReviewFormProps) {
  const createReview = useCreateReview();
  const updateReview = useUpdateReview();

  const { register, handleSubmit, setValue, watch } = useForm<ReviewFormValues>(
    {
      defaultValues: {
        rating: initialRating,
        comment: initialComment,
      },
    },
  );

  const rating = watch("rating");

  useEffect(() => {
    setValue("rating", initialRating);
    setValue("comment", initialComment);
  }, [initialRating, initialComment, setValue]);

  const onSubmit = (values: ReviewFormValues) => {
    if (isEdit && reviewId) {
      updateReview.mutate({
        reviewId,
        payload: {
          rating: values.rating,
          comment: values.comment,
        },
      });

      return;
    }

    if (!rentalId) return;

    createReview.mutate({
      rentalId,
      rating: values.rating,
      comment: values.comment,
    });
  };

  const isSubmitting = createReview.isPending || updateReview.isPending;

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle>{isEdit ? "Update Review" : "Leave a Review"}</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Rating</label>

            <RatingStars
              value={rating}
              onChange={(value) => setValue("rating", value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Comment</label>

            <Textarea
              rows={5}
              placeholder="Share your experience..."
              {...register("comment", {
                required: true,
              })}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting
              ? "Saving..."
              : isEdit
                ? "Update Review"
                : "Submit Review"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
