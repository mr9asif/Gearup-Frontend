"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useRef } from "react";

interface TimelineStepProps {
  step: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
  };
  reverse?: boolean;
  isLast?: boolean;
}

export function TimelineStep({
  step,
  reverse = false,
  isLast = false,
}: TimelineStepProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className="relative grid items-center py-10 lg:grid-cols-[1fr_70px_40px_70px_1fr]"
    >
      {/* LEFT CARD */}
      {!reverse ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: isInView ? 1 : 0.45,
              y: isInView ? 0 : 20,
              scale: isInView ? 1 : 0.98,
            }}
            transition={{ duration: 0.5 }}
            className={cn(
              "rounded-2xl border bg-background/80 p-6 backdrop-blur-xl",
              isInView
                ? "border-primary/20 shadow-xl shadow-primary/10"
                : "border-border",
            )}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                Step {step.id.toString().padStart(2, "0")}
              </span>

              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg transition-all",
                  isInView
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
            </div>

            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>

            <p className="text-sm leading-7 text-muted-foreground">
              {step.description}
            </p>
          </motion.div>

          {/* connector */}
          <div className="relative flex items-center justify-end">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="h-[2px] w-full origin-right bg-primary"
            />
          </div>
        </>
      ) : (
        <>
          <div />
          <div />
        </>
      )}

      {/* CENTER */}
      <div className="relative flex justify-center">
        {!isLast && (
          <div className="absolute top-5 h-40 w-px bg-border">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isInView ? "100%" : 0 }}
              transition={{ duration: 0.6 }}
              className="w-full origin-top bg-primary"
            />
          </div>
        )}

        <motion.div
          animate={{
            scale: isInView ? 1.1 : 1,
          }}
          className={cn(
            "relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 bg-background",
            isInView
              ? "border-primary shadow-lg shadow-primary/20"
              : "border-border",
          )}
        >
          <div
            className={cn(
              "h-2.5 w-2.5 rounded-full",
              isInView ? "bg-primary" : "bg-muted-foreground",
            )}
          />
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      {reverse ? (
        <>
          <div className="relative flex items-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="h-[2px] w-full origin-left bg-primary"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: isInView ? 1 : 0.45,
              y: isInView ? 0 : 20,
              scale: isInView ? 1 : 0.98,
            }}
            transition={{ duration: 0.5 }}
            className={cn(
              "rounded-2xl border bg-background/80 p-6 backdrop-blur-xl",
              isInView
                ? "border-primary/20 shadow-xl shadow-primary/10"
                : "border-border",
            )}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                Step {step.id.toString().padStart(2, "0")}
              </span>

              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg transition-all",
                  isInView
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
            </div>

            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>

            <p className="text-sm leading-7 text-muted-foreground">
              {step.description}
            </p>
          </motion.div>
        </>
      ) : (
        <>
          <div />
          <div />
        </>
      )}
    </div>
  );
}
