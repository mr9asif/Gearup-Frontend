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
      className="
relative
grid
grid-cols-[1fr_28px_24px_28px_1fr]
items-center
gap-x-1
py-6
sm:grid-cols-[1fr_36px_28px_36px_1fr]
sm:gap-x-2
sm:py-8
lg:grid-cols-[1fr_70px_40px_70px_1fr]
lg:gap-x-0
lg:py-10
"
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
              `
rounded-xl
border
bg-background/80
p-3
backdrop-blur-xl
sm:p-4
lg:rounded-2xl
lg:p-6
`,
              isInView
                ? "border-primary/20 shadow-xl shadow-primary/10"
                : "border-border",
            )}
          >
            <div className="mb-5 flex items-center justify-between">
              <span
                className="rounded-full
border
px-2
py-0.5
text-[8px]
uppercase
tracking-widest
text-muted-foreground
sm:px-2.5
sm:text-[9px]
lg:px-3
lg:py-1
lg:text-[10px]"
              >
                Step {step.id.toString().padStart(2, "0")}
              </span>

              <div
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-md transition-all sm:h-8 sm:w-8  lg:h-10 lg:w-10 lg:rounded-lg",
                  isInView
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground",
                )}
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
              </div>
            </div>

            <h3
              className="
mb-1
text-sm
font-semibold
leading-5
sm:text-base
lg:mb-2
lg:text-xl
"
            >
              {step.title}
            </h3>

            <p
              className="
text-[10px]
leading-4
text-muted-foreground
sm:text-xs
sm:leading-5
lg:text-sm
lg:leading-7
"
            >
              {step.description}
            </p>
          </motion.div>

          {/* connector */}
          <div className="relative flex items-center justify-end">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="
h-[2px]
w-full
origin-right
bg-primary
"
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
            "relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background sm:h-7 sm:w-7 lg:h-9 lg:w-9",
            isInView
              ? "border-primary shadow-lg shadow-primary/20"
              : "border-border",
          )}
        >
          <div
            className={cn(
              "h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 lg:h-2.5 lg:w-2.5",
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
