"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    window.location.href = redirectTo;
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF7F8] via-white to-[#FCECEF] px-4 py-16">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#92003A]/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#C00645]/10 blur-[140px]" />

      <div className="relative w-full max-w-md">

        <div className="rounded-[34px] border border-white/40 bg-white/70 p-8 shadow-[0_30px_80px_rgba(146,0,58,.12)] backdrop-blur-2xl">

          <div className="mb-8 text-center">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#92003A] via-[#B0004A] to-[#C00645] text-3xl text-white shadow-xl">

              🔐

            </div>

            <h1 className="font-heading text-3xl font-bold text-[#2A0D18]">

              Welcome Back

            </h1>

            <p className="mt-3 text-sm leading-7 text-[#7A5A64]">

              Login to your account and continue booking premium events.

            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            <div>

              <label className="mb-2 block text-sm font-semibold text-[#2A0D18]">

                Email Address

              </label>

              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="you@example.com"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-semibold text-[#2A0D18]">

                Password

              </label>

              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="••••••••"
              />

            </div>
                        <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 text-base font-semibold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <div className="mt-8">

            <div className="mb-6 flex items-center gap-3">

              <div className="h-px flex-1 bg-[#92003A]/10" />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#8B6A74]">
                OR
              </span>

              <div className="h-px flex-1 bg-[#92003A]/10" />

            </div>

            <div className="text-center">

              <p className="text-sm text-[#7A5A64]">
                Don't have an account?
              </p>

              <Link
                href="/auth/signup"
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-[#92003A]/10 bg-white/70 px-6 py-4 font-semibold text-[#92003A] transition-all duration-300 hover:-translate-y-1 hover:border-[#92003A]/20 hover:bg-white hover:shadow-[0_18px_40px_rgba(146,0,58,.12)]"
              >
                Create New Account
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}