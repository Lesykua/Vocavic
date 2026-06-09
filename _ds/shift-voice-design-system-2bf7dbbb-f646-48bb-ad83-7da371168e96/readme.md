# Vocavic — Design System

> Structured operational memory for manufacturing.
> Voice capture, automatic event structure, and replay for handover, RCA, and Tier meetings.

This project is the canonical design system for **Vocavic** — a
B2B industrial software product. Everything here — tokens, components, UI kits, and specimen
cards — is derived directly from the company's brand book and shipping prototype so that any
agent or designer can produce on-brand interfaces, decks, and assets.

---

> **Note on naming.** The product is **Vocavic**. It was previously named *Shift Voice /
> ShiftVoice*; the original source artifacts below (brand-book PDF, GitHub repos) retain that
> earlier name, but everything this design system produces uses **Vocavic**.

## What Vocavic is

Vocavic gives a manufacturing plant **structured operational memory**. At shift end, an
operator speaks a short voice note; Vocavic transcribes it, extracts structured fields
(machine · component · reason · action · lesson), scores its completeness, and files it into a
searchable, replayable event log. The incoming shift, the RCA engineer, and the Tier-meeting
manager all read from the *same* structured record instead of a whiteboard or someone's memory.

**The core insight (straight from the brand voice):** *"Your plant runs on memory that
disappears every 8 hours."* Machines record signals and systems store reports — but nobody
captures what the operator noticed at 2am, what they tried, and why. That missing layer is
where investigations stall and handovers fail.

**Primary surfaces**
1. **Capture flow** (mobile-first PWA) — record → review/confirm extracted fields → saved, with
   a live shift log and an AI shift summary. The product *redirects to this by default*.
2. **Live dashboard** — operator notes as filterable cards with a drill-down detail panel, plus
   a right-rail shift report (KPIs, events-by-type, open items, supervisor handover note).
3. **Marketing site** — warm, data-led landing page (hero, WPM comparison, quotes, live demo
   embed, the gap, how-it-works, pilot program, founders, CTA).

**Audience:** plant managers, shift supervisors, operators, RCA/manufacturing-excellence
engineers — *not* marketers. Industrial, multilingual, often temporary floor crews. The brand
deliberately speaks plainly to people on the floor.

---

## Sources (for the reader)

This system was reconstructed from materials the user provided. You may not have access, but
they are recorded here so a future maintainer can go deeper:

- **Brand book (PDF):** `_source/Brand_Book_ShiftVoice.pdf` (colors, palette ratios, typography,
  communication style, tone rules). Original filename `Brand_Book_ShiftVoice.pdf`.
- **Prototype codebase (GitHub):** <https://github.com/Lesykua/shiftvoice-prototype> — Next.js +
  Tailwind. Ground truth for implemented colors, fonts, capture flow, and the dashboard.
  Key files read: `app/page.tsx` (landing), `app/capture/page.tsx`, `components/capture/*`,
  `lib/types.ts`, `lib/glossary.ts`, `lib/seed-notes.ts`, `public/dashboard.html`,
  `app/globals.css`, `app/layout.tsx`.
- **Related game (GitHub):** <https://github.com/Lesykua/factory-cortex> — "Interactive scenario
  game for production leaders" (not used directly here, but same brand family — explore it for
  more in-context copy and decision-making framing).

> **Explore the repos.** To build higher-fidelity Vocavic designs, read
> `Lesykua/shiftvoice-prototype` directly — the capture components and `public/dashboard.html`
> contain the exact spacing, copy, and interaction patterns this system distills.

---

## CONTENT FUNDAMENTALS

How Vocavic writes. The voice is **plain, industrial, numeric, and confident** — written for
a plant manager, never a marketer.

**Person & address.** Second person to the customer ("**your** plant," "**you**"), first-person
plural for the company ("**we**'ve worked inside plants"). Operators are referred to in the third
person inside the product ("what **the operator** noticed at 2am").

**Sentence shape.** Short. One idea per sentence. Fragments are allowed and encouraged for
rhythm: *"No whiteboard. No verbal recap."* / *"Real capture · Real structure · Real replay."*
Middots (·) separate peer facts in dense UI metadata.

**State the problem before the solution.** Every section earns the product by naming the pain
first. ✅ *"Your plant runs on memory that disappears every 8 hours. Vocavic gives it
structure."* ❌ *"Vocavic provides structured operational memory to improve knowledge
retention."*

**Numbers anchor credibility.** Lead with measured figures, not adjectives. ✅ *"150 wpm spoken.
35 wpm typed. The math is simple."* ✅ *"73% reduction in handover time (15 min → 4 min)."*
Use real units (min, wpm, °C, mm, units, %). Prefer "measured, not projected."

**No marketing fog.** Avoid "AI-powered platform," "transforms workflows at scale,"
"revolutionary," "seamless." If a sentence would sound at home in a SaaS press release, rewrite
it for someone holding a torque wrench.

