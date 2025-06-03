# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal profile website built with Astro, designed to showcase technical skills and experience. The site uses Markdown content with a custom layout styled with GitHub Markdown CSS.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview built site locally |

## Architecture

- **Astro SSG**: Static site generator with Markdown support
- **Layout System**: Single Layout.astro component with GitHub Markdown CSS
- **Content Structure**: 
  - Pages use Markdown with frontmatter layout specification
  - Profile content in both src/pages/index.md and src/content/profile.md
  - Japanese language content (lang="ja" in layout)

## Key Files

- `src/layouts/Layout.astro`: Main layout with GitHub Markdown styling
- `src/pages/index.md`: Main profile page content
- `src/content/profile.md`: Additional profile content
- `astro.config.mjs`: Minimal Astro configuration

## Content Guidelines

- Content is written in Japanese
- Uses GitHub Markdown CSS for consistent styling
- Profile includes technical stack, certifications, and social links
- Responsive design with mobile-optimized padding

## Interaction Preferences

- 日本語で応答してください