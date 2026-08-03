import { supabase } from "./supabase";

export type Booking = {
  id: string;
  event_id: string;
  user_id: string;
  guests: number;
  total_price: number;
  status: "pending" | "confirmed" | "cancelled";
  notes: string | null;
  created_at: string;
  // joined event fields
  event_title?: string;
  event_venue?: string;
  event_city?: string;
  event_date?: string;
  event_image?: string;
};

export async function createBooking(data: {
  event_id: string;
  user_id: string;
  guests: number;
  total_price: number;
  notes?: string;
}) {
  const { data: booking, error } = await supabase
    .from("bookings")
    .insert({
      event_id: data.event_id,
      user_id: data.user_id,
      guests: data.guests,
      total_price: data.total_price,
      status: "pending",
      notes: data.notes || null,
    })
    .select()
    .single();

  if (error) {
    console.error("Booking error:", error.message);
    return { booking: null, error: error.message };
  }

  return { booking, error: null };
}

export async function getUserBookings(userId: string): Promise<Booking[]> {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      `
      id,
      event_id,
      user_id,
      guests,
      total_price,
      status,
      notes,
      created_at,
      events (
        title,
        venue,
        city,
        date,
        image_url
      )
    `
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Fetch bookings error:", error.message);
    return [];
  }

  return (data || []).map((row: any) => ({
    id: row.id,
    event_id: row.event_id,
    user_id: row.user_id,
    guests: row.guests,
    total_price: Number(row.total_price),
    status: row.status,
    notes: row.notes,
    created_at: row.created_at,
    event_title: row.events?.title,
    event_venue: row.events?.venue,
    event_city: row.events?.city,
    event_date: row.events?.date,
    event_image: row.events?.image_url,
  }));
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
