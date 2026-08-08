"use client";

import { useAuth } from "@/ hooks/useAuth";
import { useGearDetails } from "@/features/gear/hooks/useGear";
import { Review } from "@/features/gear/types/gear.type";
import AppLoader from "@/shared/common/AppLoader";

import {
  BadgeCheck,
  Boxes,
  CalendarDays,
  CircleDollarSign,
  Package,
  Star,
  Tag,
} from "lucide-react";

import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function GearDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const pathname = usePathname();

  const { data: gear, isLoading } = useGearDetails(id);

  const { user, isAuthenticated } = useAuth();

  const [selectedImage, setSelectedImage] = useState(0);

  // =====================================================
  // LOADING
  // =====================================================

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <AppLoader />
      </main>
    );
  }

  // =====================================================
  // NOT FOUND
  // =====================================================

  if (!gear) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Gear not found</h1>

          <p className="mt-2 text-muted-foreground">
            The equipment you are looking for could not be found.
          </p>
        </div>
      </main>
    );
  }

  // =====================================================
  // RENT
  // =====================================================

  const handleRent = () => {
    // Guest
    if (!isAuthenticated) {
      router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }

    // Provider
    if (user?.role === "PROVIDER") {
      toast.error("Providers cannot rent gear.");
      return;
    }

    // Admin
    if (user?.role === "ADMIN") {
      toast.error("Admin cannot rent gear.");
      return;
    }

    // Customer
    router.push(`/rentals/${gear.id}`);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* =================================================
              LEFT - IMAGE
          ================================================= */}

          <div>
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src={gear.images?.[selectedImage] || "/placeholder.png"}
                alt={gear.name}
                fill
                priority
                className="object-cover"
              />

              {/* Availability */}
              <span
                className={`absolute right-4 top-4 rounded-full px-4 py-2 text-sm font-medium text-white shadow ${
                  gear.isAvailable ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {gear.isAvailable ? "Available" : "Unavailable"}
              </span>
            </div>

            {/* Image Thumbnails */}
            {gear.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {gear.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-xl border transition ${
                      selectedImage === index
                        ? "border-primary ring-2 ring-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${gear.name} image ${index + 1}`}
                      width={90}
                      height={90}
                      className="h-20 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* =================================================
              RIGHT - DETAILS
          ================================================= */}

          <div className="space-y-6">
            {/* Category + Availability */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {gear.category.name}
              </span>

              {gear.isAvailable ? (
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-950 dark:text-green-300">
                  Available
                </span>
              ) : (
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700 dark:bg-red-950 dark:text-red-300">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight">{gear.name}</h1>

              <p className="mt-2 text-lg text-muted-foreground">
                Brand: {gear.brand}
              </p>
            </div>

            {/* =================================================
                PRICE
            ================================================= */}

            <div className="rounded-xl border border-border bg-white p-5 text-black shadow-sm dark:bg-black dark:text-white">
              <div className="flex items-center gap-2 text-3xl font-bold text-primary">
                <CircleDollarSign className="h-7 w-7" />

                <span>৳{Number(gear.pricePerDay).toLocaleString()}</span>

                <span className="text-lg font-normal text-muted-foreground">
                  / day
                </span>
              </div>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div className="rounded-xl border border-border bg-white p-6 text-black shadow-sm dark:bg-black dark:text-white">
              <h2 className="mb-3 text-lg font-semibold">Description</h2>

              <p className="leading-7 text-muted-foreground dark:text-white/70">
                {gear.description}
              </p>
            </div>

            {/* =================================================
                SPECIFICATIONS
            ================================================= */}

            <div className="rounded-xl border border-border bg-white p-6 text-black shadow-sm dark:bg-black dark:text-white">
              <h2 className="mb-5 text-lg font-semibold">Specifications</h2>

              <div className="grid grid-cols-2 gap-4 text-sm">
                {/* Category */}
                <div className="flex items-center gap-2">
                  <Tag size={18} />

                  <span className="text-muted-foreground dark:text-white/60">
                    Category
                  </span>
                </div>

                <span className="font-medium">{gear.category.name}</span>

                {/* Brand */}
                <div className="flex items-center gap-2">
                  <Package size={18} />

                  <span className="text-muted-foreground dark:text-white/60">
                    Brand
                  </span>
                </div>

                <span className="font-medium">{gear.brand}</span>

                {/* Stock */}
                <div className="flex items-center gap-2">
                  <Boxes size={18} />

                  <span className="text-muted-foreground dark:text-white/60">
                    Stock
                  </span>
                </div>

                <span className="font-medium">{gear.stock}</span>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <CalendarDays size={18} />

                  <span className="text-muted-foreground dark:text-white/60">
                    Status
                  </span>
                </div>

                <span className="font-medium">
                  {gear.isAvailable ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            {/* =================================================
                PROVIDER
            ================================================= */}

            <div className="rounded-xl border border-border bg-white p-6 text-black shadow-sm dark:bg-black dark:text-white">
              <h2 className="mb-4 text-lg font-semibold">Provider</h2>

              <div className="flex items-center gap-4">
                <Image
                  src={gear.provider.profileImage || "/avatar-placeholder.png"}
                  alt={gear.provider.name}
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px] rounded-full border border-border object-cover"
                />

                <div>
                  <p className="font-semibold">{gear.provider.name}</p>

                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    {gear.provider.email}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                REVIEWS
            ================================================= */}

            <div className="rounded-xl border border-border bg-white p-6 text-black shadow-sm dark:bg-black dark:text-white">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                  <h2 className="text-lg font-semibold">
                    Reviews ({gear.reviews.length})
                  </h2>
                </div>

                {gear.reviews.length > 3 && (
                  <button
                    type="button"
                    className="text-sm font-medium text-primary hover:underline"
                    onClick={() => router.push(`/gear/${gear.id}/reviews`)}
                  >
                    View All →
                  </button>
                )}
              </div>

              {/* No Reviews */}
              {gear.reviews.length === 0 ? (
                <p className="text-sm text-muted-foreground dark:text-white/60">
                  No reviews yet. Be the first to rent this gear and leave a
                  review.
                </p>
              ) : (
                <div className="space-y-4">
                  {gear.reviews.slice(0, 3).map((review: Review) => (
                    <div
                      key={review.id}
                      className="rounded-lg border border-border p-4"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <p className="font-medium">
                          {review.customer?.name ?? "Anonymous"}
                        </p>

                        <div className="flex items-center gap-1">
                          {Array.from({
                            length: review.rating,
                          }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground dark:text-white/60">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* =================================================
                RENT BUTTON
            ================================================= */}

            {user?.role !== "PROVIDER" && user?.role !== "ADMIN" && (
              <button
                type="button"
                onClick={handleRent}
                disabled={!gear.isAvailable}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-semibold text-white transition dark:text-black hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
              >
                <BadgeCheck size={20} />

                {gear.isAvailable ? "Rent Now" : "Unavailable"}
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
