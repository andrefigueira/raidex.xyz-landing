"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

interface Token {
  type: "keyword" | "string" | "comment" | "number" | "property" | "punctuation" | "text";
  value: string;
}

export function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tokenize = (code: string): Token[] => {
    const tokens: Token[] = [];
    const keywords = ["import", "from", "const", "await", "async", "function", "return", "if", "else", "for", "while", "new", "let", "var"];

    let i = 0;
    while (i < code.length) {
      // Comments
      if (code.slice(i, i + 2) === "//") {
        const end = code.indexOf("\n", i);
        const commentEnd = end === -1 ? code.length : end;
        tokens.push({ type: "comment", value: code.slice(i, commentEnd) });
        i = commentEnd;
        continue;
      }

      // Strings
      if (code[i] === '"' || code[i] === "'" || code[i] === "`") {
        const quote = code[i];
        let j = i + 1;
        while (j < code.length && code[j] !== quote) {
          if (code[j] === "\\") j++;
          j++;
        }
        tokens.push({ type: "string", value: code.slice(i, j + 1) });
        i = j + 1;
        continue;
      }

      // Numbers
      if (/\d/.test(code[i])) {
        let j = i;
        while (j < code.length && /[\d.]/.test(code[j])) j++;
        tokens.push({ type: "number", value: code.slice(i, j) });
        i = j;
        continue;
      }

      // Words (keywords, identifiers, properties)
      if (/[a-zA-Z_$]/.test(code[i])) {
        let j = i;
        while (j < code.length && /[a-zA-Z0-9_$]/.test(code[j])) j++;
        const word = code.slice(i, j);
        if (keywords.includes(word)) {
          tokens.push({ type: "keyword", value: word });
        } else if (i > 0 && code[i - 1] === ".") {
          tokens.push({ type: "property", value: word });
        } else {
          tokens.push({ type: "text", value: word });
        }
        i = j;
        continue;
      }

      // Punctuation and operators
      if (/[{}()[\];:,.<>=+\-*/%!&|?]/.test(code[i])) {
        tokens.push({ type: "punctuation", value: code[i] });
        i++;
        continue;
      }

      // Whitespace and other
      tokens.push({ type: "text", value: code[i] });
      i++;
    }

    return tokens;
  };

  const getTokenClass = (type: Token["type"]): string => {
    switch (type) {
      case "keyword":
        return "text-zinc-300 font-medium";
      case "string":
        return "text-emerald-400";
      case "comment":
        return "text-zinc-600 italic";
      case "number":
        return "text-amber-400";
      case "property":
        return "text-zinc-100";
      case "punctuation":
        return "text-zinc-500";
      default:
        return "text-zinc-300";
    }
  };

  const tokens = tokenize(code);

  return (
    <div className="relative group rounded-2xl border border-white/[0.08] overflow-hidden bg-[#0c0c0d]">
      {/* Header */}
      <div className="relative flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-zinc-800 group-hover:bg-zinc-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-zinc-800 group-hover:bg-zinc-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-zinc-800 group-hover:bg-zinc-600 transition-colors" />
        </div>
        <span className="text-xs text-zinc-600 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 h-7 px-3 text-xs text-zinc-500 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] rounded-lg transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre className="relative p-5 overflow-x-auto">
        <code className="text-sm font-mono leading-relaxed">
          {tokens.map((token, i) => (
            <span key={i} className={getTokenClass(token.type)}>
              {token.value}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
