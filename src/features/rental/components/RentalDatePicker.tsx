"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface RentalDatePickerProps {
  label: string;
  value?: Date;
  onChange: (date: Date | undefined) => void;
  error?: string;
  disabled?: (date: Date) => boolean;
}

export default function RentalDatePicker({
  label,
  value,
  onChange,
  error,
  disabled,
}: RentalDatePickerProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <Popover>
        <PopoverTrigger
          render={
            <Button
              type="button"
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !value && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {value ? (
                format(value, "PPP")
              ) : (
                <span>Select {label.toLowerCase()}</span>
              )}
            </Button>
          }
        />

        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            disabled={disabled}
          />
        </PopoverContent>
      </Popover>

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
