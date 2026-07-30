"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>

      <p className="mt-3 text-muted-foreground">
        An unexpected error occurred.
      </p>

      <Button onClick={reset} className="mt-6">
        Try Again
      </Button>
    </div>
  );
}
