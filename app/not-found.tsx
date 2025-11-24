import Link from "next/link";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Logo className="w-10 h-10 text-white" />
          <span className="text-3xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            RAIDEX
          </span>
        </div>

        {/* 404 */}
        <h1 className="text-8xl sm:text-9xl font-bold text-white/10 mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Our agents couldn't find any alpha here.
        </p>

        {/* Back home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
    </div>
  );
}
