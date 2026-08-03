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
  UserRound,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  /* =========================================================
     SUCCESS / EMAIL CONFIRMATION SCREEN
  ========================================================== */

  if (success) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#FFF8FA] text-[#2A0D18]">
        <div className="hero-blob one left-[-150px] top-20 h-[350px] w-[350px]" />
        <div className="hero-blob two right-[-160px] bottom-[-80px] h-[400px] w-[400px]" />

        <div className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="card relative w-full max-w-lg overflow-hidden rounded-[2rem] p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#C00645]/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#C00645]/[0.08] text-[#C00645] shadow-sm">
                <CheckCircle2 className="h-9 w-9" />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#C00645]">
                Almost There
              </p>

              <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#2A0D18] sm:text-4xl">
                Check your email
              </h1>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#6A4B57]">
                We sent a confirmation link to{" "}
                <strong className="font-bold text-[#2A0D18]">{email}</strong>.
                Click the link in your inbox to activate your Eventify account.
              </p>

              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-[#C00645]/10 bg-white/70 p-4 text-left backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C00645]/[0.08] text-[#C00645]">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9B7A84]">
                    Confirmation email sent to
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-[#2A0D18]">
                    {email}
                  </p>
                </div>
              </div>

              <Link
                href="/auth/login"
                className="btn-primary group mt-8 inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                Back to Login
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="mt-7 flex items-center justify-center gap-2 border-t border-[#C00645]/10 pt-6 text-xs text-[#9B7A84]">
                <ShieldCheck className="h-4 w-4 text-[#C00645]" />
                Your account information is securely protected
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     SIGNUP PAGE
  ========================================================== */

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFF8FA] text-[#2A0D18]">
      <div className="hero-blob one left-[-150px] top-20 h-[350px] w-[350px]" />
      <div className="hero-blob two right-[-160px] bottom-[-80px] h-[400px] w-[400px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C00645]/[0.04]" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-[#C00645]/10 bg-white/50 shadow-premium backdrop-blur-xl lg:grid-cols-2">
          {/* LEFT / BRAND PANEL */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#92003A] via-[#C00645] to-[#E1848C] p-10 lg:flex lg:min-h-[720px] lg:flex-col lg:justify-between xl:p-14">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-[90px]" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-black/15 blur-[100px]" />
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-72 w-72 rounded-full border border-white/10" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-white">Eventify</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    Event Experiences
                  </p>
                </div>
              </div>

              <div className="mt-24 max-w-md">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FCE4EC]" />
                  Join Eventify
                </p>

                <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white xl:text-5xl">
                  Create your
                  <span className="block text-[#FCE4EC]">event story.</span>
                </h2>

                <p className="mt-6 text-sm leading-7 text-white/70">
                  Join a community where unforgettable experiences begin.
                  Create your account and discover a simpler way to book
                  beautiful events.
                </p>
              </div>
            </div>

            <div className="relative space-y-4">
              {[
                "Discover curated event packages",
                "Book events with ease",
                "Enjoy a secure account experience",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
                    <CheckCircle2 className="h-4 w-4 text-[#FCE4EC]" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT / SIGNUP FORM */}
          <div className="relative flex min-h-[720px] items-center justify-center bg-[#FFF8FA]/80 p-6 sm:p-10 lg:p-12 xl:p-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(192,6,69,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,6,69,1) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />

            <div className="relative w-full max-w-md">
              {/* Mobile Brand */}
              <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#92003A] to-[#C00645] text-white shadow-lg">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-[#2A0D18]">
                    Eventify
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9B7A84]">
                    Event Experiences
                  </p>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C00645]/[0.08] text-[#C00645] sm:mx-0">
                  <UserRound className="h-5 w-5" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#C00645]">
                  Create Your Account
                </p>

                <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] text-[#2A0D18] sm:text-4xl">
                  Join Eventify
                </h1>

                <p className="mt-3 text-sm leading-6 text-[#6A4B57]">
                  Create your account and start booking memorable events.
                </p>
              </div>

              <form onSubmit={handleSignup} className="mt-8 space-y-5">
                {error && (
                  <div className="rounded-2xl border border-red-200 bg-red-50/90 px-4 py-3 text-sm leading-6 text-red-700 shadow-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A0D18]">
                    Full Name
                  </label>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9B7A84]" />
                    <input
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-2xl border border-[#C00645]/15 bg-white/70 py-3.5 pl-11 pr-4 text-sm text-[#2A0D18] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#9B7A84] focus:border-[#C00645]/40 focus:bg-white focus:ring-4 focus:ring-[#C00645]/10"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A0D18]">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9B7A84]" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl border border-[#C00645]/15 bg-white/70 py-3.5 pl-11 pr-4 text-sm text-[#2A0D18] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#9B7A84] focus:border-[#C00645]/40 focus:bg-white focus:ring-4 focus:ring-[#C00645]/10"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A0D18]">
                    Password
                  </label>
                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9B7A84]" />
                    <input
                      required
                      type="password"
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-2xl border border-[#C00645]/15 bg-white/70 py-3.5 pl-11 pr-4 text-sm text-[#2A0D18] outline-none backdrop-blur-md transition-all duration-300 placeholder:text-[#9B7A84] focus:border-[#C00645]/40 focus:bg-white focus:ring-4 focus:ring-[#C00645]/10"
                      placeholder="Min. 6 characters"
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-[#9B7A84]">
                    Your password must contain at least 6 characters.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#92003A] to-[#C00645] px-6 py-4 text-sm font-bold text-white shadow-[0_15px_35px_rgba(192,6,69,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(192,6,69,0.3)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create Account"}
                  {!loading && (
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              </form>

              <div className="mt-7 text-center">
                <p className="text-sm text-[#6A4B57]">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="font-bold text-[#C00645] transition-colors hover:text-[#92003A] hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 border-t border-[#C00645]/10 pt-6 text-xs text-[#9B7A84]">
                <ShieldCheck className="h-4 w-4 text-[#C00645]" />
                Your account information is securely protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
