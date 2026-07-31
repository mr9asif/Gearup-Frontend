interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "mx-auto max-w-3xl text-center" : ""}`}>
      <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary backdrop-blur">
        {badge}
      </span>

      <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
