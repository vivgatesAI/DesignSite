# Design Styles Dashboard

A comprehensive visual reference for 30+ design styles with example website templates.

## Project Overview

- **Type**: React Dashboard Application
- **Core Functionality**: Interactive tabbed dashboard showcasing 30 design styles with visual previews and example website mockups
- **Target Users**: Designers, developers, creative professionals

## UI/UX Specification

### Layout Structure

- **Header**: Fixed top bar with title and style selector
- **Main Content**: Full-width style showcase with split view (info panel + visual preview)
- **Tab Navigation**: Left sidebar with all 30 styles + mixed combinations section
- **Responsive**: Desktop-first (1200px+), tablet (768px), mobile (480px)

### Visual Design

**Color Palette (Dashboard Chrome)**
- Background: `#0a0a0f` (deep noir)
- Surface: `#14141f` (card backgrounds)
- Surface Elevated: `#1e1e2e` (hover states)
- Border: `#2a2a3a` (subtle dividers)
- Text Primary: `#f0f0f5` (headings)
- Text Secondary: `#8888a0` (body)
- Accent: `#ff6b35` (orange accent for active states)
- Accent Secondary: `#00d4aa` (teal for mixed styles)

**Typography**
- Dashboard Title: "Playfair Display", serif, 32px, weight 700
- Tab Labels: "JetBrains Mono", monospace, 13px, weight 500
- Style Title: "Playfair Display", serif, 28px
- Body Text: "DM Sans", sans-serif, 15px
- Code/Labels: "JetBrains Mono", monospace, 12px

**Spacing**
- Sidebar width: 280px
- Content padding: 48px
- Card gap: 24px
- Section spacing: 32px

**Visual Effects**
- Tab hover: scale(1.02) with 200ms ease
- Active tab: left border accent + background shift
- Card transitions: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- Preview area: subtle grain texture overlay

### Components

1. **Sidebar Navigation**
   - Collapsible category headers
   - Individual style items with icon indicators
   - Active state indicator (accent bar left)
   - Scroll to highlighted section

2. **Style Preview Card**
   - Style name with number badge
   - Description paragraph
   - Color palette swatches (5 colors)
   - Typography recommendations
   - Key characteristics tags

3. **Website Mockup Preview**
   - Browser chrome frame
   - Mini website layout preview
   - Style-specific visual treatment

4. **Mixed Style Section**
   - Combined color palettes
   - Blended characteristics
   - Example hybrid website

## Functionality Specification

### Core Features

1. **Tab Navigation**: Click to switch between 30 styles
2. **Category Filtering**: Group by Classic, Contemporary, Typography, Expressive, Tech, Brand
3. **Mixed Styles**: 6 pre-curated style combinations
4. **Visual Preview**: Real-time update of example website based on selected style
5. **Color Palette Display**: Copy-able hex codes

### User Interactions

- Click tab → animate to new style view
- Hover palette color → show hex tooltip
- Click "Copy" → copy hex to clipboard
- Scroll sidebar → smooth scroll with fade edges

### Data Structure

Each style includes:
```json
{
  "id": "swiss",
  "name": "Swiss / International Style",
  "category": "classic",
  "description": "Grid-based, clean typography, objective clarity",
  "colors": ["#ff0000", "#000000", "#ffffff", ...],
  "fonts": ["Helvetica Now", "Inter"],
  "characteristics": ["Grid systems", "Asymmetry", "Sans-serif"],
  "exampleWebsite": "Corporate/SaaS"
}
```

## Acceptance Criteria

1. ✅ All 30 styles accessible via tabs
2. ✅ Each style shows name, description, colors, fonts, characteristics
3. ✅ Visual website mockup updates per style
4. ✅ 6 mixed style combinations included
5. ✅ Smooth animations between tabs
6. ✅ Responsive on tablet/mobile
7. ✅ Copy color functionality works
8. ✅ Professional, distinctive dashboard aesthetic
