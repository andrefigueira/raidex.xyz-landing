"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

interface EmailCaptureProps {
  variant?: "hero" | "cta";
}

export function EmailCapture({ variant = "hero" }: EmailCaptureProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 p-6 rounded-2xl glass-card">
        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        <p className="text-lg font-medium text-center">You&apos;re in!</p>
        <p className="text-zinc-500 text-center text-sm">
          We&apos;ll notify you when raids begin.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 h-14 sm:h-12 px-4 rounded-xl bg-[#18181b] border border-white/[0.1] text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/25 focus:bg-[#1f1f23] transition-all"
          disabled={status === "loading"}
        />
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-14 sm:h-12 px-4 rounded-xl bg-[#18181b] border border-white/[0.1] text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/25 focus:bg-[#1f1f23] transition-all"
          disabled={status === "loading"}
        />
      </div>
      <button
        type="submit"
        className="w-full h-14 sm:h-12 px-6 rounded-xl bg-white text-zinc-900 font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all disabled:opacity-50"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Joining...</span>
          </>
        ) : (
          <>
            <span>{variant === "hero" ? "Join the Raid" : "Get Early Access"}</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">{errorMessage}</p>
      )}
      <p className="text-xs text-zinc-600 text-center">
        Be first to know when we launch. Early access for founding raiders.
      </p>
    </form>
  );
}
