"use client";

import { format } from "date-fns";
import { CalendarDays, Pencil } from "lucide-react";

import { Review } from "../types/review.type";
import RatingStars from "./RatingStars";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ReviewCardProps {
  review: Review;
  onEdit?: (review: Review) => void;
}

export default function ReviewCard({ review, onEdit }: ReviewCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={review.gear.images[0]}
              alt={review.gear.name}
              className="h-16 w-16 rounded-xl object-cover"
            />

            <div>
              <h2 className="text-lg font-semibold">{review.gear.name}</h2>

              <p className="text-sm text-muted-foreground">
                ৳{Number(review.gear.pricePerDay).toLocaleString()} / day
              </p>
            </div>
          </div>

          {onEdit && (
            <Button
              size="icon"
              variant="outline"
              onClick={() => onEdit(review)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <RatingStars value={review.rating} readonly />

        <p className="leading-7 text-muted-foreground">{review.comment}</p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          Reviewed on {format(new Date(review.createdAt), "dd MMM yyyy")}
        </div>
      </CardContent>
    </Card>
  );
}
