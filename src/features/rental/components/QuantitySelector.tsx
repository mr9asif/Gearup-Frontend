"use client";

import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface QuantitySelectorProps {
  quantity: number;
  stock: number;
  onChange: (value: number) => void;
  error?: string;
}

export default function QuantitySelector({
  quantity,
  stock,
  onChange,
  error,
}: QuantitySelectorProps) {
  const increase = () => {
    if (quantity >= stock) return;
    onChange(quantity + 1);
  };

  const decrease = () => {
    if (quantity <= 1) return;
    onChange(quantity - 1);
  };

  return (
    <div className="space-y-3">
      <Label>Quantity</Label>

      <div className="flex items-center gap-4">
        <Button type="button" variant="outline" size="icon" onClick={decrease}>
          <Minus className="h-4 w-4" />
        </Button>

        <Input
          readOnly
          value={quantity}
          className="w-24 text-center font-semibold"
        />

        <Button type="button" variant="outline" size="icon" onClick={increase}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">Available Stock: {stock}</p>

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
