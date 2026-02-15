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
    
    if (id.includes('minimal') || id.includes('swiss')) {
      return 'minimal';
    } else if (id.includes('brutalist')) {
      return 'brutalist';
    } else if (id.includes('cyber') || id.includes('futur')) {
      return 'cyber';
    } else if (id.includes('glass')) {
      return 'glass';
    } else if (id.includes('editorial') || id.includes('typographic')) {
      return 'editorial';
    } else if (id.includes('maximal') || id.includes('psychedelic')) {
      return 'maximal';
    } else if (id.includes('retro')) {
      return 'retro';
    } else if (id.includes('handcraft') || id.includes('organic')) {
      return 'organic';
    }
    
    return 'default';
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
      {/* Minimal Layout */}
      {layout === 'minimal' && (
        <div className="preview-minimal">
          <nav className="preview-nav">
            <span className="logo">Brand</span>
            <div className="links">
              <span>Work</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </nav>
          <div className="hero-minimal">
            <h1>Less is<br/>more.</h1>
          </div>
          <div className="content-grid">
            <div className="content-block"></div>
            <div className="content-block"></div>
            <div className="content-block"></div>
          </div>
        </div>
      )}

      {/* Brutalist Layout */}
      {layout === 'brutalist' && (
        <div className="preview-brutalist">
          <div className="brutalist-header">RAW DESIGN</div>
          <h1 className="brutalist-title">NOT<br/>SORRY</h1>
          <div className="brutalist-blocks">
            <div className="b-block" style={{background: colors[0]}}></div>
            <div className="b-block" style={{background: colors[1]}}></div>
            <div className="b-block" style={{background: colors[2]}}></div>
          </div>
        </div>
      )}

      {/* Cyber Layout */}
      {layout === 'cyber' && (
        <div className="preview-cyber">
          <div className="cyber-grid"></div>
          <nav className="cyber-nav">
            <span className="cyber-logo">◈ SYSTEM</span>
            <div className="cyber-links">
              <span>//home</span>
              <span>//data</span>
              <span>//connect</span>
            </div>
          </nav>
          <div className="cyber-hero">
            <span className="cyber-text">FUTURE</span>
            <span className="cyber-text glow">LOADING</span>
          </div>
          <div className="cyber-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      )}

      {/* Glass Layout */}
      {layout === 'glass' && (
        <div className="preview-glass">
          <div className="glass-bg-shapes">
            <div className="shape s1"></div>
            <div className="shape s2"></div>
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

      {/* Editorial Layout */}
      {layout === 'editorial' && (
        <div className="preview-editorial">
          <div className="editorial-masthead">MAGAZINE</div>
          <h1 className="editorial-title">THE ART<br/>OF DESIGN</h1>
          <div className="editorial-content">
            <div className="ec-main"></div>
            <div className="ec-side">
              <div className="ec-line"></div>
              <div className="ec-line"></div>
              <div className="ec-line"></div>
            </div>
          </div>
        </div>
      )}

      {/* Maximal Layout */}
      {layout === 'maximal' && (
        <div className="preview-maximal">
          <div className="max-shapes">
            <div className="m-shape s1"></div>
            <div className="m-shape s2"></div>
            <div className="m-shape s3"></div>
            <div className="m-shape s4"></div>
            <div className="m-shape s5"></div>
          </div>
          <h1 className="max-title">EVERYTHING<br/>EVERYWHERE</h1>
        </div>
      )}

      {/* Retro Layout */}
      {layout === 'retro' && (
        <div className="preview-retro">
          <div className="retro-header">
            <span className="retro-logo">☮ PEACE</span>
          </div>
          <div className="retro-content">
            <div className="retro-card r1">
              <div className="retro-img"></div>
              <div className="retro-text"></div>
            </div>
            <div className="retro-card r2">
              <div className="retro-img"></div>
              <div className="retro-text"></div>
            </div>
          </div>
          <div className="retro-footer">Est. 1974</div>
        </div>
      )}

      {/* Organic Layout */}
      {layout === 'organic' && (
        <div className="preview-organic">
          <div className="organic-shape"></div>
          <nav className="organic-nav">
            <span className="leaf-icon">🌿</span>
            <span className="organic-brand">Nature</span>
          </nav>
          <div className="organic-hero">
            <div className="organic-circle"></div>
            <h1>From<br/>Earth</h1>
          </div>
        </div>
      )}

      {/* Default/Standard Layout */}
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