**Casing.**
- **Wordmark:** `VOCAVIC` (all caps, wide `0.22em` tracking) in lockups; `Vocavic` as a
  one-word name in running text and the in-app header.
- **Eyebrows / section labels / KPI labels:** UPPERCASE, `~0.1em` tracking, small, steel-colored.
- **Headlines:** sentence case in Barlow Condensed Black (not Title Case).
- **Body:** sentence case.
- **Tags / event types:** lowercase slugs in data (`oil-leak`, `overheating`); Title-case or
  UPPERCASE pills in UI (`Maintenance`, `RESOLVED`).

**Tone in the product.** Helpful and exact, never chatty. Status microcopy is direct: *"Note
saved · Completeness 100/100 — fully captured,"* *"Save anyway (incomplete),"* *"Looks like a
follow-up."* Field-scoring is transparent: each field shows its point weight (`+30pts` /
`missing (25pts)`).

**Emoji.** Used *sparingly* and only in the product's lighter affordances (demo-script card 🎬,
voice-fill prompt 🎙, related-note link 🔗) — never in the marketing voice, headlines, or brand
materials. Treat emoji as optional UI seasoning, not part of the brand. When in doubt, leave it
out and use an icon.

**Vibe.** Calm control room. Evidence over anecdote. "Capture once. Available everywhere."

---

## VISUAL FOUNDATIONS

The look is a **warm industrial blueprint**: off-white paper, faint navy grid, deep-navy ink, a
single confident teal. It feels engineered and calm — the opposite of a cold dashboard.

**Color & ratio.** Two warm neutrals dominate (~60%): **Vanilla Sugar `#f2ebe0`** (page) and
**Floral White `#fffbf5`** (cards). **Deep navy `#12232c`** anchors all text and structure
(~15%). **Teal `#0f5f68`** is the only brand accent (~10%) — links, primary buttons, key
highlights, the "Maintenance" event type. Functional **green `#2f8f63`** / **amber `#c68a22`** /
**rust red `#d65848`** combined never exceed ~5%, and only ever carry semantic meaning (success /
warning / error · resolved / monitoring / open). Steel `#687d85` does all secondary text. There
are **no off-brand gradients and no stock-photo palettes** — brand palette only.

**Backgrounds.** The signature is a **blueprint grid**: `1px` navy lines at **7% opacity** on an
`80px` cell, over Vanilla Sugar (`.sv-blueprint`). Surfaces are flat warm fills, never
photographic. Dark sections invert to solid navy `#12232c` with floral-tinted text. No textures,
no noise, no imagery-as-background.

**Typography.** Display is **Barlow Condensed** at weight **800** (ExtraBold) with tight line
height (`0.94`) — used for hero/section/card headlines and the wordmark, mostly sentence case.
Body & UI are **Barlow** 400–700. Eyebrows are uppercase Barlow with wide tracking. The brand
book's print typefaces are *Cervo Neue Black* (display) and *Weissenhof Grotesk* (text); the
shipping product standardized on Barlow Condensed / Barlow as their open-source digital
equivalents, which is what this system ships. Numbers in dense UI use tabular alignment.

**Spacing & layout.** 4px base scale; section rhythm on `80px`. Content maxes around
`1200px` with `40px` gutters. The capture flow is a single centered column (`max-w-2xl`); the
dashboard is a two-pane grid (notes `1fr` + report rail `~280px`). Dashboards are dense (small
type, tight gaps); marketing breathes.

**Corner radii.** Generously rounded, never sharp. Inputs/chips `8px`, dense cards `12px`,
buttons/panels `16px`, feature cards `20px`, hero cards/modals `24px`, pills `999px` (badges,
tags, the mic button).

**Cards.** Floral-white fill, **1px hairline navy border at 12% opacity**, rounded `16–24px`,
**soft low shadow** (`shadow-sm`). Some cards add a **3px top or left accent stripe** in an
event-type or phase color (this is intentional and on-brand — distinct from the generic
"rounded card with colored left border" trope because it pairs with the hairline border, warm
fill, and a strict palette). Hover lifts the card `translateY(-1px)` with a slightly stronger
shadow and a teal-tinted border.

**Shadows.** Warm-neutral, low-contrast, navy-based (`rgba(18,35,44,…)`). Range from `0 1px 2px`
@6% up to `0 20px 45px` @16% for hero embeds/modals. No colored glows except the **teal focus
ring** `0 0 0 2px rgba(15,95,104,0.14)`.

**Borders & dividers.** Hairlines everywhere: `1px` navy at 7–12% opacity. Section dividers on
the marketing page are `1px` navy at 10%. Accent borders are teal at 25%.

**Buttons.** Primary = solid teal `#0f5f68`, white text, `16px` radius, `shadow-sm`, hover →
`#127a85`. Secondary = transparent with `1px` navy-20% border, hover → navy-4% wash. Ghost =
no border, hover wash. On dark sections, the inverse: white button with teal text.

