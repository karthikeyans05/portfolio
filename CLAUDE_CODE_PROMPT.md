# Claude Code Prompt — Karthikeyan Sivakumar Portfolio (Violet Void)

## Setup

```bash
npx create-next-app@latest karthikeyan-portfolio --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd karthikeyan-portfolio
npm install framer-motion lucide-react react-icons @emailjs/browser
```

Copy `CLAUDE.md`, `AGENTS.md` into the project root.
Copy `portfolio.ts` into `src/data/portfolio.ts`.
Then open Claude Code: `claude` in the terminal and paste the prompt below.

---

## Prompt

Read CLAUDE.md and AGENTS.md fully before writing any code.

Build a complete Next.js 15 personal developer portfolio for Karthikeyan Sivakumar.
All content is in `src/data/portfolio.ts` — read it first, use it throughout, never hardcode strings in JSX.

---

### THEME — Violet Void

The design system is IDENTICAL to ShyamSundar2705/Portfolio in structure and component architecture.
The ONLY difference is the color palette — replace every blue/purple reference with these:

```
Background:        #0f0a1a   (deep black-purple — set in globals.css on <body> and <html>)
Surface:           #1a0f2e   (slightly lighter, used for card hover bg deepening)
Accent primary:    #a78bfa   (violet-400 — CTAs, active nav, stat values, gradient start)
Accent secondary:  #7c3aed   (violet-600 — gradient end, deep hover)
Gradient text:     from-violet-400 to-purple-400
Glass card:        bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl
Card hover:        hover:bg-white/8 hover:border-violet-400/25
Badge:             bg-violet-400/10 text-violet-400 border border-violet-400/20
Bg texture:        radial-gradient(circle, rgba(167,139,250,0.06) 1px, transparent 1px) / 32px 32px
Text primary:      white
Text secondary:    white/70
Text muted:        white/40
```

---

### globals.css

```css
html, body {
  background-color: #0f0a1a;
  color: white;
  scroll-behavior: smooth;
}

::selection {
  background: rgba(167, 139, 250, 0.3);
  color: white;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0f0a1a; }
::-webkit-scrollbar-thumb { background: #a78bfa40; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #a78bfa70; }
```

---

### FILE STRUCTURE to build

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  data/
    portfolio.ts        ← already provided
  lib/
    utils.ts            ← cn() helper using clsx + tailwind-merge
  components/
    ui/
      GlassCard.tsx
      GradientText.tsx
      AnimatedSection.tsx
    sections/
      Navbar.tsx
      Hero.tsx
      About.tsx
      Skills.tsx
      Projects.tsx
      Education.tsx
      Contact.tsx
```

---

### COMPONENT SPECS

**GlassCard.tsx**
```tsx
// bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl
// accepts className prop, children
// hover: bg-white/[0.08] border-violet-400/25 transition-all duration-300
```

**GradientText.tsx**
```tsx
// <span> with bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent
// accepts className, children
```

**AnimatedSection.tsx**
```tsx
// Framer Motion wrapper
// initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
// viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut' }}
// accepts className, children, delay prop (optional, default 0)
```

---

**Navbar.tsx**
- `sticky top-0 z-50 bg-[#0f0a1a]/80 backdrop-blur-md border-b border-white/10`
- Left: "KS" in `text-violet-400 font-bold text-xl`
- Right: nav links — About, Skills, Projects, Education, Contact
- Active link: `text-violet-400`; default: `text-white/60 hover:text-white`
- Smooth scroll on click via `scrollIntoView({ behavior: 'smooth' })`
- Mobile: hide nav links below md, show hamburger (Lucide `Menu` icon)

**Hero.tsx**
- `min-h-screen flex flex-col justify-center`
- Add radial-gradient dot texture as `::before` pseudo or inline style
- Subtle violet glow blob: `absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none`
- Small pill badge at top: pulsing violet dot + "Open to internships & collaborations"
  - `bg-violet-400/10 border border-violet-400/20 rounded-full px-4 py-1.5 text-sm text-violet-400`
  - Dot: `w-2 h-2 rounded-full bg-violet-400 animate-pulse`
- Name: `text-6xl md:text-8xl font-bold tracking-tight leading-none`
  - Line 1: "Karthikeyan" in white
  - Line 2: "Sivakumar." as `<GradientText>`
- Typewriter: cycle through `portfolioData.roles` with setInterval (2500ms), cursor blink with CSS animation
  - `text-white/60 text-xl md:text-2xl font-light`
- Role pills: map `portfolioData.roles` as small `rounded-full border border-white/10 px-3 py-1 text-sm text-white/60`
- CTAs:
  - Primary: `bg-violet-400 hover:bg-violet-300 text-[#0f0a1a] font-semibold px-6 py-3 rounded-lg transition-colors`
  - Secondary: `border border-white/20 hover:border-violet-400/50 text-white/70 hover:text-white px-6 py-3 rounded-lg transition-all`
- Scroll indicator: animated chevron-down at bottom center, `text-white/30`

**About.tsx**
- Section label: `text-violet-400 text-xs font-semibold tracking-[0.15em] uppercase` with 28px line before
- Stats row: 4 `<GlassCard>` items — value in `text-violet-400 text-3xl font-bold`, label in `text-white/50 text-xs uppercase tracking-wider`
- Two-col grid: bio paragraph left, detail rows right
- Detail rows: label `text-white/40`, value `text-white` — "Available For" row value in `text-violet-400`

**Skills.tsx**
- 5 `<GlassCard>` in responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)
- Category name: `text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3`
- Skill tags: `bg-white/5 border border-white/10 rounded px-2.5 py-1 text-xs text-white/60`
- Stagger children: `delay: index * 0.1` in AnimatedSection

