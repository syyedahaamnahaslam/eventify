"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  CalendarDays,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/booking", label: "Book Now" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl">

        {/* Floating Glass Navbar */}

        <div className="relative overflow-hidden rounded-[26px] border border-white/40 bg-white/65 shadow-[0_20px_70px_rgba(192,6,69,0.10)] backdrop-blur-2xl">

          {/* Glow */}

          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#E1848C]/20 blur-3xl" />

          <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-[#C00645]/10 blur-3xl" />

          <div className="relative flex h-[78px] items-center justify-between px-5 lg:px-8">

            {/* Logo */}

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C00645] via-[#D05D65] to-[#E1848C] text-white shadow-xl shadow-rose-300/30 transition duration-500 group-hover:scale-110">

                <CalendarDays className="h-5 w-5 z-10" />

                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>

              <div>

                <h1 className="font-heading text-xl font-extrabold tracking-tight text-[#31121D]">

                  Eventify

                </h1>

                <p className="hidden text-[10px] uppercase tracking-[0.28em] text-[#C00645]/70 sm:block">

                  Premium Event Booking

                </p>

              </div>

            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-2 lg:flex">

              {links.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative rounded-2xl px-5 py-3 text-sm font-semibold text-[#654852] transition-all duration-300 hover:bg-white/70 hover:text-[#C00645]"
                >

                  {link.label}

                  <span className="absolute bottom-2 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#C00645] to-[#E1848C] transition-all duration-300 group-hover:w-3/4" />

                </Link>

              ))}

            </nav>
                        {/* Desktop Buttons */}

            <div className="hidden items-center gap-3 lg:flex">

              <Link
                href="/auth/login"
                className="rounded-2xl border border-[#C00645]/10 bg-white/60 px-5 py-3 text-sm font-semibold text-[#C00645] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C00645]/20 hover:bg-white hover:shadow-lg"
              >
                Login
              </Link>

              <Link
                href="/auth/signup"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#C00645] via-[#D05D65] to-[#E1848C] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(192,6,69,.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(192,6,69,.28)]"
              >
                <span>Get Started</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close Menu" : "Open Menu"}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-white/70 text-[#C00645] shadow-md backdrop-blur-xl transition-all duration-300 hover:bg-white lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

          </div>
                    {/* Mobile Menu */}

          {open && (
            <div className="border-t border-[#C00645]/10 bg-white/55 px-5 pb-5 pt-4 backdrop-blur-2xl lg:hidden">

              <nav className="flex flex-col gap-2">

                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#654852] transition-all duration-300 hover:bg-white hover:text-[#C00645] hover:shadow-md"
                  >
                    {link.label}
                  </Link>
                ))}

              </nav>

              <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#C00645]/20 to-transparent" />

              <div className="grid grid-cols-2 gap-3">

                <Link
                  href="/auth/login"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-[#C00645]/10 bg-white/70 px-4 py-3 text-center text-sm font-semibold text-[#C00645] transition-all duration-300 hover:bg-white hover:shadow-lg"
                >
                  Login
                </Link>

                <Link
                  href="/auth/signup"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#C00645] via-[#D05D65] to-[#E1848C] px-4 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(192,6,69,.20)] transition-all duration-300 hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C00645]/70">

                <Sparkles className="h-3.5 w-3.5" />

                Premium Event Experience

              </div>

            </div>
          )}

        </div>

      </div>
    </header>
  );
}