// src/app/layout.tsx
import type { Metadata } from "next";
import { QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food Delivery App — Next.js SSR",
  description: "Built with Next.js 14 App Router, TypeScript, React Query",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
