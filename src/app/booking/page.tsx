
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getEventById, type EventPackage } from "@/lib/events";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

function BookingForm() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId") || searchParams.get("event");

  const [event, setEvent] = useState<EventPackage | null>(null);
  const [loadingEvent, setLoadingEvent] = useState(!!eventId);
  const [guests, setGuests] = useState(50);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Fetch event from Supabase
  useEffect(() => {
    if (!eventId) {
      setLoadingEvent(false);
      return;
    }

    async function load() {
      setLoadingEvent(true);
      const data = await getEventById(eventId!);
      setEvent(data);
      setLoadingEvent(false);
    }

    load();
  }, [eventId]);

  const total = event ? event.price : 0;

  const formattedTotal = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(total);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: Module 3 - save to Supabase bookings table
    // For now just show success
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setSubmitting(false);
  };

  /* =========================================================
     SUCCESS STATE
  ========================================================== */

  if (submitted) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#FAF8F5] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-[-100px] top-20 h-[300px] w-[300px] rounded-full bg-[#F47721]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-[-120px] h-[350px] w-[350px] rounded-full bg-[#A83B0B]/15 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <div className="rounded-[2rem] border border-orange-900/10 bg-white/70 p-8 text-center shadow-[0_25px_80px_rgba(70,35,15,0.08)] backdrop-blur-xl sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#A83B0B]/[0.08] text-[#A83B0B] shadow-sm">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#A83B0B]/10 bg-[#A83B0B]/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#A83B0B]">
              <Sparkles className="h-3.5 w-3.5 text-[#F47721]" />
              Request Received
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#2A211D] sm:text-4xl">
              Booking Request Sent!
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#81766E] sm:text-base">
              We&apos;ve received your request
              {event ? ` for "${event.title}"` : ""}. You will receive a
              confirmation email shortly.
            </p>

            {event && (
              <div className="mx-auto mt-8 max-w-md rounded-2xl border border-orange-900/10 bg-white/60 p-5 text-left backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A09289]">
                  Selected Event
                </p>
                <p className="mt-2 text-base font-bold text-[#2A211D]">
                  {event.title}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#81766E]">
                  <MapPin className="h-3.5 w-3.5 text-[#C84A18]" />
                  {event.venue}, {event.city}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Go to Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/events"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Browse More
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     LOADING STATE
  ========================================================== */

  if (loadingEvent) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FAF8F5]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[#A83B0B]/20 border-t-[#A83B0B]" />
          <p className="mt-4 text-sm font-medium text-[#81766E]">
            Loading booking details...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF8F5] text-[#2A211D]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-[#F47721]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-[35%] h-[380px] w-[380px] rounded-full bg-[#A83B0B]/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-orange-900/[0.025]" />

      {/* Page Header */}
      <section className="relative px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-xs font-bold text-[#A83B0B] transition-colors hover:text-[#7E2D08]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Events
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-900/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#A83B0B] shadow-sm backdrop-blur-md">
              <CalendarCheck className="h-3.5 w-3.5 text-[#F47721]" />
              Secure your experience
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#2A211D] sm:text-5xl lg:text-6xl">
              Let&apos;s make your
              <span className="block bg-gradient-to-r from-[#A83B0B] to-[#F47721] bg-clip-text text-transparent">
                event unforgettable.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#81766E] sm:text-base sm:leading-8">
              Fill in your details below to send us a booking request. We&apos;ll
              review your request and get back to you with the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* FORM */}
          <div className="rounded-[2rem] border border-orange-900/10 bg-white/70 p-5 shadow-[0_25px_80px_rgba(70,35,15,0.07)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="mb-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#A83B0B]/[0.07] text-[#A83B0B]">
                <ClipboardCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-xl font-extrabold text-[#2A211D] sm:text-2xl">
                Booking Information
              </h2>
              <p className="mt-2 text-sm text-[#81766E]">
                Tell us a little about yourself and your event requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Selected Event */}
              {event && (
                <div className="relative overflow-hidden rounded-2xl border border-[#A83B0B]/10 bg-gradient-to-br from-[#A83B0B]/[0.06] to-[#F47721]/[0.04] p-5">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F47721]/10 blur-3xl" />
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A83B0B]">
                        Selected Package
                      </p>
                      <p className="mt-2 text-lg font-extrabold text-[#2A211D]">
                        {event.title}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#81766E]">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-[#C84A18]" />
                          {event.venue}, {event.city}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-[#C84A18]" />
                          Up to {event.capacity} guests
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 rounded-xl border border-white/70 bg-white/60 px-4 py-3 backdrop-blur-md">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#A09289]">
                        Package Price
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-[#A83B0B]">
                        {formattedTotal}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* No Event */}
              {!event && (
                <div className="rounded-2xl border border-[#C84A18]/15 bg-[#F47721]/[0.06] p-5">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F47721]/10 text-[#B86A00]">
                      <CalendarCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#6E3514]">
                        No event selected
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#8A6B59]">
                        Browse our events first, or continue with a custom
                        booking request.
                      </p>
                      <Link
                        href="/events"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#A83B0B]"
                      >
                        Browse Events
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              <div>
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-[#2A211D]">
                    Your Information
                  </h3>
                  <p className="mt-1 text-xs text-[#9A918A]">
                    We&apos;ll use these details to contact you about your request.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold text-[#514840]">
                      Full Name <span className="text-[#C84A18]">*</span>
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A09289]" />
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-field pl-11"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold text-[#514840]">
                      Email Address <span className="text-[#C84A18]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A09289]" />
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field pl-11"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold text-[#514840]">
                      Phone Number <span className="text-[#C84A18]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A09289]" />
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="input-field pl-11"
                        placeholder="03XX-XXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold text-[#514840]">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A09289]" />
                      <input
                        type="number"
                        min={10}
                        max={event?.capacity || 500}
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="input-field pl-11"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="mb-2 block text-xs font-bold text-[#514840]">
                  Special Requests / Notes
                </label>
                <textarea
                  rows={5}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="input-field resize-none"
                  placeholder="Any special requirements, preferred timing, décor notes..."
                />
                <p className="mt-2 text-[11px] text-[#A09289]">
                  Optional — tell us anything that will help us personalize
                  your experience.
                </p>
              </div>

              {/* Mobile Total */}
              {event && (
                <div className="rounded-2xl border border-orange-900/10 bg-white/50 p-5 lg:hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#81766E]">
                      Estimated Total
                    </span>
                    <span className="text-xl font-extrabold text-[#A83B0B]">
                      {formattedTotal}
                    </span>
                  </div>
                </div>
              )}

              {/* Submit */}
              <div className="border-t border-orange-900/[0.08] pt-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C84A18]" />
                    <p className="max-w-xs text-[11px] leading-5 text-[#9A918A]">
                      Your information is used only to process your booking
                      request.
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary group inline-flex w-full items-center justify-center gap-2 px-7 py-3.5 sm:w-auto disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit Booking Request"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT SUMMARY PANEL */}
          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[2rem] border border-orange-900/10 bg-white/70 shadow-[0_25px_70px_rgba(70,35,15,0.07)] backdrop-blur-xl">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#8F2F0A] via-[#A83B0B] to-[#C84A18] p-6 text-white">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#F47721]/30 blur-3xl" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <CalendarCheck className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
                    Your Booking
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold">
                    {event ? event.title : "Custom Event Request"}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                {event ? (
                  <>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#A83B0B]/[0.07] text-[#A83B0B]">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#A09289]">
                            Location
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[#514840]">
                            {event.venue}
                          </p>
                          <p className="mt-0.5 text-xs text-[#897D74]">
                            {event.city}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C84A18]/[0.07] text-[#C84A18]">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#A09289]">
                            Guest Capacity
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[#514840]">
                            Up to {event.capacity} guests
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-orange-900/[0.08] pt-5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#81766E]">
                          Package Price
                        </span>
                        <span className="font-semibold text-[#514840]">
                          {formattedTotal}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm font-bold text-[#2A211D]">
                          Estimated Total
                        </span>
                        <span className="text-xl font-extrabold text-[#A83B0B]">
                          {formattedTotal}
                        </span>
                      </div>
                      <p className="mt-3 text-[10px] leading-5 text-[#A09289]">
                        Final price may vary based on guest count and additional
                        add-ons.
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-sm leading-6 text-[#81766E]">
                    You can submit a custom request and our team will contact
                    you to discuss your event requirements.
                  </p>
                )}
              </div>
            </div>

            {/* Trust Card */}
            <div className="rounded-[2rem] border border-orange-900/10 bg-white/50 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A83B0B]/[0.07] text-[#A83B0B]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2A211D]">
                    A smooth booking experience
                  </h3>
                  <p className="mt-1 text-xs text-[#9A918A]">
                    Simple, transparent and secure.
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#81766E]">
                  <CheckCircle2 className="h-4 w-4 text-[#C84A18]" />
                  Easy booking request
                </div>
                <div className="flex items-center gap-2 text-xs text-[#81766E]">
                  <CheckCircle2 className="h-4 w-4 text-[#C84A18]" />
                  Quick confirmation
                </div>
                <div className="flex items-center gap-2 text-xs text-[#81766E]">
                  <CheckCircle2 className="h-4 w-4 text-[#C84A18]" />
                  Secure information handling
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#FAF8F5]">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[#A83B0B]/20 border-t-[#A83B0B]" />
            <p className="mt-4 text-sm font-medium text-[#81766E]">
              Loading booking details...
            </p>
          </div>
        </main>
      }
    >
      <BookingForm />
    </Suspense>
  );
}
