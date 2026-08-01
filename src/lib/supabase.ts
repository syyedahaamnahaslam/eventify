import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types (to be expanded when schema is ready)
export type Database = {
  public: {
    Tables: {
      events: {
        Row: {
          id: string;
          title: string;
          category: string;
          venue: string;
          city: string;
          date: string;
          price: number;
          capacity: number;
          image_url: string;
          description: string;
          features: string[];
          host_id: string;
          created_at: string;
        };
      };
      bookings: {
        Row: {
          id: string;
          event_id: string;
          user_id: string;
          guests: number;
          total_price: number;
          status: "pending" | "confirmed" | "cancelled";
          created_at: string;
        };
      };
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          phone: string;
          created_at: string;
        };
      };
    };
  };
};
