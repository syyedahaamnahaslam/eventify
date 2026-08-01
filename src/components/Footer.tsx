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
    <footer className="relative mt-16 overflow-hidden border-t border-orange-900/10 bg-[#F5F0EA]">
      {/* Decorative Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F47721]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#A83B0B]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Main Footer Glass Panel */}
        <div className="rounded-3xl border border-orange-900/10 bg-white/55 p-6 shadow-[0_20px_60px_rgba(80,35,10,0.06)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="group inline-flex items-center gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#C84A18] to-[#8F2F0A] text-white shadow-lg shadow-orange-900/20 transition duration-300 group-hover:scale-105">
                  <CalendarDays className="h-6 w-6" />
                </div>

                <div>
                  <span className="block font-[Manrope] text-xl font-extrabold tracking-tight text-[#2A211D]">
                    Eventify
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A83B0B]/60">
                    Moments made memorable
                  </span>
                </div>
              </Link>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#756A63]">
                Organize and book weddings, parties, corporate events and more.
                Create unforgettable moments with a simple, modern and seamless
                event booking experience.
              </p>

              {/* Social / Contact Buttons */}
              <div className="mt-6 flex items-center gap-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-900/10 bg-white/70 text-[#8F2F0A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A83B0B] hover:text-white hover:shadow-lg hover:shadow-orange-900/15"
                >
                  <Instagram className="h-4 w-4" />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-900/10 bg-white/70 text-[#8F2F0A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A83B0B] hover:text-white hover:shadow-lg hover:shadow-orange-900/15"
                >
                  <Facebook className="h-4 w-4" />
                </a>

                <a
                  href="mailto:hello@eventify.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-900/10 bg-white/70 text-[#8F2F0A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A83B0B] hover:text-white hover:shadow-lg hover:shadow-orange-900/15"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-[Manrope] text-sm font-bold text-[#2A211D]">
                Quick Links
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <Link
                    href="/events"
                    className="group flex items-center gap-1.5 text-sm text-[#756A63] transition-colors duration-300 hover:text-[#A83B0B]"
                  >
                    Browse Events
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/booking"
                    className="group flex items-center gap-1.5 text-sm text-[#756A63] transition-colors duration-300 hover:text-[#A83B0B]"
                  >
                    Book Now
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/dashboard"
                    className="group flex items-center gap-1.5 text-sm text-[#756A63] transition-colors duration-300 hover:text-[#A83B0B]"
                  >
                    Dashboard
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="font-[Manrope] text-sm font-bold text-[#2A211D]">
                Account
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <Link
                    href="/auth/login"
                    className="group flex items-center gap-1.5 text-sm text-[#756A63] transition-colors duration-300 hover:text-[#A83B0B]"
                  >
                    Login
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="/auth/signup"
                    className="group flex items-center gap-1.5 text-sm text-[#756A63] transition-colors duration-300 hover:text-[#A83B0B]"
                  >
                    Sign Up
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-orange-900/10 to-transparent" />

          {/* Bottom Footer */}
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-[#9A918A]">
              © {new Date().getFullYear()} Eventify. All rights reserved.
            </p>

            <p className="text-xs text-[#9A918A]">
              Internship Project ·{" "}
              <span className="font-semibold text-[#A83B0B]/70">
                ZYNVEX Solutions
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}