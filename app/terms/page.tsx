import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - RAIDEX",
  description: "Terms of Service for RAIDEX",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Logo className="w-6 h-6 text-white" />
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>RAIDEX</span>
              <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                Terms
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-invert prose-zinc">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-zinc-500 mb-8">Last updated: November 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-zinc-300 leading-relaxed">
              By accessing or using RAIDEX ("Service"), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              RAIDEX provides infrastructure for deploying AI agents in decentralized finance (DeFi).
              Our Service is currently in pre-launch phase, and we are collecting early access signups.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The Service involves interactions with blockchain networks and smart contracts.
              Users acknowledge that cryptocurrency and DeFi activities carry inherent risks including
              but not limited to loss of funds, smart contract vulnerabilities, and market volatility.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Eligibility</h2>
            <p className="text-zinc-300 leading-relaxed">
              You must be at least 18 years old to use this Service. By using RAIDEX, you represent
              that you are of legal age and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Risk Disclosure</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Using RAIDEX involves significant risks:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>Cryptocurrency markets are highly volatile</li>
              <li>Smart contracts may contain vulnerabilities</li>
              <li>DeFi protocols may be exploited or fail</li>
              <li>Past performance does not guarantee future results</li>
              <li>You may lose some or all of your invested capital</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed mt-4">
              You should only invest what you can afford to lose. This is not financial advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. User Responsibilities</h2>
            <p className="text-zinc-300 leading-relaxed">
              You are responsible for maintaining the security of your account and any connected wallets.
              You agree not to use the Service for any unlawful purposes or in violation of any applicable
              laws or regulations, including but not limited to anti-money laundering laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Intellectual Property</h2>
            <p className="text-zinc-300 leading-relaxed">
              All content, trademarks, and intellectual property on RAIDEX are owned by us or our licensors.
              You may not copy, modify, or distribute any part of our Service without prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
            <p className="text-zinc-300 leading-relaxed">
              RAIDEX is provided "as is" without warranties of any kind. We shall not be liable for any
              direct, indirect, incidental, special, or consequential damages arising from your use of
              the Service, including any losses of cryptocurrency or other digital assets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Modifications</h2>
            <p className="text-zinc-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any
              material changes via email or through the Service. Continued use after changes constitutes
              acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Governing Law</h2>
            <p className="text-zinc-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales,
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact</h2>
            <p className="text-zinc-300 leading-relaxed">
              For questions about these Terms, please contact us via our social channels or through
              the contact information provided on our website.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <span>RAIDEX &copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
