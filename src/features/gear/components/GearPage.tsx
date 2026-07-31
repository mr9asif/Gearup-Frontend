"use client";

import { useMemo, useState } from "react";

import { FilterBar } from "./FilterBar";
import { GearGrid } from "./GearGrid";
import { Pagination } from "./Pagination";
import { SearchBar } from "./SearchBar";

import { useGear } from "../hooks/useGear";
import { Gear } from "../types/gear.type";

export function GearPage() {
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [brand, setBrand] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [available, setAvailable] = useState("");

  const [sort, setSort] = useState("");

  const [page, setPage] = useState(1);

  const limit = 12;

  const { data, isPending, isError } = useGear({
    search,
    categoryId,
    brand,

    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,

    isAvailable: available === "" ? undefined : available === "true",

    sortBy: sort === "" ? undefined : "pricePerDay",

    sortOrder: sort === "asc" ? "asc" : sort === "desc" ? "desc" : undefined,

    page,
    limit,
  });

  const gears = data?.data ?? [];
  console.log("gear", gears);

  const meta = data?.data?.meta;

  /**
   * Temporary
   * Later replace with category API
   */

  const categories = useMemo(() => {
    const values = gears.map((gear) => gear.category.name);

    return [...new Set(values)];
  }, [gears]);

  /**
   * Temporary
   * Later replace with brand API
   */

  const brands = useMemo(() => {
    const values = gears.map((gear: Gear) => gear.brand);

    return [...new Set(values)];
  }, [gears]);

  const resetFilters = () => {
    setSearch("");
    setCategoryId("");
    setBrand("");

    setMinPrice("");
    setMaxPrice("");

    setAvailable("");

    setSort("");

    setPage(1);
  };

  return (
    <main className="container mx-auto space-y-8 py-12">
      {/* Hero */}

      <div>
        <h1 className="text-4xl font-bold">Browse Sports Equipment</h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Explore premium sports and outdoor equipment from trusted providers.
          Search, filter and rent the perfect gear for your next adventure.
        </p>
      </div>

      {/* Search */}

      <SearchBar
        value={search}
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />

      {/* Filter */}

      <FilterBar
        category={categoryId}
        brand={brand}
        available={available}
        sort={sort}
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
        onAvailableChange={(value) => {
          setAvailable(value);
          setPage(1);
        }}
        onSortChange={(value) => {
          setSort(value);
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

      {/* Result */}

      {!isPending && !isError && (
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Available Gear</h2>

          <span className="text-sm text-muted-foreground">
            {meta?.total ?? gears.length} Items Found
          </span>
        </div>
      )}

      {/* Loading */}

      {isPending && (
        <div className="py-20 text-center">Loading equipment...</div>
      )}

      {/* Error */}

      {isError && (
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 py-20 text-center">
          Failed to load gear.
        </div>
      )}

      {/* Grid */}

      {!isPending && !isError && <GearGrid gears={gears} />}

      {/* Pagination */}

      {!isPending && !isError && meta && meta.totalPage > 1 && (
        <Pagination
          currentPage={meta.page}
          totalPages={meta.totalPage}
          onPageChange={setPage}
        />
      )}
    </main>
  );
}
