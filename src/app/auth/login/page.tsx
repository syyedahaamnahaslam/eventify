"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Supabase auth — will work once env vars are set
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Redirect on success
    window.location.href = "/dashboard";
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF8F5] text-[#2A211D]">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="hero-blob left-[-150px] top-20 h-[350px] w-[350px] bg-[#F47721]" />

      <div className="hero-blob right-[-160px] bottom-[-80px] h-[400px] w-[400px] bg-[#A83B0B]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-900/[0.025]" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-orange-900/[0.08] bg-white/40 shadow-[0_30px_100px_rgba(70,35,15,0.08)] backdrop-blur-xl lg:grid-cols-2">
          {/* =====================================================
              LEFT / BRAND PANEL
          ====================================================== */}

          <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#8F2F0A] via-[#A83B0B] to-[#C84A18] p-10 lg:flex lg:min-h-[650px] lg:flex-col lg:justify-between xl:p-14">
            {/* Decorative Glows */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F47721]/30 blur-[90px]" />

            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-black/20 blur-[100px]" />

            {/* Decorative Circle */}
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-72 w-72 rounded-full border border-white/10" />

            <div className="relative">
              {/* Logo / Brand */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-[Manrope] text-lg font-extrabold text-white">
                    Eventify
                  </p>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    Event Experiences
                  </p>
                </div>
              </div>

              {/* Main Text */}
              <div className="mt-24 max-w-md">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFD0A8]" />
                  Welcome back
                </p>

                <h2 className="mt-5 font-[Manrope] text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white xl:text-5xl">
                  Your next
                  <span className="block text-[#FFD0A8]">
                    unforgettable
                  </span>
                  moment awaits.
                </h2>

                <p className="mt-6 text-sm leading-7 text-white/65">
                  Sign in to manage your bookings, explore curated events, and
                  keep every special moment organized in one beautiful space.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="relative space-y-4">
              <div className="flex items-center gap-3 text-sm text-white/75">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
                  <CheckCircle2 className="h-4 w-4 text-[#FFD0A8]" />
                </div>

                <span>Manage all your event bookings</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-white/75">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
                  <ShieldCheck className="h-4 w-4 text-[#FFD0A8]" />
                </div>

                <span>Secure and simple booking experience</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT / LOGIN FORM
          ====================================================== */}

          <div className="relative flex min-h-[650px] items-center justify-center bg-[#FAF8F5]/75 p-6 sm:p-10 lg:p-12 xl:p-16">
            {/* Subtle Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(100,50,20,1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,50,20,1) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />

            <div className="relative w-full max-w-md">
              {/* Mobile Brand */}
              <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#A83B0B] text-white shadow-lg">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-[Manrope] text-lg font-extrabold text-[#2A211D]">
                    Eventify
                  </p>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A09289]">
                    Event Experiences
                  </p>
                </div>
              </div>

              {/* Heading */}
              <div className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A83B0B]/[0.07] text-[#A83B0B] sm:mx-0">
                  <LockKeyhole className="h-5 w-5" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#A83B0B]">
                  Account Login
                </p>

                <h1 className="mt-2 font-[Manrope] text-3xl font-extrabold tracking-[-0.035em] text-[#2A211D] sm:text-4xl">
                  Welcome back
                </h1>

                <p className="mt-3 text-sm leading-6 text-[#81766E]">
                  Login to manage your bookings and continue planning memorable
                  experiences.
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="mt-8 space-y-5">
                {/* Error */}
                {error && (
                  <div className="rounded-2xl border border-red-900/10 bg-red-50/80 px-4 py-3 text-sm leading-6 text-red-700 shadow-sm">
                    {error}
                  </div>
                )}

                {/* Email */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#514840]">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A09289]" />

                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl border border-orange-900/[0.10] bg-white/60 py-3.5 pl-11 pr-4 text-sm text-[#2A211D] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#B0A69E] focus:border-[#A83B0B]/40 focus:bg-white/80 focus:ring-4 focus:ring-[#A83B0B]/[0.06]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-[0.12em] text-[#514840]">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-semibold text-[#A83B0B] transition-colors hover:text-[#7E2D08]"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A09289]" />

                    <input
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-2xl border border-orange-900/[0.10] bg-white/60 py-3.5 pl-11 pr-4 text-sm text-[#2A211D] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#B0A69E] focus:border-[#A83B0B]/40 focus:bg-white/80 focus:ring-4 focus:ring-[#A83B0B]/[0.06]"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#8F2F0A] to-[#C84A18] px-6 py-4 text-sm font-bold text-white shadow-[0_15px_35px_rgba(143,47,10,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(143,47,10,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Logging in..." : "Login to Account"}

                  {!loading && (
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              </form>

              {/* Signup */}
              <div className="mt-7 text-center">
                <p className="text-sm text-[#81766E]">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/auth/signup"
                    className="font-bold text-[#A83B0B] transition-colors hover:text-[#7E2D08] hover:underline"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              {/* Security Note */}
              <div className="mt-8 flex items-center justify-center gap-2 border-t border-orange-900/[0.07] pt-6 text-xs text-[#A09289]">
                <ShieldCheck className="h-4 w-4 text-[#A83B0B]" />
                Your account information is securely protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}