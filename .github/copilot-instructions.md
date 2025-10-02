# House-Smimin AI Coding Instructions

## Project Overview
Personal portfolio website built with SvelteKit 5, featuring interactive dark mode, project showcase, and mobile-responsive design. Deployed to Netlify with TypeScript, TailwindCSS v4, and pnpm package management.

## Architecture & Key Files

### Core Structure
- **Main app**: `house-smimin/` (nested workspace structure)
- **Layout**: `src/routes/+layout.svelte` - Global navigation, dark mode with mouse-tracking spotlight effect
- **Routes**: File-based routing with `+page.svelte`, `+page.ts`, `+page.server.ts` patterns
- **Data**: Data is kept separate from HTML/CSS in data.ts files, such as `src/routes/projekter/data.ts`.
- **Static assets**: Images in `static/images` with WebP optimization

### Unique Patterns

#### Dark Mode Implementation
- Uses mouse position tracking for spotlight effect (`mouseX`, `mouseY` state)
- Audio feedback on toggle (`/sounds/light-switch.mp3`)
- CSS custom properties for dynamic styling: `--mouseX` and `--mouseY`

#### Project Data Structure
```typescript
// src/routes/projekter/data.ts
export const projects = [
  {
    id: "unique-kebab-case",
    name: "Display name",
    title: "Short title",
    description: "Brief description",
    image: "images/projects/folder/image.webp",
    githubLink: "https://github.com/...",
    date: "Semester Year",
    facts: { /* key-value pairs */ }
  }
];
```
- IDs are validated for uniqueness at build time
- Dynamic routing via `[projectId]` with server-side data loading

## Development Workflow

### Package Management
- **Always use pnpm**: `pnpm install`, `pnpm run dev`
- Workspace root is `house-smimin/` (not repo root)

### Key Commands
```bash
pnpm run dev          # Development server
pnpm run build        # Production build
pnpm run check        # TypeScript/Svelte validation
pnpm run lint         # ESLint
```

### Build & Deployment
- **Adapter**: `@sveltejs/adapter-netlify` for Netlify deployment
- **Build output**: `build/` directory
- **Static assets**: Serve from `static/` (images, sounds)

## Styling Conventions

### CSS Approach
- **TailwindCSS v4** with Vite plugin
- **Component-scoped styles** in `<style>` blocks
- **Responsive breakpoint**: 600px mobile threshold

### File Organization
- Keep styles in component `<style>` blocks
- Extract to separate `.css` files only for large components
- Use semantic color variables for consistency

## Integration Points

### External Dependencies
- **grid@4.10.8**: Data grid component (not CSS framework)
- **TailwindCSS v4**: Styling framework with Vite integration
- **Svelte 5**: Latest version with runes syntax (`$state`, `$props`)

### Asset Management
- **Images**: WebP format preferred, organized by project in `static/images/projects/`
- **Sounds**: MP3 format in `static/sounds/`
- **Icons**: Inline SVG for social media links

## Common Patterns

### State Management
```typescript
// Svelte 5 runes syntax
let darkModeActive = $state(false);
let { children } = $props();
```

### Conditional Classes
```svelte
<div class:active={condition} class:dark-mode={darkModeActive}>
```

### TypeScript Integration
- Strict typing enabled
- Interface definitions for project data structures
- Server-side load functions return typed data

## Debugging & Development

### Browser Requirements
- Modern browser support (CSS custom properties, Audio API)
- Mobile Safari considerations for audio playback

### Common Issues
- **Terminal location**: Always work from `house-smimin/house-smimin` directory
- **Asset paths**: Use relative paths from `static/` (no leading slash in code)
- **Mobile testing**: Check navigation hiding at 600px breakpoint