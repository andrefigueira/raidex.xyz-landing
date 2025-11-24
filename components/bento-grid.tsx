import React, { ReactNode } from "react";

// Chain logo components
const EthereumLogo = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5">
    <path fill="#627EEA" d="M16 0l-.28.94v21.06l.28.14 9.72-5.75z"/>
    <path fill="#C0CBF7" d="M16 0L6.28 16.39 16 22.14V0z"/>
    <path fill="#627EEA" d="M16 24.08l-.16.19v7.46l.16.27 9.73-13.71z"/>
    <path fill="#C0CBF7" d="M16 32V24.08l-9.72-5.79z"/>
    <path fill="#8A97D6" d="M16 22.14l9.72-5.75L16 12.32z"/>
    <path fill="#C0CBF7" d="M6.28 16.39L16 22.14v-9.82z"/>
  </svg>
);

const ArbitrumLogo = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5">
    <path fill="#2D374B" d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0z"/>
    <path fill="#28A0F0" d="M18.5 9.5l-5.7 8.6 2.1 3.2 6.8-10.3c.3-.5.2-1.1-.3-1.4l-1.4-.9c-.5-.3-1.2-.2-1.5.3v.5z"/>
    <path fill="#28A0F0" d="M13.3 18.1l-2.8-4.3c-.3-.5-1-.6-1.5-.3l-1.4.9c-.5.3-.6 1-.3 1.4l4.5 6.9 1.5-4.6z"/>
    <path fill="white" d="M21.5 21.3l-5.5-8.4-1.7 2.5 4.1 6.2 3.1-.3z"/>
    <path fill="white" d="M10.5 21.3l3.1.3 1.7-5.3-1.7-2.5-3.1 7.5z"/>
  </svg>
);

const BaseLogo = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5">
    <circle cx="16" cy="16" r="16" fill="#0052FF"/>
    <path fill="white" d="M16 6c5.52 0 10 4.48 10 10s-4.48 10-10 10S6 21.52 6 16h5c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5v-5z"/>
  </svg>
);

const SolanaLogo = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5">
    <defs>
      <linearGradient id="solGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00FFA3"/>
        <stop offset="100%" stopColor="#DC1FFF"/>
      </linearGradient>
    </defs>
    <path fill="url(#solGrad)" d="M7.5 21.2c.2-.2.4-.3.7-.3h19.5c.4 0 .6.5.3.8l-3.8 3.8c-.2.2-.4.3-.7.3H4c-.4 0-.6-.5-.3-.8l3.8-3.8z"/>
    <path fill="url(#solGrad)" d="M7.5 6.5c.2-.2.4-.3.7-.3h19.5c.4 0 .6.5.3.8l-3.8 3.8c-.2.2-.4.3-.7.3H4c-.4 0-.6-.5-.3-.8l3.8-3.8z"/>
    <path fill="url(#solGrad)" d="M24.5 13.8c-.2-.2-.4-.3-.7-.3H4.3c-.4 0-.6.5-.3.8l3.8 3.8c.2.2.4.3.7.3h19.5c.4 0 .6-.5.3-.8l-3.8-3.8z"/>
  </svg>
);

const chainLogos: Record<string, () => React.ReactElement> = {
  Base: BaseLogo,
  Arbitrum: ArbitrumLogo,
  Ethereum: EthereumLogo,
  Solana: SolanaLogo,
};

interface BentoCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

