# My Portfolio

A responsive personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, with a light/dark theme toggle (default: light).

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Where to edit your content

You do **not** need to touch component code to personalize the site. Everything lives in two data files:

- `data/site.ts` — your name, designation, bio, socials, skills, education, experience, contact info, and nav links.
- `data/projects.ts` — your projects (name, image, tech stack, live link, GitHub link, challenges, improvements).

Replace the placeholder images in `public/images/` (`avatar.svg`, `project-1.svg`, `project-2.svg`, `project-3.svg`) with your real photo and project screenshots — `.jpg`/`.png` work too, just update the paths in the data files.

Replace `public/resume.pdf` with your real resume (keep the same filename, or update `profile.resumeUrl` in `data/site.ts`).

## 3. Project structure

```
app/
  layout.tsx              # root layout: fonts, theme provider, navbar, footer
  page.tsx                # home page (hero, about, skills, journey, projects, contact)
  globals.css             # Tailwind layers + design tokens
  projects/
    page.tsx              # /projects — full projects grid
    [slug]/
      page.tsx            # /projects/[slug] — project detail page
      not-found.tsx
components/
  Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Journey.tsx,
  Projects.tsx, ProjectCard.tsx, Contact.tsx, Footer.tsx,
  ThemeToggle.tsx, SectionHeading.tsx
context/
  ThemeProvider.tsx        # wraps next-themes
data/
  site.ts                  # personal info, skills, education, experience, socials
  projects.ts               # projects list
public/
  images/                  # avatar + project images (placeholders included)
  resume.pdf               # placeholder resume (replace with yours)
```

## 4. Theme toggle

Light/dark mode is handled with `next-themes` (`darkMode: "class"` in `tailwind.config.ts`). The toggle button lives in the navbar; the site defaults to the **light** theme.

## 5. Deploying (get your live link)

The easiest option is **Vercel** (made by the Next.js team, free tier available):

1. Push this project to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, and click "New Project".
3. Import your repository and click "Deploy" (no configuration needed).
4. Vercel gives you a live URL like `https://ab-atiq-engineer-portfolio.vercel.app`.

Alternatively you can deploy to Netlify or any host that supports Next.js.

## 6. Build for production

```bash
npm run build
npm run start
```
