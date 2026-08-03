import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface DashboardStatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
}

export default function DashboardStatCard({
  title,
  value,
  icon: Icon,
}: DashboardStatCardProps) {
  return (
    <Card
      className="
        group
        relative
        overflow-hidden
        border
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-lg
        hover:shadow-primary/10
        cursor-pointer
      "
    >
      {/* Hover Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-0
          bg-primary
          transition-all
          duration-300
          group-hover:w-full
        "
      />

      <CardContent className="flex items-center justify-between p-6">
        <div className="space-y-1">
          <p
            className="
              text-sm
              text-muted-foreground
              transition-colors
              duration-300
              group-hover:text-primary
            "
          >
            {title}
          </p>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              transition-all
              duration-300
              group-hover:text-primary
            "
          >
            {value}
          </h2>

          <p
            className="
              text-xs
              text-muted-foreground
              opacity-0
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          ></p>
        </div>

        <div
          className="
            rounded-2xl
            bg-primary/10
            p-4
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
            group-hover:bg-primary
          "
        >
          <Icon
            className="
              h-7
              w-7
              text-primary
              transition-colors
              duration-300
              group-hover:text-primary-foreground
            "
          />
        </div>
      </CardContent>
    </Card>
  );
}
