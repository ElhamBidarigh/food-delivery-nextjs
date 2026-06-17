# Food Delivery App — Next.js 14

Fast, SEO-optimized food delivery frontend built with Next.js App Router and TypeScript.

## Why This Stack

**Next.js 14 (SSR + Streaming)**
- Server-side rendering for better SEO and initial page load
- Faster than CRA + React only
- App Router with `[id]` dynamic routes
- Built-in Image optimization, font optimization

**TypeScript**
- Type safety at compile time
- Better IDE support and autocomplete
- Production-grade code organization

## Features

- **Restaurant Listing** — Searchable grid with real-time filtering
- **Restaurant Detail Page** — Dynamic route with menu items
- **Responsive Design** — Mobile, tablet, desktop optimized
- **React Query Integration** — (ready for real API data fetching)

## Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| UI | React 18 |
| Data Fetching | React Query (setup ready) |
| Styling | CSS-in-JS (minimal, performant) |

## Key Next.js Concepts Demonstrated

### 1. App Router + Server/Client Components
```tsx
// Server Component (default) — runs on server
export default function Page() { ... }

// Client Component — for interactivity
'use client';
export default function SearchBar() { ... }
```

### 2. Dynamic Routes
`src/app/restaurant/[id]/page.tsx` → handles `/restaurant/123`, `/restaurant/456`, etc.

### 3. TypeScript Interfaces
Strongly typed restaurant, menu, API responses for type safety.

## Running

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## Why Talabat Cares

Talabat serves high-traffic users across MENA — they need:
- **Performance**: SSR + streaming for faster first paint
- **SEO**: Each restaurant page is crawlable (search engine friendly)
- **TypeScript**: Type-safe code at scale
- **Scalability**: Next.js handles 10K+ routes and requests effortlessly

This project demonstrates you understand production-grade frontend architecture.