**Projects.tsx**
- 2-col grid on md+, 1-col mobile
- Each `<GlassCard>` with `flex flex-col gap-4 p-6`
- Badge top-right: `bg-violet-400/10 text-violet-400 border border-violet-400/20 text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded`
- Title: `text-white font-bold text-xl`
- Description: `text-white/60 text-sm leading-relaxed flex-1`
- Tech pills: `bg-white/5 border border-white/10 text-white/40 text-xs px-2 py-0.5 rounded font-mono`
- GitHub link: `flex items-center gap-1.5 text-white/40 hover:text-violet-400 text-sm transition-colors`
- Stagger: `delay: index * 0.1`

**Education.tsx**
- Single `<GlassCard>` max-w-2xl
- Year badge: `bg-violet-400/10 text-violet-400 border border-violet-400/20 text-xs font-bold px-2.5 py-1 rounded`
- Degree: `text-white font-bold text-lg`
- Institution: `text-white/60`
- Location: `text-white/40 text-sm`

**Contact.tsx**
- Two-col: heading + 3 social links left, EmailJS form right
- Heading: large, GradientText on part of it
- Social links: `flex items-center gap-3 text-white/50 hover:text-violet-400 transition-colors`
- Form inputs: `bg-white/5 border border-white/10 focus:border-violet-400/50 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors w-full`
- Submit: `bg-violet-400 hover:bg-violet-300 text-[#0f0a1a] font-semibold px-6 py-3 rounded-lg transition-colors`
- Wire EmailJS using env vars from CLAUDE.md on form submit

---

### layout.tsx metadata

```tsx
export const metadata = {
  title: 'Karthikeyan Sivakumar — Full Stack Developer',
  description: 'Full Stack Developer, Cloud Engineer & AI/ML Engineer. Building production-grade software across mobile, web, and cloud.',
  openGraph: {
    title: 'Karthikeyan Sivakumar',
    description: 'Full Stack Developer · Cloud Engineer · AI/ML Engineer',
    url: 'https://karthikeyan.is-a.dev', // update when domain is set
  },
}
```

---

### tailwind.config.ts — extend

```ts
extend: {
  colors: {
    void: { 950: '#0f0a1a', 900: '#1a0f2e' }
  },
  animation: {
    'cursor-blink': 'blink 1s step-end infinite',
  },
  keyframes: {
    blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } }
  }
}
```

---

### AFTER BUILDING

1. `npm run type-check` — fix all TypeScript errors before proceeding
2. `npm run lint` — fix all ESLint warnings
3. `npm run build` — must succeed with 0 errors
4. `git add . && git commit -m "feat: initial portfolio build — Violet Void theme"`

---

### DO NOT

- Hardcode any name, bio, or project data in components — always read from `src/data/portfolio.ts`
- Use blue, amber, teal, orange, or green as accents — violet/purple only
- Use `<img>` — use Next.js `<Image />` for any images
- Commit `.env.local`
- Add blog, analytics, or dark mode toggle
- Install extra animation libraries — Framer Motion only
