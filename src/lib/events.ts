import { supabase } from "./supabase";

export type EventPackage = {
  id: string;
  title: string;
  category: string;
  venue: string;
  city: string;
  date: string;
  price: number;
  capacity: number;
  image: string;
  description: string;
  features: string[];
  host: string;
};

// Convert Supabase row to our EventPackage type
function mapEvent(row: any): EventPackage {
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    venue: row.venue,
    city: row.city,
    date: row.date,
    price: Number(row.price),
    capacity: row.capacity,
    image: row.image_url || "",
    description: row.description || "",
    features: row.features || [],
    host: row.host || "",
  };
}

export async function getAllEvents(): Promise<EventPackage[]> {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true });

  if (error) {
    console.error("Error fetching events:", error.message);
    return [];
  }

  return (data || []).map(mapEvent);
}

export async function getEventById(id: string): Promise<EventPackage | null> {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Error fetching event:", error?.message);
    return null;
  }

  return mapEvent(data);
}

export async function filterEvents(
  category?: string,
  city?: string,
  search?: string
): Promise<EventPackage[]> {
  let query = supabase.from("events").select("*");

  if (category && category !== "all") {
    query = query.eq("category", category);
  }
  if (city && city !== "all") {
    query = query.eq("city", city);
  }
  if (search) {
    query = query.or(
      `title.ilike.%${search}%,venue.ilike.%${search}%,city.ilike.%${search}%`
    );
  }

  const { data, error } = await query.order("date", { ascending: true });

  if (error) {
    console.error("Error filtering events:", error.message);
    return [];
  }

  return (data || []).map(mapEvent);
}
