---
phase: 3
plan: 2
wave: 1
---

# Plan 3.2: Ambient Soundscape Mixer

## Objective
Implement a toggleable utility panel in the meditation overlay for mixed high-quality ambient loops.

## Context
- .gsd/SPEC.md
- layouts/partials/timer-overlay.html

## Tasks

<task type="auto">
  <name>Audio Mixer UI & Logic</name>
  <files>layouts/partials/sound-mixer.html, assets/js/mixer.js</files>
  <action>
    - Create a sound mixer partial with toggle icons (Rainforest, Deep Space, Singing Bowls, White Noise).
    - Implement `mixer.js` to:
        - Load audio assets (placeholders for now).
        - Support multiple simultaneous loops.
        - Provide volume controls for each channel.
        - Ensure sound stops when meditation overlay is closed.
  </action>
  <verify>test -f assets/js/mixer.js</verify>
  <done>User can toggle and mix 4 different soundscapes with volume sliders.</done>
</task>

## Success Criteria
- [ ] Audio loops play correctly.
- [ ] Mixer UI is non-intrusive and follows the design system.
