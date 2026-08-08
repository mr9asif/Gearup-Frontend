import { LucideIcon } from "lucide-react";

interface StepCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

export function StepCard({
  number,
  icon: Icon,
  title,
  description,
  isLast = false,
}: StepCardProps) {
  return (
    <div className="relative h-full">
      {/* Connector */}
      {!isLast && (
        <div className="absolute left-[calc(100%+8px)] top-1/2 hidden w-8 -translate-y-1/2 lg:block">
          <div className="h-px bg-gradient-to-r from-primary/30 via-emerald-500/30 to-blue-500/30" />
        </div>
      )}

      {/* Card */}
      <div
        className="
          group relative h-full overflow-hidden
          rounded-xl
          border border-primary/10

          /* Light mode default */
          bg-primary/[0.045]

          p-4
          shadow-sm

          transition-all duration-300

          /* Hover */
          hover:-translate-y-1
          hover:border-transparent
          hover:bg-gradient-to-br
          hover:from-primary
          hover:via-emerald-500
          hover:to-blue-500
          hover:shadow-xl
          hover:shadow-primary/20

          /* Dark mode */
          dark:border-primary/20
          dark:bg-white/[0.06]
          dark:hover:border-transparent

          sm:p-5

          lg:rounded-3xl
          lg:p-8
          lg:hover:-translate-y-2
        "
      >
        {/* =========================
            Subtle Hover Shine
        ========================== */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-br
            from-white/20
            via-transparent
            to-transparent
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />

        {/* =========================
            Number
        ========================== */}
        <div
          className="
            absolute right-4 top-4
            flex h-7 w-7
            items-center justify-center
            rounded-full

            bg-primary
            text-[10px]
            font-bold
            text-primary-foreground

            transition-all duration-300

            group-hover:bg-white
            group-hover:text-primary

            sm:h-8 sm:w-8
            sm:text-xs

            lg:right-6
            lg:top-6
            lg:h-10
            lg:w-10
            lg:text-sm
          "
        >
          {number}
        </div>

        {/* =========================
            Icon
        ========================== */}
        <div
          className="
            relative
            mb-4
            flex h-10 w-10
            items-center justify-center
            rounded-xl

            bg-primary/10
            text-primary

            transition-all duration-300

            group-hover:bg-white
            group-hover:text-primary
            group-hover:scale-105
            group-hover:shadow-lg

            sm:h-12
            sm:w-12

            lg:mb-8
            lg:h-16
            lg:w-16
            lg:rounded-2xl
          "
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
        </div>

        {/* =========================
            Title
        ========================== */}
        <h3
          className="
            relative
            text-base
            font-semibold
            leading-snug

            transition-colors duration-300
            group-hover:text-white

            sm:text-lg

            lg:text-2xl
          "
        >
          {title}
        </h3>

        {/* =========================
            Description
        ========================== */}
        <p
          className="
            relative
            mt-2
            text-xs
            leading-5
            text-muted-foreground

            transition-colors duration-300
            group-hover:text-white/80

            sm:text-sm
            sm:leading-6

            lg:mt-4
            lg:leading-7
          "
        >
          {description}
        </p>

        {/* =========================
            Bottom Accent
        ========================== */}
        <div
          className="
            absolute bottom-0 left-0
            h-0.5 w-0

            bg-white

            transition-all duration-500
            group-hover:w-full
          "
        />
      </div>
    </div>
  );
}
