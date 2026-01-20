# MP Consulting Website (v2)

Personal consultancy website for mpconsult.uk - SMB-focused, Notion-inspired aesthetic.

## Project Context

- **Brand:** "MP" as shorthand for MP Consulting (Marc Power)
- **Audience:** Small service businesses (1-20 people), owner-operators
- **Tone:** Clear, helpful, confident, British - not corporate, not amateur
- **Domain:** mpconsult.uk

## Tech Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS (with dark mode via `class` strategy)
- **Content:** Markdown with Astro Content Collections
- **Hosting:** Vercel or Cloudflare Pages
- **Forms:** Formspree or HubSpot
- **Analytics:** Plausible or Fathom

## Visual Identity

- Notion-inspired: clean, generous whitespace, minimal
- B&W avatar as the "face" of the brand
- One accent colour (TBD)
- System fonts or Inter
- Light/dark mode support

## Content Structure

```
/src/content/
  services/     # Each service as .md with frontmatter
  work/         # Case studies as .md
  blog/         # Posts (disabled for launch)
/src/data/
  site.json     # Global config
```

## Pages

| Page | Purpose |
|------|---------|
| Home | Hook + "what I do" + proof + CTA |
| Services | The 5 services, simply explained |
| Work | 2-3 case studies with real numbers |
| About | The MP story - credibility + personality |
| Contact | Simple form + booking link |

## Services (5 clear offerings)

1. **Websites** - "A website that works for you"
2. **SEO & Content** - "Get found by the right people"
3. **Email & Outreach** - "Reach people who want to hear from you"
4. **Analytics** - "See what's actually working"
5. **Automation** - "Stop doing the same thing twice"

## Key Proof Points

- £139,700 annual value (recruitment firm)
- 77% time reduction (35 → 8 hours/month)
- Weeks, not months delivery

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Reference Files

Content and brand guidelines are symlinked from Obsidian KB:
- `kb-link-mpc-website/Website-Brief-v2.md` - Full brand brief
- `kb-link-mpc-website/Copy.Home.md` - Home page copy
- `kb-link-mpc-website/Implementation-Plan.md` - Build phases

## Build Phases

1. **Foundation** - Astro + Tailwind + layout + theme toggle
2. **Content Structure** - Content collections + schemas
3. **Home Page** - All sections from Copy.Home.md
4. **Inner Pages** - Services, Work, About, Contact
5. **Polish** - Typography, transitions, meta tags
6. **Deploy** - Vercel/CF Pages + domain + analytics
