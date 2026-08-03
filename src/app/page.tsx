"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Search,
  Shield,
  Sparkles,
  ArrowRight,
  MapPin,
  Users,
  PartyPopper,
  Heart,
  Building2,
  Baby,
  Music,
  GraduationCap,
  UsersRound,
} from "lucide-react";
import { getAllEvents, type EventPackage } from "@/lib/events";

const categories = [
  { name: "Wedding", icon: Heart, href: "/events?category=wedding" },
  { name: "Mehndi", icon: Sparkles, href: "/events?category=mehndi" },
  { name: "Birthday", icon: PartyPopper, href: "/events?category=birthday" },
  { name: "Baby Shower", icon: Baby, href: "/events?category=baby shower" },
  { name: "Corporate", icon: Building2, href: "/events?category=corporate" },
  { name: "Seminar", icon: GraduationCap, href: "/events?category=seminar" },
  { name: "Reception", icon: Music, href: "/events?category=reception" },
  { name: "Get Together", icon: UsersRound, href: "/events?category=get together" },
];

const features = [
  {
    icon: Search,
    title: "Browse & Filter",
    desc: "Find the perfect package by category, city and budget in seconds.",
  },
  {
    icon: CalendarDays,
    title: "Easy Booking",
    desc: "Simple checkout flow — pick guests, share details and book instantly.",
  },
  {
    icon: Shield,
    title: "Secure Account",
    desc: "Supabase authentication keeps your bookings and data safe.",
  },
  {
    icon: Sparkles,
    title: "Full Experience",
    desc: "Venue, décor, photography and catering — all in one place.",
  },
];

const steps = [
  {
    step: "01",
    title: "Explore Events",
    desc: "Browse weddings, birthdays, corporate packages and more.",
  },
  {
    step: "02",
    title: "Choose Package",
    desc: "View details, capacity and starting price — pick what fits you.",
  },
  {
    step: "03",
    title: "Book Securely",
    desc: "Login, submit your request and track everything on your dashboard.",
  },
];

