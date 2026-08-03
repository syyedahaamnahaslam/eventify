import Link from "next/link";
import {
  CalendarDays,
  ArrowUpRight,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-br from-[#5C0024] via-[#7A002F] to-[#92003A] text-white">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#C00645]/20 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#E1848C]/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Glass Container */}

        <div className="rounded-[32px] border border-white/10 bg-white/10 p-7 shadow-[0_25px_70px_rgba(0,0,0,.18)] backdrop-blur-2xl sm:p-10">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}

            <div className="lg:col-span-2">

              <Link
                href="/"
                className="group inline-flex items-center gap-4"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C00645] to-[#92003A] text-white shadow-xl transition-all duration-300 group-hover:scale-110">

                  <CalendarDays className="h-6 w-6" />

                </div>

                <div>

                  <span className="block font-heading text-2xl font-bold text-white">

                    Eventify

                  </span>

                  <span className="text-[11px] uppercase tracking-[0.22em] text-pink-200">

                    Premium Event Platform

                  </span>

                </div>

              </Link>

              <p className="mt-6 max-w-md text-sm leading-8 text-pink-100">

                Discover premium events, reserve tickets instantly and
                experience unforgettable moments with Pakistan's modern
                event booking platform.

              </p>

              {/* Social Icons */}

              <div className="mt-8 flex items-center gap-3">

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#C00645]"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#C00645]"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="mailto:hello@eventify.com"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#C00645]"
                >
                  <Mail className="h-5 w-5" />
                </a>

              </div>

            </div>
                        {/* Quick Links */}

            <div>

              <h3 className="font-heading text-lg font-semibold text-white">
                Quick Links
              </h3>

              <ul className="mt-6 space-y-4">

                <li>
                  <Link
                    href="/events"
                    className="group flex items-center gap-2 text-sm text-pink-100 transition-all duration-300 hover:text-white"
                  >
                    Browse Events
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/booking"
                    className="group flex items-center gap-2 text-sm text-pink-100 transition-all duration-300 hover:text-white"
                  >
                    Book Now
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/dashboard"
                    className="group flex items-center gap-2 text-sm text-pink-100 transition-all duration-300 hover:text-white"
                  >
                    Dashboard
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </Link>
                </li>

              </ul>

            </div>

            {/* Account */}

            <div>

              <h3 className="font-heading text-lg font-semibold text-white">
                Account
              </h3>

              <ul className="mt-6 space-y-4">

                <li>
                  <Link
                    href="/auth/login"
                    className="group flex items-center gap-2 text-sm text-pink-100 transition-all duration-300 hover:text-white"
                  >
                    Login
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/auth/signup"
                    className="group flex items-center gap-2 text-sm text-pink-100 transition-all duration-300 hover:text-white"
                  >
                    Sign Up
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </Link>
                </li>

              </ul>

            </div>

          </div>

          {/* Divider */}

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

            <p className="text-sm text-pink-200">
              © {new Date().getFullYear()} Eventify. All Rights Reserved.
            </p>

            <p className="text-sm text-pink-200">
              Crafted with ❤️ by{" "}
              <span className="font-semibold text-white">
                ZYNVEX Solutions
              </span>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}