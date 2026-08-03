import { LucideIcon } from "lucide-react";
import { StepCard } from "./StepCard";

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface StepTimelineProps {
  steps: Step[];
}

export function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <StepCard
          key={step.title}
          step={index + 1}
          title={step.title}
          description={step.description}
          icon={step.icon}
        />
      ))}
    </div>
  );
}
