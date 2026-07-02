# Khushi Baranwal — AI Engineer Portfolio

A dark, glassmorphic Next.js 15 portfolio with an interactive pixel-art "journey"
side-scroller as its centerpiece.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide + React Icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: this sandbox couldn't reach `fonts.googleapis.com`, so the Google
> Fonts build step wasn't verified end-to-end here — it will fetch normally
> on a machine with internet access. Everything else (types, components,
> the game logic) has been built and production-build-verified locally.

## Customize your content — one file

Almost everything (name, tagline, socials, projects, skills, timeline,
pixel-journey checkpoints) lives in **`lib/data.ts`**. Edit that file and the
whole site updates.

```ts
export const OWNER = {
  name: "Your Name",
  role: "AI Engineer",
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    resume: "/resume.pdf",
    email: "you@example.com",
  },
  ...
};
```

### Resume

Drop your actual PDF at `public/resume.pdf` (a placeholder is not included —
add your real file so the Resume buttons work).

### OG image / favicon

Add `public/og-image.png` (1200×630) and `public/favicon.ico` for social
previews and the browser tab icon.

## Project structure

```
app/                  # routes, layout, metadata, SEO
components/
  hero/                # aurora bg, spotlight, typing text, floating AI card
  pixel-journey/        # the interactive game: player, parallax, checkpoints, modal
  projects/, skills/, timeline/, contact/, layout/, ui/
hooks/                 # useKeyboard, useMousePosition
lib/data.ts            # ALL editable content lives here
types/                 # shared TS types
```

## Pixel Journey controls

- **Desktop:** Arrow keys or A/D to move, E or Space to open a checkpoint
- **Mobile:** on-screen D-pad + Interact button appear automatically

## Deploying

Works out of the box on Vercel:

```bash
npx vercel
```
