# Eventify — Event Organizing & Booking Website

**Internship Project** · ZYNVEX Solutions  
**Intern:** Syeda Amna Aslam · ID: **ZYNVEX-CERT-0786**  
**Program:** Web Development  

**GitHub:** [https://github.com/syyedahaamnahaslam/eventify](https://github.com/syyedahaamnahaslam/eventify)

---

## Project Overview

Eventify is a full-stack, fully responsive web platform for organizing and booking events such as weddings, mehndi, receptions, birthdays, baby showers, bridal showers, corporate events, seminars, and get-togethers.

Users can:
- Browse event packages with search and filters
- View event details (capacity, pricing, features)
- Sign up / log in securely
- Book events and track bookings on a personal dashboard
- Receive booking notifications (Firebase)

Built with **Next.js + Tailwind CSS**. Backend uses **Supabase** (Database, Auth, Storage) and **Firebase** (notifications). Designed with a modern rose/premium theme. Deploy target: **Vercel**.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router), React, Tailwind CSS |
| Backend / DB | Supabase (PostgreSQL, Auth, Storage) |
| Notifications | Firebase Cloud Messaging |
| Deployment | Vercel |
| Version Control | GitHub |

---

## Features Completed

### Module 1 ✅
- UI/UX design (responsive layout, color scheme)
- Next.js + Tailwind setup
- GitHub repository with folder structure and README
- Home, Navbar, Event listing (dummy data initially)
- Early Vercel-ready structure

### Module 2 ✅
- Supabase project + database schema (`events`, `bookings`, `profiles`)
- Supabase Authentication (Sign up / Login)
- Responsive Event Detail page
- Frontend connected to Supabase for dynamic event data
- Event search and filter functionality
- 9 event packages with local images

### Module 3 ✅
- Responsive booking and checkout flow
- Login-required booking
- Bookings saved to Supabase (`bookings` table)
- User dashboard with real booked events (status, price, guests)
- Firebase notification on successful booking
- Auth redirect after login back to booking

### Module 4 ⏳ (Pending)
- UI polish and performance optimization
- Cross-device testing and bug fixes
- Final deployment on Vercel
- Final documentation update
- Demo video and final submission

---

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/syyedahaamnahaslam/eventify.git
cd eventify
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_VAPID_KEY=your_vapid_key
```

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
│   ├── page.tsx                 # Home
│   ├── events/
│   │   ├── page.tsx             # Event listing + search/filter
│   │   └── [id]/page.tsx       # Event detail
│   ├── booking/page.tsx         # Booking & checkout
│   ├── dashboard/page.tsx       # User dashboard
│   └── auth/
│       ├── login/page.tsx
│       └── signup/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── EventCard.tsx
├── lib/
│   ├── supabase.ts              # Supabase client
│   ├── events.ts                # Event queries
│   ├── bookings.ts              # Booking create/fetch
│   └── firebase.ts              # Firebase notifications
└── data/
    └── events.ts                # Legacy dummy data (optional)
public/
├── images/                      # Local event images
└── firebase-messaging-sw.js     # FCM service worker
```

---

## Database Schema (Supabase)

### `events`
id, title, category, venue, city, date, price, capacity, image_url, description, features, host, created_at

### `bookings`
id, event_id, user_id, guests, total_price, status, notes, created_at

### `profiles`
id, full_name, phone, created_at

---

## Roadmap

| Module | Timeline | Status |
|--------|----------|--------|
| Module 1 | July 20 – July 26, 2026 | ✅ Complete |
| Module 2 | July 27 – Aug 02, 2026 | ✅ Complete |
| Module 3 | Aug 03 – Aug 09, 2026 | ✅ Complete |
| Module 4 | Aug 10 – Aug 15, 2026 | ⏳ Pending |

**Final Submission Deadline:** August 15, 2026

---

## Reporting

- Weekly progress with GitHub link and updated README
- Only completed work for that module timeline is documented above

---

## License

Private internship project · ZYNVEX Solutions
