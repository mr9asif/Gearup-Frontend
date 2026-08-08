"use client";

import { useMemo, useState } from "react";

import AppLoader from "@/shared/common/AppLoader";

import { useGear } from "../hooks/useGear";
import { Gear } from "../types/gear.type";

import { FilterBar } from "./FilterBar";
import { GearGrid } from "./GearGrid";
import { SearchBar } from "./SearchBar";

export function GearPage() {
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [brand, setBrand] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const limit = 100;

  const { data, isPending, isError } = useGear({
    search,
    categoryId,
    brand,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
    limit,
  });

  const gears = useMemo<Gear[]>(() => {
    if (!data) return [];

    return Array.isArray(data.data) ? data.data : [];
  }, [data]);

  const categories = useMemo(() => {
    const values = gears.map((gear) => gear.category.name);

    return [...new Set(values)];
  }, [gears]);

  const brands = useMemo(() => {
    const values = gears.map((gear) => gear.brand);

    return [...new Set(values)];
  }, [gears]);

  const resetFilters = () => {
    setSearch("");
    setCategoryId("");
    setBrand("");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <main className="h-[calc(100vh-5rem)] overflow-hidden">
      {/* =====================================================
          BROWSE HEADER + SEARCH
          ===================================================== */}

      <section className="h-[145px] border-b border-border/60 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              Browse Sports Equipment
            </h1>

            <p className="mt-1 max-w-2xl text-xs text-muted-foreground md:text-sm">
              Find premium sports and outdoor gear from trusted providers.
            </p>
          </div>

          {/* Search */}
          <div className="mx-auto mt-3 max-w-3xl">
            <SearchBar
              value={search}
              onSearch={(value) => {
                setSearch(value);
              }}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="mx-auto h-[calc(100vh-5rem-145px)] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-full gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-8">
          {/* =================================================
              DESKTOP FILTER SIDEBAR
              ================================================= */}

          <aside className="hidden min-h-0 lg:block">
            <div className="h-full py-6">
              <div className="h-full overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm">
                <FilterBar
                  category={categoryId}
                  brand={brand}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  categories={categories}
                  brands={brands}
                  onCategoryChange={setCategoryId}
                  onBrandChange={setBrand}
                  onMinPriceChange={setMinPrice}
                  onMaxPriceChange={setMaxPrice}
                  onReset={resetFilters}
                />
              </div>
            </div>
          </aside>

          {/* =================================================
              GEAR CONTENT
              ================================================= */}

          <section className="flex min-h-0 min-w-0 flex-col">
            {/* ===============================================
                MOBILE FILTER
                =============================================== */}

            <div className="shrink-0 py-4 lg:hidden">
              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <FilterBar
                  category={categoryId}
                  brand={brand}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  categories={categories}
                  brands={brands}
                  onCategoryChange={setCategoryId}
                  onBrandChange={setBrand}
                  onMinPriceChange={setMinPrice}
                  onMaxPriceChange={setMaxPrice}
                  onReset={resetFilters}
                />
              </div>
            </div>

            {/* ===============================================
                RESULT HEADER
                =============================================== */}

            <div className="shrink-0 py-3 lg:py-4">
              {!isPending && !isError && (
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">
                      Available Gear
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Find the perfect equipment for your next adventure.
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {gears.length} Items Found
                  </span>
                </div>
              )}
            </div>

            {/* ===============================================
                ONLY GEAR AREA SCROLLS
                =============================================== */}

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1">
              {/* Loading */}
              {isPending && (
                <div className="flex min-h-[400px] items-center justify-center">
                  <AppLoader />
                </div>
              )}

              {/* Error */}
              {isError && (
                <div className="rounded-2xl border border-destructive/20 bg-destructive/5 py-20 text-center">
                  <p className="font-medium text-destructive">
                    Failed to load gear.
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Please try again later.
                  </p>
                </div>
              )}

              {/* Gear Grid */}
              {!isPending && !isError && <GearGrid gears={gears} />}
            </div>

            {/* ===============================================
                PAGINATION
                =============================================== */}

            {!isPending && !isError && (
              <div className="shrink-0 border-t border-border/60 bg-background/95 px-2 py-3 backdrop-blur-xl">
                <div className="flex items-center justify-center">
                  {/* 
                    YOUR CUSTOM PAGINATION GOES HERE

                    Example:

                    <GearPagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  */}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
