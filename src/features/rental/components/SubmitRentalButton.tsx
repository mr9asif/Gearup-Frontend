"use client";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface SubmitRentalButtonProps {
  isPending: boolean;
}

export default function SubmitRentalButton({
  isPending,
}: SubmitRentalButtonProps) {
  return (
    <Button
      type="submit"
      className="w-full h-12 text-base"
      disabled={isPending}
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating Rental...
        </>
      ) : (
        "Create Rental Request"
      )}
    </Button>
  );
}
