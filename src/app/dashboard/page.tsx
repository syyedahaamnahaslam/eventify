"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Users, Loader2, LayoutDashboard } from "lucide-react";
import { getCurrentUser, getUserBookings, type Booking } from "@/lib/bookings";

const statusColor: Record<string, string> = {
  confirmed: "bg-green-100 text-green-800",
  pending: "bg-amber-100 text-amber-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function DashboardPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function load() {
      const user = await getCurrentUser();
      if (!user) {
        router.push("/auth/login?redirect=/dashboard");
        return;
      }

      setUserName(
        user.user_metadata?.full_name || user.email?.split("@")[0] || "User"
      );

      const data = await getUserBookings(user.id);
      setBookings(data);
      setLoading(false);
    }
    load();
  }, [router]);

  const pendingCount = bookings.filter((b) => b.status === "pending").length;
  const confirmedCount = bookings.filter((b) => b.status === "confirmed").length;

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-neutral-bg">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-3 text-sm text-neutral-text">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-bg">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-rose-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-[30%] h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm backdrop-blur-md">
              <LayoutDashboard className="h-3.5 w-3.5 text-rose-accent" />
              Your Account
            </div>
            <h1 className="mt-4 font-heading text-3xl font-extrabold text-neutral-heading">
              Dashboard
            </h1>
            <p className="mt-1 text-neutral-text">
              Welcome back, {userName}. Track your bookings here.
            </p>
          </div>
          <Link href="/events" className="btn-primary">
            Book New Event
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="card p-5">
            <p className="text-sm text-neutral-text">Total Bookings</p>
            <p className="mt-1 font-heading text-3xl font-bold text-neutral-heading">
              {bookings.length}
            </p>
          </div>
          <div className="card p-5">
            <p className="text-sm text-neutral-text">Confirmed</p>
            <p className="mt-1 font-heading text-3xl font-bold text-green-600">
              {confirmedCount}
            </p>
          </div>
          <div className="card p-5">
            <p className="text-sm text-neutral-text">Pending</p>
            <p className="mt-1 font-heading text-3xl font-bold text-amber-600">
              {pendingCount}
            </p>
          </div>
        </div>

        {/* Bookings */}
        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-neutral-heading">
            My Bookings
          </h2>

          {bookings.length === 0 ? (
            <div className="glass-panel mt-6 rounded-3xl border border-dashed border-primary/20 py-16 text-center">
              <p className="text-neutral-text">
                You haven&apos;t booked any events yet.
              </p>
              <Link href="/events" className="btn-primary mt-4 inline-flex">
                Browse Events
              </Link>
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-neutral-heading">
                        {b.event_title || "Event"}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                          statusColor[b.status] || statusColor.pending
                        }`}
                      >
                        {b.status}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-neutral-text">
                      {b.event_venue && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-primary" />
                          {b.event_venue}
                          {b.event_city ? `, ${b.event_city}` : ""}
                        </span>
                      )}
                      {b.event_date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          {new Date(b.event_date).toLocaleDateString("en-PK", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-primary" />
                        {b.guests} guests
                      </span>
                    </div>

                    {b.notes && (
                      <p className="mt-2 text-xs text-[#9B7A84]">
                        Notes: {b.notes}
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <p className="font-heading font-semibold text-primary">
                      {new Intl.NumberFormat("en-PK", {
                        style: "currency",
                        currency: "PKR",
                        maximumFractionDigits: 0,
                      }).format(b.total_price)}
                    </p>
                    <p className="mt-1 text-xs text-[#9B7A84]">
                      Booked{" "}
                      {new Date(b.created_at).toLocaleDateString("en-PK", {
                        day: "numeric",
                        month: "short",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}