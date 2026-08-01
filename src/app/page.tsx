import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CalendarCheck,
  CheckCircle2,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import EventCard from "@/components/EventCard";
import { getAllEvents } from "@/lib/events";

export default async function HomePage() {
  const events = await getAllEvents();
  const featured = events.slice(0, 3);

  return (
    <div className="min-h-screen overflow-hidden bg-[#FAF8F5] text-[#2A211D]">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section className="relative overflow-hidden px-3 pb-10 pt-4 sm:px-5 sm:pb-16 sm:pt-6">
        {/* Decorative Background Glows */}
        <div className="hero-blob left-[-100px] top-[80px] h-[300px] w-[300px] bg-[#F47721]" />

        <div className="hero-blob right-[-100px] top-[40px] h-[350px] w-[350px] bg-[#A83B0B]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-900/[0.04]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-900/[0.03]" />

        {/* Hero Container */}
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-orange-900/10 bg-[#F3ECE5] shadow-[0_25px_80px_rgba(70,35,15,0.08)] sm:rounded-[2.5rem]">
          {/* Inner Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-orange-900/[0.04]" />

          {/* Decorative Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(100,50,20,1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,50,20,1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-16 lg:py-24">
            {/* =====================================================
                HERO CONTENT
            ====================================================== */}

            <div className="relative z-10 max-w-2xl animate-fade-up">
              {/* Small Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-900/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#A83B0B] shadow-sm backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#F47721]" />
                <span>Make every moment memorable</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-[Manrope] text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#2A211D] sm:text-5xl lg:text-6xl xl:text-7xl">
                Your perfect event
                <span className="mt-2 block">
                  starts{" "}
                  <span className="gradient-text relative inline-block">
                    here.
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-7 text-[#756A63] sm:text-lg sm:leading-8">
                Discover beautiful event packages, compare your options and
                book unforgettable experiences — all in one simple and seamless
                place.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/events"
                  className="btn-primary group gap-2 px-6 py-3.5"
                >
                  <span>Explore Events</span>

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/booking"
                  className="btn-secondary group gap-2 px-6 py-3.5"
                >
                  <CalendarCheck className="h-4 w-4" />

                  <span>Book Your Event</span>

                  <ArrowUpRight className="h-4 w-4 opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Trust Row */}
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-[#81766E]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C84A18]" />
                  Easy booking
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C84A18]" />
                  Secure experience
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C84A18]" />
                  Fully responsive
                </div>
              </div>
            </div>

            {/* =====================================================
                HERO VISUAL
            ====================================================== */}

            <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[540px]">
              {/* Main Glow */}
              <div className="absolute h-[280px] w-[280px] rounded-full bg-[#F47721]/20 blur-[90px] sm:h-[380px] sm:w-[380px]" />

              {/* Decorative Circle */}
              <div className="absolute h-[330px] w-[330px] rounded-full border border-[#A83B0B]/10 sm:h-[470px] sm:w-[470px]" />

              <div className="absolute h-[250px] w-[250px] rounded-full border border-[#C84A18]/10 sm:h-[360px] sm:w-[360px]" />

              {/* Main Glass Card */}
              <div className="animate-float relative w-full max-w-[430px]">
                <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-[0_30px_80px_rgba(80,35,10,0.15)] backdrop-blur-2xl sm:p-5">
                  {/* Card Image / Visual */}
                  <div className="relative h-[260px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#8F2F0A] via-[#C84A18] to-[#F47721] sm:h-[300px]">
                    {/* Decorative Shapes */}
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[25px] border-white/10" />

                    <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-white/10 blur-2xl" />

                    <div className="absolute left-8 top-8 h-3 w-3 rounded-full bg-white/60" />

                    <div className="absolute right-12 top-24 h-2 w-2 rounded-full bg-white/50" />

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/15 shadow-2xl backdrop-blur-md">
                        <CalendarDays className="h-9 w-9" />
                      </div>

                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                        Your special day
                      </p>

                      <h3 className="mt-2 font-[Manrope] text-2xl font-extrabold sm:text-3xl">
                        Starts with a plan.
                      </h3>
                    </div>
                  </div>

                  {/* Glass Card Bottom */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-2xl border border-orange-900/[0.06] bg-white/60 p-3 text-center">
                      <CalendarCheck className="mx-auto h-4 w-4 text-[#C84A18]" />
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-[#9A918A]">
                        Easy
                      </p>
                      <p className="mt-0.5 text-xs font-bold text-[#514840]">
                        Booking
                      </p>
                    </div>

                    <div className="rounded-2xl border border-orange-900/[0.06] bg-white/60 p-3 text-center">
                      <ShieldCheck className="mx-auto h-4 w-4 text-[#C84A18]" />
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-[#9A918A]">
                        Safe
                      </p>
                      <p className="mt-0.5 text-xs font-bold text-[#514840]">
                        Secure
                      </p>
                    </div>

                    <div className="rounded-2xl border border-orange-900/[0.06] bg-white/60 p-3 text-center">
                      <Users className="mx-auto h-4 w-4 text-[#C84A18]" />
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-[#9A918A]">
                        Made
                      </p>
                      <p className="mt-0.5 text-xs font-bold text-[#514840]">
                        For You
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Rating Card */}
                <div className="absolute -left-5 top-12 hidden animate-soft-pulse rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-left-12">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F47721]/10">
                      <Star className="h-4 w-4 fill-[#F47721] text-[#F47721]" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#2A211D]">
                        Memorable
                      </p>

                      <p className="text-[10px] text-[#9A918A]">
                        Every celebration
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Event Card */}
                <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-right-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A83B0B] text-white shadow-md">
                      <CalendarDays className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9A918A]">
                        Ready to plan?
                      </p>

                      <p className="mt-0.5 text-xs font-bold text-[#2A211D]">
                        Find your event
                      </p>
                    </div>

                    <ArrowRight className="h-4 w-4 text-[#A83B0B]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="relative border-t border-orange-900/[0.08] bg-white/30 px-6 py-5 backdrop-blur-md sm:px-10">
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-0">
              <div className="text-center sm:border-r sm:border-orange-900/10">
                <p className="font-[Manrope] text-xl font-extrabold text-[#A83B0B] sm:text-2xl">
                  100%
                </p>
                <p className="mt-1 text-xs text-[#897D74]">
                  Responsive
                </p>
              </div>

              <div className="text-center sm:border-r sm:border-orange-900/10">
                <p className="font-[Manrope] text-xl font-extrabold text-[#A83B0B] sm:text-2xl">
                  24/7
                </p>
                <p className="mt-1 text-xs text-[#897D74]">
                  Accessible
                </p>
              </div>

              <div className="text-center sm:border-r sm:border-orange-900/10">
                <p className="font-[Manrope] text-xl font-extrabold text-[#A83B0B] sm:text-2xl">
                  Easy
                </p>
                <p className="mt-1 text-xs text-[#897D74]">
                  Booking
                </p>
              </div>

              <div className="text-center">
                <p className="font-[Manrope] text-xl font-extrabold text-[#A83B0B] sm:text-2xl">
                  Secure
                </p>
                <p className="mt-1 text-xs text-[#897D74]">
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES SECTION
      ========================================================== */}

      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A83B0B]">
              Everything made simple
            </span>

            <h2 className="mt-3 font-[Manrope] text-3xl font-extrabold tracking-tight text-[#2A211D] sm:text-4xl">
              Plan your celebration
              <span className="gradient-text"> your way.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#81766E] sm:text-base">
              From finding the right package to making your booking, Eventify
              keeps everything simple and organized.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Search,
                title: "Search & Filter",
                desc: "Find events by category, city and date with ease.",
              },
              {
                icon: CalendarCheck,
                title: "Easy Booking",
                desc: "Choose your package and send a booking request in minutes.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Experience",
                desc: "Your account and booking information stay protected.",
              },
              {
                icon: Smartphone,
                title: "Fully Responsive",
                desc: "Plan and explore your events from any device.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="card group relative overflow-hidden p-6"
              >
                {/* Number */}
                <span className="absolute right-5 top-4 font-[Manrope] text-4xl font-extrabold text-orange-900/[0.04]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C84A18]/10 to-[#F47721]/10 text-[#A83B0B] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#A83B0B] group-hover:text-white">
                  <feature.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-[Manrope] text-base font-bold text-[#2A211D]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#81766E]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED EVENTS
      ========================================================== */}

      <section className="relative bg-[#F3ECE5]/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#F47721]/[0.06] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A83B0B]">
                Discover something special
              </span>

              <h2 className="mt-2 font-[Manrope] text-3xl font-extrabold tracking-tight text-[#2A211D] sm:text-4xl">
                Featured Events
              </h2>

              <p className="mt-2 text-sm text-[#81766E]">
                Popular packages ready to make your next celebration special.
              </p>
            </div>

            <Link
              href="/events"
              className="group hidden items-center gap-2 text-sm font-bold text-[#A83B0B] sm:flex"
            >
              View all events
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {featured.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-dashed border-orange-900/15 bg-white/50 py-16 text-center backdrop-blur-md">
              <CalendarDays className="mx-auto h-10 w-10 text-[#C84A18]/50" />

              <p className="mt-4 text-sm text-[#81766E]">
                No events found. Please add events in Supabase.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/events"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View all events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8F2F0A] via-[#A83B0B] to-[#C84A18]" />

        {/* Decorative Glows */}
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#F47721]/30 blur-[100px]" />

        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-black/20 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md">
            <Sparkles className="h-6 w-6" />
          </div>

          <h2 className="mt-6 font-[Manrope] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to create your next
            <span className="block text-[#FFD0A8]">unforgettable moment?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Create your account, explore beautiful event packages and start
            planning your perfect celebration today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/auth/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#8F2F0A] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
            >
              Explore Events
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}