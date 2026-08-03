"use client";

import { RotateCcw } from "lucide-react";

interface FilterBarProps {
  category: string;
  brand: string;
  minPrice: string;
  maxPrice: string;

  categories: string[];
  brands: string[];

  onCategoryChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onReset: () => void;
}

export function FilterBar({
  category,
  brand,
  minPrice,
  maxPrice,
  categories,
  brands,
  onCategoryChange,
  onBrandChange,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="w-full rounded-3xl border bg-background p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Category */}
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="h-12 flex-1 rounded-xl border bg-background px-4 text-sm transition-all outline-none hover:border-primary/40 focus:border-primary"
        >
          <option value="">🏷️ All Categories</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Brand */}
        <select
          value={brand}
          onChange={(e) => onBrandChange(e.target.value)}
          className="h-12 flex-1 rounded-xl border bg-background px-4 text-sm transition-all outline-none hover:border-primary/40 focus:border-primary"
        >
          <option value="">🏢 All Brands</option>

          {brands.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Min Price */}
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => onMinPriceChange(e.target.value)}
          className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-all hover:border-primary/40 focus:border-primary lg:w-40"
        />

        {/* Max Price */}
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition-all hover:border-primary/40 focus:border-primary lg:w-40"
        />

        {/* Reset */}
        <button
          onClick={onReset}
          className="flex h-12 items-center justify-center gap-2 rounded-xl border px-5 text-sm font-medium transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>
      </div>
    </div>
  );
}
