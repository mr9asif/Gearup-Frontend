"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useRegister } from "../hooks/use-register";
import { registerSchema, RegisterSchema } from "../schemas/register.schema";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ErrorResponse {
  success: boolean;
  message: string;
}

export default function RegisterForm() {
  const router = useRouter();

  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      role: "CUSTOMER",
      profileImage: "",
    },
  });

  const onSubmit = (values: RegisterSchema) => {
    registerMutation.mutate(values, {
      onSuccess: (res) => {
        toast.success(res.message);
        router.push("/login");
      },

      onError: (error: AxiosError<ErrorResponse>) => {
        toast.error(error.response?.data.message ?? "Registration failed");
      },
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle>Create Account</CardTitle>

        <CardDescription>Create your GearUp account</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>

            <Input
              id="name"
              placeholder="Enter your full name"
              {...register("name")}
            />

            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>

            <Input
              id="phone"
              placeholder="Enter your phone number"
              {...register("phone")}
            />

            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role">Register As</Label>

            <select
              id="role"
              {...register("role")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="CUSTOMER">Customer</option>
              <option value="PROVIDER">Provider</option>
            </select>

            {errors.role && (
              <p className="text-sm text-destructive">{errors.role.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={registerMutation.isPending}
          >
            {registerMutation.isPending
              ? "Creating Account..."
              : "Create Account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
