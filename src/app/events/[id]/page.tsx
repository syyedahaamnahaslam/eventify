import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { getEventById } from "@/lib/events";

type EventDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { id } = await params;

  const event = await getEventById(id);

  if (!event) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-neutral-bg px-4">
        <div className="glass-panel w-full max-w-lg rounded-3xl p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/[0.07] text-primary">
            <CalendarDays className="h-7 w-7" />
          </div>

          <h1 className="mt-5 font-heading text-2xl font-extrabold text-neutral-heading">
            Event not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-neutral-text">
            The event you&apos;re looking for may have been removed or is no
            longer available.
          </p>

          <Link
            href="/events"
            className="btn-primary mt-7 inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </div>
      </main>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(event.price);

  const formattedDate = new Date(event.date).toLocaleDateString("en-PK", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen overflow-hidden bg-neutral-bg text-neutral-heading">
      {/* =========================================================
          HERO / EVENT VISUAL
      ========================================================== */}

      <section className="relative px-3 pb-8 pt-4 sm:px-5 sm:pb-12 sm:pt-6">
        {/* Background Glows */}
        <div className="hero-blob left-[-100px] top-32 h-[300px] w-[300px] bg-rose-accent" />

        <div className="hero-blob right-[-120px] top-0 h-[350px] w-[350px] bg-primary" />

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-primary/10 bg-rose-soft shadow-[0_25px_80px_rgba(192,6,69,0.08)] sm:rounded-[2.5rem]">
          {/* Back Navigation */}
          <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-black/20 px-4 py-2.5 text-xs font-bold text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-black/30"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Events
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* =====================================================
                IMAGE SIDE
            ====================================================== */}

            <div className="relative min-h-[500px] overflow-hidden lg:min-h-[650px]">
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-heading/90 via-neutral-heading/20 to-neutral-heading/30" />

              {/* Glow */}
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />

              {/* Category */}
              <div className="absolute left-6 top-20 sm:left-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-bold capitalize text-white shadow-lg backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5 text-rose-blush" />
                  {event.category}
                </span>
              </div>

              {/* Image Content */}
              <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-8 sm:right-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Hosted by {event.host}
                </p>

                <h1 className="mt-3 max-w-xl font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                  {event.title}
                </h1>

                <div className="mt-5 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
                    <MapPin className="h-3.5 w-3.5 text-rose-blush" />
                    {event.city}
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
                    <Users className="h-3.5 w-3.5 text-rose-blush" />
                    Up to {event.capacity} guests
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                INFO SIDE
            ====================================================== */}

            <div className="relative flex flex-col justify-center bg-rose-soft p-6 sm:p-8 lg:p-12">
              {/* Decorative Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(192,6,69,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,6,69,1) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="relative">
                {/* Small Label */}
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-accent" />
                  Event Details
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-neutral-text sm:text-base sm:leading-8">
                  {event.description}
                </p>

                {/* Info Cards */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {/* Date */}
                  <div className="rounded-2xl border border-primary/10 bg-white/60 p-4 shadow-sm backdrop-blur-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
                      <CalendarDays className="h-5 w-5" />
                    </div>

                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9B7A84]">
                      Date
                    </p>

                    <p className="mt-1 text-sm font-bold leading-5 text-neutral-heading">
                      {formattedDate}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="rounded-2xl border border-primary/10 bg-white/60 p-4 shadow-sm backdrop-blur-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-700/[0.07] text-primary-700">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9B7A84]">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-bold leading-5 text-neutral-heading">
                      {event.venue}
                    </p>

                    <p className="mt-0.5 text-xs text-neutral-text">
                      {event.city}
                    </p>
                  </div>

                  {/* Capacity */}
                  <div className="rounded-2xl border border-primary/10 bg-white/60 p-4 shadow-sm backdrop-blur-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-accent/[0.12] text-[#B0364F]">
                      <Users className="h-5 w-5" />
                    </div>

                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9B7A84]">
                      Capacity
                    </p>

                    <p className="mt-1 text-sm font-bold text-neutral-heading">
                      Up to {event.capacity} guests
                    </p>
                  </div>

                  {/* Availability */}
                  <div className="rounded-2xl border border-primary/10 bg-white/60 p-4 shadow-sm backdrop-blur-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9B7A84]">
                      Availability
                    </p>

                    <p className="mt-1 text-sm font-bold text-neutral-heading">
                      Booking Available
                    </p>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="mt-8 rounded-2xl border border-primary/10 bg-white/70 p-5 shadow-[0_15px_40px_rgba(192,6,69,0.06)] backdrop-blur-xl sm:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B7A84]">
                        Starting from
                      </p>

                      <p className="mt-1 font-heading text-2xl font-extrabold text-primary">
                        {formattedPrice}
                      </p>
                    </div>

                    {/* FIXED: eventId */}
                    <Link
                      href={`/booking?eventId=${event.id}`}
                      className="btn-primary group gap-2 px-6 py-3.5"
                    >
                      Book This Event
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Trust Points */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-text">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Easy booking process
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-text">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Secure booking experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENT HIGHLIGHTS
      ========================================================== */}

      <section className="relative px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {/* Highlight 1 */}
            <div className="card group p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.07] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <CalendarDays className="h-5 w-5" />
              </div>

              <h3 className="mt-5 font-heading text-base font-bold text-neutral-heading">
                Plan with confidence
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-text">
                Get all the important event details in one place before making
                your booking decision.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="card group p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-700/[0.07] text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                <Users className="h-5 w-5" />
              </div>

              <h3 className="mt-5 font-heading text-base font-bold text-neutral-heading">
                Designed for your guests
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-text">
                Choose an event package with the right capacity and experience
                for your special occasion.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="card group p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-accent/[0.12] text-[#B0364F] transition-all duration-300 group-hover:bg-rose-accent group-hover:text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <h3 className="mt-5 font-heading text-base font-bold text-neutral-heading">
                Simple and secure
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-text">
                Enjoy a smooth booking journey with a clean interface and
                secure account experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-700 via-primary to-rose-accent px-6 py-14 shadow-[0_25px_70px_rgba(192,6,69,0.18)] sm:px-10 sm:py-16">
          {/* Glows */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-rose-accent/30 blur-[90px]" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-black/20 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
              <Sparkles className="h-5 w-5" />
            </div>

            <h2 className="mt-5 font-heading text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Ready to make this moment special?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
              Secure your booking and start planning an unforgettable
              experience with Eventify.
            </p>

            {/* FIXED: eventId */}
            <Link
              href={`/booking?eventId=${event.id}`}
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Continue to Booking
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}