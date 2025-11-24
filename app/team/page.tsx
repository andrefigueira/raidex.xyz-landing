import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FileText, Users } from "lucide-react";
import { Logo } from "@/components/logo";
import { JoinTeamForm } from "@/components/join-team-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team - RAIDEX",
  description: "Meet the team behind RAIDEX",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <Logo className="w-7 h-7 text-white" />
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>RAIDEX</span>
            <Badge variant="outline" className="text-[10px] border-white/10 text-zinc-400 font-normal ml-1.5">
              Pre-Launch
            </Badge>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/whitepaper"
              className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              Whitepaper
            </Link>
            <Link
              href="/team"
              className="text-sm text-white flex items-center gap-1.5"
            >
              <Users className="w-4 h-4" />
              Team
            </Link>
            <a
              href="https://twitter.com/voidmode_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              The Team
            </h1>
            <p className="text-xl text-zinc-400">
              Small team, big ambitions. Shipping fast.
            </p>
          </div>

          {/* Founder Card */}
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/andre.jpg"
                  alt="André Figueira"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border-2 border-white/10"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl sm:text-3xl font-bold">André Figueira</h2>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    Founder
                  </Badge>
                </div>
                <p className="text-zinc-400 mb-6">Principal Engineer & Technical Consultant</p>

                <div className="space-y-4 text-zinc-300">
                  <p>
                    20+ years building software for enterprises and startups. Currently Principal Engineer
                    at a major UK retailtech company, leading systems that process 7B+ annual transactions
                    with 99.999% uptime.
                  </p>
                  <p>
                    Founder of Polyxmedia consultancy, specializing in AI/ML integration, scalable
                    architectures, and rapid MVP development. Built and shipped 5+ SaaS products,
                    mentored 12+ engineers.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-6">
                  <p className="text-sm text-zinc-500 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["Go", "Python", "TypeScript", "React", "Vue.js", "Kubernetes", "AWS", "AI/ML"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="https://linkedin.com/in/andrefigueira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/andrefigueira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/voidmode_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "7B+", label: "Transactions/Year" },
              { value: "100+", label: "Projects Delivered" },
              { value: "99.999%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl">
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Join the Team */}
          <div className="mt-16">
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Join the Team</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                  We&apos;re looking for exceptional people to help build the future of autonomous DeFi.
                  Engineers, marketers, community builders. Remote-first, async-friendly, high autonomy.
                </p>
              </div>
              <JoinTeamForm />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-zinc-400 mb-6">
              Not looking to join but interested in RAIDEX?
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition-all"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <span>RAIDEX &copy; {new Date().getFullYear()}</span>
            <span className="text-zinc-600">&middot;</span>
            <span className="flex items-center gap-1.5">
              <img src="/polyxlogo.avif" alt="polyxmedia" className="h-4 w-auto" />
              <span>a <a href="https://polyxmedia.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white transition-colors">polyxmedia</a> product</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/whitepaper"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Whitepaper
            </Link>
            <a
              href="https://twitter.com/voidmode_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
