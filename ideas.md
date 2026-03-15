# Design Brainstorm: Sunday Bloody Sunday, Part Two — Indigenous Justice Advocacy Landing Page

## Content Summary
An 11-slide advocacy carousel documenting systemic harm to Indigenous families in Quebec/Canada.
Personal testimony, institutional failures, calls for accountability. Hashtags: #EveryChildMatters, #JusticeForBarran, #TruthAndReconciliation.

---

<response>
<text>
## Idea A — "Witness Wall" (Brutalist Documentary)

**Design Movement:** Brutalist Editorial / Investigative Journalism

**Core Principles:**
1. Raw honesty — no decorative softening; the content IS the design
2. Evidence-board aesthetic — pinned documents, red thread connections
3. Heavy typographic contrast — massive headlines, dense body copy
4. Asymmetric tension — deliberate imbalance to convey unease

**Color Philosophy:**
Deep charcoal (#1a1a1a) background with stark white text. Blood-red (#C0392B) for emphasis, dates, and callouts. Aged parchment (#F5ECD7) for "document" card backgrounds. The palette evokes urgency, historical weight, and unresolved grief.

**Layout Paradigm:**
Full-bleed sections stacked vertically. Each slide becomes a "document card" pinned to a dark board. Slide numbers rendered as large stamped numerals. No centered hero — content bleeds edge-to-edge.

**Signature Elements:**
- Red horizontal rule separators (like crime scene tape)
- Typewriter-style monospace font for quotes and dates
- Torn-paper edge SVG dividers between sections

**Interaction Philosophy:**
Scroll-triggered reveals — each card "slides in" from the side as if being pinned to the board. Hover on cards lifts them slightly with a shadow.

**Animation:**
- Cards enter with `translateX(-40px) opacity(0)` → normal on scroll
- Red accent lines draw in from left on section entry
- No looping animations — everything is purposeful, not decorative

**Typography System:**
- Display: "Playfair Display" (serif, bold) for headlines
- Body: "IBM Plex Mono" (monospace) for quotes/dates
- Body text: "Source Serif 4" for readable paragraphs
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Idea B — "Orange Sky" (Solemn Memorial / Indigenous Aesthetic)

**Design Movement:** Contemporary Indigenous Memorial Design / Quiet Resistance

**Core Principles:**
1. Reverence and dignity — the page honors survivors and victims
2. Earthy warmth — colors drawn from land, sky, and fire
3. Vertical timeline flow — a journey from past to present
4. Spacious grief — generous whitespace as breathing room for heavy content

**Color Philosophy:**
Deep forest green (#1B3A2D) as the primary background for the hero. Warm amber/orange (#E07B39) as the accent — evoking the Every Child Matters orange shirt movement. Cream (#FAF6EF) for content sections. Charcoal (#2C2C2C) for body text. The palette is warm, grounded, and dignified.

**Layout Paradigm:**
Left-rail timeline with slide numbers as milestones. Content cards offset to the right. The timeline spine is a vertical amber line. Hero section is full-bleed dark green with large centered title and orange accent.

**Signature Elements:**
- Orange shirt / Every Child Matters color motif throughout
- Vertical amber timeline spine connecting all 11 slides
- Subtle geometric Indigenous-inspired border patterns (non-appropriative, abstract)

**Interaction Philosophy:**
Scroll-driven timeline progression. Active slide highlighted on the timeline rail. Smooth, slow transitions — nothing jarring. The page should feel like turning the pages of a testimony.

**Animation:**
- Timeline dot pulses gently when in viewport
- Cards fade in with `translateY(20px)` → normal
- Hero text reveals word by word on load

**Typography System:**
- Display: "Cormorant Garamond" (serif, italic) for the title
- Subheadings: "Raleway" (sans-serif, semibold)
- Body: "Lora" (serif) for warmth and readability
</text>
<probability>0.09</probability>
</response>

<response>
<text>
## Idea C — "Testimony" (Stark Advocacy Broadsheet)

**Design Movement:** Activist Broadsheet / Political Poster Design

**Core Principles:**
1. Confrontational clarity — no ambiguity about the message
2. High contrast black-and-white base with single vivid accent
3. Grid-breaking layout — content escapes the grid intentionally
4. Urgency through scale — some text is enormous, some is tiny

**Color Philosophy:**
Pure white (#FFFFFF) background. Near-black (#111111) text. Single accent: a deep orange-red (#D4500A) for hashtags, slide numbers, and CTAs. Inspired by protest posters and newspaper front pages.

**Layout Paradigm:**
Alternating full-width and split-column sections. Odd slides: text-left, visual-right. Even slides: full-width text with large pull-quote. Final CTA section: full-bleed dark with white text.

**Signature Elements:**
- Large slide number watermarks (e.g., "01", "02") behind card content
- Pull-quotes in oversized italic type breaking the column
- Hashtag pills in orange-red at the bottom of each card

**Interaction Philosophy:**
Horizontal scroll carousel for the 11 slides, with keyboard navigation. Progress bar at top. Each slide is self-contained. Share/copy buttons on each slide.

**Animation:**
- Slide transitions: horizontal slide with slight scale
- Pull-quotes animate in with a left-border draw effect
- Hashtags bounce in on card entry

**Typography System:**
- Display: "Bebas Neue" (condensed, all-caps) for slide titles
- Pull-quotes: "Playfair Display" italic
- Body: "DM Sans" for clean readability
</text>
<probability>0.07</probability>
</response>

---

## Selected Design: **Idea B — "Orange Sky"**

Chosen for its dignity, warmth, and direct resonance with the #EveryChildMatters orange shirt movement. The earthy palette and vertical timeline layout honor the gravity of the testimony while remaining accessible and readable. The solemn memorial aesthetic is most appropriate for this deeply personal and historically significant content.
