"use client";

import { useMemo, useState } from "react";

import { FilterBar } from "./FilterBar";
import { GearGrid } from "./GearGrid";
import { SearchBar } from "./SearchBar";

import { useGear } from "../hooks/useGear";
import { Gear } from "../types/gear.type";

export function GearPage() {
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [brand, setBrand] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const limit = 100; // load enough items since pagination is removed

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
    <main className="container mx-auto space-y-8 py-12">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Browse Sports Equipment</h1>

        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Explore premium sports and outdoor equipment from trusted providers.
          Search, filter and rent the perfect gear for your next adventure.
        </p>
      </div>

      {/* Search */}
      <SearchBar
        value={search}
        onSearch={(value) => {
          setSearch(value);
        }}
      />

      {/* Filter */}
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

      {/* Result */}
      {!isPending && !isError && (
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Available Gear</h2>

          <span className="text-sm text-muted-foreground">
            {gears.length} Items Found
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
    </main>
  );
}
