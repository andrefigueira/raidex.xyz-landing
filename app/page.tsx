import { EmailCapture } from "@/components/email-capture";
import { CodeBlock } from "@/components/code-block";
import { BentoGrid } from "@/components/bento-grid";
import { DitherArt } from "@/components/dither-art";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  FileText,
  Check,
  Sparkles,
} from "lucide-react";

const codeExample = `import { Raidex } from '@raidex/sdk';

const raider = new Raidex('your-api-key');

// Deploy an arbitrage raider in one line
await raider.raid('arbitrage', {
  chains: ['base', 'arbitrum'],
  minProfit: 100
});

// Your agent now hunts across all major DEXs`;

const painPoints = [
  "Managing wallets and private keys is a security nightmare",
  "Integrating with every DEX takes months of work",
  "MEV bots extract value from your transactions",
  "Gas optimization requires deep protocol knowledge",
  "One wrong transaction can drain everything",
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    description: "For testing and experimentation",
    features: [
      "10,000 API calls/month",
      "Testnet access",
      "Basic strategies",
      "Community support",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$299",
    period: "/month",
    description: "For serious builders",
    features: [
      "500,000 API calls/month",
      "All chains supported",
      "All strategies",
      "MEV protection",
      "Priority execution",
      "Email support",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For high-volume operations",
    features: [
      "Unlimited API calls",
      "Dedicated infrastructure",
      "Custom strategies",
      "Full MEV protection",
      "SLA guarantees",
      "Dedicated support",
    ],
    highlight: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Logo className="w-7 h-7 text-white" />
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>RAIDEX</span>
            <Badge variant="outline" className="text-[10px] border-white/10 text-zinc-400 font-normal ml-1.5">
              Pre-Launch
            </Badge>
          </div>
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
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Team
            </Link>
            <a
              href="https://twitter.com/voidmode_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Hero background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-white/[0.03] to-transparent rounded-full blur-3xl" />

          {/* Animated dither art */}
          <DitherArt className="absolute inset-0 w-full h-full opacity-80" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10">
                Now accepting early access signups
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] animate-fade-in-delay-1">
              Infrastructure for AI Agents
              <br />
              <span className="gradient-text">to Raid DeFi</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2" style={{ textShadow: '0 0 30px rgba(255,255,255,0.1)' }}>
              Deploy autonomous agents that hunt profits across protocols 24/7.
              No keys. No complexity. Just results.
            </p>

            <div className="mt-10 flex justify-center animate-fade-in-delay-3">
              <EmailCapture variant="hero" />
            </div>
          </div>
        </section>

        {/* Problem Section - Subtle contrast */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050506]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-zinc-500 uppercase tracking-wider mb-3 font-medium">The Problem</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                AI Agents Are Broken
              </h2>
            </div>

            <div className="space-y-3">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                    <span className="text-zinc-400 text-sm font-mono">{index + 1}</span>
                  </div>
                  <p className="text-zinc-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section - Normal background */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-emerald-400/80 uppercase tracking-wider mb-3 font-medium">The Solution</p>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                One API. Every Opportunity.
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Stop wrestling with infrastructure. Start capturing value.
              </p>
            </div>

            <CodeBlock code={codeExample} language="javascript" />

            <p className="mt-8 text-center text-zinc-500">
              From integration to profit in under 5 minutes
            </p>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/[0.01] to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-zinc-500 uppercase tracking-wider mb-3">Capabilities</p>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                Everything You Need to Raid
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                We handle the hard parts so your agents can focus on finding alpha.
              </p>
            </div>

            <BentoGrid />
          </div>
        </section>

        {/* Pricing Section - Distinct background */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07070a] relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-zinc-500 uppercase tracking-wider mb-3">Pricing</p>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Start free. Scale when you&apos;re ready. Only pay for what you use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-6 ${
                    tier.highlight
                      ? "bg-white/[0.05] border-2 border-white/20"
                      : "bg-white/[0.02] border border-white/[0.06]"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-white text-zinc-900 hover:bg-white">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      {tier.period && <span className="text-zinc-500">{tier.period}</span>}
                    </div>
                    <p className="text-sm text-zinc-500 mt-2">{tier.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center text-zinc-500 text-sm mt-8">
              All plans include a 1% performance fee on profits generated. Enterprise plans available with custom terms.
            </p>
          </div>
        </section>

        {/* Builder Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Animated Dither Art Background */}
          <div className="absolute inset-0">
            <DitherArt />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-sm text-emerald-400/80 uppercase tracking-wider mb-3 font-medium">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built by Builders
            </h2>
            <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
              We&apos;ve spent 20+ years building high-frequency trading systems, scaling infrastructure to billions of transactions, and shipping products that people actually use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-background/60 backdrop-blur-sm border border-white/[0.08]">
                <p className="text-3xl font-bold text-white mb-2">7B+</p>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Transactions/Year</p>
                <p className="text-zinc-400 text-sm">
                  Built systems handling massive scale with 99.999% uptime
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background/60 backdrop-blur-sm border border-white/[0.08]">
                <p className="text-3xl font-bold text-white mb-2">20+</p>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Years Experience</p>
                <p className="text-zinc-400 text-sm">
                  From startups to enterprise, we&apos;ve shipped at every scale
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background/60 backdrop-blur-sm border border-white/[0.08]">
                <p className="text-3xl font-bold text-white mb-2">100+</p>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Projects Delivered</p>
                <p className="text-zinc-400 text-sm">
                  Track record of turning ideas into production systems
                </p>
              </div>
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-2 mt-10 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Meet the team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Whitepaper Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050506] relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm text-zinc-500 uppercase tracking-wider mb-3">Deep Dive</p>
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                  Read the Whitepaper
                </h2>
                <p className="text-zinc-400 mb-6">
                  Explore the technical architecture, security model, and economic design behind RAIDEX.
                  Learn how we enable AI agents to safely execute complex DeFi strategies.
                </p>
                <Link
                  href="/whitepaper"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white font-medium hover:bg-white/[0.08] hover:border-white/20 transition-all"
                >
                  <FileText className="w-5 h-5" />
                  Read Whitepaper
                </Link>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-64 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex flex-col items-center justify-center p-6">
                  <FileText className="w-12 h-12 text-zinc-500 mb-4" />
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">RAIDEX</p>
                  <p className="text-sm font-medium text-zinc-300">Whitepaper</p>
                  <p className="text-xs text-zinc-600 mt-1">v1.0</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Final dark section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#060607] relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Be the First to Raid
            </h2>
            <p className="text-zinc-400 mb-10">
              Join 237 builders preparing their agents
            </p>
            <div className="flex justify-center">
              <EmailCapture variant="cta" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/5">
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
            <Link
              href="/terms"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Privacy
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
