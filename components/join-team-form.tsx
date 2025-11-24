"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

export function JoinTeamForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !role.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/join-team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          role: role.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setRole("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
        <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        <p className="text-xl font-medium text-center">Application Received!</p>
        <p className="text-zinc-400 text-center text-sm max-w-md">
          Thanks for your interest in joining RAIDEX. We&apos;ll review your application and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 px-4 rounded-xl bg-[#18181b] border border-white/[0.1] text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/25 focus:bg-[#1f1f23] transition-all"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 rounded-xl bg-[#18181b] border border-white/[0.1] text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/25 focus:bg-[#1f1f23] transition-all"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="block text-sm text-zinc-400 mb-2">
          What role interests you? <span className="text-red-400">*</span>
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full h-12 px-4 rounded-xl bg-[#18181b] border border-white/[0.1] text-white focus:outline-none focus:border-white/25 focus:bg-[#1f1f23] transition-all appearance-none cursor-pointer"
          disabled={status === "loading"}
        >
          <option value="" className="bg-[#18181b]">Select a role...</option>
          <optgroup label="Engineering" className="bg-[#18181b]">
            <option value="backend" className="bg-[#18181b]">Backend Engineer (Go/Python)</option>
            <option value="frontend" className="bg-[#18181b]">Frontend Engineer (React/TypeScript)</option>
            <option value="fullstack" className="bg-[#18181b]">Full Stack Engineer</option>
            <option value="blockchain" className="bg-[#18181b]">Blockchain/Smart Contract Engineer</option>
            <option value="ml" className="bg-[#18181b]">ML/AI Engineer</option>
            <option value="devops" className="bg-[#18181b]">DevOps/Infrastructure</option>
          </optgroup>
          <optgroup label="Marketing & Growth" className="bg-[#18181b]">
            <option value="marketing" className="bg-[#18181b]">Marketing Lead</option>
            <option value="content" className="bg-[#18181b]">Content & Social Media</option>
            <option value="community" className="bg-[#18181b]">Community Manager</option>
            <option value="growth" className="bg-[#18181b]">Growth / BD</option>
          </optgroup>
          <optgroup label="Other" className="bg-[#18181b]">
            <option value="design" className="bg-[#18181b]">Product Design</option>
            <option value="product" className="bg-[#18181b]">Product Manager</option>
            <option value="other" className="bg-[#18181b]">Other</option>
          </optgroup>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
          Tell us about yourself
        </label>
        <textarea
          id="message"
          placeholder="Your background, what excites you about RAIDEX, links to your work..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-white/[0.1] text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/25 focus:bg-[#1f1f23] transition-all resize-none"
          disabled={status === "loading"}
        />
      </div>

      <button
        type="submit"
        className="w-full h-12 px-6 rounded-xl bg-white text-zinc-900 font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all disabled:opacity-50"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit Application</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">{errorMessage}</p>
      )}
    </form>
  );
}
