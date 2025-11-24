# Architecture Overview

## System Design

RAIDEX landing page is a static-first Next.js application with a single dynamic API endpoint for email subscriptions.

```
┌─────────────────────────────────────────────────────┐
│                    Vercel Edge                       │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────────┐    ┌──────────────────────────┐  │
│  │   Next.js    │    │   API Routes             │  │
│  │   App Router │    │   /api/subscribe         │  │
│  │              │    │                          │  │
│  │  - page.tsx  │───▶│  POST: Add subscriber    │  │
│  │  - layout    │    │                          │  │
│  └──────────────┘    └───────────┬──────────────┘  │
│                                  │                  │
│                                  ▼                  │
│                      ┌───────────────────────┐     │
│                      │   Vercel Postgres     │     │
│                      │   (subscribers table) │     │
│                      └───────────────────────┘     │
│                                                      │
└─────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
RootLayout
└── LandingPage
    ├── Header (Logo)
    ├── HeroSection
    │   └── EmailCapture
    ├── ProblemSection
    ├── SolutionSection
    │   └── CodeBlock
    ├── FeaturesSection
    │   └── FeatureCard (x6)
    ├── BuilderSection
    ├── CTASection
    │   └── EmailCapture
    └── Footer
```

## Data Flow

1. **Page Load**: Static HTML served from Vercel CDN
2. **Email Submission**:
   - Client sends POST to `/api/subscribe`
   - Server validates input
   - Server inserts into Vercel Postgres
   - Returns success/error response
3. **State Management**: React useState for form state (no global state needed)

## Design Decisions

### Why Next.js App Router?
- Server components for better performance
- Built-in API routes
- Seamless Vercel deployment
- Modern React patterns

### Why Vercel Postgres?
- Zero configuration with Vercel deployment
- Serverless scaling
- SQL familiarity
- Built-in connection pooling

### Why shadcn/ui?
- Accessible by default
- Customizable primitives
- Tailwind-native
- Copy-paste components (no package dependency)

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s