**Hover / press.** Hover deepens color (teal → `#127a85`), lifts cards (`-1px`), or applies a
faint navy wash; links shift steel → navy. Press shrinks slightly (`active:scale-95` on the mic),
or darkens. Recording uses a `pulse` animation on the rust-red stop button. Spinners are a
`2–4px` teal ring with transparent top, `animate-spin`.

**Motion.** Restrained and functional. Standard ease `cubic-bezier(0.4,0,0.2,1)`, durations
`150/200/300ms`. Transitions on color, transform, box-shadow, and width (completeness/progress
bars animate width `300ms`). No bounces, no parallax, no decorative loops — the only looping
animations are functional (recording pulse, processing spinner). Respect
`prefers-reduced-motion`.

**Transparency & blur.** Used sparingly: the sticky marketing nav is `rgba(242,235,224,0.92)`
with `backdrop-blur-md`; cards often sit on `rgba(255,251,245,0.85)` so the blueprint grid
shows faintly through. No heavy glassmorphism.

**Imagery.** The brand is **typographic and diagrammatic**, not photographic. Charts,
before/after comparisons, timelines, annotated screenshots — "communicate without the caption."
If you must place a photo, keep it cool/industrial and let the navy/teal system stay dominant.
There are no illustrations or mascots; the "art" is data and the grid.

---

## ICONOGRAPHY

Vocavic has a real **logo system** (the figurative mark extracted from the brand-book Figma)
plus a typographic wordmark. The figurative mark is a **gear enclosing a microphone, with
sound-wave arcs** — manufacturing (gear) + voice capture (mic + waves). It is text-free, so it
carries the brand regardless of name. The brand tagline is **“Capture every
moment on the floor.”** Logo files live in `assets/logo/`:

- `vocavic-mark-color.png` — the figurative mark, full color, transparent.
- `vocavic-mark-white.png` / `-navy.png` — single-color marks for dark / light surfaces.

The **full lockup** is this mark placed beside the wordmark. The wordmark is set in **live type**
(not a baked image): all-caps **`VOCAVIC`** in Barlow Condensed 800 at `0.22em` tracking, split
**`VOCA`** (navy/ink) + **`VIC`** (steel/muted) — floral + faint on dark. Use it for app headers,
the dashboard summary bar, and footers. See `components/brand/` (`Logo`, `Wordmark`) and the
“Wordmark” / “Logo & mark” cards. The vertical audio-waveform bars in the mark are a recurring
brand element.

> The original raster lockup that spelled the previous product name has been retired; the
> wordmark is now rendered in CSS so it always reads **Vocavic**.

**Icon style in the prototype.** Where icons appear, they are **inline stroke SVGs** in the
**outline / line** style at **2px stroke weight**, `currentColor`, `24×24` viewBox, rounded
caps/joins — e.g. the microphone and stop glyphs in `VoiceCapture`, and the LinkedIn/email
glyphs on the founder cards. This matches the **Lucide / Feather** family almost exactly.

**Our recommendation:** use **[Lucide](https://lucide.dev)** as the icon set (CDN-available,
2px outline, rounded, MIT). It is the closest match to the prototype's hand-rolled SVGs. A few
brand-relevant glyphs are vendored as standalone SVGs in `assets/icons/` (mic, square-stop,
play/replay, tag, clipboard-list, alert-triangle, check-circle) for offline use; reach for
Lucide for anything else and keep stroke weight at 2px. *Substitution flag: the prototype's
icons are hand-authored, not from a named set — Lucide is our closest-match recommendation, not
a confirmed brand decision.*

**Status dots & shapes.** Status is often shown as a small filled circle (`6–10px`) in a
semantic color rather than an icon — green (resolved/complete), amber (monitoring/incomplete),
red (open), teal (info/count). Pills carry event types and statuses.

**Emoji as icons.** A handful of emoji appear in *secondary product affordances only* (🎬 demo
script, 🎙 voice fill, 🔗 related note, ✓/✕ confirm/close). Do not use emoji in marketing, brand,
headline, or formal contexts. Prefer a Lucide glyph or a status dot.

**Unicode.** Arrows (`→ ↓ ←`), middot (`·`), and curly quotes (`" "`) are used as typographic
characters in copy and buttons ("Book a Discovery Call →"). The large decorative quotation mark
on testimonial cards is a Barlow Condensed `"` at low opacity — a type element, not an icon.

---

## INDEX / MANIFEST

Root files:
- `styles.css` — global entry point (imports only). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `assets/` — `fonts/` (Barlow + Barlow Condensed TTFs, OFL), `icons/` (vendored Lucide SVGs),
  `logo/` (Vocavic figurative mark, color / white / navy PNGs).
- `_source/` — original brand book PDF.

Foundation specimen cards (Design System tab): under `guidelines/` — colors, type, spacing,
brand. Components: under `components/`. UI kits: under `ui_kits/`.

> Components, UI kits, and cards are listed in the Design System tab. See each directory's card
> HTML and `.prompt.md` for usage.
