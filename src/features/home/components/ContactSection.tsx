"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success("Message sent successfully!", {
      description:
        "Thank you for contacting GearUp. We'll get back to you soon.",
    });

    e.currentTarget.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-20 sm:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contact Us
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Have a question?
            <span className="block">We&apos;d love to hear from you.</span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            Whether you need help with a rental, want to become a provider, or
            simply have a question, feel free to reach out.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Let&apos;s talk</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Our team is here to help you get the most out of GearUp. Send us a
              message and we&apos;ll get back to you as soon as possible.
            </p>

            <div className="mt-8 space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition dark:bg-black dark:text-white">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-medium">Email</p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    asifalibd002@gmil.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition dark:bg-black dark:text-white">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-medium">Phone</p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    +880 1792952161
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition dark:bg-black dark:text-white">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-medium">Location</p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What would you like to talk about?"
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />

                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
