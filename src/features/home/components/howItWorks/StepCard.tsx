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
        <ArrowRight className="absolute -right-8 top-14 hidden h-8 w-8 text-muted-foreground/30 xl:block" />
      )}

      <div className="group relative h-full rounded-3xl border bg-background/70 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">
        {/* Number */}
        <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {number}
        </div>

        {/* Icon */}
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
          <Icon className="h-8 w-8" />
        </div>

        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="mt-4 leading-7 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
