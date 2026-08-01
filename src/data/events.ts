export type EventPackage = {
  id: string;
  title: string;
  category: "wedding" | "party" | "corporate" | "birthday" | "other";
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

export const dummyEvents: EventPackage[] = [
  {
    id: "1",
    title: "Royal Garden Wedding Package",
    category: "wedding",
    venue: "Pearl Continental Gardens",
    city: "Lahore",
    date: "2026-09-15",
    price: 450000,
    capacity: 400,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    description:
      "A luxurious outdoor wedding package with floral décor, stage setup, catering for 400 guests, and professional photography.",
    features: [
      "Full catering (4 courses)",
      "Stage & lighting",
      "Floral décor",
      "Photography & videography",
      "Bridal suite access",
    ],
    host: "Elegant Events Co.",
  },
  {
    id: "2",
    title: "Sunset Beach Party",
    category: "party",
    venue: "Clifton Beach Club",
    city: "Karachi",
    date: "2026-08-20",
    price: 180000,
    capacity: 150,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    description:
      "Vibrant beach party with DJ, BBQ, cocktails and sunset views. Perfect for birthday or casual celebrations.",
    features: [
      "DJ & sound system",
      "BBQ & open bar",
      "Beach seating",
      "Fireworks option",
      "Security staff",
    ],
    host: "Coastal Vibes",
  },
  {
    id: "3",
    title: "Corporate Annual Gala",
    category: "corporate",
    venue: "Islamabad Serena Hotel",
    city: "Islamabad",
    date: "2026-10-05",
    price: 320000,
    capacity: 250,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    description:
      "Elegant corporate gala with keynote stage, AV setup, 3-course dinner and networking lounge.",
    features: [
      "AV & projection",
      "3-course plated dinner",
      "Registration desk",
      "Networking lounge",
      "Branded backdrop",
    ],
    host: "ProEvents PK",
  },
  {
    id: "4",
    title: "Kids Birthday Bash",
    category: "birthday",
    venue: "Fun City DHA",
    city: "Lahore",
    date: "2026-08-12",
    price: 75000,
    capacity: 50,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    description:
      "Fun-filled kids birthday party with games, face painting, cake, and entertainment for ages 5-12.",
    features: [
      "Games & activities",
      "Face painting",
      "Custom cake",
      "Party favors",
      "Host & helpers",
    ],
    host: "Little Stars Events",
  },
  {
    id: "5",
    title: "Mehndi Night Special",
    category: "wedding",
    venue: "Private Lawn, DHA Phase 5",
    city: "Karachi",
    date: "2026-09-10",
    price: 220000,
    capacity: 200,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    description:
      "Traditional mehndi night with dhol, folk singers, vibrant décor and authentic catering.",
    features: [
      "Dhol & folk music",
      "Mehndi artists",
      "Traditional décor",
      "Catering (desi)",
      "Photo booth",
    ],
    host: "Shaadi Wala",
  },
  {
    id: "6",
    title: "Rooftop Anniversary Dinner",
    category: "party",
    venue: "Sky Lounge, MM Alam",
    city: "Lahore",
    date: "2026-08-28",
    price: 95000,
    capacity: 40,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description:
      "Intimate rooftop dinner for anniversary celebrations with live music and city views.",
    features: [
      "Private rooftop",
      "Live acoustic music",
      "3-course dinner",
      "Cake & champagne",
      "Decorated table",
    ],
    host: "Intimate Moments",
  },
];

export function getEventById(id: string): EventPackage | undefined {
  return dummyEvents.find((e) => e.id === id);
}

export function filterEvents(
  category?: string,
  city?: string,
  search?: string
): EventPackage[] {
  return dummyEvents.filter((e) => {
    const matchCategory = !category || category === "all" || e.category === category;
    const matchCity = !city || city === "all" || e.city.toLowerCase() === city.toLowerCase();
    const matchSearch =
      !search ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.venue.toLowerCase().includes(search.toLowerCase()) ||
      e.city.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchCity && matchSearch;
  });
}
