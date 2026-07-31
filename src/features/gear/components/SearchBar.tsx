"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onSearch,
  placeholder = "Search gear...",
}: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

      <input
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-border bg-background pl-12 pr-4 outline-none transition focus:border-primary"
      />
    </div>
  );
}
