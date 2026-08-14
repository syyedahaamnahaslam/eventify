# Eventify — Event Organizing & Booking Website

**Internship Project** · ZYNVEX Solutions  
**Intern:** Syeda Amna Aslam · ID: **ZYNVEX-CERT-0786**  
**Program:** Web Development  

**GitHub:** [https://github.com/syyedahaamnahaslam/eventify](https://github.com/syyedahaamnahaslam/eventify)  
**Live Demo:** [https://eventify-xi-tawny.vercel.app](https://eventify-xi-tawny.vercel.app)

---

## Project Overview

Eventify is a full-stack, fully responsive web platform for organizing and booking events such as weddings, mehndi, receptions, birthdays, baby showers, bridal showers, corporate events, seminars, and get-togethers.

Users can:
- Browse event packages with search and filters
- View event details (capacity, pricing, features)
- Sign up / log in securely
- Book events and track bookings on a personal dashboard
- Receive booking notifications (Firebase)

Built with **Next.js + Tailwind CSS**. Backend uses **Supabase** (Database, Auth) and **Firebase** (notifications). Premium rose theme UI. Deployed on **Vercel**.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router), React, Tailwind CSS |
| Backend / DB | Supabase (PostgreSQL, Auth) |
| Notifications | Firebase Cloud Messaging |
| Deployment | Vercel |
| Version Control | GitHub |

---

## Features Completed

### Module 1 ✅
- UI/UX design (responsive layout)
- Next.js + Tailwind setup
- GitHub repository with folder structure and README
- Home, Navbar, Event listing

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
- Bookings saved to Supabase
- User dashboard with real booked events
- Firebase notification on successful booking

### Module 4 ✅
- UI polish and rose theme consistency
- Production build fixes (Suspense boundaries)
- Final deployment on Vercel
- Supabase Auth URL configuration for live domain
- Live verification of auth, booking, and dashboard
- Final documentation update

---

## Live Demo

🌐 **https://eventify-xi-tawny.vercel.app**

---

## Getting Started (Local)

```bash
git clone https://github.com/syyedahaamnahaslam/eventify.git
cd eventify
npm install
cp .env.example .env.local
# Add your Supabase + Firebase keys in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_VAPID_KEY=
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── events/               # Listing + detail
│   ├── booking/              # Checkout
│   ├── dashboard/            # User bookings
│   └── auth/                 # Login + Signup
├── components/               # Navbar, Footer, EventCard
└── lib/                      # supabase, events, bookings, firebase
public/
├── images/                   # Event images
└── firebase-messaging-sw.js
```

---

## Database Schema (Supabase)

- **events** — packages (title, category, price, capacity, image, etc.)
- **bookings** — user bookings (event_id, guests, total_price, status)
- **profiles** — user profile data

---

## Roadmap Status

| Module | Timeline | Status |
|--------|----------|--------|
| Module 1 | July 20 – July 26, 2026 | ✅ Complete |
| Module 2 | July 27 – Aug 02, 2026 | ✅ Complete |
| Module 3 | Aug 03 – Aug 09, 2026 | ✅ Complete |
| Module 4 | Aug 10 – Aug 15, 2026 | ✅ Complete |

**Final Submission:** August 15, 2026

---

## License

Private internship project · ZYNVEX Solutions
