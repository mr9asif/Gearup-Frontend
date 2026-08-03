import RegisterForm from "@/features/auth/components/register-form";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-10">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border bg-card shadow-2xl lg:grid-cols-2">
          {/* Left Side */}
          <div className="relative hidden flex-col justify-between bg-primary p-12 text-primary-foreground lg:flex">
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <Image
                src="/logo.png"
                alt="GearUp"
                width={80}
                height={80}
                className="mb-8 rounded-2xl bg-white p-3"
              />

              <h1 className="text-5xl font-bold leading-tight">
                Gear<span className="text-gray-300">Up</span>
              </h1>

              <p className="mt-6 max-w-md text-lg text-primary-foreground/80">
                Rent premium sports equipment from trusted providers and enjoy
                your next adventure with confidence.
              </p>
            </div>

            <div className="relative z-10 space-y-5">
              <Feature text="Trusted Sports Equipment" />
              <Feature text="Secure Online Payments" />
              <Feature text="Fast & Easy Booking" />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-8 lg:p-14">
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-white/15 p-2">
        <CheckCircle2 className="h-5 w-5" />
      </div>

      <span>{text}</span>
    </div>
  );
}
