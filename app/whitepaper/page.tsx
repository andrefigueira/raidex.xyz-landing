import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FileText, Users } from "lucide-react";
import { Logo } from "@/components/logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepaper - RAIDEX",
  description: "Technical whitepaper for RAIDEX: Infrastructure for AI Agents to Raid DeFi",
};

export default function WhitepaperPage() {
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
              className="text-sm text-white flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              Whitepaper
            </Link>
            <Link
              href="/team"
              className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
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
        <article className="max-w-3xl mx-auto prose prose-invert prose-lg prose-p:text-zinc-300 prose-p:leading-relaxed prose-li:text-zinc-300 prose-headings:text-white">
          {/* Title */}
          <div className="text-center mb-16 not-prose">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              RAIDEX Whitepaper
            </h1>
            <p className="text-xl text-zinc-400 mb-6">
              Infrastructure for AI Agents to Raid DeFi
            </p>
            <p className="text-sm text-zinc-500">
              Version 1.2 &middot; November 2025
            </p>
            <a href="#changelog" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors mt-1 inline-block">
              View changelog
            </a>
          </div>

          {/* TL;DR */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-lg p-6 mb-12 not-prose">
            <h2 className="text-lg font-semibold mb-3 text-emerald-400">TL;DR</h2>
            <p className="text-zinc-300 leading-relaxed">
              <strong className="text-white">The problem:</strong> Building AI agents for DeFi is a nightmare. Key management takes months, MEV bots steal your profits, and you need to integrate 10+ chains separately.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-2">
              <strong className="text-white">Our solution:</strong> One API call. Your agent gets a secure wallet, MEV protection, and access to every major chain. You focus on strategy, we handle infrastructure.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-2">
              <strong className="text-white">Think:</strong> Stripe for DeFi automation. Deploy a trading agent in 5 minutes, not 5 months.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-card border border-border rounded-lg p-6 mb-12 not-prose">
            <h2 className="text-lg font-semibold mb-4">Contents</h2>
            <nav className="space-y-2 text-sm">
              <a href="#abstract" className="block text-zinc-400 hover:text-foreground transition-colors">1. Abstract</a>
              <a href="#problem" className="block text-zinc-400 hover:text-foreground transition-colors">2. The Problem</a>
              <a href="#why-now" className="block text-zinc-400 hover:text-foreground transition-colors">3. Why Now</a>
              <a href="#solution" className="block text-zinc-400 hover:text-foreground transition-colors">4. Our Solution</a>
              <a href="#architecture" className="block text-zinc-400 hover:text-foreground transition-colors">5. Technical Architecture</a>
              <a href="#security" className="block text-zinc-400 hover:text-foreground transition-colors">6. Security Model</a>
              <a href="#strategies" className="block text-zinc-400 hover:text-foreground transition-colors">7. Raid Strategies</a>
              <a href="#business-model" className="block text-zinc-400 hover:text-foreground transition-colors">8. Business Model</a>
              <a href="#tokenomics" className="block text-zinc-400 hover:text-foreground transition-colors">9. Tokenomics</a>
              <a href="#governance" className="block text-zinc-400 hover:text-foreground transition-colors">10. Governance</a>
              <a href="#roadmap" className="block text-zinc-400 hover:text-foreground transition-colors">11. Roadmap</a>
              <a href="#current-status" className="block text-zinc-400 hover:text-foreground transition-colors">12. Current Status</a>
              <a href="#team" className="block text-zinc-400 hover:text-foreground transition-colors">13. Team</a>
              <a href="#risks" className="block text-zinc-400 hover:text-foreground transition-colors">14. Risks & Considerations</a>
              <a href="#conclusion" className="block text-zinc-400 hover:text-foreground transition-colors">15. Conclusion</a>
              <a href="#future" className="block text-zinc-400 hover:text-foreground transition-colors">16. Future Scope</a>
            </nav>
          </div>

          {/* Abstract */}
          <section id="abstract" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">1. Abstract</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              There&apos;s over <strong className="text-white">$100 billion</strong> locked in DeFi protocols. Every day,
              sophisticated algorithms extract value through arbitrage, liquidations, and yield optimization.
              Until now, accessing these opportunities required a team of engineers, months of development,
              and deep expertise in blockchain security.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              RAIDEX changes this. We&apos;re building the infrastructure layer that lets anyone deploy
              autonomous DeFi agents with a single API call. No key management nightmares. No MEV extraction.
              No chain-by-chain integration. Just deploy your strategy and let it raid.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              Think of us as <strong className="text-white">Stripe for DeFi automation</strong>. We handle the
              hard infrastructure so you can focus on what matters: building strategies that capture value.
            </p>
          </section>

          {/* The Problem */}
          <section id="problem" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">2. The Problem</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Here&apos;s a story we&apos;ve heard dozens of times:
            </p>
            <blockquote className="border-l-4 border-emerald-500/50 pl-6 my-6 italic text-zinc-400">
              &quot;I built an AI that found a 2% arbitrage opportunity across Uniswap and SushiSwap.
              By the time I figured out how to securely manage keys, integrate with both DEXs,
              and protect against frontrunning... I&apos;d spent 4 months and the opportunity was gone.&quot;
            </blockquote>
            <p className="text-zinc-300 leading-relaxed text-lg">
              This is the reality for most builders. The DeFi opportunity is massive, but the infrastructure
              barrier is higher than it should be.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <p className="text-2xl font-bold text-white">$1.5B+</p>
                <p className="text-xs text-zinc-500 mt-1">Lost to MEV in 2024</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <p className="text-2xl font-bold text-white">3-6 mo</p>
                <p className="text-xs text-zinc-500 mt-1">Avg time to build infra</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs text-zinc-500 mt-1">Chains to integrate</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <p className="text-2xl font-bold text-white">90%</p>
                <p className="text-xs text-zinc-500 mt-1">Projects never launch</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2.1 The Key Management Death Spiral</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Your AI agent needs to sign transactions. That means private keys. Private keys mean:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>HSM infrastructure ($10k+/month)</li>
              <li>Multi-sig complexity</li>
              <li>Rotation policies</li>
              <li>Audit requirements</li>
              <li>One mistake = total loss</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              Most teams give up here. The ones that don&apos;t spend months building what should be a solved problem.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2.2 The Multi-Chain Nightmare</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The best opportunities aren&apos;t on one chain. They&apos;re across Ethereum, Arbitrum, Base, Solana,
              and emerging L2s. Each chain means:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Different RPC providers</li>
              <li>Different transaction formats</li>
              <li>Different DEX integrations</li>
              <li>Different gas models</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              Building for one chain is a project. Building for ten is a company.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2.3 You&apos;re Getting Front-Run</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Every transaction you send to a public mempool is visible to MEV bots. They see your profitable
              trade and either front-run it (taking your opportunity) or sandwich it (extracting value from you).
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              <strong className="text-white">$1.5 billion</strong> was extracted from DeFi users by MEV bots in 2024.
              Without private transaction routing, you&apos;re feeding the bots.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2.4 Death by Gas Fees</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Found a 0.5% arbitrage? Great. But if gas costs 0.6% of your trade, you just lost money.
              Effective gas optimization requires:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Real-time gas price monitoring</li>
              <li>Transaction bundling</li>
              <li>Timing optimization</li>
              <li>Flashbots/private mempool integration</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              This alone is a full-time engineering problem.
            </p>
          </section>

          {/* Why Now */}
          <section id="why-now" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">3. Why Now</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Three trends are converging to create the perfect moment for RAIDEX:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3.1 The AI Explosion</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              GPT-4, Claude, and open-source models have made it trivial to build sophisticated AI agents.
              The bottleneck is no longer intelligence, it&apos;s execution. Agents can reason about markets,
              but they can&apos;t securely interact with them.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3.2 DeFi Has Matured</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              $100B+ TVL. Battle-tested protocols. Established liquidity. The infrastructure is ready for
              automation at scale. What&apos;s missing is the bridge between AI and on-chain execution.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3.3 The Infrastructure Gap</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              There&apos;s Alchemy for RPC. Fireblocks for custody. Flashbots for MEV. But there&apos;s no unified
              layer that brings it all together for AI agents. Every team rebuilds the same infrastructure.
              That&apos;s the gap we&apos;re filling.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3.4 AI Model Agnostic</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              We&apos;re intentionally model-agnostic. Today it&apos;s GPT-4 and Claude. Tomorrow it&apos;s
              Llama 4 or whatever comes next. RAIDEX is the execution layer, not the intelligence layer.
              Your agents bring their own brains. We provide the arms and legs to interact with DeFi.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              This separation is strategic: AI models evolve fast, and we evolve with them. When a new model
              drops that&apos;s 10x better at market analysis, your RAIDEX-powered agents can use it immediately.
              No waiting for us to integrate. No vendor lock-in.
            </p>
          </section>

          {/* Our Solution */}
          <section id="solution" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">4. Our Solution</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              One API call. That&apos;s it. Your agent gets everything it needs to start raiding DeFi:
            </p>

            {/* Code Example */}
            <div className="my-8 not-prose">
              <div className="bg-zinc-900/50 border border-white/10 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <span className="text-xs text-zinc-500 ml-2">deploy-agent.ts</span>
                </div>
                <pre className="p-4 text-sm overflow-x-auto"><code className="text-zinc-300"><span className="text-purple-400">const</span> agent = <span className="text-purple-400">await</span> raidex.<span className="text-emerald-400">deploy</span>({`{`}{"\n"}  strategy: <span className="text-amber-400">&quot;arbitrage&quot;</span>,{"\n"}  chains: [<span className="text-amber-400">&quot;ethereum&quot;</span>, <span className="text-amber-400">&quot;base&quot;</span>, <span className="text-amber-400">&quot;arbitrum&quot;</span>],{"\n"}  capital: <span className="text-amber-400">&quot;10000&quot;</span>,{"\n"}  mevProtection: <span className="text-purple-400">true</span>{"\n"}{`}`});{"\n"}{"\n"}<span className="text-zinc-500">// That&apos;s it. Your agent is live.</span></code></pre>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-lg">
              Behind that simple call, RAIDEX handles four massive infrastructure challenges:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">4.1 Secure Execution Environment</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Your agent gets its own secure wallet, powered by HSMs and MPC. No private keys to manage.
              No security audits to pass. No $10k/month custody fees. Just deploy and go.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">4.2 Unified Multi-Chain API</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Write once, raid everywhere. One API gives you access to Ethereum, Base, Arbitrum, Solana,
              and every major DEX. No chain-specific code. No separate integrations.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">4.3 Private Transaction Routing</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Every transaction goes through private mempools and direct validator connections.
              MEV bots can&apos;t see you. They can&apos;t front-run you. Your alpha stays yours.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">4.4 Intelligent Gas Management</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              We monitor gas prices in real-time, bundle transactions, and time execution for optimal cost.
              That 0.5% arbitrage? We make sure gas doesn&apos;t eat your profit.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">4.5 Why Not Build It Yourself?</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Fair question. You could wire together your own bot + private RPC + DEX aggregators. Here&apos;s why that&apos;s harder than it sounds:
            </p>
            <div className="overflow-x-auto mt-4 not-prose">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-zinc-400 font-medium">Component</th>
                    <th className="text-left py-3 px-4 text-zinc-400 font-medium">DIY</th>
                    <th className="text-left py-3 px-4 text-zinc-400 font-medium">RAIDEX</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Key management</td>
                    <td className="py-3 px-4 text-red-400">Build HSM infra or trust hot wallets</td>
                    <td className="py-3 px-4 text-emerald-400">Included, enterprise-grade</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">MEV protection</td>
                    <td className="py-3 px-4 text-red-400">Negotiate with Flashbots, each chain</td>
                    <td className="py-3 px-4 text-emerald-400">Built-in, all chains</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Multi-chain</td>
                    <td className="py-3 px-4 text-red-400">Separate integration per chain</td>
                    <td className="py-3 px-4 text-emerald-400">One API</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Time to deploy</td>
                    <td className="py-3 px-4 text-red-400">3-6 months</td>
                    <td className="py-3 px-4 text-emerald-400">5 minutes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Ongoing maintenance</td>
                    <td className="py-3 px-4 text-red-400">Full-time job</td>
                    <td className="py-3 px-4 text-emerald-400">We handle it</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Cost</td>
                    <td className="py-3 px-4 text-red-400">$10k+/mo infra + eng salary</td>
                    <td className="py-3 px-4 text-emerald-400">Usage-based, starts free</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              You can build it yourself. But should you? If your edge is strategy, not infrastructure, let us handle the plumbing.
            </p>
          </section>

          {/* Technical Architecture */}
          <section id="architecture" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">5. Technical Architecture</h2>

            {/* Architecture Flow Diagram */}
            <div className="my-8 not-prose">
              <svg viewBox="0 0 600 480" className="w-full max-w-2xl mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background glow */}
                <defs>
                  <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* AI Agent Layer */}
                <rect x="100" y="20" width="400" height="60" rx="8" fill="url(#nodeGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <text x="300" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">AI Agent Layer</text>
                <text x="300" y="62" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Your agents, strategies, and logic</text>

                {/* Connection line */}
                <path d="M300 80 L300 110" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4 2"/>
                <circle cx="300" cy="110" r="4" fill="rgba(16,185,129,0.8)" filter="url(#glow)"/>

                {/* RAIDEX API Gateway */}
                <rect x="100" y="120" width="400" height="60" rx="8" fill="url(#nodeGradient)" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5"/>
                <text x="300" y="145" textAnchor="middle" fill="rgb(16,185,129)" fontSize="14" fontWeight="600">RAIDEX API Gateway</text>
                <text x="300" y="162" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Authentication, Rate Limiting, Routing</text>

                {/* Branch lines */}
                <path d="M300 180 L300 200 M300 200 L130 200 L130 220 M300 200 L300 220 M300 200 L470 200 L470 220" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <circle cx="130" cy="220" r="3" fill="rgba(255,255,255,0.5)"/>
                <circle cx="300" cy="220" r="3" fill="rgba(255,255,255,0.5)"/>
                <circle cx="470" cy="220" r="3" fill="rgba(255,255,255,0.5)"/>

                {/* Three core services */}
                <rect x="60" y="230" width="140" height="50" rx="6" fill="url(#nodeGradient)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <text x="130" y="252" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">Strategy Engine</text>
                <text x="130" y="268" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">Pre-built &amp; Custom</text>

                <rect x="230" y="230" width="140" height="50" rx="6" fill="url(#nodeGradient)" stroke="rgba(245,158,11,0.4)" strokeWidth="1"/>
                <text x="300" y="252" textAnchor="middle" fill="rgb(245,158,11)" fontSize="12" fontWeight="500">Secure Enclave</text>
                <text x="300" y="268" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">HSM Key Management</text>

                <rect x="400" y="230" width="140" height="50" rx="6" fill="url(#nodeGradient)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <text x="470" y="252" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">Gas Optimizer</text>
                <text x="470" y="268" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">Dynamic Pricing</text>

                {/* Merge lines */}
                <path d="M130 280 L130 300 L300 300 M470 280 L470 300 L300 300 M300 280 L300 300 M300 300 L300 320" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <circle cx="300" cy="320" r="4" fill="rgba(16,185,129,0.8)" filter="url(#glow)"/>

                {/* Private Transaction Router */}
                <rect x="100" y="330" width="400" height="60" rx="8" fill="url(#nodeGradient)" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5"/>
                <text x="300" y="355" textAnchor="middle" fill="rgb(139,92,246)" fontSize="14" fontWeight="600">Private Transaction Router</text>
                <text x="300" y="372" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">MEV Protection, Validator Connections</text>

                {/* Chain connections */}
                <path d="M300 390 L300 410 M300 410 L100 410 L100 430 M300 410 L200 410 L200 430 M300 410 L300 430 M300 410 L400 410 L400 430 M300 410 L500 410 L500 430" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>

                {/* Chain nodes */}
                <rect x="70" y="435" width="60" height="35" rx="4" fill="url(#nodeGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <text x="100" y="457" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">ETH</text>

                <rect x="170" y="435" width="60" height="35" rx="4" fill="url(#nodeGradient)" stroke="rgba(255,153,51,0.4)" strokeWidth="1"/>
                <text x="200" y="457" textAnchor="middle" fill="rgb(255,153,51)" fontSize="11" fontWeight="500">ARB</text>

                <rect x="270" y="435" width="60" height="35" rx="4" fill="url(#nodeGradient)" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
                <text x="300" y="457" textAnchor="middle" fill="rgb(59,130,246)" fontSize="11" fontWeight="500">BASE</text>

                <rect x="370" y="435" width="60" height="35" rx="4" fill="url(#nodeGradient)" stroke="rgba(139,92,246,0.4)" strokeWidth="1"/>
                <text x="400" y="457" textAnchor="middle" fill="rgb(139,92,246)" fontSize="11" fontWeight="500">SOL</text>

                <rect x="470" y="435" width="60" height="35" rx="4" fill="url(#nodeGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <text x="500" y="457" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11">+ more</text>
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">5.1 API Gateway</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The API Gateway handles authentication, rate limiting, and request routing. All requests
              are validated and signed before being processed by downstream services.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">5.2 Strategy Engine</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Pre-built strategies for common DeFi operations (arbitrage, liquidations, yield optimization)
              are available out of the box. Developers can also deploy custom strategies using our SDK.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">5.3 Secure Enclave</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Private keys are generated and stored within hardware security modules (HSMs). Transaction
              signing occurs within secure enclaves, ensuring keys are never exposed to our systems or
              external parties.
            </p>
          </section>

          {/* Security Model */}
          <section id="security" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">6. Security Model</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Security is foundational to RAIDEX. We&apos;re building infrastructure that handles real money,
              and we treat that responsibility seriously.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">6.1 Key Management</h3>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li><strong className="text-foreground">HSM-Backed Keys:</strong> All signing keys are generated and stored in hardware security modules. Keys never exist in plaintext outside the HSM.</li>
              <li><strong className="text-foreground">MPC Signing:</strong> High-value transactions use multi-party computation, requiring multiple independent parties to approve.</li>
              <li><strong className="text-foreground">No Key Exposure:</strong> Our systems never have access to private keys. We sign transactions, not export keys.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">6.2 Operational Security</h3>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li><strong className="text-foreground">Rate Limiting:</strong> Per-agent and per-account limits prevent runaway execution</li>
              <li><strong className="text-foreground">Circuit Breakers:</strong> Automatic halt if transaction volume or losses exceed thresholds</li>
              <li><strong className="text-foreground">Audit Logging:</strong> Complete immutable audit trail for all operations</li>
              <li><strong className="text-foreground">Real-time Monitoring:</strong> 24/7 automated monitoring with alerting</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">6.3 Security Roadmap</h3>
            <div className="space-y-4 mt-4 not-prose">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">&#10003;</span>
                <div>
                  <p className="text-white font-medium">Private Testnet</p>
                  <p className="text-zinc-400 text-sm">Live now. Internal testing and iteration.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-500 mt-1">&#9675;</span>
                <div>
                  <p className="text-white font-medium">Public Testnet + Bug Bounty</p>
                  <p className="text-zinc-400 text-sm">Q1 2026. Open testing with rewards for vulnerabilities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-500 mt-1">&#9675;</span>
                <div>
                  <p className="text-white font-medium">Security Audits</p>
                  <p className="text-zinc-400 text-sm">Two independent audits before mainnet. Firms to be announced.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-500 mt-1">&#9675;</span>
                <div>
                  <p className="text-white font-medium">Mainnet Launch</p>
                  <p className="text-zinc-400 text-sm">Q2 2026. Gradual rollout with conservative limits.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4 mt-6 not-prose">
              <p className="text-zinc-300 text-sm">
                <strong className="text-white">Commitment:</strong> All smart contracts will be open-sourced and verified
                on-chain. Audit reports will be published in full. We believe security through obscurity is not security.
              </p>
            </div>
          </section>

          {/* Raid Strategies */}
          <section id="strategies" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">7. Raid Strategies</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              RAIDEX provides several pre-built strategies that agents can deploy immediately:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">7.1 Arbitrage</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Identify and execute price discrepancies across DEXs within and across chains. Our system
              monitors thousands of pairs in real-time and executes atomic arbitrage when opportunities arise.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">7.2 Liquidations</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Monitor lending protocols for undercollateralized positions and execute liquidations
              profitably. We maintain direct connections to major lending protocols for minimal latency.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">7.3 Yield Optimization</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Automatically move assets between yield-generating protocols to maximize returns. Our
              algorithms factor in gas costs, withdrawal fees, and opportunity costs.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">7.4 Custom Strategies</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Developers can implement custom strategies using our SDK. The SDK provides primitives for
              market data, order execution, and risk management.
            </p>
          </section>

          {/* Business Model */}
          <section id="business-model" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">8. Business Model</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Clear, transparent pricing. No hidden fees. You know exactly what you&apos;re paying for.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">8.1 Pricing Tiers</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
              <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-lg font-semibold text-white">Starter</h4>
                <p className="text-3xl font-bold text-white mt-2">Free</p>
                <p className="text-zinc-500 text-sm">For testing and small agents</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  <li>&bull; $1,000/day transaction limit</li>
                  <li>&bull; 2 chains (Ethereum, Base)</li>
                  <li>&bull; Basic MEV protection</li>
                  <li>&bull; Community support</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <h4 className="text-lg font-semibold text-emerald-400">Pro</h4>
                <p className="text-3xl font-bold text-white mt-2">$299<span className="text-lg text-zinc-400">/mo</span></p>
                <p className="text-zinc-500 text-sm">For serious builders</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  <li>&bull; $100,000/day transaction limit</li>
                  <li>&bull; All supported chains</li>
                  <li>&bull; Priority MEV protection</li>
                  <li>&bull; Priority support</li>
                  <li>&bull; Custom strategies</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-lg font-semibold text-white">Enterprise</h4>
                <p className="text-3xl font-bold text-white mt-2">Custom</p>
                <p className="text-zinc-500 text-sm">For institutions</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  <li>&bull; Unlimited volume</li>
                  <li>&bull; Dedicated infrastructure</li>
                  <li>&bull; Direct validator connections</li>
                  <li>&bull; SLA guarantees</li>
                  <li>&bull; Dedicated support</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">8.2 Transaction Fees</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              On top of subscription, we charge a small fee on successful transactions:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li><strong className="text-foreground">Starter:</strong> 0.3% of transaction value</li>
              <li><strong className="text-foreground">Pro:</strong> 0.15% of transaction value</li>
              <li><strong className="text-foreground">Enterprise:</strong> Volume-based, negotiated</li>
            </ul>
            <p className="text-zinc-400 text-sm mt-4">
              Pay in RAID tokens for 20% discount on all fees.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">8.3 Strategy Marketplace</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Strategy creators can publish to the marketplace and earn when others deploy their strategies:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Creators set their own fee (typically 10-30% of profits)</li>
              <li>RAIDEX takes 15% platform fee on marketplace transactions</li>
              <li>Payouts in RAID tokens, weekly</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">8.4 Infrastructure Costs</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              We cover the underlying infrastructure: HSM hosting, RPC nodes, validator connections, monitoring.
              You pay a predictable subscription + usage fee. No surprise cloud bills.
            </p>
          </section>

          {/* Tokenomics */}
          <section id="tokenomics" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">9. Tokenomics</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The RAID token aligns incentives between the protocol, agents, and the community.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">9.1 Token Utility</h3>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li><strong className="text-foreground">Protocol Fees:</strong> Pay transaction fees at a discount when using RAID vs stablecoins</li>
              <li><strong className="text-foreground">Staking:</strong> Stake RAID to access priority execution and reduced latency tiers</li>
              <li><strong className="text-foreground">Governance:</strong> Vote on protocol upgrades, fee structures, and new chain integrations</li>
              <li><strong className="text-foreground">Strategy Marketplace:</strong> Creators earn RAID when others deploy their strategies</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">9.2 Token Distribution</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 not-prose">
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <p className="text-2xl font-bold text-white">40%</p>
                <p className="text-xs text-zinc-500 mt-1">Community & Ecosystem</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <p className="text-2xl font-bold text-white">25%</p>
                <p className="text-xs text-zinc-500 mt-1">Team & Advisors</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <p className="text-2xl font-bold text-white">20%</p>
                <p className="text-xs text-zinc-500 mt-1">Treasury</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
                <p className="text-2xl font-bold text-white">15%</p>
                <p className="text-xs text-zinc-500 mt-1">Early Backers</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm">
              Team tokens vest over 4 years with a 1-year cliff. Early backer tokens vest over 2 years.
              Community allocation unlocks progressively through protocol milestones.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">9.3 Supply & Launch</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Total supply: <strong className="text-white">1,000,000,000 RAID</strong> (fixed, no inflation).
              Token generation event planned for Q2 2026 alongside public launch. Initial circulating supply
              will be approximately 15% to ensure healthy liquidity while maintaining long-term alignment.
            </p>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mt-6 not-prose">
              <p className="text-amber-200 text-sm">
                <strong>Note:</strong> Final tokenomics are subject to refinement based on market conditions
                and community feedback. A detailed token paper will be published before TGE.
              </p>
            </div>
          </section>

          {/* Governance */}
          <section id="governance" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">10. Governance</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              RAIDEX handles value execution. That requires clear answers about control and trust.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">10.1 Current Control Model (Pre-Decentralization)</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              At launch, RAIDEX operates as a centralized service. We&apos;re transparent about this:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li><strong className="text-foreground">HSM Infrastructure:</strong> Controlled by RAIDEX Ltd. Keys are in HSMs we operate, but cannot extract.</li>
              <li><strong className="text-foreground">Upgrades:</strong> Protocol upgrades are deployed by the core team with 48-hour notice.</li>
              <li><strong className="text-foreground">Marketplace Moderation:</strong> We review and approve strategies before listing.</li>
              <li><strong className="text-foreground">Fee Changes:</strong> Pricing changes announced 30 days in advance.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">10.2 Path to Decentralization</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Centralization is a starting point, not the destination. Our decentralization roadmap:
            </p>
            <div className="space-y-4 mt-4 not-prose">
              <div className="flex items-start gap-3">
                <span className="text-zinc-500 mt-1">1.</span>
                <div>
                  <p className="text-white font-medium">Phase 1: Token Launch (Q2 2026)</p>
                  <p className="text-zinc-400 text-sm">RAID token holders can vote on fee structures and new chain integrations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-500 mt-1">2.</span>
                <div>
                  <p className="text-white font-medium">Phase 2: Strategy Governance (Q4 2026)</p>
                  <p className="text-zinc-400 text-sm">Community curation of marketplace. Token-weighted voting on strategy listings.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-500 mt-1">3.</span>
                <div>
                  <p className="text-white font-medium">Phase 3: Protocol Governance (2027)</p>
                  <p className="text-zinc-400 text-sm">Full DAO control over protocol upgrades, treasury, and roadmap priorities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-500 mt-1">4.</span>
                <div>
                  <p className="text-white font-medium">Phase 4: Distributed Infrastructure (2027+)</p>
                  <p className="text-zinc-400 text-sm">Multiple independent HSM operators. Truly decentralized execution layer.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">10.3 Trust Assumptions</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Until full decentralization, users trust RAIDEX to:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Not extract value from transactions (enforced by reputation + audits)</li>
              <li>Maintain HSM security (enforced by SOC2 compliance, third-party audits)</li>
              <li>Execute transactions as specified (enforced by immutable audit logs)</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              We publish monthly transparency reports detailing transaction volumes, security incidents (if any),
              and governance decisions. Trust is earned, not assumed.
            </p>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">11. Roadmap</h2>

            <div className="space-y-6 mt-6 not-prose">
              {/* Completed */}
              <div className="flex gap-4 opacity-60">
                <div className="flex-shrink-0 w-24 text-sm font-medium text-emerald-500">Q4 2025</div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    Foundation
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">Complete</span>
                  </h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    Core infrastructure, secure execution environment, multi-chain architecture
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-sm font-medium text-primary">Q1 2026</div>
                <div>
                  <h4 className="font-semibold">Private Beta</h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    Early access launch, Ethereum and Base support, arbitrage strategy, MEV protection
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-sm font-medium text-primary">Q2 2026</div>
                <div>
                  <h4 className="font-semibold">Public Launch</h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    Arbitrum, Solana support, liquidation strategies, SDK release
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-sm font-medium text-primary">Q3 2026</div>
                <div>
                  <h4 className="font-semibold">Scale</h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    Additional chains, yield optimization, custom strategy deployment
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-sm font-medium text-primary">Q4 2026</div>
                <div>
                  <h4 className="font-semibold">Ecosystem</h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    Strategy marketplace, institutional features, governance token
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Current Status */}
          <section id="current-status" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">12. Current Status</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Where we are today. No hype, just facts.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">12.1 What&apos;s Built</h3>
            <div className="space-y-3 mt-4 not-prose">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">&#10003;</span>
                <span className="text-zinc-300">Core execution engine (transaction signing, routing, gas optimization)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">&#10003;</span>
                <span className="text-zinc-300">HSM integration for secure key management</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">&#10003;</span>
                <span className="text-zinc-300">Multi-chain architecture (Ethereum, Base)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">&#10003;</span>
                <span className="text-zinc-300">Private mempool integration (Flashbots)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">&#10003;</span>
                <span className="text-zinc-300">REST API with authentication</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">&#10003;</span>
                <span className="text-zinc-300">Private testnet running internally</span>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">12.2 What&apos;s In Progress</h3>
            <div className="space-y-3 mt-4 not-prose">
              <div className="flex items-center gap-3">
                <span className="text-amber-400">&#9679;</span>
                <span className="text-zinc-300">Arbitrage strategy implementation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400">&#9679;</span>
                <span className="text-zinc-300">SDK for custom strategy development</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400">&#9679;</span>
                <span className="text-zinc-300">Rate limiting and circuit breaker systems</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400">&#9679;</span>
                <span className="text-zinc-300">Dashboard for agent monitoring</span>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">12.3 What&apos;s Not Built Yet</h3>
            <div className="space-y-3 mt-4 not-prose">
              <div className="flex items-center gap-3">
                <span className="text-zinc-600">&#9675;</span>
                <span className="text-zinc-400">Solana, Arbitrum integration</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-600">&#9675;</span>
                <span className="text-zinc-400">Strategy marketplace</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-600">&#9675;</span>
                <span className="text-zinc-400">Token and governance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-600">&#9675;</span>
                <span className="text-zinc-400">Public testnet</span>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">12.4 Traction</h3>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li><strong className="text-white">500+</strong> developers on the waitlist</li>
              <li><strong className="text-white">0</strong> external funding (bootstrapped)</li>
              <li><strong className="text-white">0</strong> production deployments yet (we&apos;re pre-launch)</li>
            </ul>
            <p className="text-zinc-400 text-sm mt-4">
              We&apos;re honest about where we are. The foundation is built. The product is not yet live.
              Public testnet opens Q1 2026. Production launch Q2 2026.
            </p>
          </section>

          {/* Team */}
          <section id="team" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">13. Team</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              RAIDEX is bootstrapped and built by a founder with two decades of shipping production systems.
            </p>

            <div className="mt-6 p-6 bg-white/[0.02] border border-white/[0.06] rounded-lg not-prose">
              <h3 className="font-semibold text-white mb-3">Core Team</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>
                  <strong className="text-white">Founder</strong> - 20 years in fintech, trading systems, and crypto infrastructure.
                  Built and scaled systems processing $1B+ daily volume. Previously led engineering at multiple fintech startups.
                </li>
              </ul>
              <p className="text-zinc-400 text-sm mt-4">
                Currently a solo founder shipping fast. Actively hiring engineers and marketing leads to scale the team.
              </p>
              <a href="/team" className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline">
                View open roles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">13.1 Funding</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              RAIDEX is fully bootstrapped. No VC money, no token pre-sales, no external pressure.
              This means we ship on our timeline, optimize for users (not investors), and have complete
              control over the product direction. We&apos;ll consider strategic partnerships when they
              add clear value to the platform.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">13.2 Advisors & Partnerships</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              We&apos;re early. No advisors or partnerships to announce yet. We&apos;re focused on building
              a product worth partnering with before seeking strategic relationships. Announcements will
              come when there&apos;s substance behind them.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">13.3 Transparency Commitment</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              We believe in building in public:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Monthly development updates on our blog</li>
              <li>All smart contracts open-sourced before mainnet</li>
              <li>Public GitHub with core SDK and integration examples</li>
              <li>Audit reports published in full</li>
            </ul>
          </section>

          {/* Risks & Considerations */}
          <section id="risks" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">14. Risks & Considerations</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              We believe in transparency about challenges. Building infrastructure for AI agents in DeFi is hard.
              Here&apos;s an honest assessment of the risks:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">14.1 Execution Risk</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Abstracting multi-chain complexity into a single API is technically ambitious. Many projects have
              promised &quot;one API to rule them all&quot; and struggled to deliver. We&apos;re mitigating this by:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Starting with 2 chains (Ethereum, Base) and proving the model before expanding</li>
              <li>Building incrementally with each chain integration battle-tested before the next</li>
              <li>Partnering with existing infrastructure providers rather than rebuilding everything</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">14.2 MEV Protection Complexity</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Private transaction routing requires relationships with validators and block builders.
              This is technically complex and requires significant engineering. Our approach:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Integration with existing private mempool providers (Flashbots Protect, MEV Blocker)</li>
              <li>Direct partnerships with block builders on supported chains</li>
              <li>Fallback to public mempool with clear user disclosure when private routing unavailable</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">14.3 Smart Contract & Security Risk</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Despite best practices, smart contracts may contain vulnerabilities. Our security roadmap:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Private testnet live now for internal testing</li>
              <li>Public testnet launching Q1 2026 with bug bounty program</li>
              <li>Two independent security audits planned before mainnet (firms TBA)</li>
              <li>Gradual mainnet rollout with conservative transaction limits</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">14.4 Regulatory & Compliance Risk</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The regulatory landscape for DeFi and AI agents is evolving rapidly. We take this seriously.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3 text-zinc-200">General Approach</h4>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>RAIDEX provides infrastructure, not financial advice or managed trading</li>
              <li>Users maintain custody through their own wallets; we facilitate execution, not hold assets</li>
              <li>We are a software provider, not a broker or exchange</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-3 text-zinc-200">UK Compliance</h4>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Monitoring FCA guidance on crypto asset promotions and DeFi activities</li>
              <li>Enterprise tier will require KYC in line with MLR 2017 requirements</li>
              <li>UK-based entity for UK operations under consideration</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-3 text-zinc-200">EU Compliance (MiCA)</h4>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Preparing for MiCA implementation (full effect 2024-2025)</li>
              <li>RAID token structure designed with utility-first approach</li>
              <li>Legal assessment ongoing for CASP licensing requirements</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-3 text-zinc-200">Operational Safeguards</h4>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Geo-restrictions for prohibited jurisdictions (OFAC, etc.)</li>
              <li>KYC/AML for institutional tier users as required by applicable law</li>
              <li>Transaction monitoring for suspicious activity patterns</li>
              <li>Legal counsel (crypto-specialized) engaged for ongoing compliance</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">14.5 Systemic Risk</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Automated agents can amplify market movements. If many agents pursue similar strategies
              (e.g., liquidations), it could exacerbate cascades. Mitigations:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li>Per-agent and platform-wide rate limits on transaction volume</li>
              <li>Circuit breakers that pause execution during extreme volatility</li>
              <li>Strategy diversification encouraged through marketplace incentives</li>
              <li>Real-time monitoring with automatic intervention capabilities</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">14.6 Market & Protocol Risk</h3>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li><strong className="text-foreground">Market Risk:</strong> DeFi strategies involve market exposure. Past performance does not guarantee future results.</li>
              <li><strong className="text-foreground">Protocol Risk:</strong> Interactions with third-party protocols carry their own risk profiles. A vulnerability in Uniswap, Aave, etc. could affect agents using those protocols.</li>
              <li><strong className="text-foreground">Bridge Risk:</strong> Cross-chain operations involve bridge protocols, which have historically been targets for exploits.</li>
            </ul>

            <p className="text-zinc-300 leading-relaxed text-lg mt-6">
              <strong className="text-white">Bottom line:</strong> We&apos;re building something hard. We&apos;re being honest about the challenges.
              And we&apos;re committed to shipping carefully, transparently, and with user safety as the top priority.
            </p>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">15. Conclusion</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The DeFi opportunity is massive. <strong className="text-white">$100B+ in TVL.</strong> Billions
              in daily volume. Thousands of arbitrage opportunities every hour. But until now, capturing that
              value required being a trading firm with a 50-person engineering team.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              We&apos;re changing that. RAIDEX is the missing infrastructure layer that lets any developer,
              any AI builder, any strategy creator deploy autonomous agents into DeFi. One API call.
              No key management nightmares. No MEV extraction. No months of infrastructure work.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              The teams that move first will have an advantage. Early agents will find the best opportunities.
              Early builders will shape how AI interacts with DeFi.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4 text-white font-medium">
              The infrastructure is ready. The opportunity is here. Let&apos;s raid.
            </p>
          </section>

          {/* Future Scope */}
          <section id="future" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">16. Future Scope</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Our initial focus is DeFi on EVM chains and Solana. But the infrastructure we&apos;re building
              has broader applications:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 mt-4 text-lg">
              <li><strong className="text-foreground">CEX Integration:</strong> Unified API extending to major centralized exchanges for hybrid strategies</li>
              <li><strong className="text-foreground">RWA Markets:</strong> As real-world assets move on-chain, agents can participate in tokenized securities and commodities</li>
              <li><strong className="text-foreground">Cross-Domain Arbitrage:</strong> Opportunities between DeFi, CEX, and traditional markets</li>
              <li><strong className="text-foreground">Prediction Markets:</strong> Agent participation in decentralized prediction and betting markets</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed text-lg mt-4">
              We&apos;re building infrastructure that lasts. The execution layer for whatever comes next.
            </p>
          </section>

          {/* Changelog */}
          <section id="changelog" className="scroll-mt-24 mt-16">
            <h2 className="text-3xl font-bold mb-6">Changelog</h2>
            <div className="space-y-6 not-prose">
              <div className="border-l-2 border-emerald-500/50 pl-4">
                <p className="text-sm text-emerald-400 font-medium">v1.2 &middot; November 23, 2025</p>
                <ul className="text-zinc-400 text-sm mt-2 space-y-1">
                  <li>&bull; Added Business Model section with detailed pricing tiers, transaction fees, marketplace economics</li>
                  <li>&bull; Added Governance section with control model, decentralization roadmap, trust assumptions</li>
                  <li>&bull; Added Current Status section with honest assessment of what&apos;s built vs planned</li>
                  <li>&bull; Added competitive differentiation (Why Not DIY?) with comparison table</li>
                  <li>&bull; Expanded regulatory section with UK FCA and EU MiCA compliance details</li>
                  <li>&bull; Reorganized document structure (now 16 sections)</li>
                </ul>
              </div>
              <div className="border-l-2 border-zinc-700 pl-4">
                <p className="text-sm text-zinc-500 font-medium">v1.1 &middot; November 23, 2025</p>
                <ul className="text-zinc-500 text-sm mt-2 space-y-1">
                  <li>&bull; Added tokenomics section with token utility, distribution, and supply details</li>
                  <li>&bull; Expanded team section with funding status and transparency commitments</li>
                  <li>&bull; Added detailed security roadmap with testnet and audit timeline</li>
                  <li>&bull; Expanded risk section with execution, MEV, regulatory, and systemic risk analysis</li>
                  <li>&bull; Added AI model-agnostic philosophy explanation</li>
                  <li>&bull; Added future scope section (CEX, RWA, prediction markets)</li>
                  <li>&bull; Updated roadmap to reflect Q4 2025 completion and 2026 milestones</li>
                </ul>
              </div>
              <div className="border-l-2 border-zinc-700 pl-4">
                <p className="text-sm text-zinc-500 font-medium">v1.0 &middot; November 1, 2025</p>
                <ul className="text-zinc-500 text-sm mt-2 space-y-1">
                  <li>&bull; Initial whitepaper release</li>
                  <li>&bull; Core infrastructure and architecture documentation</li>
                  <li>&bull; Raid strategies overview</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent border border-emerald-500/20 rounded-lg text-center not-prose">
            <h3 className="text-2xl font-bold mb-2">Ready to start raiding?</h3>
            <p className="text-zinc-400 mb-6">
              Join 500+ builders on the waitlist. Be first to deploy when we launch.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-zinc-900 font-semibold hover:bg-zinc-200 transition-all"
            >
              Get Early Access
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>RAIDEX &copy; {new Date().getFullYear()}</span>
            <span className="opacity-50">&middot;</span>
            <span className="flex items-center gap-1.5">
              <img src="/polyxlogo.avif" alt="polyxmedia" className="h-4 w-auto" />
              <span>a <a href="https://polyxmedia.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-foreground transition-colors">polyxmedia</a> product</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <a
              href="https://twitter.com/voidmode_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a
              href="mailto:hello@raidex.xyz"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@raidex.xyz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
