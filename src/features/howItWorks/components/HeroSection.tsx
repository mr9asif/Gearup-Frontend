export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background Blur */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto max-w-5xl px-4 py-24 text-center">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
          ⚡ Simple Rental Process
        </span>

        {/* Title */}
        <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
          How <span className="text-primary">GearUp</span> Works
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Renting sports equipment should be easy. Whether you are looking for
          gear for your next adventure or want to earn money by listing your
          equipment, GearUp makes every step simple, secure and hassle-free.
        </p>
      </div>
    </section>
  );
}
