export function GearCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border bg-card">
      {/* Image */}
      <div className="aspect-[4/3] animate-pulse bg-muted" />

      <div className="space-y-4 p-6">
        {/* Category + Rating */}
        <div className="flex items-center justify-between">
          <div className="h-6 w-20 animate-pulse rounded-full bg-muted" />

          <div className="h-5 w-10 animate-pulse rounded bg-muted" />
        </div>

        {/* Title */}
        <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />

        {/* Brand */}
        <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />

        {/* Provider */}
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />

        {/* Price + Button */}
        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <div className="mb-2 h-7 w-20 animate-pulse rounded bg-muted" />
            <div className="h-4 w-12 animate-pulse rounded bg-muted" />
          </div>

          <div className="h-10 w-28 animate-pulse rounded-lg bg-muted" />
        </div>
      </div>
    </div>
  );
}
