export interface DesignStyle {
  id: string;
  name: string;
  category: string;
  description: string;
  colors: string[];
  fonts: { display: string; body: string };
  characteristics: string[];
  exampleWebsite: string;
  mood: string;
}

export const designStyles: DesignStyle[] = [
  // Classic & Timeless
  {
    id: "swiss",
    name: "Swiss / International Style",
    category: "classic",
    description: "Grid-based precision with clean sans-serif typography. Objective clarity meets mathematical layouts. Think Helvetica, asymmetric balance, and content that speaks for itself.",
    colors: ["#FF3B30", "#000000", "#FFFFFF", "#F5F5F5", "#1A1A1A"],
    fonts: { display: "Helvetica Now Display", body: "Inter" },
    characteristics: ["Strict grid systems", "Asymmetric layouts", "Sans-serif typography", "Negative space", "Objective photography"],
    exampleWebsite: "Architecture Firm",
    mood: "Professional, Objective, Timeless"
  },
  {
    id: "modernism",
    name: "Modernism",
    category: "classic",
    description: "Form follows function. Extreme minimalism where every element must justify its existence. Rejection of ornamentation in favor of honest, functional design.",
    colors: ["#000000", "#FFFFFF", "#C0C0C0", "#333333", "#E8E8E8"],
    fonts: { display: "Grotesk Nova", body: "Inter" },
    characteristics: ["Function over form", "Minimal ornamentation", "Honest materials", "Simplified geometry", "Clean lines"],
    exampleWebsite: "Design Studio",
    mood: "Pure, Honest, Essential"
  },
  {
    id: "bauhaus",
    name: "Bauhaus",
    category: "classic",
    description: "The marriage of art and industry. Geometric forms, primary colors, and the belief that design should serve humanity. Craftsmanship meets industrial production.",
    colors: ["#FF0000", "#0000FF", "#FFFF00", "#000000", "#FFFFFF"],
    fonts: { display: "Bauhaus93", body: "Work Sans" },
    characteristics: ["Geometric shapes", "Primary colors", "Form follows function", "Industrial materials", "Functional furniture integration"],
    exampleWebsite: "Furniture Brand",
    mood: "Revolutionary, Geometric, Industrial"
  },
  {
    id: "midcentury",
    name: "Mid-Century Modern",
    category: "classic",
    description: "Organic curves meet clean lines. Warm minimalism that feels human. Think walnut wood, tapered legs, and forms inspired by nature.",
    colors: ["#8B4513", "#2E8B57", "#F5DEB3", "#1C1C1C", "#FF6B35"],
    fonts: { display: "Futura PT", body: "Nunito Sans" },
    characteristics: ["Organic shapes", "Warm wood tones", "Tapered forms", "Natural inspiration", "Indoor-outdoor flow"],
    exampleWebsite: "Lifestyle Boutique",
    mood: "Warm, Organic, Timeless"
  },
  {
    id: "minimalism",
    name: "Minimalism",
    category: "classic",
    description: "Extreme restraint as a design philosophy. Clarity through reduction. When you remove everything unnecessary, the essential becomes undeniable.",
    colors: ["#FFFFFF", "#000000", "#F8F8F8", "#E0E0E0", "#333333"],
    fonts: { display: "Söhne", body: "Söhne" },
    characteristics: ["Extreme reduction", "Maximum whitespace", "Limited palette", "Essential only", "Visual silence"],
    exampleWebsite: "Luxury Brand",
    mood: "Pure, Refined, Essential"
  },
  {
    id: "editorial",
    name: "Editorial / Print-Inspired",
    category: "classic",
    description: "Magazine-quality layouts translated to screen. Strong hierarchy, serif typography, and the drama of print design meets digital interactivity.",
    colors: ["#1A1A1A", "#FFFFFF", "#C9A959", "#8B0000", "#F4F4F4"],
    fonts: { display: "Playfair Display", body: "Source Serif Pro" },
    characteristics: ["Strong hierarchy", "Serif typography", "Editorial layouts", "Dramatic contrasts", "White space as design"],
    exampleWebsite: "Fashion Magazine",
    mood: "Sophisticated, Editorial, Dramatic"
  },
  // Contemporary & Digital-First
  {
    id: "flat",
    name: "Flat Design",
    category: "contemporary",
    description: "No depth, no shadows, just pure shape and color. Flat design strips away skeuomorphism to reveal the essence of digital interfaces.",
    colors: ["#3498DB", "#E74C3C", "#2ECC71", "#F1C40F", "#9B59B6"],
    fonts: { display: "Proxima Nova", body: "Open Sans" },
    characteristics: ["No depth/shadows", "Simple shapes", "Bold colors", "2D elements", "Clean icons"],
    exampleWebsite: "Mobile App",
    mood: "Clean, Modern, Approachable"
  },
  {
    id: "material",
    name: "Material Design",
    category: "contemporary",
    description: "Google's tactile UI language. Surfaces that lift, shadows that reveal depth, and motion that feels physical. Digital materials with real-world properties.",
    colors: ["#6200EE", "#03DAC6", "#FFFFFF", "#000000", "#BB86FC"],
    fonts: { display: "Google Sans", body: "Roboto" },
    characteristics: ["Elevation system", "Tactile surfaces", "Motion physics", "Material metaphors", "Ink ripple effects"],
    exampleWebsite: "Productivity App",
    mood: "Tactile, Physical, Dynamic"
  },
  {
    id: "neumorphism",
    name: "Neumorphism",
    category: "contemporary",
    description: "Soft shadows create subtle depth. Elements that appear to extrude from the background. Tactile surfaces that beg to be touched.",
    colors: ["#E0E5EC", "#A3B1C6", "#FFFFFF", "#2D3436", "#636E72"],
    fonts: { display: "Circular", body: "Inter" },
    characteristics: ["Soft shadows", "Subtle depth", "Tactile feel", "Monochrome palette", "Embossed elements"],
    exampleWebsite: "Smart Home App",
    mood: "Soft, Tactile, Calm"
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    category: "contemporary",
    description: "Frosted glass aesthetics with translucency and depth. Layers that float, blur that adds mystery, and transparency as design element.",
    colors: ["#FFFFFF", "#667EEA", "#764BA2", "#000000", "#F0F0F0"],
    fonts: { display: "SF Pro Display", body: "SF Pro Text" },
    characteristics: ["Frosted glass effect", "Translucency", "Depth layering", "Blur backgrounds", "Floating elements"],
    exampleWebsite: "Music Player",
    mood: "Ethereal, Modern, Sleek"
  },
  {
    id: "brutalist",
    name: "Brutalist Web Design",
    category: "contemporary",
    description: "Raw, unpolished, intentionally harsh. Anti-design that rejects convention. Large type, bold colors, and the beauty of exposed structure.",
    colors: ["#FF0000", "#FFFF00", "#000000", "#FFFFFF", "#0000FF"],
    fonts: { display: "Space Mono", body: "JetBrains Mono" },
    characteristics: ["Raw aesthetics", "Large typography", "Bold colors", "Exposed structure", "Anti-convention"],
    exampleWebsite: "Art Gallery",
    mood: "Raw, Bold, Unapologetic"
  },
  {
    id: "cleanui",
    name: "Minimal UI / Clean UI",
    category: "contemporary",
    description: "High whitespace, restrained color, and absolute clarity. Every pixel earns its place. The sophistication of saying less.",
    colors: ["#FFFFFF", "#F8F9FA", "#212529", "#DEE2E6", "#0DCAF0"],
    fonts: { display: "DM Sans", body: "DM Sans" },
    characteristics: ["Generous whitespace", "Restrained colors", "Clear hierarchy", "Focused content", "Invisible UI"],
    exampleWebsite: "SaaS Dashboard",
    mood: "Clear, Focused, Sophisticated"
  },
  // Typography-Driven
  {
    id: "typographic",
    name: "Typographic / Type-First",
    category: "typography",
    description: "Layout built around text, not visuals. Typography IS the visual. Letterforms become imagery, and words become design elements.",
    colors: ["#000000", "#FFFFFF", "#FF4500", "#1A1A1A", "#F5F5F5"],
    fonts: { display: "GT America", body: "GT America" },
    characteristics: ["Text as hero", "Expressive letterforms", "Variable fonts", "Word as image", "Type-driven layout"],
    exampleWebsite: "Typography Foundry",
    mood: "Bold, Expressive, Verbal"
  },
  {
    id: "swisstypography",
    name: "Swiss Typography Revival",
    category: "typography",
    description: "Helvetica meets the digital age. Grid-based precision with asymmetric layouts. The timeless power of Swiss design reimagined for screen.",
    colors: ["#FF0000", "#000000", "#FFFFFF", "#F0F0F0", "#0066CC"],
    fonts: { display: "Helvetica Now", body: "Inter" },
    characteristics: ["Helvetica essence", "Strict grids", "Asymmetric balance", "Mathematical precision", "Swiss clarity"],
    exampleWebsite: "Financial Services",
    mood: "Precise, Mathematical, Clear"
  },
  {
    id: "experimental",
    name: "Experimental Typography",
    category: "typography",
    description: "Broken grids and expressive letterforms. Type that breaks rules, overlaps, distorts, and becomes unrecognizable as 'text'.",
    colors: ["#FF00FF", "#00FF00", "#000000", "#FFFFFF", "#FF6600"],
    fonts: { display: "Druk Wide", body: "ABC Favorit" },
    characteristics: ["Broken grids", "Expressive forms", "Type distortion", "Overlapping elements", "Deconstructed reading"],
    exampleWebsite: "Creative Agency",
    mood: "Avant-Garde, Experimental, Bold"
  },
  {
    id: "editorialmax",
    name: "Editorial Maximal Typography",
    category: "typography",
    description: "Oversized type that dominates the frame. Dramatic contrast between tiny and massive. Typography as architectural element.",
    colors: ["#000000", "#FFDD00", "#FF0000", "#FFFFFF", "#1A1A1A"],
    fonts: { display: "Ogg", body: "Chronicle Text" },
    characteristics: ["Oversized type", "Dramatic scale", "Architectural layout", "High contrast", "Theatrical presence"],
    exampleWebsite: "Cultural Institution",
    mood: "Theatrical, Dramatic, Grand"
  },
  // Expressive & Artistic
  {
    id: "maximalism",
    name: "Maximalism",
    category: "expressive",
    description: "More is more. Bold colors, dense visuals, and expressive chaos. The antidote to minimalist fatigue. Unapologetically rich and layered.",
    colors: ["#FF1493", "#00CED1", "#FFD700", "#8B008B", "#FF4500"],
    fonts: { display: "Casablanca", body: "Cooper Black" },
    characteristics: ["Bold colors", "Dense layering", "Pattern mixing", "Excessive detail", "Celebration of more"],
    exampleWebsite: "Fashion Brand",
    mood: "Vibrant, Rich, Expressive"
  },
  {
    id: "psychedelic",
    name: "Psychedelic",
    category: "expressive",
    description: "Vibrant gradients and flowing forms. Surreal energy that bends perception. Colors that vibrate and shapes that flow.",
    colors: ["#FF00FF", "#00FFFF", "#FF6600", "#7B00FF", "#00FF00"],
    fonts: { display: "VAG Rounded", body: "Quicksand" },
    characteristics: ["Vibrant gradients", "Flowing forms", "Surreal energy", "Color vibration", "Organic shapes"],
    exampleWebsite: "Music Festival",
    mood: "Trippy, Energetic, Surreal"
  },
  {
    id: "surrealism",
    name: "Surrealism",
    category: "expressive",
    description: "Dream-like imagery and unexpected juxtapositions. The familiar made strange. Logic subverted by imagination.",
    colors: ["#2C3E50", "#E74C3C", "#F39C12", "#FFFFFF", "#1A1A2E"],
    fonts: { display: "Cormorant Garamond", body: "EB Garamond" },
    characteristics: ["Dream imagery", "Unexpected juxtapositions", "Surreal atmosphere", "Poetic logic", "Subverted reality"],
    exampleWebsite: "Art Foundation",
    mood: "Dreamy, Poetic, Strange"
  },
  {
    id: "collage",
    name: "Collage Style",
    category: "expressive",
    description: "Mixed media with cut-outs and layered textures. The aesthetic of found materials. Torn edges, overlapping planes, and handmade feel.",
    colors: ["#D4A574", "#8B4513", "#2F4F4F", "#DC143C", "#F5DEB3"],
    fonts: { display: "Editorial New", body: "Untitled Sans" },
    characteristics: ["Mixed media", "Cut-out elements", "Layered textures", "Torn edges", "Found materials"],
    exampleWebsite: "Vintage Brand",
    mood: "Handmade, Layered, Nostalgic"
  },
  {
    id: "illustrative",
    name: "Illustrative Design",
    category: "expressive",
    description: "Hand-drawn or illustration-first layouts. Human touch in every stroke. Illustrations that tell stories and brands that show personality.",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"],
    fonts: { display: "Fredoka One", body: "Nunito" },
    characteristics: ["Hand-drawn elements", "Illustration-first", "Storytelling visuals", "Warmth", "Personality"],
    exampleWebsite: "Kids Brand",
    mood: "Warm, Handmade, Friendly"
  },
  // Tech & Future-Facing
  {
    id: "futurism",
    name: "Futurism / Sci-Fi UI",
    category: "tech",
    description: "Neon accents in dark modes. Tech motifs and holographic elements. The aesthetic of tomorrow, today.",
    colors: ["#00FFFF", "#FF00FF", "#0A0A0F", "#1A1A2E", "#00FF88"],
    fonts: { display: "Orbitron", body: "Rajdhani" },
    characteristics: ["Neon accents", "Dark mode default", "Tech motifs", "Holographic elements", "Glowing effects"],
    exampleWebsite: "Tech Startup",
    mood: "Futuristic, Tech, Glowing"
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    category: "tech",
    description: "High-contrast neon in urban dystopia. Glitch effects and digital decay. The beautiful chaos of a hacked future.",
    colors: ["#FF00FF", "#00FFFF", "#FF0066", "#0D0D0D", "#39FF14"],
    fonts: { display: "Cyberpunk", body: "Share Tech Mono" },
    characteristics: ["High contrast neon", "Glitch effects", "Urban dystopia", "Digital decay", "Chromatic aberration"],
    exampleWebsite: "Gaming Platform",
    mood: "Edgy, Dystopian, Electric"
  },
  {
    id: "terminal",
    name: "Terminal / AI Command Center",
    category: "tech",
    description: "Futuristic, minimal, terminal-inspired UI that resembles an AI command center. Dark high-contrast aesthetic with system status language and HUD-like elements.",
    colors: ["#000000", "#00FF41", "#00FFFF", "#0066FF", "#0A0A0A"],
    fonts: { display: "JetBrains Mono", body: "IBM Plex Mono" },
    characteristics: ["Dark background", "Neon green/cyan text", "Monospace fonts", "System status language", "Scanline effects", "Blinking cursor"],
    exampleWebsite: "AI Dashboard",
    mood: "Tech, Operational, Futuristic"
  },
  {
    id: "data",
    name: "Data-Driven / Infographic",
    category: "tech",
    description: "Charts, systems, and visualized logic. Information as beauty. Complex data rendered with clarity and elegance.",
    colors: ["#2196F3", "#4CAF50", "#FF9800", "#F44336", "#9C27B0"],
    fonts: { display: "IBM Plex Mono", body: "IBM Plex Sans" },
    characteristics: ["Data visualization", "Chart integration", "System diagrams", "Logical layout", "Information beauty"],
    exampleWebsite: "Analytics Platform",
    mood: "Logical, Data-Rich, Clear"
  },
  {
    id: "algorithmic",
    name: "AI-Generated / Algorithmic",
    category: "tech",
    description: "Procedural patterns and generative visuals. Design that creates itself. Mathematics made visible.",
    colors: ["#6366F1", "#8B5CF6", "#EC4899", "#06B6D4", "#10B981"],
    fonts: { display: "Space Grotesk", body: "JetBrains Mono" },
    characteristics: ["Procedural patterns", "Generative visuals", "Mathematical beauty", "Dynamic elements", "Self-creating design"],
    exampleWebsite: "AI Product",
    mood: "Procedural, Dynamic, Mathematical"
  },
  // Brand & Culture-Driven
  {
    id: "luxury",
    name: "Luxury Minimalism",
    category: "brand",
    description: "Sparse layouts with high-contrast serif typography. The power of less. Exclusivity through restraint.",
    colors: ["#000000", "#FFFFFF", "#C9A227", "#1A1A1A", "#D4AF37"],
    fonts: { display: "Canela", body: "Söhne" },
    characteristics: ["Sparse layout", "High contrast serif", "Exclusivity", "Premium feel", "Restrained elegance"],
    exampleWebsite: "Luxury Fashion",
    mood: "Exclusive, Refined, Premium"
  },
  {
    id: "corporate",
    name: "Corporate Modern",
    category: "brand",
    description: "Safe, scalable, clean enterprise design. Trust through familiarity. Professional without being boring.",
    colors: ["#0052CC", "#FFFFFF", "#36B37E", "#FFAB00", "#172B4D"],
    fonts: { display: "Gilroy", body: "Roboto" },
    characteristics: ["Safe and scalable", "Clean enterprise", "Trustworthy feel", "Professional", "Familiar patterns"],
    exampleWebsite: "Enterprise SaaS",
    mood: "Professional, Trustworthy, Clean"
  },
  {
    id: "playful",
    name: "Playful / Friendly",
    category: "brand",
    description: "Rounded type, bright colors, and approachability. Design that smiles. No sharp edges, no serious faces.",
    colors: ["#FF6B35", "#4ECDC4", "#FFE66D", "#95E1D3", "#F38181"],
    fonts: { display: "Baloo 2", body: "Quicksand" },
    characteristics: ["Rounded typography", "Bright colors", "Approachable", "No sharp edges", "Friendly vibe"],
    exampleWebsite: "Kids App",
    mood: "Fun, Friendly, Approachable"
  },
  {
    id: "handcrafted",
    name: "Handcrafted / Organic",
    category: "brand",
    description: "Imperfect lines, natural textures, and warmth. The beauty of handmade in a digital world. Authenticity over perfection.",
    colors: ["#8B7355", "#D2B48C", "#556B2F", "#F5F5DC", "#2F4F4F"],
    fonts: { display: "Recoleta", body: "Untitled Sans" },
    characteristics: ["Imperfect lines", "Natural textures", "Organic feel", "Handmade warmth", "Authentic"],
    exampleWebsite: "Artisan Brand",
    mood: "Authentic, Warm, Handmade"
  },
  {
    id: "retro",
    name: "Retro / Nostalgic",
    category: "brand",
    description: "70s-90s visual language reinterpreted for today. Nostalgia with a modern twist. The familiar past, freshly rendered.",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"],
    fonts: { display: "Avenir Next", body: "American Typewriter" },
    characteristics: ["70s-90s aesthetics", "Nostalgic color", "Modern reinterpretation", "Vintage feel", "Retro patterns"],
    exampleWebsite: "Vintage Coffee Shop",
    mood: "Nostalgic, Vintage, Warm"
  }
];

