"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Filter,
  MapPin,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import EventCard from "@/components/EventCard";
import { getAllEvents, type EventPackage } from "@/lib/events";

export default function EventsPage() {
  const [events, setEvents] = useState<EventPackage[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [city, setCity] = useState("all");

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await getAllEvents();
        setEvents(data);
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  const categories = useMemo(() => {
    return Array.from(
      new Set(events.map((event) => event.category).filter(Boolean))
    );
  }, [events]);

  const cities = useMemo(() => {
    return Array.from(
      new Set(events.map((event) => event.city).filter(Boolean))
    );
  }, [events]);

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return events.filter((event) => {
      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.city.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query);

      const matchesCategory =
        category === "all" || event.category === category;

      const matchesCity = city === "all" || event.city === city;

      return matchesSearch && matchesCategory && matchesCity;
    });
  }, [events, search, category, city]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setCity("all");
  };

  const hasActiveFilters =
    search.trim() !== "" || category !== "all" || city !== "all";

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF8F5] text-[#2A211D]">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section className="relative px-3 pb-8 pt-4 sm:px-5 sm:pb-12 sm:pt-6">
        {/* Background Glows */}
        <div className="hero-blob left-[-100px] top-20 h-[300px] w-[300px] bg-[#F47721]" />

        <div className="hero-blob right-[-120px] top-0 h-[350px] w-[350px] bg-[#A83B0B]" />

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-orange-900/10 bg-[#F3ECE5] shadow-[0_25px_80px_rgba(70,35,15,0.07)] sm:rounded-[2.5rem]">
          {/* Decorative Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(100,50,20,1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,50,20,1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Glow */}
          <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-[#F47721]/15 blur-[100px]" />

          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:px-10 sm:py-20 lg:py-24">
            {/* Badge */}
            <div className="animate-fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-orange-900/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#A83B0B] shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#F47721]" />
              Discover your next experience
            </div>

            {/* Heading */}
            <h1 className="mt-6 font-[Manrope] text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#2A211D] sm:text-5xl lg:text-6xl">
              Find the perfect event
              <span className="gradient-text block">for your moment.</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#756A63] sm:text-base sm:leading-8">
              Explore our collection of carefully designed event packages.
              Search, filter and discover the experience that feels right for
              you.
            </p>

            {/* Mini Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="rounded-full border border-orange-900/10 bg-white/55 px-4 py-2 text-xs font-semibold text-[#756A63] backdrop-blur-md">
                <span className="font-bold text-[#A83B0B]">
                  {events.length}
                </span>{" "}
                Events
              </div>

              <div className="rounded-full border border-orange-900/10 bg-white/55 px-4 py-2 text-xs font-semibold text-[#756A63] backdrop-blur-md">
                <span className="font-bold text-[#A83B0B]">
                  {categories.length}
                </span>{" "}
                Categories
              </div>

              <div className="rounded-full border border-orange-900/10 bg-white/55 px-4 py-2 text-xs font-semibold text-[#756A63] backdrop-blur-md">
                <span className="font-bold text-[#A83B0B]">
                  {cities.length}
                </span>{" "}
                Cities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEARCH + FILTER SECTION
      ========================================================== */}

      <section className="relative px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="glass-panel relative -mt-2 rounded-3xl p-4 shadow-[0_20px_60px_rgba(70,35,15,0.08)] sm:p-5 lg:p-6">
            {/* Filter Header */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A83B0B]/[0.08] text-[#A83B0B]">
                  <Filter className="h-4 w-4" />
                </div>

                <div>
                  <h2 className="font-[Manrope] text-sm font-bold text-[#2A211D]">
                    Find your perfect event
                  </h2>

                  <p className="text-xs text-[#9A918A]">
                    Search and filter packages to match your needs
                  </p>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 self-start rounded-lg px-3 py-2 text-xs font-bold text-[#A83B0B] transition-colors hover:bg-[#A83B0B]/[0.06] sm:self-auto"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear filters
                </button>
              )}
            </div>

            {/* Filter Controls */}
            <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr]">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A09289]" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search events, venues or cities..."
                  className="input-field h-12 pl-11 pr-4"
                />
              </div>

              {/* Category */}
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="input-field h-12 appearance-none pr-10"
                >
                  <option value="all">All Categories</option>

                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A09289]" />
              </div>

              {/* City */}
              <div className="relative">
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="input-field h-12 appearance-none pr-10"
                >
                  <option value="all">All Cities</option>

                  {cities.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A09289]" />
              </div>
            </div>

            {/* Active Filter Pills */}
            {hasActiveFilters && (
              <div className="mt-4 flex flex-wrap gap-2">
                {search.trim() && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="inline-flex items-center gap-2 rounded-full border border-orange-900/10 bg-white/60 px-3 py-1.5 text-xs font-semibold text-[#756A63]"
                  >
                    Search: {search}
                    <X className="h-3 w-3 text-[#A83B0B]" />
                  </button>
                )}

                {category !== "all" && (
                  <button
                    type="button"
                    onClick={() => setCategory("all")}
                    className="inline-flex items-center gap-2 rounded-full border border-orange-900/10 bg-white/60 px-3 py-1.5 text-xs font-semibold text-[#756A63]"
                  >
                    {category}
                    <X className="h-3 w-3 text-[#A83B0B]" />
                  </button>
                )}

                {city !== "all" && (
                  <button
                    type="button"
                    onClick={() => setCity("all")}
                    className="inline-flex items-center gap-2 rounded-full border border-orange-900/10 bg-white/60 px-3 py-1.5 text-xs font-semibold text-[#756A63]"
                  >
                    <MapPin className="h-3 w-3 text-[#A83B0B]" />
                    {city}
                    <X className="h-3 w-3 text-[#A83B0B]" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENTS RESULTS
      ========================================================== */}

      <section className="relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Results Header */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A83B0B]">
                Explore our collection
              </p>

              <h2 className="mt-2 font-[Manrope] text-2xl font-extrabold text-[#2A211D] sm:text-3xl">
                {hasActiveFilters ? "Search Results" : "All Events"}
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-[#897D74]">
              <CalendarDays className="h-4 w-4 text-[#C84A18]" />

              <span>
                Showing{" "}
                <strong className="text-[#A83B0B]">
                  {filteredEvents.length}
                </strong>{" "}
                {filteredEvents.length === 1 ? "event" : "events"}
              </span>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-3xl border border-orange-900/10 bg-white/60"
                >
                  <div className="h-60 animate-pulse bg-orange-900/[0.05]" />

                  <div className="space-y-4 p-5">
                    <div className="h-5 w-3/4 animate-pulse rounded bg-orange-900/[0.06]" />

                    <div className="h-4 w-full animate-pulse rounded bg-orange-900/[0.05]" />

                    <div className="h-4 w-2/3 animate-pulse rounded bg-orange-900/[0.05]" />

                    <div className="h-px bg-orange-900/[0.06]" />

                    <div className="h-8 w-1/3 animate-pulse rounded bg-orange-900/[0.06]" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Events */}
          {!loading && filteredEvents.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredEvents.length === 0 && (
            <div className="glass-panel rounded-3xl px-6 py-16 text-center sm:py-20">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#A83B0B]/[0.07] text-[#A83B0B]">
                <Search className="h-7 w-7" />
              </div>

              <h3 className="mt-5 font-[Manrope] text-xl font-bold text-[#2A211D]">
                No events found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#81766E]">
                We couldn't find any events matching your current search or
                filters. Try changing your search or clearing the filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="btn-primary mt-6 gap-2"
              >
                Clear Filters
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================== */}

      <section className="relative overflow-hidden px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#8F2F0A] via-[#A83B0B] to-[#C84A18] px-6 py-14 shadow-[0_25px_70px_rgba(143,47,10,0.18)] sm:px-10 sm:py-16">
          {/* Decorative Glows */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F47721]/30 blur-[90px]" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-black/20 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
              <Sparkles className="h-5 w-5" />
            </div>

            <h2 className="mt-5 font-[Manrope] text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Didn't find what you're looking for?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
              Explore all our options or get in touch to create an experience
              that fits your special occasion perfectly.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#8F2F0A] shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Start Booking
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}