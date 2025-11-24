# Development Guidelines

## Code Style

### TypeScript
- Use strict mode
- Prefer interfaces over types for objects
- Use explicit return types for functions
- Avoid `any` type

### React/Next.js
- Use Server Components by default
- Add "use client" only when needed (interactivity, hooks)
- Keep components small and focused
- Co-locate related files

### Tailwind CSS
- Use design tokens from theme
- Prefer utility classes over custom CSS
- Use `cn()` helper for conditional classes
- Follow mobile-first approach

## Design Tokens

```css
/* Colors */
--background: #0a0a0a
--foreground: #ffffff
--accent: #0066FF
--accent-hover: #0052CC
--muted: #666666
--border: #222222

/* Spacing */
--section-padding: 80px (desktop), 48px (mobile)
--container-max: 1200px

/* Typography */
--font-body: 'Inter', sans-serif
--font-mono: 'JetBrains Mono', monospace
```

## Component Guidelines

### EmailCapture
- Validate email format client-side
- Show loading state during submission
- Display success/error messages inline
- Clear form on success

### FeatureCard
- Accept icon, title, description props
- Use consistent hover animations
- Maintain aspect ratio on all screens

### CodeBlock
- Use syntax highlighting for JavaScript
- Include copy button
- Show "Copied!" feedback

## Git Workflow

```bash
# Feature branches
git checkout -b feature/component-name

# Commit messages
feat: add email capture component
fix: resolve mobile layout issue
style: update button hover states
docs: update context documentation
```

## Deployment Checklist

- [ ] Environment variables set in Vercel
- [ ] Database migrations applied
- [ ] Meta tags verified
- [ ] OG image uploaded
- [ ] Analytics configured
- [ ] Error monitoring enabled

## Environment Variables

```env
# Required for production
POSTGRES_URL=           # Vercel Postgres connection string
POSTGRES_PRISMA_URL=    # Prisma connection string
POSTGRES_URL_NON_POOLING= # Direct connection
```
