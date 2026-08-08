import { LucideIcon } from "lucide-react";

interface Props {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function StepCard({ step, title, description, icon: Icon }: Props) {
  return (
    <div className="group relative rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl">
      <div className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
        {step}
      </div>

      <div
        className="
    mt-8 flex h-16 w-16 items-center justify-center rounded-2xl
    bg-primary/10
    text-foreground
    transition-colors
    group-hover:bg-primary
    group-hover:text-white

    dark:bg-black
    dark:text-white
    dark:group-hover:bg-white
    dark:group-hover:text-black
  "
      >
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-muted-foreground">{description}</p>
    </div>
  );
}
