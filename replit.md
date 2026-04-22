# Infinity Home Solutions LLC - Website

## Project Overview
A professional static website for Infinity Home Solutions LLC, a family-owned Michigan contractor based in Southgate (14350 Eureka Rd, Southgate, MI 48195). Phone: (866) 705-8388. Services: roofing, siding, windows, insulation.

## Real Business Facts (from Facebook, do not invent claims)
- Roofs starting at $6,900; financing available for qualified homeowners
- Uses Owens Corning Duration shingles (Brownwood, Slate Stone Gray, Aged Copper)
- Projects confirmed in: Shelby Township, Midland, Metro Detroit area
- Category: Home Improvement
- No claim of "thousands" or "100+ years experience" — removed as unverified

## Tech Stack
- **Static Site Generator**: Eleventy (11ty) v3.1.1
- **Templating**: Nunjucks
- **Styling**: SASS/SCSS with PostCSS, Autoprefixer, and cssnano
- **JavaScript**: esbuild for bundling
- **CMS**: Decap CMS (admin panel at /admin)
- **Package Manager**: npm

## Project Structure
- `src/` - Source files
  - `_data/` - Global data (client info, etc.)
  - `_includes/` - Reusable components and layouts
  - `assets/` - Static assets (fonts, images, JS, SASS)
  - `config/` - Eleventy config modules (filters, plugins, processors)
  - `content/` - Page content (blog posts, pages)
  - `admin/` - Decap CMS admin configuration
- `public/` - Build output (generated, not committed)
- `.eleventy.js` - Main Eleventy configuration

## Development
- `npm start` - Start dev server on port 5000 (0.0.0.0)
- `npm run build` - Production build to /public

## Configuration Notes
- Dev server configured to use `0.0.0.0:5000` for Replit preview compatibility
- Server options set via `eleventyConfig.setServerOptions()` in `.eleventy.js`
- Decap CMS server is skipped in dev (not needed in Replit environment)
- Production builds use HTML/CSS minification via the minifier plugin
