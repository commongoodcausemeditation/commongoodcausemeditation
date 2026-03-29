---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Content Schema & Archetypes

## Objective
Establish the content structure for meditations (Causes and Special Events) using Hugo archetypes and frontmatter.

## Context
- .gsd/SPEC.md
- PRD (Data Schema)

## Tasks

<task type="auto">
  <name>Meditation Archetype Definition</name>
  <files>archetypes/meditations.md</files>
  <action>
    - Create a Hugo archetype for meditations with the following frontmatter:
        - title
        - date (Hugo default)
        - id
        - type (cause | event)
        - icon (emoji string)
        - category
        - description
        - utc_time (ISO 8601 string)
        - recurrence (once | daily | weekly | monthly)
        - location (URL)
        - cause_info (list of 3 strings)
  </action>
  <verify>test -f archetypes/meditations.md</verify>
  <done>Archetype correctly defines the required meditation structure.</done>
</task>

<task type="auto">
  <name>Sample Content Creation</name>
  <files>content/meditations/sample-event.md, content/meditations/sample-cause.md</files>
  <action>
    - Create 1 sample "Special Event" (e.g., Summer Solstice Global Unity).
    - Create 1 sample "Cause Meditation" (e.g., Rainforest Breath).
  </action>
  <verify>ls content/meditations/</verify>
  <done>Sample content files exist and follow the archetype schema.</done>
</task>

## Success Criteria
- [ ] Hugo is able to generate meditations based on the archetype.
- [ ] Sample data is correctly structured for the UI engine.
