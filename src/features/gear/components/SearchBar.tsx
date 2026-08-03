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
  placeholder = "Search sports equipment, brands...",
}: SearchBarProps) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="group relative">
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 blur transition duration-300 group-focus-within:opacity-100" />

        <Search className="absolute left-5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />

        <input
          value={value}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={placeholder}
          className="
            relative
            h-14
            w-full
            rounded-2xl
            border
            border-border
            bg-background/90
            pl-14
            pr-5
            text-sm
            shadow-sm
            backdrop-blur
            outline-none
            transition-all
            duration-300
            placeholder:text-muted-foreground/70
            hover:border-primary/30
            focus:border-primary
            focus:shadow-lg
          "
        />
      </div>
    </div>
  );
}
