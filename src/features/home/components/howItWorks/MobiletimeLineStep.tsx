"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useRef } from "react";

interface MobileTimelineStepProps {
  step: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
  };
  isLast?: boolean;
}

export function MobileTimelineStep({
  step,
  isLast = false,
}: MobileTimelineStepProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.4,
    once: false,
  });

  const Icon = step.icon;

  return (
    <div ref={ref} className="relative flex gap-4 pb-8">
      {/* Timeline */}
      <div className="flex w-10 flex-col items-center">
        <motion.div
          animate={{
            scale: isInView ? 1.1 : 1,
          }}
          className={cn(
            "z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background",
            isInView
              ? "border-primary shadow-lg shadow-primary/20"
              : "border-border",
          )}
        >
          <div
            className={cn(
              "h-2 w-2 rounded-full",
              isInView ? "bg-primary" : "bg-muted-foreground",
            )}
          />
        </motion.div>

        {!isLast && (
          <div className="mt-1 h-full w-px bg-border">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isInView ? "100%" : 0 }}
              transition={{ duration: 0.5 }}
              className="w-full bg-primary"
            />
          </div>
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: isInView ? 1 : 0.5,
          x: isInView ? 0 : 15,
        }}
        transition={{ duration: 0.45 }}
        className={cn(
          "flex-1 rounded-xl border bg-background/80 p-4 backdrop-blur-xl",
          isInView
            ? "border-primary/20 shadow-lg shadow-primary/10"
            : "border-border",
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
            Step {step.id.toString().padStart(2, "0")}
          </span>

          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg",
              isInView
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
          </div>
        </div>

        <h3 className="text-lg font-semibold">{step.title}</h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}
