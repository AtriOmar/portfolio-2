"use client";

import { MainNav } from "@/components/common/main-nav";
import { routesConfig } from "@/config/routes";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <MainNav items={routesConfig.mainNav} />
      <div className="relative flex justify-center items-center min-h-[calc(100vh-80px)] overflow-hidden">
        <div className="flex flex-col items-center px-6 text-center">
          {/* Illustration */}
          <svg
            width="220"
            height="220"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-8"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="currentColor"
              strokeWidth="4"
              className="text-zinc-700"
            />
            <path
              d="M70 80C70 74 74 70 80 70"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-indigo-400"
            />
            <path
              d="M130 80C130 74 126 70 120 70"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-indigo-400"
            />
            <path
              d="M70 125C85 115 115 115 130 125"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-zinc-500"
            />
          </svg>

          {/* Text */}
          <h1 className="mb-4 font-bold text-6xl tracking-tight">404</h1>

          <p className="max-w-md mb-8 text-zinc-400 text-lg">
            Looks like you’ve wandered off the map. The page you’re looking for
            doesn’t exist.
          </p>

          {/* CTA */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-indigo-400/60 rounded-xl bg-zinc-900 hover:bg-zinc-800 font-medium text-zinc-100 text-sm transition"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
