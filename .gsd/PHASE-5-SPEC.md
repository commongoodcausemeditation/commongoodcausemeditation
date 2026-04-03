# Phase 5 Specification: Content Expansion & Global Taxonomy (v1.1)

> **Status**: `PLANNING COMPLETE`

## 1. Blog / Articles Architecture
**Goal**: Establish a platform for publishing articles, philosophies, and meditation techniques.
- **Location**: `content/blog/`
- **Voice**: Authored under "CommonGoodCause" organization by default, but frontmatter must support a future `author: "Name"` field.
- **Capabilities**: Full markdown support including inline media (images/videos).
- **Taxonomy**: Implement native Hugo Categories and Tags for filtering posts.

## 2. Resource Directory (Community Links)
**Goal**: Provide a heavily categorized directory of external resources (Websites, Telegrams, Facebook groups).
- **Location**: Accessible via the main navigation under "Community".
- **Design Pattern**: Grid of distinct "Resource Cards" (inspired by traditional directory layouts).
- **Card Structure**:
    - **Title**: The name of the resource (acts as the primary hyperlink).
    - **Description**: A short, 1-2 sentence breakdown of the resource.
    - **Action**: An optional `[Know More]` button if the resource requires a deeper internal explanatory page.
- **Data Management**: Powered by Hugo Data files (`data/resources.yml`) to allow the user to add links quickly without touching HTML.

## 3. Homepage UI Restructure
**Goal**: Clean up the homepage, reducing vertical scroll fatigue and promoting pathway navigation.
- **Action**: Completely remove the three horizontal scrolling sections ("Global", "Regional", "Personal").
- **Implementation**: Introduce a new "Upcoming Pathways" section right below the Hero.
- **Design Layout**: Three elegant, large navigation cards 🌍 **Global**, 📍 **Regional**, and 🧘 **Personal**. Clicking these cards routes the user directly to the `/upcoming/` page with the relevant filter pre-applied.

## 4. Regional Hierarchy & Taxonomy Engine
**Goal**: Solve the "Target vs. Participant" complexity without deliberately dividing the user base by geography upfront.
- **Data Model Overhaul**: Meditation frontmatter will transition to a dual-axis system:
    1. `participant_scope`: [Global, Regional, Personal] *(Used for the main 3 pathways)*
    2. `focus_region`: Hierarchical [Continent -> Country -> State]
- **Philosophical Display Logic**: 
    - When a user views "Regional", they must see a unified chronological list of ALL regional events worldwide to foster global awareness.
    - The `focus_region` hierarchy (Continent -> Country dropdowns) will be implemented as a "Hidden Advanced Filter" so it is accessible but deliberately de-emphasized.
