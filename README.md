# Karthikeyan S — Portfolio

Personal developer portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion. Features a Violet Void dark theme with animated sections, typewriter effect, and a floating SK monogram card.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React, React Icons

## Sections

- **Hero** — Name, typewriter role animation, SK monogram card
- **About** — Bio, location, stats
- **Skills** — Categorized tech stack
- **Experience** — Internships
- **Projects** — Featured work with links
- **Education** — Degree info
- **Contact** — Email form via EmailJS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All content (name, bio, projects, skills, etc.) lives in a single file:

```
src/data/portfolio.ts
```

Edit that file to update any text on the site — no component changes needed.

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run type-check # TypeScript check
npm run lint       # ESLint
```
