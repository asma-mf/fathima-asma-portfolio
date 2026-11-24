# Fathima Asma — Portfolio (redesign)

A complete redesign of the portfolio at `asma-mf/fathima-asma-portfolio`, built with **React 19 + Vite + JavaScript (JSX) + Tailwind CSS v4**.

**Design direction — "Botanical Editorial":** warm ivory paper, deep forest-green ink, coral-blush accents (taken from the portrait's colours), Fraunces serif display type with Manrope body text, soft grain, arch-shaped portrait, scroll-reveal animations, light + dark themes.

## Run it

```bash
npm install
npm run dev      # development
npm run build    # production build -> dist/index.html (single self-contained file)
npm run preview  # serve the production build
```

## Where things live

| What | Where |
|---|---|
| Projects (incl. PCForge) | `src/data/project.json` |
| Social links | `src/data/social.json` |
| Skills, timeline, stats, email | `src/lib/content.js` |
| About / Hero / other copy | `src/components/*.jsx` |
| Theme colours & animations | `src/index.css` |
| **Original images (untouched)** | `public/projects/**`, `public/icons/**`, `src/assets/profile.png`, `public/resume.pdf` |
| Web-optimised copies used by the site | `src/assets/optimized/**` (WebP, max 1280px) |

### Images
All original screenshots, icons and the profile photo are kept exactly as they were. Because the build is a single self-contained HTML file, the site displays **WebP copies** of those same images (generated from the originals, ~90% smaller). `src/lib/assets.js` maps every original path in `project.json` (e.g. `/projects/fresh-fold/Capture1.PNG`) to its optimised twin.

**Adding / changing screenshots:** put the original in `public/projects/<project-id>/`, add a WebP copy at `src/assets/optimized/projects/<project-id>/<same-name>.webp` (e.g. `cwebp -q 74 -resize 1280 0 in.png -o out.webp`), then list the original path in the project's `images` array (and optionally `captions`).

## PCForge (additional project)
Added from <https://github.com/thisal-d/pc-forge> (repository owned by `thisal-d`). Description, stack and features are taken from its README. Screenshots (`public/projects/pc-forge/`) were captured from the project's public staff portal — pages showing customer emails were deliberately **not** used. To replace or add screenshots, drop new files in that folder and follow "Adding / changing screenshots" above.
