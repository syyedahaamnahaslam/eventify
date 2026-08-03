import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Users } from "lucide-react";
import type { EventPackage } from "@/lib/events";

type Props = {
  event: EventPackage;
};

export default function EventCard({ event }: Props) {
  const formattedPrice = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(event.price);

  return (
    <Link
      href={`/events/${event.id}`}
      className="group block overflow-hidden rounded-3xl border border-primary/10 bg-white/75 shadow-[0_15px_45px_rgba(192,6,69,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_25px_60px_rgba(192,6,69,0.12)]"
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-52 w-full overflow-hidden bg-rose-soft">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-heading/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/80 px-3 py-1.5 text-xs font-bold capitalize text-neutral-heading shadow-lg backdrop-blur-xl">
          {event.category}
        </span>

        {/* View Icon */}
        <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}

      <div className="p-5">
        {/* Title */}
        <h3 className="line-clamp-1 font-heading text-lg font-extrabold text-neutral-heading transition-colors duration-300 group-hover:text-primary">
          {event.title}
        </h3>

        {/* Host */}
        <p className="mt-1.5 text-sm text-neutral-text">
          Hosted by {event.host}
        </p>

        {/* Capacity */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-neutral-text">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/[0.07] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <Users className="h-4 w-4" />
          </div>

          <span>Up to {event.capacity} guests</span>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />

        {/* Price + View */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B7A84]">
              Starting from
            </p>

            <p className="mt-1 font-heading text-lg font-extrabold text-primary">
              {formattedPrice}
            </p>
          </div>

          <span className="group/link inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors duration-300 group-hover:text-primary-700">
            View
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}