export const mixedStyles = [
  {
    id: "swiss-glass",
    name: "Swiss + Glassmorphism",
    description: "The precision of Swiss grids meets ethereal glass layers. Structure meets translucency.",
    colors: ["#667EEA", "#764BA2", "#FF3B30", "#000000", "#FFFFFF"],
    parentStyles: ["Swiss / International", "Glassmorphism"],
    exampleWebsite: "Fintech Dashboard"
  },
  {
    id: "brutal-cyber",
    name: "Brutalist + Cyberpunk",
    description: "Raw anti-design collided with neon dystopia. Harsh meets electric.",
    colors: ["#FF0066", "#00FFFF", "#FF0000", "#0D0D0D", "#FFFF00"],
    parentStyles: ["Brutalist", "Cyberpunk"],
    exampleWebsite: "Gaming Brand"
  },
  {
    id: "minimal-luxury",
    name: "Minimalist + Luxury",
    description: "Extreme restraint meets high-end elegance. Less becomes exclusively more.",
    colors: ["#000000", "#FFFFFF", "#D4AF37", "#1A1A1A", "#C9A227"],
    parentStyles: ["Minimalism", "Luxury Minimalism"],
    exampleWebsite: "High-End Jewelry"
  },
  {
    id: "editorial-max",
    name: "Editorial + Maximalism",
    description: "Dramatic print layouts embrace abundance. Sophistication meets celebration.",
    colors: ["#FF1493", "#000000", "#FFD700", "#FFFFFF", "#8B0000"],
    parentStyles: ["Editorial", "Maximalism"],
    exampleWebsite: "Luxury Magazine"
  },
  {
    id: "retro-futurism",
    name: "Retro + Futurism",
    description: "Nostalgic past meets speculative future. Yesterday's tomorrow, today.",
    colors: ["#FF6B35", "#00FFFF", "#FF00FF", "#0A0A0F", "#FFA500"],
    parentStyles: ["Retro", "Futurism"],
    exampleWebsite: "Music Platform"
  },
  {
    id: "nature-tech",
    name: "Organic + Algorithmic",
    description: "Natural imperfection meets mathematical precision. Human meets machine.",
    colors: ["#2ECC71", "#6366F1", "#8B7355", "#06B6D4", "#D2B48C"],
    parentStyles: ["Handcrafted", "AI-Generated"],
    exampleWebsite: "Sustainable Tech"
  }
];

export const categories = [
  { id: "classic", name: "Classic & Timeless", icon: "🏛️" },
  { id: "contemporary", name: "Contemporary", icon: "💻" },
  { id: "typography", name: "Typography-Driven", icon: "🔤" },
  { id: "expressive", name: "Expressive & Artistic", icon: "🎭" },
  { id: "tech", name: "Tech & Future", icon: "🚀" },
  { id: "brand", name: "Brand & Culture", icon: "🏷️" },
  { id: "mixed", name: "Mixed Styles", icon: "🧪" }
];
