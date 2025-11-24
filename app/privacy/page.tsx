import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - RAIDEX",
  description: "Privacy Policy for RAIDEX",
};

export default function PrivacyPage() {
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
                Privacy
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-invert prose-zinc">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-zinc-500 mb-8">Last updated: November 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p className="text-zinc-300 leading-relaxed">
              RAIDEX ("we", "our", or "us") respects your privacy and is committed to protecting your
              personal data. This Privacy Policy explains how we collect, use, and safeguard your
              information when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We collect the following types of information:
            </p>
            <h3 className="text-xl font-semibold mb-2 text-white">Personal Information</h3>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-4">
              <li>Name (when you sign up for early access)</li>
              <li>Email address (when you sign up for early access)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-white">Technical Information</h3>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>To send you updates about our launch and product developments</li>
              <li>To provide early access to our Service</li>
              <li>To communicate with you about RAIDEX</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Storage and Security</h2>
            <p className="text-zinc-300 leading-relaxed">
              Your personal data is stored securely using industry-standard encryption and security
              measures. We use reputable third-party services (such as Resend for email) that comply
              with applicable data protection regulations. We retain your data only for as long as
              necessary to fulfill the purposes outlined in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Sharing</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We do not sell your personal data. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>Service providers who assist in operating our business (email services, hosting)</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners in the event of a merger or acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed mt-4">
              To exercise these rights, please contact us through our social channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Cookies</h2>
            <p className="text-zinc-300 leading-relaxed">
              We may use cookies and similar tracking technologies to improve your experience on our
              website. You can control cookies through your browser settings. Essential cookies are
              necessary for the website to function and cannot be disabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Third-Party Links</h2>
            <p className="text-zinc-300 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices of these external sites. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Children's Privacy</h2>
            <p className="text-zinc-300 leading-relaxed">
              Our Service is not intended for individuals under the age of 18. We do not knowingly
              collect personal data from children. If you believe we have collected data from a minor,
              please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Changes to This Policy</h2>
            <p className="text-zinc-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material
              changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Contact Us</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please reach
              out through our social media channels or the contact information provided on our website.
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
            <Link href="/terms" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
