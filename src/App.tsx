import { useState, useEffect } from 'react';
import { designStyles, mixedStyles, categories, type DesignStyle } from './data/designStyles';
import './App.css';

function App() {
  const [activeStyle, setActiveStyle] = useState<string>('swiss');
  const [activeCategory, setActiveCategory] = useState<string>('classic');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const filteredStyles = activeCategory === 'mixed' 
    ? [] 
    : designStyles.filter(s => s.category === activeCategory);

  const currentStyle = designStyles.find(s => s.id === activeStyle);
  const currentMixed = mixedStyles.find(m => m.id === activeStyle);

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Design<span>Styles</span></h1>
          <p>30 Design Systems</p>
        </div>

        <nav className="sidebar-nav">
          {categories.map(cat => (
            <div key={cat.id} className="nav-category">
              <button 
                className={`category-header ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (cat.id !== 'mixed') {
                    const firstStyle = designStyles.find(s => s.category === cat.id);
                    if (firstStyle) setActiveStyle(firstStyle.id);
                  } else {
                    setActiveStyle(mixedStyles[0].id);
                  }
                }}
              >
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.name}</span>
              </button>
              
              {cat.id !== 'mixed' && activeCategory === cat.id && (
                <div className="category-items">
                  {designStyles.filter(s => s.category === cat.id).map(style => (
                    <button
                      key={style.id}
                      className={`style-item ${activeStyle === style.id ? 'active' : ''}`}
                      onClick={() => setActiveStyle(style.id)}
                    >
                      <span className="style-number">{designStyles.indexOf(style) + 1}</span>
                      <span className="style-name">{style.name.split(' / ')[0]}</span>
                    </button>
                  ))}
                </div>
              )}

              {cat.id === 'mixed' && activeCategory === 'mixed' && (
                <div className="category-items">
                  {mixedStyles.map((mixed, idx) => (
                    <button
                      key={mixed.id}
                      className={`style-item mixed-item ${activeStyle === mixed.id ? 'active' : ''}`}
                      onClick={() => setActiveStyle(mixed.id)}
                    >
                      <span className="style-number mixed-num">{idx + 1}</span>
                      <span className="style-name">{mixed.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activeCategory !== 'mixed' && currentStyle && (
          <StyleDisplay 
            style={currentStyle} 
            onCopyColor={handleCopyColor}
            copiedColor={copiedColor}
          />
        )}

        {activeCategory === 'mixed' && currentMixed && (
          <MixedStyleDisplay 
            mixed={currentMixed}
            onCopyColor={handleCopyColor}
            copiedColor={copiedColor}
          />
        )}
      </main>
    </div>
  );
}

function StyleDisplay({ 
  style, 
  onCopyColor, 
  copiedColor 
}: { 
  style: DesignStyle; 
  onCopyColor: (c: string) => void;
  copiedColor: string | null;
}) {
  return (
    <div className="style-display">
      <header className="style-header">
        <div className="style-badge">{designStyles.indexOf(style) + 1}</div>
        <div className="style-title-group">
          <h2>{style.name}</h2>
          <p className="style-mood">{style.mood}</p>
        </div>
      </header>

      <div className="style-content">
        <div className="info-panel">
          <section className="info-section">
            <h3>Description</h3>
            <p>{style.description}</p>
          </section>

          <section className="info-section">
            <h3>Color Palette</h3>
            <div className="color-swatches">
              {style.colors.map((color, idx) => (
                <button
                  key={idx}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                  onClick={() => onCopyColor(color)}
                  title={`${color} - Click to copy`}
                >
                  <span className={`color-code ${copiedColor === color ? 'copied' : ''}`}>
                    {copiedColor === color ? '✓' : color}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="info-section">
            <h3>Typography</h3>
            <div className="font-info">
              <div className="font-row">
                <span className="font-label">Display</span>
                <span className="font-name">{style.fonts.display}</span>
              </div>
              <div className="font-row">
                <span className="font-label">Body</span>
                <span className="font-name">{style.fonts.body}</span>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h3>Key Characteristics</h3>
            <div className="characteristics">
              {style.characteristics.map((char, idx) => (
                <span key={idx} className="characteristic-tag">{char}</span>
              ))}
            </div>
          </section>

          <section className="info-section prompt-section">
            <h3>AI Image Prompt</h3>
            <p className="prompt-hint">Copy this prompt for AI image generators</p>
            <div className="prompt-box">
              <pre>{`Create a webpage in ${style.name} style. ${style.description} 

Use these colors: ${style.colors.join(', ')}
Typography: ${style.fonts.display} for headlines, ${style.fonts.body} for body text.

Key elements: ${style.characteristics.join(', ')}.

The design should feel: ${style.mood}`}</pre>
            </div>
            <button 
              className="copy-prompt-btn"
              onClick={() => {
                const prompt = `Create a webpage in ${style.name} style. ${style.description} 

Use these colors: ${style.colors.join(', ')}
Typography: ${style.fonts.display} for headlines, ${style.fonts.body} for body text.

Key elements: ${style.characteristics.join(', ')}.

The design should feel: ${style.mood}`;
                navigator.clipboard.writeText(prompt);
                alert('Prompt copied to clipboard!');
              }}
            >
              📋 Copy Prompt
            </button>
          </section>
        </div>

        <div className="preview-panel">
          <div className="preview-browser">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="browser-url">{style.exampleWebsite.toLowerCase().replace(/\s+/g, '-')}.com</div>
            </div>
            <WebsitePreview style={style} />
          </div>
          <p className="preview-caption">Best for: <strong>{style.exampleWebsite}</strong></p>
        </div>
      </div>
    </div>
  );
}

function MixedStyleDisplay({ 
  mixed, 
  onCopyColor, 
  copiedColor 
}: { 
  mixed: typeof mixedStyles[0]; 
  onCopyColor: (c: string) => void;
  copiedColor: string | null;
}) {
  return (
    <div className="style-display mixed-display">
      <header className="style-header">
        <div className="style-badge mixed-badge">⚗️</div>
        <div className="style-title-group">
          <h2>{mixed.name}</h2>
          <p className="style-mood">Hybrid Style Combination</p>
        </div>
      </header>

      <div className="style-content">
        <div className="info-panel">
          <section className="info-section">
            <h3>Description</h3>
            <p>{mixed.description}</p>
          </section>

          <section className="info-section">
            <h3>Parent Styles</h3>
            <div className="parent-styles">
              {mixed.parentStyles.map((parent, idx) => (
                <span key={idx} className="parent-style-tag">{parent}</span>
              ))}
            </div>
          </section>

          <section className="info-section">
            <h3>Combined Palette</h3>
            <div className="color-swatches">
              {mixed.colors.map((color, idx) => (
                <button
                  key={idx}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                  onClick={() => onCopyColor(color)}
                  title={`${color} - Click to copy`}
                >
                  <span className={`color-code ${copiedColor === color ? 'copied' : ''}`}>
                    {copiedColor === color ? '✓' : color}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="info-section prompt-section">
            <h3>AI Image Prompt</h3>
            <p className="prompt-hint">Copy this prompt for AI image generators</p>
            <div className="prompt-box">
              <pre>{`Create a webpage combining ${mixed.name}. 

${mixed.description}

Use these colors: ${mixed.colors.join(', ')}

This hybrid style blends: ${mixed.parentStyles.join(' + ')}`}</pre>
            </div>
            <button 
              className="copy-prompt-btn"
              onClick={() => {
                const prompt = `Create a webpage combining ${mixed.name}. 

${mixed.description}

Use these colors: ${mixed.colors.join(', ')}

This hybrid style blends: ${mixed.parentStyles.join(' + ')}`;
                navigator.clipboard.writeText(prompt);
                alert('Prompt copied to clipboard!');
              }}
            >
              📋 Copy Prompt
            </button>
          </section>
        </div>

        <div className="preview-panel">
          <div className="preview-browser">
            <div className="browser-chrome">
              <div className="browser-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="browser-url">{mixed.exampleWebsite.toLowerCase().replace(/\s+/g, '-')}.com</div>
            </div>
            <WebsitePreview mixed={mixed} />
          </div>
          <p className="preview-caption">Best for: <strong>{mixed.exampleWebsite}</strong></p>
        </div>
      </div>
    </div>
  );
}

function WebsitePreview({ 
  style, 
  mixed 
}: { 
  style?: DesignStyle; 
  mixed?: typeof mixedStyles[0];
}) {
  const colors = mixed ? mixed.colors : style!.colors;
  const fonts = style?.fonts || { display: 'Arial', body: 'Arial' };
  
  // Generate different preview layouts based on style characteristics
  const getPreviewLayout = () => {
    const id = style?.id || mixed?.id || '';
    
    // Map each specific style to its own layout
    const layoutMap: Record<string, string> = {
      // Classic styles
      'swiss': 'swiss',
      'modernism': 'modernism',
      'bauhaus': 'bauhaus',
      'midcentury': 'midcentury',
      'minimalism': 'minimalism',
      'editorial': 'editorial',
      // Contemporary
      'flat': 'flat',
      'material': 'material',
      'neumorphism': 'neumorphism',
      'glassmorphism': 'glass',
      'brutalist': 'brutalist',
      'cleanui': 'cleanui',
      // Typography
      'typographic': 'typographic',
      'swisstypography': 'swisstypography',
      'experimental': 'experimental',
      'editorialmax': 'editorialmax',
      // Expressive
      'maximalism': 'maximal',
      'psychedelic': 'psychedelic',
      'surrealism': 'surrealism',
      'collage': 'collage',
      'illustrative': 'illustrative',
      // Tech
      'futurism': 'futurism',
      'cyberpunk': 'cyberpunk',
      'terminal': 'terminal',
      'data': 'data',
      'algorithmic': 'algorithmic',
      // Brand
      'luxury': 'luxury',
      'corporate': 'corporate',
      'playful': 'playful',
      'handcrafted': 'handcrafted',
      'retro': 'retro',
      // Mixed
      'swiss-glass': 'swiss-glass',
      'brutal-cyber': 'brutal-cyber',
      'minimal-luxury': 'minimal-luxury',
      'editorial-max': 'editorial-max',
      'retro-futurism': 'retro-futurism',
      'nature-tech': 'nature-tech'
    };
    
    return layoutMap[id] || 'default';
  };

  const layout = getPreviewLayout();

  return (
    <div className={`website-preview ${layout}`} style={{ 
      '--primary': colors[0],
      '--secondary': colors[1] || colors[0],
      '--accent': colors[2] || colors[0],
      '--dark': colors[3] || '#000',
      '--light': colors[4] || '#fff',
    } as React.CSSProperties}>
      {/* SWISS - Asymmetric grid, red accent */}
      {layout === 'swiss' && (
        <div className="preview-swiss">
          <div className="swiss-grid">
            <div className="swiss-block swiss-red" style={{background: colors[0]}}></div>
            <div className="swiss-block swiss-large">
              <span className="swiss-title">OBJECTIVE</span>
              <span className="swiss-sub">CLARITY</span>
            </div>
            <div className="swiss-block swiss-text">Helvetica</div>
            <div className="swiss-block swiss-img"></div>
          </div>
        </div>
      )}

      {/* MODERNISM - Pure function, no decoration */}
      {layout === 'modernism' && (
        <div className="preview-modernism">
          <div className="mod-hero">
            <div className="mod-line"></div>
            <h1 className="mod-title">FORM</h1>
            <p className="mod-follows">FOLLOWS FUNCTION</p>
            <div className="mod-line"></div>
          </div>
          <div className="mod-blocks">
            <div className="mod-block"></div>
            <div className="mod-block mod-tall"></div>
            <div className="mod-block"></div>
          </div>
        </div>
      )}

      {/* BAUHAUS - Geometric, primary colors */}
      {layout === 'bauhaus' && (
        <div className="preview-bauhaus">
          <div className="bauhaus-circle" style={{background: colors[0]}}></div>
          <div className="bauhaus-triangle"></div>
          <div className="bauhaus-rect" style={{background: colors[1]}}></div>
          <div className="bauhaus-text">BAUHAUS</div>
        </div>
      )}

      {/* MID-CENTURY - Warm, organic curves */}
      {layout === 'midcentury' && (
        <div className="preview-midcentury">
          <div className="mc-shape mc-blob"></div>
          <div className="mc-content">
            <h2 className="mc-title">Organic<br/>Modern</h2>
            <div className="mc-chair"></div>
          </div>
        </div>
      )}

      {/* MINIMALISM - Extreme whitespace */}
      {layout === 'minimalism' && (
        <div className="preview-minimalism">
          <div className="min-content">
            <h1 className="min-title">less</h1>
            <div className="min-divider"></div>
            <p className="min-sub">is more</p>
          </div>
        </div>
      )}

      {/* EDITORIAL - Magazine layout */}
      {layout === 'editorial' && (
        <div className="preview-editorial">
          <div className="ed-mast">Vogue</div>
          <div className="ed-hero">
            <h1 className="ed-title">The Art<br/>of Fashion</h1>
            <div className="ed-sidebar">
              <div className="ed-line"></div>
              <div className="ed-line short"></div>
            </div>
          </div>
        </div>
      )}

      {/* FLAT - No depth, simple shapes */}
      {layout === 'flat' && (
        <div className="preview-flat">
          <div className="flat-nav">
            <span className="flat-logo">☰</span>
            <div className="flat-icons">
              <span className="flat-icon" style={{background: colors[0]}}></span>
              <span className="flat-icon" style={{background: colors[1]}}></span>
              <span className="flat-icon" style={{background: colors[2]}}></span>
            </div>
          </div>
          <div className="flat-cards">
            <div className="flat-card" style={{background: colors[0]}}>
              <span className="flat-symbol">★</span>
            </div>
            <div className="flat-card" style={{background: colors[1]}}>
              <span className="flat-symbol">♥</span>
            </div>
            <div className="flat-card" style={{background: colors[2]}}>
              <span className="flat-symbol">◆</span>
            </div>
          </div>
        </div>
      )}

      {/* MATERIAL - Elevated cards, shadows */}
      {layout === 'material' && (
        <div className="preview-material">
          <div className="mat-fab" style={{background: colors[0]}}>+</div>
          <div className="mat-cards">
            <div className="mat-card mat-elevated">
              <div className="mat-header" style={{background: colors[0]}}></div>
              <div className="mat-body">
                <div className="mat-line"></div>
                <div className="mat-line short"></div>
              </div>
            </div>
            <div className="mat-card">
              <div className="mat-header" style={{background: colors[1]}}></div>
              <div className="mat-body">
                <div className="mat-line"></div>
                <div className="mat-line short"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NEUMORPHISM - Soft shadows */}
      {layout === 'neumorphism' && (
        <div className="preview-neumorphism">
          <div className="neu-container">
            <div className="neu-btn neu-pressed">✓</div>
            <div className="neu-slider">
              <div className="neu-thumb"></div>
            </div>
            <div className="neu-card">
              <div className="neu-avatar"></div>
              <div className="neu-lines">
                <div className="neu-line"></div>
                <div className="neu-line short"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GLASS - Frosted transparency */}
      {layout === 'glass' && (
        <div className="preview-glass">
          <div className="glass-bg-shapes">
            <div className="shape s1" style={{background: colors[0]}}></div>
            <div className="shape s2" style={{background: colors[1]}}></div>
          </div>
          <div className="glass-card">
            <div className="glass-header">
              <div className="avatar"></div>
              <div className="lines">
                <div className="line"></div>
                <div className="line short"></div>
              </div>
            </div>
            <div className="glass-content">
              <div className="g-block"></div>
              <div className="g-block"></div>
            </div>
          </div>
        </div>
      )}

      {/* BRUTALIST - Raw, harsh */}
      {layout === 'brutalist' && (
        <div className="preview-brutalist">
          <div className="brutalist-header" style={{background: colors[0], color: colors[2] || '#fff'}}>!! WARNING !!</div>
          <h1 className="brutalist-title">RAW<br/>DATA</h1>
          <div className="brutalist-blocks">
            <div className="b-block" style={{background: colors[0]}}></div>
            <div className="b-block" style={{background: colors[1]}}></div>
            <div className="b-block" style={{background: colors[2]}}></div>
          </div>
          <div className="brutalist-marquee">
            <span>NO DESIGN IS GOOD DESIGN NO DESIGN IS GOOD DESIGN</span>
          </div>
        </div>
      )}

      {/* CLEAN UI - Apple-like minimal */}
      {layout === 'cleanui' && (
        <div className="preview-cleanui">
          <nav className="clean-nav">
            <span className="clean-logo">Brand</span>
            <div className="clean-links">
              <span>Product</span>
              <span>Features</span>
              <span>Pricing</span>
            </div>
          </nav>
          <div className="clean-hero">
            <h1 className="clean-title">Simple.</h1>
            <p className="clean-sub">Beautifully minimal.</p>
            <button className="clean-btn">Learn more →</button>
          </div>
        </div>
      )}

      {/* TYPOGRAPHIC - Type as hero */}
      {layout === 'typographic' && (
        <div className="preview-typographic">
          <div className="typ-letters">
            <span className="typ-letter" style={{color: colors[0]}}>A</span>
            <span className="typ-letter" style={{color: colors[1]}}>a</span>
            <span className="typ-letter" style={{color: colors[2]}}>!</span>
          </div>
          <div className="typ-text">
            <h1 className="typ-headline">TYPOGRAPHY<br/>IS THE DESIGN</h1>
          </div>
        </div>
      )}

      {/* SWISS TYPOGRAPHY - Grid-based type */}
      {layout === 'swisstypography' && (
        <div className="preview-swisstypography">
          <div className="st-grid">
            <div className="st-item st-red" style={{background: colors[0]}}></div>
            <div className="st-item st-text">
              <span className="st-helv">HELVETICA</span>
            </div>
            <div className="st-item st-large">NEUE</div>
            <div className="st-item st-num">57</div>
          </div>
        </div>
      )}

      {/* EXPERIMENTAL - Broken, expressive */}
      {layout === 'experimental' && (
        <div className="preview-experimental">
          <div className="exp-text exp-rotated" style={{color: colors[0]}}>BROKEN</div>
          <div className="exp-text exp-offset" style={{color: colors[1]}}>GRID</div>
          <div className="exp-shape"></div>
          <div className="exp-text exp-small">experimental</div>
        </div>
      )}

      {/* EDITORIAL MAX - Oversized type */}
      {layout === 'editorialmax' && (
        <div className="preview-editorialmax">
          <h1 className="edmax-title">
            <span className="edmax-line1" style={{color: colors[0]}}>BIG</span>
            <span className="edmax-line2" style={{color: colors[1]}}>TYPE</span>
          </h1>
          <div className="edmax-small">oversized and dramatic</div>
        </div>
      )}

      {/* MAXIMALISM - Bold, chaotic */}
      {layout === 'maximal' && (
        <div className="preview-maximal">
          <div className="max-shapes">
            <div className="m-shape s1" style={{background: colors[0]}}></div>
            <div className="m-shape s2" style={{background: colors[1]}}></div>
            <div className="m-shape s3" style={{background: colors[2]}}></div>
            <div className="m-shape s4" style={{background: colors[3]}}></div>
            <div className="m-shape s5" style={{background: colors[4]}}></div>
          </div>
          <h1 className="max-title">MORE<br/>IS MORE</h1>
        </div>
      )}

      {/* PSYCHEDELIC - Flowing gradients */}
      {layout === 'psychedelic' && (
        <div className="preview-psychedelic">
          <div className="psy-bg"></div>
          <div className="psy-waves">
            <div className="psy-wave" style={{borderColor: colors[0]}}></div>
            <div className="psy-wave" style={{borderColor: colors[1]}}></div>
            <div className="psy-wave" style={{borderColor: colors[2]}}></div>
          </div>
          <h1 className="psy-title">TRIPPY</h1>
        </div>
      )}

      {/* SURREALISM - Dreamlike juxtapositions */}
      {layout === 'surrealism' && (
        <div className="preview-surrealism">
          <div className="surr-moon"></div>
          <div className="surr-eye" style={{borderColor: colors[0]}}></div>
          <div className="surr-cloud" style={{background: colors[1]}}></div>
          <div className="surr-text">DREAM</div>
        </div>
      )}

      {/* COLLAGE - Cut and paste */}
      {layout === 'collage' && (
        <div className="preview-collage">
          <div className="col-piece col-torn" style={{background: colors[0]}}></div>
          <div className="col-piece col-photo"></div>
          <div className="col-piece col-text" style={{background: colors[1]}}>
            <span>COPY</span>
          </div>
          <div className="col-piece col-tape"></div>
        </div>
      )}

      {/* ILLUSTRATIVE - Hand-drawn feel */}
      {layout === 'illustrative' && (
        <div className="preview-illustrative">
          <div className="ill-scene">
            <div className="ill-sun"></div>
            <div className="ill-hill"></div>
            <div className="ill-tree">
              <div className="ill-trunk"></div>
              <div className="ill-leaves"></div>
            </div>
          </div>
          <h2 className="ill-title">Hello World!</h2>
        </div>
      )}

      {/* FUTURISM - Tech, neon */}
      {layout === 'futurism' && (
        <div className="preview-futurism">
          <div className="fut-grid"></div>
          <div className="fut-hud">
            <div className="fut-ring" style={{borderColor: colors[0]}}></div>
            <div className="fut-ring inner" style={{borderColor: colors[1]}}></div>
          </div>
          <div className="fut-text">2077</div>
        </div>
      )}

      {/* CYBERPUNK - Neon, glitch */}
      {layout === 'cyberpunk' && (
        <div className="preview-cyberpunk">
          <div className="cyb-grid"></div>
          <div className="cyb-lines">
            <div className="cyb-line" style={{background: colors[0]}}></div>
            <div className="cyb-line" style={{background: colors[1]}}></div>
          </div>
          <h1 className="cyb-title">
            <span className="cyb-glitch" style={{color: colors[0]}}>NEON</span>
            <span className="cyb-glitch" style={{color: colors[1]}}>CITY</span>
          </h1>
        </div>
      )}

      {/* TERMINAL - AI Command Center */}
      {layout === 'terminal' && (
        <div className="preview-terminal">
          <div className="term-status">
            <span className="term-dot"></span>
            <span>SYSTEM ONLINE</span>
          </div>
          <div className="term-header">
            <span className="term-title">DRISHTI // AI COMMAND CENTER</span>
            <span className="term-build">v2.0.14</span>
          </div>
          <div className="term-readouts">
            <span>Neural Stream: <strong>ACTIVE</strong></span>
            <span>Agent Swarm: <strong>READY</strong></span>
          </div>
          <div className="term-prompt">
            <span className="term-prompt-symbol">{">"}</span>
            <span className="term-prompt-text">Enter command...</span>
            <span className="term-cursor">█</span>
          </div>
          <div className="term-logs">
            <div className="term-log">IDLE — Waiting for signals...</div>
            <div className="term-log">Neural Stream Active</div>
          </div>
        </div>
      )}

      {/* DATA - Charts, infographics */}
      {layout === 'data' && (
        <div className="preview-data">
          <div className="data-chart">
            <div className="data-bar" style={{height: '60%', background: colors[0]}}></div>
            <div className="data-bar" style={{height: '80%', background: colors[1]}}></div>
            <div className="data-bar" style={{height: '45%', background: colors[2]}}></div>
            <div className="data-bar" style={{height: '90%', background: colors[3]}}></div>
          </div>
          <div className="data-pie" style={{background: `conic-gradient(${colors[0]} 0deg 90deg, ${colors[1]} 90deg 180deg, ${colors[2]} 180deg 270deg, ${colors[3]} 270deg)`}}></div>
        </div>
      )}

      {/* ALGORITHMIC - Generative, procedural */}
      {layout === 'algorithmic' && (
        <div className="preview-algorithmic">
          <div className="algo-grid">
            {Array.from({length: 16}).map((_, i) => (
              <div 
                key={i} 
                className="algo-cell"
                style={{
                  background: i % 3 === 0 ? colors[0] : i % 2 === 0 ? colors[1] : colors[2],
                  opacity: 0.3 + (i % 5) * 0.15
                }}
              ></div>
            ))}
          </div>
          <div className="algo-text">GEN-01</div>
        </div>
      )}

      {/* LUXURY - Premium, exclusive */}
      {layout === 'luxury' && (
        <div className="preview-luxury">
          <div className="lux-crest">✦</div>
          <h1 className="lux-title">MAISON</h1>
          <p className="lux-sub">Since 1894</p>
          <div className="lux-line"></div>
        </div>
      )}

      {/* CORPORATE - Safe, professional */}
      {layout === 'corporate' && (
        <div className="preview-corporate">
          <nav className="corp-nav">
            <span className="corp-logo">◆ ACME Corp</span>
            <div className="corp-menu">Solutions | About | Contact</div>
          </nav>
          <div className="corp-hero">
            <h1 className="corp-title">Enterprise Solutions</h1>
            <div className="corp-blocks">
              <div className="corp-block" style={{background: colors[0]}}></div>
              <div className="corp-block" style={{background: colors[1]}}></div>
              <div className="corp-block" style={{background: colors[2]}}></div>
            </div>
          </div>
        </div>
      )}

      {/* PLAYFUL - Friendly, rounded */}
      {layout === 'playful' && (
        <div className="preview-playful">
          <div className="play-shapes">
            <div className="play-shape" style={{background: colors[0]}}></div>
            <div className="play-shape" style={{background: colors[1]}}></div>
            <div className="play-shape" style={{background: colors[2]}}></div>
          </div>
          <h1 className="play-title">Yay!</h1>
          <div className="play-btn" style={{background: colors[0]}}>Start</div>
        </div>
      )}

      {/* HANDCRAFTED - Organic, imperfect */}
      {layout === 'handcrafted' && (
        <div className="preview-handcrafted">
          <div className="hand-stamp">HANDMADE</div>
          <div className="hand-paper">
            <h2 className="hand-title">Artisan</h2>
            <div className="hand-line wavy"></div>
            <div className="hand-line"></div>
          </div>
        </div>
      )}

      {/* RETRO - 70s/80s vibes */}
      {layout === 'retro' && (
        <div className="preview-retro">
          <div className="ret-sun">
            <div className="ret-stripes"></div>
          </div>
          <h1 className="ret-title">COOL</h1>
          <div className="ret-grid">
            <div className="ret-square" style={{background: colors[0]}}></div>
            <div className="ret-square" style={{background: colors[1]}}></div>
            <div className="ret-square" style={{background: colors[2]}}></div>
            <div className="ret-square" style={{background: colors[3]}}></div>
          </div>
        </div>
      )}

      {/* DEFAULT fallback */}
      {layout === 'default' && (
        <div className="preview-default">
          <nav className="preview-nav">
            <span className="logo" style={{color: colors[0]}}>Brand</span>
            <div className="links">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
          <div className="hero">
            <h1 style={{color: colors[3]}}>Welcome</h1>
            <p style={{color: colors[3]}}>Your tagline here</p>
          </div>
          <div className="cards">
            <div className="card" style={{background: colors[0]}}></div>
            <div className="card" style={{background: colors[1] || colors[0]}}></div>
            <div className="card" style={{background: colors[2] || colors[0]}}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
