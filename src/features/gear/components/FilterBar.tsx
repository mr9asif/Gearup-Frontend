"use client";

import { ChevronDown, RotateCcw, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

interface FilterBarProps {
  category: string;
  brand: string;
  minPrice: string;
  maxPrice: string;
  categories: {
    id: string;
    name: string;
  }[];
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
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const selectedCategory =
    categories.find((item) => item.id === category)?.name || "Category";
  const selectedBrand = brand || "Brand";

  const handleCategoryChange = (value: string) => {
    onCategoryChange(value);
    setCategoryOpen(false);
  };

  const handleBrandChange = (value: string) => {
    onBrandChange(value);
    setBrandOpen(false);
  };

  const handleReset = () => {
    onReset();
    setCategoryOpen(false);
    setBrandOpen(false);
  };

  return (
    <div className="w-full">
      {/* =====================================================
          DESKTOP FILTER
      ====================================================== */}

      <div className="hidden lg:block">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <SlidersHorizontal className="h-4 w-4" />
            </div>

            <span className="text-sm font-semibold">Filter Gear</span>
          </div>

          {/* Reset */}
          <button
            type="button"
            onClick={handleReset}
            className="
              flex h-8 items-center gap-1.5
              rounded-lg border border-border
              px-2.5
              text-xs font-medium
              text-muted-foreground
              transition-all
              hover:border-primary/40
              hover:bg-primary/10
              hover:text-primary
            "
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label
            htmlFor="desktop-gear-category"
            className="text-xs font-medium text-muted-foreground"
          >
            Category
          </label>

          <select
            id="desktop-gear-category"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="
              h-10 w-full cursor-pointer
              rounded-xl border border-border
              bg-background px-3
              text-sm outline-none
              transition-all
              hover:border-primary/40
              focus:border-primary
              focus:ring-2 focus:ring-primary/10
            "
          >
            <option value="">All Categories</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Brand */}
        <div className="mt-4 space-y-2">
          <label
            htmlFor="desktop-gear-brand"
            className="text-xs font-medium text-muted-foreground"
          >
            Brand
          </label>

          <select
            id="desktop-gear-brand"
            value={brand}
            onChange={(e) => onBrandChange(e.target.value)}
            className="
              h-10 w-full cursor-pointer
              rounded-xl border border-border
              bg-background px-3
              text-sm outline-none
              transition-all
              hover:border-primary/40
              focus:border-primary
              focus:ring-2 focus:ring-primary/10
            "
          >
            <option value="">All Brands</option>

            {brands.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="mt-4 space-y-2">
          <label className="text-xs font-medium text-muted-foreground">
            Price Range
          </label>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              min="0"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => onMinPriceChange(e.target.value)}
              className="
                h-10 w-full rounded-xl
                border border-border
                bg-background px-3
                text-sm outline-none
                transition-all
                placeholder:text-muted-foreground/60
                hover:border-primary/40
                focus:border-primary
                focus:ring-2 focus:ring-primary/10
              "
            />

            <input
              type="number"
              min="0"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => onMaxPriceChange(e.target.value)}
              className="
                h-10 w-full rounded-xl
                border border-border
                bg-background px-3
                text-sm outline-none
                transition-all
                placeholder:text-muted-foreground/60
                hover:border-primary/40
                focus:border-primary
                focus:ring-2 focus:ring-primary/10
              "
            />
          </div>
        </div>

        {/* Active Filters */}
        {(category || brand || minPrice || maxPrice) && (
          <div className="mt-5 border-t border-border pt-4">
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              Active Filters
            </p>

            <div className="flex flex-wrap gap-1.5">
              {category && (
                <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
                  {category}
                </span>
              )}

              {brand && (
                <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
                  {brand}
                </span>
              )}

              {minPrice && (
                <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
                  Min ৳{minPrice}
                </span>
              )}

              {maxPrice && (
                <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
                  Max ৳{maxPrice}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          MOBILE FILTER
          TWO ROWS
      ====================================================== */}

      <div className="lg:hidden">
        {/* =========================
            ROW 1
        ========================== */}

        <div className="flex items-center gap-2">
          {/* Filter */}
          <div className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 text-xs font-semibold text-primary">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filter
          </div>

          {/* =====================
              CATEGORY DROPDOWN
          ====================== */}

          <div className="relative min-w-0 flex-1">
            <button
              type="button"
              onClick={() => {
                setCategoryOpen((prev) => !prev);
                setBrandOpen(false);
              }}
              className="
                flex h-9 w-full
                items-center justify-between
                gap-1
                rounded-lg
                border border-border
                bg-background
                px-2.5
                text-xs
                outline-none
                transition-all
                hover:border-primary/40
                focus:border-primary
              "
            >
              <span className="truncate">{selectedCategory}</span>

              <ChevronDown
                className={`h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform ${
                  categoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Category Menu */}
            {categoryOpen && (
              <div
                className="
                  absolute left-0 top-[calc(100%+6px)]
                  z-[100]
                  w-full
                  min-w-[150px]
                  overflow-hidden
                  rounded-xl
                  border border-border
                  bg-popover
                  p-1
                  shadow-xl
                "
              >
                <button
                  type="button"
                  onClick={() => handleCategoryChange("")}
                  className="
                    w-full rounded-lg px-3 py-2
                    text-left text-xs
                    transition-colors
                    hover:bg-primary/10
                  "
                >
                  All Categories
                </button>

                {categories.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleCategoryChange(item.id)}
                    className={`
      w-full rounded-lg px-3 py-2
      text-left text-xs
      transition-colors
      hover:bg-primary/10
      ${category === item.id ? "bg-primary/10 font-medium text-primary" : ""}
    `}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* =====================
              BRAND DROPDOWN
          ====================== */}

          <div className="relative min-w-0 flex-1">
            <button
              type="button"
              onClick={() => {
                setBrandOpen((prev) => !prev);
                setCategoryOpen(false);
              }}
              className="
                flex h-9 w-full
                items-center justify-between
                gap-1
                rounded-lg
                border border-border
                bg-background
                px-2.5
                text-xs
                outline-none
                transition-all
                hover:border-primary/40
                focus:border-primary
              "
            >
              <span className="truncate">{selectedBrand}</span>

              <ChevronDown
                className={`h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform ${
                  brandOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Brand Menu */}
            {brandOpen && (
              <div
                className="
                  absolute right-0 top-[calc(100%+6px)]
                  z-[100]
                  w-full
                  min-w-[130px]
                  overflow-hidden
                  rounded-xl
                  border border-border
                  bg-popover
                  p-1
                  shadow-xl
                "
              >
                <button
                  type="button"
                  onClick={() => handleBrandChange("")}
                  className="
                    w-full rounded-lg px-3 py-2
                    text-left text-xs
                    transition-colors
                    hover:bg-primary/10
                  "
                >
                  All Brands
                </button>

                {brands.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleBrandChange(item)}
                    className={`
                      w-full rounded-lg px-3 py-2
                      text-left text-xs
                      transition-colors
                      hover:bg-primary/10
                      ${
                        brand === item
                          ? "bg-primary/10 font-medium text-primary"
                          : ""
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* =========================
            ROW 2
        ========================== */}

        <div className="mt-2 flex items-center gap-2">
          {/* Min */}
          <input
            type="number"
            min="0"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            className="
              h-9 min-w-0 flex-1
              rounded-lg
              border border-border
              bg-background
              px-2.5
              text-xs
              outline-none
              placeholder:text-muted-foreground/60
              focus:border-primary
              focus:ring-2 focus:ring-primary/10
            "
          />

          {/* Max */}
          <input
            type="number"
            min="0"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            className="
              h-9 min-w-0 flex-1
              rounded-lg
              border border-border
              bg-background
              px-2.5
              text-xs
              outline-none
              placeholder:text-muted-foreground/60
              focus:border-primary
              focus:ring-2 focus:ring-primary/10
            "
          />

          {/* Reset */}
          <button
            type="button"
            onClick={handleReset}
            className="
              flex h-9 shrink-0
              items-center justify-center
              gap-1.5
              rounded-lg
              border border-border
              px-3
              text-xs font-medium
              text-muted-foreground
              transition-all
              hover:border-primary
              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
