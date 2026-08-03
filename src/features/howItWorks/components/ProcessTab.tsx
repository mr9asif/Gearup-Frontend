"use client";

import { useState } from "react";

import { customerSteps, providerSteps } from "./process.data";
import { StepTimeline } from "./StepTimeline";

export function ProcessTabs() {
  const [tab, setTab] = useState<"customer" | "provider">("customer");

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 flex w-fit rounded-full border bg-muted p-1">
          <button
            onClick={() => setTab("customer")}
            className={`rounded-full px-8 py-3 font-medium transition ${
              tab === "customer"
                ? "bg-primary text-white shadow"
                : "text-muted-foreground"
            }`}
          >
            For Customers
          </button>

          <button
            onClick={() => setTab("provider")}
            className={`rounded-full px-8 py-3 font-medium transition ${
              tab === "provider"
                ? "bg-primary text-white shadow"
                : "text-muted-foreground"
            }`}
          >
            For Providers
          </button>
        </div>

        {tab === "customer" ? (
          <StepTimeline steps={customerSteps} />
        ) : (
          <StepTimeline steps={providerSteps} />
        )}
      </div>
    </section>
  );
}
