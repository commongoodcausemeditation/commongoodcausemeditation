---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Environment & Theme Design

## Objective
Initialize the Hugo project structure and establish the "Zen-Modern" design system via CSS custom properties for Light, Dark, and Zen viewing modes.

## Context
- .gsd/SPEC.md
- .gsd/STATE.md

## Tasks

<task type="auto">
  <name>Hugo Project Initialization</name>
  <files>hugo.toml, assets/.gitkeep</files>
  <action>
    - Initialize Hugo in the current directory: `hugo new site . --force`
    - Update `hugo.toml` with project titles and basic configuration for GitHub Pages (relative URLs).
    - Create the standard Hugo directory structure if not fully present.
  </action>
  <verify>hugo version && ls -F</verify>
  <done>Hugo site is initialized with a valid `hugo.toml`.</done>
</task>

<task type="auto">
  <name>Zen-Modern CSS Design System</name>
  <files>assets/css/zen-modern.css</files>
  <action>
    - Define CSS variables for the color palette using HSL for smooth transitions.
    - Implement theme modes:
      - `:root` (Light Mode: Cream #F5F5DC / Sage Green #B2AC88 / Charcoal #333333)
      - `[data-theme='dark']` (Dark Mode: Deep Charcoal background / Muted Gold accents)
      - `[data-theme='zen']` (Zen Mode: Ultra-minimalist, high-contrast text-only)
    - Set up base typography (Lora/Playfair for serif, Inter/Montserrat for sans-serif) using Google Fonts imports.
  </action>
  <verify>test -f assets/css/zen-modern.css</verify>
  <done>`zen-modern.css` exists with all specified theme variables and font imports.</done>
</task>

## Success Criteria
- [ ] Hugo project structure exists.
- [ ] Design system tokens are defined for all 3 viewing modes.
