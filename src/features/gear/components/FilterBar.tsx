"use client";

interface FilterBarProps {
  category: string;
  brand: string;
  available: string;
  sort: string;
  minPrice: string;
  maxPrice: string;

  categories: string[];
  brands: string[];

  onCategoryChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  onAvailableChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onReset: () => void;
}

export function FilterBar({
  category,
  brand,
  available,
  sort,
  minPrice,
  maxPrice,
  categories,
  brands,
  onCategoryChange,
  onBrandChange,
  onAvailableChange,
  onSortChange,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
        {/* Category */}

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
        >
          <option value="">All Categories</option>

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
          className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
        >
          <option value="">All Brands</option>

          {brands.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Availability */}

        <select
          value={available}
          onChange={(e) => onAvailableChange(e.target.value)}
          className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
        >
          <option value="">Availability</option>
          <option value="true">Available</option>
          <option value="false">Unavailable</option>
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
        >
          <option value="">Sort By</option>
          <option value="price">Price: Low → High</option>
          <option value="-price">Price: High → Low</option>
          <option value="name">Name A → Z</option>
          <option value="-name">Name Z → A</option>
        </select>

        {/* Min Price */}

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => onMinPriceChange(e.target.value)}
          className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
        />

        {/* Max Price */}

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
        />

        {/* Reset */}

        <button
          onClick={onReset}
          className="h-11 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
