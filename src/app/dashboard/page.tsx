"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Plus,
  Sparkles,
  TicketCheck,
  Users,
} from "lucide-react";

// Dummy data for now — later replace with Supabase queries
const bookedEvents = [
  {
    id: "b1",
    title: "Royal Garden Wedding Package",
    venue: "Pearl Continental Gardens, Lahore",
    date: "2026-09-15",
    status: "confirmed" as const,
    price: 450000,
  },
  {
    id: "b2",
    title: "Sunset Beach Party",
    venue: "Clifton Beach Club, Karachi",
    date: "2026-08-20",
    status: "pending" as const,
    price: 180000,
  },
];

const hostedEvents = [
  {
    id: "h1",
    title: "Mehndi Night Special",
    venue: "Private Lawn, DHA Phase 5",
    date: "2026-09-10",
    bookings: 3,
  },
];

const statusColor = {
  confirmed:
    "border-[#A83B0B]/10 bg-[#A83B0B]/[0.07] text-[#A83B0B]",
  pending:
    "border-[#C84A18]/10 bg-[#F47721]/[0.08] text-[#B86A00]",
  cancelled:
    "border-red-900/10 bg-red-500/[0.06] text-red-700",
};

const statusIcon = {
  confirmed: CheckCircle2,
  pending: Clock,
  cancelled: Clock,
};

