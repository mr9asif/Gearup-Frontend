"use client";

import { useMemo, useState } from "react";

import AppLoader from "@/shared/common/AppLoader";

import { useGear } from "../hooks/useGear";
import { Gear } from "../types/gear.type";

import { FilterBar } from "./FilterBar";
import { GearGrid } from "./GearGrid";
import { Pagination } from "./Pagination";
import { SearchBar } from "./SearchBar";

export function GearPage() {
  // =====================================================
  // FILTER STATES
  // =====================================================

  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  console.log("SELECTED CATEGORY ID:", categoryId);
  const [brand, setBrand] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // =====================================================
  // PAGINATION
  // =====================================================

  const [page, setPage] = useState(1);

  // 9 gears per page
  // 3 cards per row on desktop
  const limit = 9;

  // =====================================================
  // FETCH GEARS
  // =====================================================

  const { data, isPending, isError } = useGear({
    search,
    category: categoryId,
    brand,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
    page,
    limit,
  });

  // =====================================================
  // IMPORTANT
  //
  // API RESPONSE:
  //
  // data
  // └── data
  //     ├── meta
  //     └── data
  //
  // =====================================================

  const paginatedData = data?.data;

  // =====================================================
  // GEAR DATA
  // =====================================================

  const gears = useMemo<Gear[]>(() => {
    if (!paginatedData) return [];

    return Array.isArray(paginatedData.data) ? paginatedData.data : [];
  }, [paginatedData]);

  // =====================================================
  // CATEGORIES
  // =====================================================

  const categories = useMemo(() => {
    const values = gears.map((gear) => gear.category).filter(Boolean);

    const uniqueCategories = new Map();

    values.forEach((category) => {
      uniqueCategories.set(category.id, category);
    });

    return Array.from(uniqueCategories.values());
  }, [gears]);

  // =====================================================
  // BRANDS
  // =====================================================

  const brands = useMemo(() => {
    const values = gears.map((gear) => gear.brand).filter(Boolean);

    return [...new Set(values)];
  }, [gears]);

  // =====================================================
  // PAGINATION META
  // =====================================================

  const totalPages = paginatedData?.meta?.totalPage ?? 1;

  const totalItems = paginatedData?.meta?.total ?? gears.length;

  // =====================================================
  // RESET FILTERS
  // =====================================================

  const resetFilters = () => {
    setSearch("");
    setCategoryId("");
    setBrand("");
    setMinPrice("");
    setMaxPrice("");

    setPage(1);
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <main className="w-full">
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
                setPage(1);
              }}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="mx-auto h-[calc(100dvh-145px)] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-full gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-8">
          {/* =================================================
              DESKTOP FILTER
          ================================================= */}

          <aside className="hidden min-h-0 lg:block">
            <div className="h-full py-5">
              <div className="h-full overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm">
                <FilterBar
                  category={categoryId}
                  brand={brand}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  categories={categories}
                  brands={brands}
                  onCategoryChange={(value) => {
                    setCategoryId(value);
                    setPage(1);
                  }}
                  onBrandChange={(value) => {
                    setBrand(value);
                    setPage(1);
                  }}
                  onMinPriceChange={(value) => {
                    setMinPrice(value);
                    setPage(1);
                  }}
                  onMaxPriceChange={(value) => {
                    setMaxPrice(value);
                    setPage(1);
                  }}
                  onReset={resetFilters}
                />
              </div>
            </div>
          </aside>

          {/* =================================================
              GEAR CONTENT
          ================================================= */}

          <section className="flex min-h-0 min-w-0 flex-col">
            {/* =================================================
                MOBILE FILTER
            ================================================= */}

            <div className="shrink-0 py-3 lg:hidden">
              <div className="rounded-2xl border border-border bg-card p-3 shadow-sm">
                <FilterBar
                  category={categoryId}
                  brand={brand}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  categories={categories}
                  brands={brands}
                  onCategoryChange={(value) => {
                    setCategoryId(value);
                    setPage(1);
                  }}
                  onBrandChange={(value) => {
                    setBrand(value);
                    setPage(1);
                  }}
                  onMinPriceChange={(value) => {
                    setMinPrice(value);
                    setPage(1);
                  }}
                  onMaxPriceChange={(value) => {
                    setMaxPrice(value);
                    setPage(1);
                  }}
                  onReset={resetFilters}
                />
              </div>
            </div>

            {/* =================================================
                RESULT HEADER
            ================================================= */}

            <div className="shrink-0 py-2 lg:py-2">
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
                    {totalItems} Items Found
                  </span>
                </div>
              )}
            </div>

            {/* =================================================
                ONLY GEAR AREA SCROLLS
            ================================================= */}

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2 pb-0">
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

            {/* =================================================
                PAGINATION
            ================================================= */}

            {!isPending && !isError && totalPages > 1 && (
              <div className="shrink-0 bg-background px-2 py-1">
                <div className="flex justify-center">
                  <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                  />
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
