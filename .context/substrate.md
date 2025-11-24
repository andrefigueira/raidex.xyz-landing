# RAIDEX Landing Page - Context Substrate

## Project Overview

RAIDEX is building infrastructure for AI agents to interact with DeFi protocols. This repository contains the pre-launch landing page designed to capture early interest and collect email signups from potential users.

**Tagline**: "Infrastructure for AI Agents to Raid DeFi"

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Vercel Postgres
- **Fonts**: Inter (body), JetBrains Mono (code)
- **Deployment**: Vercel

## Design Principles

1. **Dark Theme**: Primary background #0a0a0a, electric blue accents #0066FF
2. **Technical but Approachable**: Serious infrastructure vibe without being intimidating
3. **Clean and Minimal**: Focus on value proposition and email capture
4. **Responsive**: Mobile-first, works across all devices

## Project Structure

```
/app
  page.tsx          # Main landing page
  layout.tsx        # Root layout with metadata
  globals.css       # Global styles and Tailwind
/components
  email-capture.tsx # Email signup form component
  feature-card.tsx  # Feature grid card component
  code-block.tsx    # Syntax-highlighted code display
/lib
  utils.ts          # Utility functions (cn helper)
/api
  subscribe/
    route.ts        # Email subscription endpoint
/lib
  db.ts             # Database connection helper
```

## Key Features

- Single-page landing with multiple sections
- Email capture with Vercel Postgres storage
- Copyable code examples with syntax highlighting
- Subtle animations (fade-in, hover effects)
- SEO-optimized metadata

## Related Documentation

- [Architecture Overview](./architecture/overview.md)
- [API Reference](./api/endpoints.md)
- [Development Guidelines](./guidelines.md)