function BentoCard({ title, description, children, className = "" }: BentoCardProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-px rounded-2xl bg-white/[0.02]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent">
        <div className="px-6 pt-6 pb-4">
          <p className="text-lg font-medium tracking-tight text-white">{title}</p>
          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{description}</p>
        </div>
        {children && (
          <div className="relative flex-1 w-full">
            {children}
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 ring-inset ring-white/[0.08] group-hover:ring-white/[0.15] transition-all" />
    </div>
  );
}

export function BentoGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
      {/* Multi-Chain - Tall left card */}
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-2xl bg-white/[0.02] lg:rounded-l-3xl" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] lg:rounded-l-3xl">
          <div className="px-6 pt-6 pb-4">
            <p className="text-lg font-medium tracking-tight text-white">Multi-Chain Native</p>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              One API to rule them all. Deploy across Base, Arbitrum, Ethereum, and Solana without rewriting a single line.
            </p>
          </div>
          <div className="relative flex-1 min-h-[280px] w-full px-6 pb-6">
            <div className="absolute inset-x-6 top-0 bottom-6 overflow-hidden rounded-xl bg-[#0c0c0d] border border-white/[0.06]">
              <div className="p-4 space-y-3">
                {["Base", "Arbitrum", "Ethereum", "Solana"].map((chain) => {
                  const LogoComponent = chainLogos[chain];
                  return (
                    <div key={chain} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.05]">
                        <LogoComponent />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{chain}</p>
                        <p className="text-xs text-zinc-500">Connected</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 ring-inset ring-white/[0.08] lg:rounded-l-3xl" />
      </div>

      {/* MEV Protection - Top middle */}
      <div className="relative">
        <div className="absolute inset-px rounded-2xl bg-white/[0.02]" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08]">
          <div className="px-6 pt-6 pb-4">
            <p className="text-lg font-medium tracking-tight text-white">MEV Protection</p>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Private mempool routing keeps your transactions hidden from frontrunners.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center px-6 pb-6">
            <div className="relative w-full h-24">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">100%</p>
                    <p className="text-xs text-zinc-500">Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 ring-inset ring-white/[0.08]" />
      </div>

      {/* Gas Optimization - Bottom middle */}
      <div className="relative lg:col-start-2 lg:row-start-2">
        <div className="absolute inset-px rounded-2xl bg-white/[0.02]" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08]">
          <div className="px-6 pt-6 pb-4">
            <p className="text-lg font-medium tracking-tight text-white">Auto-Gas Optimization</p>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Dynamic pricing and transaction bundling. Never overpay again.
            </p>
          </div>
          <div className="flex flex-1 items-center px-6 pb-6">
            <div className="w-full space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500">Gas Saved</span>
                <span className="text-emerald-400 font-medium">-47%</span>
              </div>
              <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full w-[47%] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 ring-inset ring-white/[0.08]" />
      </div>

      {/* API & Code - Tall right card */}
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-2xl bg-white/[0.02] lg:rounded-r-3xl" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] lg:rounded-r-3xl">
          <div className="px-6 pt-6 pb-4">
            <p className="text-lg font-medium tracking-tight text-white">Powerful SDK</p>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Deploy strategies in minutes with our intuitive TypeScript SDK.
            </p>
          </div>
          <div className="relative flex-1 min-h-[280px] w-full">
            <div className="absolute top-0 right-0 bottom-6 left-6 overflow-hidden rounded-tl-xl bg-[#0c0c0d] border-l border-t border-white/[0.06]">
              <div className="flex bg-[#0a0a0b] border-b border-white/[0.06]">
                <div className="flex text-xs font-medium text-zinc-500">
                  <div className="border-r border-b border-r-white/[0.06] border-b-emerald-500/50 bg-white/[0.02] px-4 py-2 text-zinc-300">raider.ts</div>
                  <div className="border-r border-white/[0.06] px-4 py-2">config.ts</div>
                </div>
              </div>
              <div className="p-4 font-mono text-xs leading-relaxed">
                <div><span className="text-zinc-500">1</span>  <span className="text-zinc-300 font-medium">const</span> <span className="text-zinc-100">raider</span> <span className="text-zinc-500">=</span> <span className="text-zinc-300 font-medium">new</span> <span className="text-zinc-100">Raidex</span><span className="text-zinc-500">()</span></div>
                <div><span className="text-zinc-500">2</span></div>
                <div><span className="text-zinc-500">3</span>  <span className="text-zinc-300 font-medium">await</span> <span className="text-zinc-100">raider</span><span className="text-zinc-500">.</span><span className="text-zinc-100">raid</span><span className="text-zinc-500">(</span><span className="text-emerald-400">&apos;arbitrage&apos;</span><span className="text-zinc-500">,</span> <span className="text-zinc-500">&#123;</span></div>
                <div><span className="text-zinc-500">4</span>    <span className="text-zinc-100">chains</span><span className="text-zinc-500">:</span> <span className="text-zinc-500">[</span><span className="text-emerald-400">&apos;base&apos;</span><span className="text-zinc-500">,</span> <span className="text-emerald-400">&apos;arb&apos;</span><span className="text-zinc-500">],</span></div>
                <div><span className="text-zinc-500">5</span>    <span className="text-zinc-100">minProfit</span><span className="text-zinc-500">:</span> <span className="text-amber-400">100</span></div>
                <div><span className="text-zinc-500">6</span>  <span className="text-zinc-500">&#125;)</span></div>
                <div><span className="text-zinc-500">7</span></div>
                <div><span className="text-zinc-500">8</span>  <span className="text-zinc-600">// Hunting across 50+ DEXs...</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-2xl ring-1 ring-inset ring-white/[0.08] lg:rounded-r-3xl" />
      </div>
    </div>
  );
}
