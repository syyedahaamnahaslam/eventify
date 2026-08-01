# Eventify — Event Organizing & Booking Website

**Internship Project** · ZYNVEX Solutions  
**Intern:** Syeda Amna Aslam · ID: ZYNVEX-CERT-0786  
**Program:** Web Development

---

## Project Overview

Eventify is a full-stack, fully responsive web platform for organizing and booking events (weddings, parties, corporate events, birthdays, etc.).

Users can:
- Browse event packages & vendors
- Search and filter by category / city
- View detailed event pages (date, venue, pricing, features)
- Book events via a simple checkout flow
- Track booked & hosted events on a personal dashboard

Built with **Next.js + Tailwind CSS**. Backend uses **Supabase** (Database, Auth, Storage) and **Firebase** (push notifications & real-time status updates). Deployed on **Vercel**.

---

## Tech Stack

| Layer              | Technology                          |
|--------------------|-------------------------------------|
| Frontend           | Next.js 14 (App Router), React, Tailwind CSS |
| Backend / DB       | Supabase (PostgreSQL, Auth, Storage) |
| Notifications      | Firebase                            |
| Deployment         | Vercel                              |
| Version Control    | GitHub                              |

---

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd eventify
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

Required:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Optional (for Firebase notifications later):
- Firebase config keys

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── events/
│   │   ├── page.tsx          # Event listing + search/filter
│   │   └── [id]/page.tsx    # Event detail
│   ├── booking/page.tsx      # Booking & checkout flow
│   ├── dashboard/page.tsx    # User dashboard
│   └── auth/
│       ├── login/page.tsx
│       └── signup/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── EventCard.tsx
├── data/
│   └── events.ts             # Dummy data (Module 1)
└── lib/
    └── supabase.ts           # Supabase client
```

---

## Roadmap (4 Modules)

| Module | Timeline              | Deliverables                                      |
|--------|-----------------------|---------------------------------------------------|
| 1      | July 20 – July 26   | UI/UX, Next.js setup, Home + Listing, Vercel deploy |
| 2      | July 27 – Aug 02     | Supabase schema + Auth, Event Detail, Search/Filter |
| 3      | Aug 03 – Aug 09       | Booking flow, Node API routes, Firebase, Dashboard  |
| 4      | Aug 10 – Aug 15       | Polish, testing, final deploy, docs, demo video     |

**Current status:** Module 1 starter code ready (responsive UI + dummy data).

---

## Weekly Progress

Every weekend submit:
- Active GitHub repo link
- Updated README reflecting only completed work of that module

**Final Submission Deadline:** August 15, 2026

---

## License

Private internship project · ZYNVEX Solutions
