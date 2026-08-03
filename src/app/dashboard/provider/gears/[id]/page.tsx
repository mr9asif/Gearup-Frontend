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
  const { data: gear, isLoading } = useGearDetails(id);

  const pathname = usePathname();

  const { user, isAuthenticated } = useAuth(); // your auth hook
  const [selectedImage, setSelectedImage] = useState(0);

  if (isLoading) {
    return <AppLoader />;
  }

  if (!gear) {
    return (
      <div className="container mx-auto py-20 text-center">Gear not found.</div>
    );
  }

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

    if (user?.role === "ADMIN") {
      toast.error("Admin cannot rent gear");
      return;
    }

    // Customer
    router.push(`/rentals/${gear.id}`);
  };

  return (
    <div className="bg-muted/20">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <Image
                src={gear.images[selectedImage]}
                alt={gear.name}
                width={800}
                height={600}
                className="h-[420px] w-full object-cover"
              />
            </div>

            {gear.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {gear.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-xl border transition ${
                      selectedImage === index
                        ? "ring-2 ring-primary"
                        : "hover:border-primary"
                    }`}
                  >
                    <Image
                      src={image}
                      alt=""
                      width={90}
                      height={90}
                      className="h-20 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {gear.category.name}
              </span>

              {gear.isAvailable ? (
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Available
                </span>
              ) : (
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                  Out of Stock
                </span>
              )}
            </div>

            <div>
              <h1 className="text-4xl font-bold">{gear.name}</h1>

              <p className="mt-2 text-lg text-muted-foreground">
                Brand: {gear.brand}
              </p>
            </div>

            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-3xl font-bold text-primary">
                <CircleDollarSign className="h-7 w-7" />৳
                {Number(gear.pricePerDay).toLocaleString()}
                <span className="text-lg font-normal text-muted-foreground">
                  / day
                </span>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-lg font-semibold">Description</h2>

              <p className="leading-7 text-muted-foreground">
                {gear.description}
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-semibold">Specifications</h2>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Tag size={18} />
                  <span className="text-muted-foreground">Category</span>
                </div>

                <span className="font-medium">{gear.category.name}</span>

                <div className="flex items-center gap-2">
                  <Package size={18} />
                  <span className="text-muted-foreground">Brand</span>
                </div>

                <span className="font-medium">{gear.brand}</span>

                <div className="flex items-center gap-2">
                  <Boxes size={18} />
                  <span className="text-muted-foreground">Stock</span>
                </div>

                <span className="font-medium">{gear.stock}</span>

                <div className="flex items-center gap-2">
                  <CalendarDays size={18} />
                  <span className="text-muted-foreground">Status</span>
                </div>

                <span className="font-medium">
                  {gear.isAvailable ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Provider</h2>

              <div className="flex items-center gap-4">
                <Image
                  src={gear.provider.profileImage}
                  alt={gear.provider.name}
                  width={70}
                  height={70}
                  className="rounded-full border object-cover"
                />

                <div>
                  <p className="font-semibold">{gear.provider.name}</p>

                  <p className="text-sm text-muted-foreground">
                    {gear.provider.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                  <h2 className="text-lg font-semibold">
                    Reviews ({gear.reviews.length})
                  </h2>
                </div>

                {gear.reviews.length > 3 && (
                  <button
                    className="text-sm font-medium text-primary hover:underline"
                    onClick={() => router.push(`/gear/${gear.id}/reviews`)}
                  >
                    View All →
                  </button>
                )}
              </div>

              {gear.reviews.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No reviews yet. Be the first to rent this gear and leave a
                  review.
                </p>
              ) : (
                <div className="space-y-4">
                  {gear.reviews.slice(0, 3).map((review: Review) => (
                    <div key={review.id} className="rounded-lg border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="font-medium">
                          {review.customer?.name ?? "Anonymous"}
                        </p>

                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Button */}
            {user?.role !== "PROVIDER" && user?.role !== "ADMIN" && (
              <button
                onClick={handleRent}
                disabled={!gear.isAvailable}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <BadgeCheck size={20} />
                {gear.isAvailable ? "Rent Now" : "Unavailable"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