export default function HomePage() {
  const [featured, setFeatured] = useState<EventPackage[]>([]);

  useEffect(() => {
    getAllEvents().then((events) => setFeatured(events.slice(0, 3)));
  }, []);

  return (
    <div className="bg-premium">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8FA] via-white to-[#FFF7F8]" />
        <div className="hero-blob one left-[-120px] top-[-120px] h-80 w-80 animate-soft-pulse" />
        <div className="hero-blob two right-[-120px] bottom-[-120px] h-96 w-96 animate-float-slow" />
        <div className="grid-overlay" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-20 lg:py-24">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}
            <div className="animate-fade-up">
              <div className="badge mb-6">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                Pakistan&apos;s Premium Event Platform
              </div>

              <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-[#2A0D18] sm:text-5xl md:text-6xl lg:text-7xl">
                Plan &amp; Book
                <span className="gradient-text"> Unforgettable </span>
                Events
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#6A4B57] sm:text-lg">
                Weddings, mehndi, birthdays, baby showers, corporate galas and
                more — browse packages, compare prices and book in minutes.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/events" className="btn-primary gap-2">
                  Explore Events
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/auth/signup" className="btn-secondary">
                  Get Started Free
                </Link>
              </div>

              {/* Mini stats */}
              <div className="mt-12 flex flex-wrap gap-8">
                {[
                  { value: "9+", label: "Event Types" },
                  { value: "Fast", label: "Booking" },
                  { value: "Secure", label: "Accounts" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-[#C00645]">{s.value}</p>
                    <p className="mt-0.5 text-xs font-medium text-[#9B7A84]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Featured card */}
            <div className="relative flex justify-center">
              <div className="absolute -top-10 h-96 w-96 rounded-full bg-[#B0004A]/10 blur-[90px]" />

              <div className="card relative w-full max-w-[520px] overflow-visible rounded-[34px] p-7 sm:p-8">
                <div className="glass-overlay absolute inset-0 overflow-hidden rounded-[34px]" />

                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#8B6A74]">Featured</p>
                    <h3 className="mt-1 text-xl font-bold text-[#2A0D18] sm:text-2xl">
                      Premium Packages
                    </h3>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-[#92003A] to-[#C00645] p-3.5 text-white shadow-xl">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                </div>

                <div className="relative mt-7 overflow-hidden rounded-3xl bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD0]">
                  <img
                    src="/images/wedding.jpg"
                    alt="Event"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80";
                    }}
                    className="h-[220px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[260px]"
                  />
                </div>

                <div className="relative z-10 mt-7 grid grid-cols-3 gap-3">
                  {[
                    { value: "9+", label: "Packages" },
                    { value: "Easy", label: "Checkout" },
                    { value: "4.9★", label: "Experience" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl bg-white/70 p-3 text-center shadow-soft backdrop-blur-xl sm:p-4"
                    >
                      <h4 className="text-lg font-bold text-[#92003A] sm:text-2xl">
                        {s.value}
                      </h4>
                      <p className="mt-1 text-[10px] text-[#7A5A64] sm:text-xs">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="section-padding relative">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <div className="badge mx-auto mb-4">Categories</div>
            <h2 className="text-3xl font-extrabold text-[#2A0D18] sm:text-4xl">
              Every celebration,{" "}
              <span className="gradient-text">one platform</span>
            </h2>
            <p className="mt-3 text-sm text-[#6A4B57] sm:text-base">
              From intimate gatherings to grand weddings — pick your event type
              and start planning.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
            {categories.map((c) => (
              <Link
                key={c.name}
                href="/events"
                className="card group flex flex-col items-center gap-3 p-5 text-center hover-lift sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C00645]/[0.08] text-[#C00645] transition group-hover:bg-gradient-to-br group-hover:from-[#92003A] group-hover:to-[#C00645] group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-[#2A0D18]">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="section-padding relative bg-white/40">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <div className="badge mx-auto mb-4">Why Eventify</div>
            <h2 className="text-3xl font-extrabold text-[#2A0D18] sm:text-4xl">
              Designed for a{" "}
              <span className="gradient-text">smooth experience</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="card p-6 text-center hover-lift">
                <div className="icon-box mx-auto">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-bold text-[#2A0D18]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6A4B57]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED EVENTS ========== */}
      <section className="section-padding relative">
        <div className="container-premium">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="badge mb-4">Popular</div>
              <h2 className="text-3xl font-extrabold text-[#2A0D18] sm:text-4xl">
                Featured <span className="gradient-text">Packages</span>
              </h2>
              <p className="mt-2 text-sm text-[#6A4B57]">
                Hand-picked event packages ready to book
              </p>
            </div>
            <Link
              href="/events"
              className="btn-secondary gap-2 text-sm"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {featured.length === 0 ? (
            <div className="mt-10 rounded-[28px] border border-dashed border-[#C00645]/20 bg-white/50 py-16 text-center">
              <p className="text-[#9B7A84]">Loading packages...</p>
              <Link href="/events" className="btn-primary mt-4 inline-flex">
                Browse Events
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((event) => {
                const price = new Intl.NumberFormat("en-PK", {
                  style: "currency",
                  currency: "PKR",
                  maximumFractionDigits: 0,
                }).format(event.price);

                return (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    className="card group overflow-hidden hover-lift"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image || "/images/wedding.jpg"}
                        alt={event.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-[#C00645] shadow-sm backdrop-blur">
                        {event.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="line-clamp-1 text-lg font-bold text-[#2A0D18] group-hover:text-[#C00645]">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#9B7A84]">
                        Hosted by {event.host}
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-sm text-[#6A4B57]">
                        <Users className="h-4 w-4 text-[#C00645]" />
                        Up to {event.capacity} guests
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-[#C00645]/10 pt-4">
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wider text-[#9B7A84]">
                            Starting from
                          </p>
                          <p className="text-lg font-bold text-[#C00645]">
                            {price}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-[#C00645]">
                          View →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="section-padding relative bg-white/40">
        <div className="container-premium">
          <div className="mx-auto max-w-2xl text-center">
            <div className="badge mx-auto mb-4">Simple process</div>
            <h2 className="text-3xl font-extrabold text-[#2A0D18] sm:text-4xl">
              How it <span className="gradient-text">works</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="card relative p-7 text-center hover-lift">
                <span className="text-4xl font-extrabold text-[#C00645]/15">
                  {s.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-[#2A0D18]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6A4B57]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="section-padding relative">
        <div className="container-premium">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#92003A] via-[#C00645] to-[#E1848C] px-8 py-14 text-center text-white shadow-premium sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Ready to plan your next event?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/85 sm:text-base">
                Create a free account, browse packages and send your booking
                request in minutes.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#C00645] shadow-lg transition hover:-translate-y-1"
                >
                  Create Account
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Browse Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
