# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Amy Y. Chen's portfolio website - a React SPA deployed on GitHub Pages at https://skyjo3.github.io.

## Commands

```bash
npm start          # Dev server on localhost:3000
npm run build      # Production build (runs postbuild.js for 404 redirect)
npm test           # Jest test runner
npm run deploy     # Build and deploy to GitHub Pages
```

## Architecture

**Stack**: React 18 + React Router DOM 6 + Create React App

**Routing**: Uses HashRouter (`/#/path`) for GitHub Pages compatibility. The `scripts/postbuild.js` creates a `404.html` that redirects paths to hash routes.

### Key Files

- `src/AppRouter.js` - Route definitions and page view tracking
- `src/Header.js` - Navigation with responsive hamburger menu
- `src/pages/Projects.js` - Main portfolio grid with tag filtering (persists to localStorage)
- `src/pages/projects/` - Individual project detail pages
- `src/components/projectListData.js` - Static project metadata

### Component Patterns

- **Desktop-only features**: `CustomCursor.js`, `ScrollIndicator.js` - disabled on mobile via 768px breakpoint
- **Animation components**: `MorphingText.js` (alternates text every 1s), `TypeWriterText.js`, `ScrollTypingText.js`
- **Image handling**: `LazyLoadImage.js`, `Gallery.js`, `Lightbox.js`, `CustomSwiper.js`

### Styling

- CSS Modules for component styles (`.module.css`)
- Global styles in `styles.css`, `App.css`, `index.css`
- CSS variables in `variables.css`

## Adding a New Project

1. Add project metadata to `src/components/projectListData.js`
2. Create detail page in `src/pages/projects/[project-name]/`
3. Add route in `src/AppRouter.js`
4. Add images to `src/assets/img/`
