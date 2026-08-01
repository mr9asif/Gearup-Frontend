"use client";

import { Boxes, CircleDollarSign, Package, Tag } from "lucide-react";
import Image from "next/image";

interface GearPreviewProps {
  gear: {
    id: string;
    name: string;
    brand: string;
    images: string[];
    stock: number;
    pricePerDay: number;
    isAvailable: boolean;
    category: {
      name: string;
    };
    provider: {
      name: string;
      profileImage: string;
    };
  };
}

export default function GearPreview({ gear }: GearPreviewProps) {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <Image
          src={gear.images[0]}
          alt={gear.name}
          width={700}
          height={500}
          className="h-[320px] w-full object-cover"
        />
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold">{gear.name}</h1>

            <p className="mt-1 text-muted-foreground">{gear.brand}</p>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-primary/5 p-4">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="h-5 w-5 text-primary" />

              <span className="text-muted-foreground">Price / Day</span>
            </div>

            <span className="text-xl font-bold text-primary">
              ৳{Number(gear.pricePerDay).toLocaleString()}
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag size={18} />

                <span>Category</span>
              </div>

              <span className="font-medium">{gear.category.name}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package size={18} />

                <span>Brand</span>
              </div>

              <span className="font-medium">{gear.brand}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Boxes size={18} />

                <span>Available Stock</span>
              </div>

              <span className="font-medium">{gear.stock}</span>
            </div>
          </div>

          <div className="rounded-xl border bg-muted/40 p-4">
            <p className="text-sm text-muted-foreground">Provided By</p>

            <div className="mt-3 flex items-center gap-3">
              <Image
                src={gear.provider.profileImage}
                alt={gear.provider.name}
                width={45}
                height={45}
                className="rounded-full object-cover"
              />

              <div>
                <p className="font-medium">{gear.provider.name}</p>

                <p className="text-sm text-muted-foreground">
                  Verified Provider
                </p>
              </div>
            </div>
          </div>

          {gear.isAvailable ? (
            <div className="rounded-lg bg-green-100 py-3 text-center font-medium text-green-700">
              Available for Rent
            </div>
          ) : (
            <div className="rounded-lg bg-red-100 py-3 text-center font-medium text-red-700">
              Currently Unavailable
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
