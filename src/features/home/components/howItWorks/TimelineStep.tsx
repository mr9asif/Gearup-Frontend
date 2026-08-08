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
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  const Icon = step.icon;

  /*
   * Shared card style
   * Same visual language as the GearUp Category cards.
   */
  const cardClass = `
    group relative overflow-hidden
    rounded-3xl
    border border-border
    bg-card
    p-6
    shadow-sm
    backdrop-blur-md

    transition-all duration-300

    hover:-translate-y-1
    hover:border-primary/30
    hover:shadow-xl
    hover:shadow-primary/10

    hover:bg-gradient-to-br
    hover:from-primary/[0.04]
    hover:via-background
    hover:to-blue-500/[0.04]

    dark:hover:from-primary/[0.08]
    dark:hover:via-background
    dark:hover:to-blue-500/[0.08]

    lg:p-8
  `;

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10"
    >
      {/* =====================================================
          LEFT SIDE
      ====================================================== */}

      {!reverse ? (
        <>
          {/* LEFT CARD */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: isInView ? 1 : 0.45,
              y: isInView ? 0 : 20,
              scale: isInView ? 1 : 0.98,
            }}
            transition={{ duration: 0.5 }}
            className={cn(
              cardClass,
              isInView && "border-primary/30 shadow-lg shadow-primary/10",
            )}
          >
            {/* Hover Glow */}
            <div
              className="
                pointer-events-none
                absolute -right-16 -top-16
                h-32 w-32
                rounded-full
                bg-gradient-to-br
                from-primary/20
                via-emerald-500/10
                to-blue-500/20
                opacity-0
                blur-3xl
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            {/* Header */}
            <div className="relative mb-5 flex items-center justify-between">
              {/* Step */}
              <span
                className="
                  rounded-full
                  border border-primary/10
                  bg-primary/[0.05]
                  px-3 py-1
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-widest
                  text-primary
                "
              >
                Step {step.id.toString().padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary

                  transition-all duration-300

                  group-hover:bg-gradient-to-br
                  group-hover:from-primary
                  group-hover:via-emerald-500
                  group-hover:to-blue-500
                  group-hover:text-white
                  group-hover:scale-105
                  group-hover:shadow-lg
                  group-hover:shadow-primary/20
                "
              >
                <Icon className="h-5 w-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="relative text-xl font-bold tracking-tight">
              {step.title}
            </h3>

            {/* Description */}
            <p className="relative mt-3 text-sm leading-7 text-muted-foreground">
              {step.description}
            </p>

            {/* Bottom Gradient */}
            <div
              className="
                absolute bottom-0 left-0
                h-0.5 w-0
                bg-gradient-to-r
                from-primary
                via-emerald-500
                to-blue-500
                transition-all duration-500
                group-hover:w-full
              "
            />
          </motion.div>

          {/* LEFT CONNECTOR */}
          <div className="relative flex items-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: isInView ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="
                h-[2px]
                w-full
                origin-right
                bg-gradient-to-r
                from-primary/20
                via-primary
                to-primary
              "
            />
          </div>
        </>
      ) : (
        <>
          {/* Empty Left Space */}
          <div />
          <div />
        </>
      )}

      {/* =====================================================
          CENTER TIMELINE
      ====================================================== */}

      <div className="relative flex justify-center">
        {/* Vertical Line */}
        {!isLast && (
          <div className="absolute top-5 h-full w-px bg-border">
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: isInView ? "100%" : 0,
              }}
              transition={{ duration: 0.6 }}
              className="
                w-full
                origin-top
                bg-gradient-to-b
                from-primary
                via-emerald-500
                to-blue-500
              "
            />
          </div>
        )}

        {/* Timeline Dot */}
        <motion.div
          animate={{
            scale: isInView ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className={cn(
            `
              relative z-10
              flex h-9 w-9
              items-center justify-center
              rounded-full
              border-2
              bg-background
              transition-all duration-300
            `,
            isInView
              ? "border-primary shadow-lg shadow-primary/20"
              : "border-border",
          )}
        >
          <div
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all duration-300",
              isInView
                ? "bg-gradient-to-r from-primary via-emerald-500 to-blue-500"
                : "bg-muted-foreground",
            )}
          />
        </motion.div>
      </div>

      {/* =====================================================
          RIGHT SIDE
      ====================================================== */}

      {reverse ? (
        <>
          {/* RIGHT CONNECTOR */}
          <div className="relative flex items-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: isInView ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="
                h-[2px]
                w-full
                origin-left
                bg-gradient-to-r
                from-primary
                via-primary
                to-primary/20
              "
            />
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: isInView ? 1 : 0.45,
              y: isInView ? 0 : 20,
              scale: isInView ? 1 : 0.98,
            }}
            transition={{ duration: 0.5 }}
            className={cn(
              cardClass,
              isInView && "border-primary/30 shadow-lg shadow-primary/10",
            )}
          >
            {/* Hover Glow */}
            <div
              className="
                pointer-events-none
                absolute -right-16 -top-16
                h-32 w-32
                rounded-full
                bg-gradient-to-br
                from-primary/20
                via-emerald-500/10
                to-blue-500/20
                opacity-0
                blur-3xl
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            {/* Header */}
            <div className="relative mb-5 flex items-center justify-between">
              {/* Step */}
              <span
                className="
                  rounded-full
                  border border-primary/10
                  bg-primary/[0.05]
                  px-3 py-1
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-widest
                  text-primary
                "
              >
                Step {step.id.toString().padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary

                  transition-all duration-300

                  group-hover:bg-gradient-to-br
                  group-hover:from-primary
                  group-hover:via-emerald-500
                  group-hover:to-blue-500
                  group-hover:text-white
                  group-hover:scale-105
                  group-hover:shadow-lg
                  group-hover:shadow-primary/20
                "
              >
                <Icon className="h-5 w-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="relative text-xl font-bold tracking-tight">
              {step.title}
            </h3>

            {/* Description */}
            <p className="relative mt-3 text-sm leading-7 text-muted-foreground">
              {step.description}
            </p>

            {/* Bottom Gradient */}
            <div
              className="
                absolute bottom-0 left-0
                h-0.5 w-0
                bg-gradient-to-r
                from-primary
                via-emerald-500
                to-blue-500
                transition-all duration-500
                group-hover:w-full
              "
            />
          </motion.div>
        </>
      ) : (
        <>
          {/* Empty Right Space */}
          <div />
        </>
      )}
    </div>
  );
}
