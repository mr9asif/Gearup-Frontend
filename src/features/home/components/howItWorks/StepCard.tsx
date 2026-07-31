import { ArrowRight, LucideIcon } from "lucide-react";

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
    <div className="relative">
      {!isLast && (
        <ArrowRight className="absolute -right-4 top-10 hidden h-5 w-5 text-muted-foreground/30 lg:-right-8 lg:top-14 lg:h-8 lg:w-8 xl:block" />
      )}

      <div className="group relative h-full rounded-xl border bg-background/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-5 lg:rounded-3xl lg:p-8 lg:hover:-translate-y-2 lg:hover:shadow-2xl">
        {/* Number */}
        <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground sm:h-8 sm:w-8 sm:text-xs lg:right-6 lg:top-6 lg:h-10 lg:w-10 lg:text-sm">
          {number}
        </div>

        {/* Icon */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12 lg:mb-8 lg:h-16 lg:w-16 lg:rounded-2xl">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
        </div>

        <h3 className="text-base font-semibold leading-snug sm:text-lg lg:text-2xl">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6 lg:mt-4 lg:leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}
