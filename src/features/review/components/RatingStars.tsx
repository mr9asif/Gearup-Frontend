"use client";

import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface RatingStarsProps {
  value: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
  size?: number;
}

export default function RatingStars({
  value,
  onChange,
  readonly = false,
  size = 26,
}: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          key={rating}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(rating)}
          className={cn(
            "transition-all duration-200",
            !readonly && "hover:scale-125 active:scale-95",
          )}
        >
          <Star
            size={size}
            className={cn(
              "transition-colors duration-200",
              rating <= value
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground",
            )}
          />
        </button>
      ))}
    </div>
  );
}
