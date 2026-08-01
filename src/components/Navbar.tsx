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
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-2xl border border-orange-900/10 bg-white/75 shadow-[0_10px_40px_rgba(80,35,10,0.08)] backdrop-blur-xl backdrop-saturate-150">
          <div className="flex h-[70px] items-center justify-between px-4 sm:px-6 lg:px-7">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#C84A18] to-[#8F2F0A] text-white shadow-lg shadow-orange-900/20 transition duration-300 group-hover:scale-105 group-hover:shadow-orange-900/30">
                <CalendarDays className="relative z-10 h-5 w-5" />

                <div className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-[#F47721]/50 blur-md" />
              </div>

              <div className="flex flex-col">
                <span className="font-[Manrope] text-lg font-extrabold tracking-tight text-[#2A211D] sm:text-xl">
                  Eventify
                </span>

                <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-[#A83B0B]/70 sm:block">
                  Moments made memorable
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative rounded-xl px-4 py-2.5 text-sm font-semibold text-[#665B55] transition-all duration-300 hover:bg-orange-900/[0.04] hover:text-[#A83B0B]"
                >
                  {link.label}

                  <span className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#C84A18] to-[#F47721] transition-all duration-300 group-hover:w-5/6" />
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden items-center gap-2.5 md:flex">
              <Link
                href="/auth/login"
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#8F2F0A] transition-all duration-300 hover:bg-orange-900/[0.05]"
              >
                Login
              </Link>

              <Link
                href="/auth/signup"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C84A18] to-[#A83B0B] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-900/25"
              >
                <span>Sign Up</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-900/10 bg-white/60 text-[#8F2F0A] transition-all duration-300 hover:bg-orange-900/[0.05] md:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
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
            <div className="border-t border-orange-900/10 px-4 pb-4 pt-3 md:hidden">
              <div className="rounded-xl border border-orange-900/[0.08] bg-white/60 p-2 backdrop-blur-md">
                <nav className="flex flex-col gap-1">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-4 py-3 text-sm font-semibold text-[#665B55] transition-all duration-300 hover:bg-orange-900/[0.05] hover:text-[#A83B0B]"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="my-2 h-px bg-orange-900/[0.08]" />

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/auth/login"
                    className="rounded-xl border border-orange-900/10 bg-white/70 px-4 py-3 text-center text-sm font-semibold text-[#8F2F0A] transition-all duration-300 hover:bg-orange-900/[0.04]"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>

                  <Link
                    href="/auth/signup"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#C84A18] to-[#A83B0B] px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-orange-900/15 transition-all duration-300"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Mobile Bottom Accent */}
              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A83B0B]/60">
                <Sparkles className="h-3 w-3" />
                Create unforgettable moments
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}