export default function DashboardPage() {
  const pendingRequests = bookedEvents.filter(
    (e) => e.status === "pending"
  ).length;

  const totalBookings = bookedEvents.reduce(
    (total, event) => total + event.price,
    0
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF8F5] text-[#2A211D]">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="hero-blob left-[-140px] top-20 h-[350px] w-[350px] bg-[#F47721]" />

      <div className="hero-blob right-[-160px] top-[35%] h-[400px] w-[400px] bg-[#A83B0B]" />

      <div className="pointer-events-none absolute left-1/2 top-[15%] h-[650px] w-[650px] -translate-x-1/2 rounded-full border border-orange-900/[0.025]" />

      {/* =========================================================
          DASHBOARD HEADER
      ========================================================== */}

      <section className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pb-10 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-900/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#A83B0B] shadow-sm backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#F47721]" />
                Your Event Space
              </div>

              <h1 className="mt-5 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#2A211D] sm:text-5xl">
                Welcome to your
                <span className="gradient-text block">
                  event dashboard.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#81766E] sm:text-base">
                Keep track of your bookings, hosted events, and upcoming
                experiences — all in one place.
              </p>
            </div>

            {/* New Booking */}
            <Link
              href="/booking"
              className="btn-primary group inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              <Plus className="h-4 w-4" />
              New Booking
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================== */}

      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Booked Events */}
          <div className="glass-panel group rounded-3xl p-5 shadow-[0_20px_60px_rgba(70,35,15,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(70,35,15,0.09)]">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#A83B0B]/[0.07] text-[#A83B0B] transition-all duration-300 group-hover:bg-[#A83B0B] group-hover:text-white">
                <TicketCheck className="h-5 w-5" />
              </div>

              <span className="rounded-full bg-[#A83B0B]/[0.05] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#A83B0B]">
                Active
              </span>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#A09289]">
              Booked Events
            </p>

            <p className="mt-1 font-[Manrope] text-3xl font-extrabold text-[#2A211D]">
              {bookedEvents.length}
            </p>

            <p className="mt-2 text-xs text-[#9A918A]">
              Your upcoming event bookings
            </p>
          </div>

          {/* Hosted Events */}
          <div className="glass-panel group rounded-3xl p-5 shadow-[0_20px_60px_rgba(70,35,15,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(70,35,15,0.09)]">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C84A18]/[0.07] text-[#C84A18] transition-all duration-300 group-hover:bg-[#C84A18] group-hover:text-white">
                <CalendarDays className="h-5 w-5" />
              </div>

              <span className="rounded-full bg-[#C84A18]/[0.05] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C84A18]">
                Hosting
              </span>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#A09289]">
              Hosted Events
            </p>

            <p className="mt-1 font-[Manrope] text-3xl font-extrabold text-[#2A211D]">
              {hostedEvents.length}
            </p>

            <p className="mt-2 text-xs text-[#9A918A]">
              Events you are currently hosting
            </p>
          </div>

          {/* Pending Requests */}
          <div className="glass-panel group rounded-3xl p-5 shadow-[0_20px_60px_rgba(70,35,15,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(70,35,15,0.09)]">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F47721]/[0.08] text-[#B86A00] transition-all duration-300 group-hover:bg-[#F47721] group-hover:text-white">
                <Clock className="h-5 w-5" />
              </div>

              <span className="rounded-full bg-[#F47721]/[0.07] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#B86A00]">
                Pending
              </span>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#A09289]">
              Pending Requests
            </p>

            <p className="mt-1 font-[Manrope] text-3xl font-extrabold text-[#2A211D]">
              {pendingRequests}
            </p>

            <p className="mt-2 text-xs text-[#9A918A]">
              Bookings waiting for confirmation
            </p>
          </div>

          {/* Total Value */}
          <div className="glass-panel group rounded-3xl p-5 shadow-[0_20px_60px_rgba(70,35,15,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(70,35,15,0.09)]">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8F2F0A]/[0.07] text-[#8F2F0A] transition-all duration-300 group-hover:bg-[#8F2F0A] group-hover:text-white">
                <Sparkles className="h-5 w-5" />
              </div>

              <span className="rounded-full bg-[#8F2F0A]/[0.05] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8F2F0A]">
                Value
              </span>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#A09289]">
              Booking Value
            </p>

            <p className="mt-1 font-[Manrope] text-2xl font-extrabold text-[#2A211D]">
              {new Intl.NumberFormat("en-PK", {
                style: "currency",
                currency: "PKR",
                maximumFractionDigits: 0,
              }).format(totalBookings)}
            </p>

            <p className="mt-2 text-xs text-[#9A918A]">
              Total value of your current bookings
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          MY BOOKINGS
      ========================================================== */}

      <section className="relative px-4 pb-6 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#F47721]" />

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A83B0B]">
                  Your Experiences
                </p>
              </div>

              <h2 className="mt-2 font-[Manrope] text-2xl font-extrabold text-[#2A211D] sm:text-3xl">
                My Bookings
              </h2>

              <p className="mt-2 text-sm text-[#81766E]">
                Keep track of all your upcoming event experiences.
              </p>
            </div>

            <Link
              href="/events"
              className="group inline-flex items-center gap-2 text-xs font-bold text-[#A83B0B] transition-colors hover:text-[#7E2D08]"
            >
              Browse Events
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {bookedEvents.length === 0 ? (
            /* Empty State */
            <div className="glass-panel mt-6 rounded-3xl p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A83B0B]/[0.07] text-[#A83B0B]">
                <TicketCheck className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-[Manrope] text-lg font-bold text-[#2A211D]">
                No bookings yet
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#81766E]">
                You haven&apos;t booked any events yet. Explore our events and
                find something perfect for your next special occasion.
              </p>

              <Link
                href="/events"
                className="btn-primary mt-6 inline-flex items-center gap-2"
              >
                Browse Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {bookedEvents.map((e) => {
                const StatusIcon = statusIcon[e.status];

                return (
                  <div
                    key={e.id}
                    className="glass-panel group relative overflow-hidden rounded-3xl p-5 shadow-[0_20px_60px_rgba(70,35,15,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(70,35,15,0.08)] sm:p-6"
                  >
                    {/* Side Accent */}
                    <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-[#F47721] to-[#A83B0B] opacity-70" />

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      {/* Event Info */}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-[Manrope] text-base font-extrabold text-[#2A211D] sm:text-lg">
                            {e.title}
                          </h3>

                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold capitalize ${statusColor[e.status]}`}
                          >
                            <StatusIcon className="h-3 w-3" />
                            {e.status}
                          </span>
                        </div>

                        <div className="mt-4 flex flex-col gap-2.5 text-xs text-[#81766E] sm:flex-row sm:flex-wrap sm:gap-5">
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 shrink-0 text-[#C84A18]" />
                            {e.venue}
                          </span>

                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 shrink-0 text-[#A83B0B]" />
                            {new Date(e.date).toLocaleDateString("en-PK", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between border-t border-orange-900/[0.07] pt-4 lg:block lg:border-0 lg:pt-0 lg:text-right">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A09289]">
                          Booking Value
                        </p>

                        <p className="mt-1 font-[Manrope] text-lg font-extrabold text-[#A83B0B]">
                          {new Intl.NumberFormat("en-PK", {
                            style: "currency",
                            currency: "PKR",
                            maximumFractionDigits: 0,
                          }).format(e.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          HOSTED EVENTS
      ========================================================== */}

      <section className="relative px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#C84A18]" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A83B0B]">
                Your Events
              </p>
            </div>

            <h2 className="mt-2 font-[Manrope] text-2xl font-extrabold text-[#2A211D] sm:text-3xl">
              My Hosted Events
            </h2>

            <p className="mt-2 text-sm text-[#81766E]">
              Manage the events you&apos;re hosting and monitor incoming bookings.
            </p>
          </div>

          {hostedEvents.length === 0 ? (
            <div className="glass-panel mt-6 rounded-3xl p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C84A18]/[0.07] text-[#C84A18]">
                <CalendarDays className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-[Manrope] text-lg font-bold text-[#2A211D]">
                No hosted events yet
              </h3>

              <p className="mt-2 text-sm text-[#81766E]">
                You are not hosting any events yet.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {hostedEvents.map((e) => (
                <div
                  key={e.id}
                  className="card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Decorative Glow */}
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F47721]/[0.07] blur-3xl transition-all duration-500 group-hover:bg-[#F47721]/[0.12]" />

                  <div className="relative">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#A83B0B]/[0.07] text-[#A83B0B]">
                          <CalendarDays className="h-5 w-5" />
                        </div>

                        <h3 className="mt-5 font-[Manrope] text-lg font-extrabold text-[#2A211D]">
                          {e.title}
                        </h3>
                      </div>

                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#A83B0B]/10 bg-[#A83B0B]/[0.05] px-3 py-1.5 text-[10px] font-bold text-[#A83B0B]">
                        <Sparkles className="h-3 w-3" />
                        Hosting
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-orange-900/[0.07] bg-white/40 p-3">
                        <MapPin className="h-4 w-4 text-[#C84A18]" />

                        <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#A09289]">
                          Venue
                        </p>

                        <p className="mt-1 text-xs font-semibold leading-5 text-[#514840]">
                          {e.venue}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-orange-900/[0.07] bg-white/40 p-3">
                        <Calendar className="h-4 w-4 text-[#A83B0B]" />

                        <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#A09289]">
                          Date
                        </p>

                        <p className="mt-1 text-xs font-semibold leading-5 text-[#514840]">
                          {new Date(e.date).toLocaleDateString("en-PK", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-orange-900/[0.07] bg-white/40 p-3">
                        <Users className="h-4 w-4 text-[#B86A00]" />

                        <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#A09289]">
                          Bookings
                        </p>

                        <p className="mt-1 text-xs font-semibold leading-5 text-[#514840]">
                          {e.bookings} booking(s)
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-orange-900/[0.07] pt-5">
                      <button
                        type="button"
                        className="group/btn inline-flex items-center gap-2 text-xs font-bold text-[#A83B0B]"
                      >
                        View Event Details
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================== */}

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#8F2F0A] via-[#A83B0B] to-[#C84A18] px-6 py-12 shadow-[0_25px_70px_rgba(143,47,10,0.18)] sm:px-10 sm:py-14">
          {/* Decorative Glows */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F47721]/30 blur-[90px]" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-black/20 blur-[100px]" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                <Sparkles className="h-3.5 w-3.5 text-[#FFD0A8]" />
                Create something memorable
              </div>

              <h2 className="mt-3 font-[Manrope] text-2xl font-extrabold text-white sm:text-3xl">
                Looking for your next unforgettable event?
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Explore our curated event experiences and find the perfect
                setting for your next special moment.
              </p>
            </div>

            <Link
              href="/events"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#8F2F0A] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Explore Events
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}