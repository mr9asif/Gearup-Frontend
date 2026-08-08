"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./howItWorks/SectionHeader";

const faqs = [
  {
    question: "How does GearUp rental work?",
    answer:
      "Simply browse the available sports equipment, choose the gear you need, select your rental dates, and complete your booking. Once your rental is confirmed, you can collect the equipment and enjoy your adventure.",
  },
  {
    question: "Do I need an account to rent equipment?",
    answer:
      "Yes. You need a GearUp account to make a rental. Creating an account allows you to manage your bookings, view rental history, and keep track of your payments.",
  },
  {
    question: "How do I find the equipment I need?",
    answer:
      "You can browse all available equipment from the Browse Gear section or explore equipment by sports category. You can also use the available filters to find gear that matches your needs.",
  },
  {
    question: "How much does it cost to rent equipment?",
    answer:
      "Rental prices depend on the equipment and provider. Each gear listing shows its rental price, so you can compare options before making a booking.",
  },
  {
    question: "How do I pay for my rental?",
    answer:
      "After selecting your equipment and rental details, you can complete the payment through GearUp's secure payment process. Your booking is confirmed once the payment is successfully completed.",
  },
  {
    question: "Can I cancel my rental?",
    answer:
      "Cancellation availability depends on the rental status and applicable cancellation policy. You can check your booking details for the available cancellation options.",
  },
  {
    question: "What happens if the equipment is damaged?",
    answer:
      "Equipment should be returned in the same condition in which it was rented. If equipment is damaged during the rental period, the applicable provider terms and GearUp policies may apply.",
  },
  {
    question: "How can I become a GearUp provider?",
    answer:
      "Anyone who wants to rent out eligible sports or outdoor equipment can apply as a provider. Click 'Become a Provider' to create your provider account and start listing your equipment.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/[0.06] blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-96 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.025] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about renting sports and outdoor equipment through GearUp."
        />

        {/* FAQ Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <HelpCircle className="h-6 w-6" />
          </div>
        </div>

        {/* FAQ List */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm dark:bg-white/[0.03]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-border last:border-b-0"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex w-full
                    items-center justify-between
                    gap-6
                    px-6 py-5
                    text-left
                    transition-colors duration-200

                    hover:bg-primary/[0.03]

                    sm:px-7
                  "
                >
                  <span
                    className={`
                      text-sm
                      font-semibold
                      transition-colors duration-200
                      sm:text-base
                      ${isOpen ? "text-primary" : "text-foreground"}
                    `}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex h-8 w-8
                      shrink-0
                      items-center justify-center
                      rounded-full
                      transition-all duration-300
                      ${
                        isOpen
                          ? "bg-gradient-to-br from-primary via-emerald-500 to-blue-500 text-white"
                          : "bg-primary/10 text-primary"
                      }
                    `}
                  >
                    <ChevronDown
                      className={`
                        h-4 w-4
                        transition-transform duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid transition-all duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pr-16 text-sm leading-7 text-muted-foreground sm:px-7 sm:pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">Still have questions?</p>

          <p className="mt-1 text-sm font-medium text-primary">
            Our team is here to help you get started with GearUp.
          </p>
        </div>
      </div>
    </section>
  );
}
