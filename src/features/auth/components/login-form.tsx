"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleLogin } from "@react-oauth/google";
import { AxiosError } from "axios";
import { ArrowLeft, ShieldCheck, User, Users } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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

import { config } from "@/config";
import { useGoogleLogin } from "../hooks/use-google-login";
import { useLogin } from "../hooks/use-login";
import { LoginSchema, loginSchema } from "../schemas/login.schema";

interface ErrorResponse {
  success: boolean;
  message: string;
}

type LoginRole = "CUSTOMER" | "PROVIDER" | "ADMIN";

const demoCredentials: Record<
  LoginRole,
  {
    email: string;
    password: string;
  }
> = {
  CUSTOMER: {
    email: config.demoAccounts.customer.email,
    password: config.demoAccounts.customer.password,
  },

  PROVIDER: {
    email: config.demoAccounts.provider.email,
    password: config.demoAccounts.provider.password,
  },

  ADMIN: {
    email: config.demoAccounts.admin.email,
    password: config.demoAccounts.admin.password,
  },
};

export default function LoginForm() {
  const router = useRouter();

  const login = useLogin();
  const googleLogin = useGoogleLogin();

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // ============================================
  // Redirect based on actual backend role
  // ============================================

  const redirectByRole = (role: string) => {
    if (redirect) {
      router.replace(redirect);
      return;
    }

    switch (role) {
      case "ADMIN":
        router.push("/dashboard/admin");
        break;

      case "PROVIDER":
        router.push("/dashboard/provider");
        break;

      default:
        router.push("/dashboard/customer");
    }
  };

  // ============================================
  // Normal Login
  // ============================================

  const onSubmit = (values: LoginSchema) => {
    login.mutate(values, {
      onSuccess: (res) => {
        toast.success(res.message);

        redirectByRole(res.data.user.role);
      },

      onError: (error: AxiosError<ErrorResponse>) => {
        toast.error(error.response?.data.message ?? "Login failed");
      },
    });
  };

  // ============================================
  // Demo Role Login
  // ============================================

  const handleRoleLogin = (role: LoginRole) => {
    const credentials = demoCredentials[role];

    if (!credentials.email || !credentials.password) {
      toast.error(`${role} demo account is not configured.`);
      return;
    }

    login.mutate(
      {
        email: credentials.email,
        password: credentials.password,
      },
      {
        onSuccess: (res) => {
          const actualRole = res.data.user.role;

          if (actualRole !== role) {
            toast.error(
              `This account is not registered as ${role.toLowerCase()}.`,
            );

            return;
          }

          toast.success(
            `Logged in as ${role.charAt(0) + role.slice(1).toLowerCase()}`,
          );

          // Demo login → always go to Home
          router.replace("/");
        },

        onError: (error: AxiosError<ErrorResponse>) => {
          toast.error(error.response?.data.message ?? "Demo login failed");
        },
      },
    );
  };

  // ============================================
  // Google Login
  // ============================================

  const handleGoogleSuccess = (credential: string) => {
    googleLogin.mutate(credential, {
      onSuccess: (res) => {
        toast.success(res.message ?? "Google login successful!");

        // Google login → Home
        router.replace("/");
      },

      onError: (error) => {
        const axiosError = error as AxiosError<ErrorResponse>;

        toast.error(axiosError.response?.data.message ?? "Google login failed");
      },
    });
  };

  return (
    <Card className="w-full max-w-md">
      {/* ============================================
          HEADER
      ============================================ */}

      <CardHeader className="space-y-3">
        {/* Back Home */}
        <Link
          href="/"
          className="mb-2 inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>

        <CardDescription>Login to your GearUp account</CardDescription>
      </CardHeader>

      <CardContent>
        {/* ============================================
            QUICK ROLE LOGIN
        ============================================ */}

        <div className="space-y-2">
          <Label>Login as</Label>

          <div className="grid grid-cols-3 gap-2">
            {/* Customer */}
            <button
              type="button"
              onClick={() => handleRoleLogin("CUSTOMER")}
              disabled={login.isPending || googleLogin.isPending}
              className="
                flex flex-col items-center justify-center
                gap-1.5 rounded-xl border
                px-2 py-3
                text-xs font-medium
                transition-all
                hover:border-primary/50
                hover:bg-primary/5
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <User className="h-4 w-4" />
              <span>Customer</span>
            </button>

            {/* Provider */}
            <button
              type="button"
              onClick={() => handleRoleLogin("PROVIDER")}
              disabled={login.isPending || googleLogin.isPending}
              className="
                flex flex-col items-center justify-center
                gap-1.5 rounded-xl border
                px-2 py-3
                text-xs font-medium
                transition-all
                hover:border-primary/50
                hover:bg-primary/5
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <Users className="h-4 w-4" />
              <span>Provider</span>
            </button>

            {/* Admin */}
            <button
              type="button"
              onClick={() => handleRoleLogin("ADMIN")}
              disabled={login.isPending || googleLogin.isPending}
              className="
                flex flex-col items-center justify-center
                gap-1.5 rounded-xl border
                px-2 py-3
                text-xs font-medium
                transition-all
                hover:border-primary/50
                hover:bg-primary/5
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Admin</span>
            </button>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Quick login using a demo account
          </p>
        </div>

        {/* ============================================
            DIVIDER
        ============================================ */}

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />

          <span className="text-xs text-muted-foreground">OR</span>

          <div className="h-px flex-1 bg-border" />
        </div>

        {/* ============================================
            NORMAL LOGIN
        ============================================ */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
            disabled={login.isPending || googleLogin.isPending}
          >
            {login.isPending ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        {/* ============================================
            GOOGLE LOGIN
        ============================================ */}

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />

          <span className="text-xs text-muted-foreground">OR</span>

          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const idToken = credentialResponse.credential;

              if (!idToken) {
                toast.error("Google ID token was not received.");
                return;
              }

              handleGoogleSuccess(idToken);
            }}
            onError={() => {
              toast.error("Google login failed.");
            }}
            useOneTap={false}
          />
        </div>

        {/* ============================================
            REGISTER
        ============================================ */}

        <p className="mt-6 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
