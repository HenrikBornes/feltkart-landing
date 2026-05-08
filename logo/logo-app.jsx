// FeltKart logo — completely fresh concepts. No shields, no pins, no monogram-in-a-box.
// Brand colors stay: navy #07223c, emerald #10b981, cream #f4f9fd
// Themes explored: terrain/field, plotted territory, walking routes, GPS coordinates, type as mark.

const PALETTE = {
  navy: '#07223c',
  navyDeep: '#020b14',
  navyMid: '#0c2d4a',
  navySoft: '#103858',
  emerald: '#10b981',
  emeraldLight: '#6ee7b7',
  emeraldDark: '#047857',
  cream: '#f4f9fd',
  paper: '#f8f6f1',
  ink: '#0a1822',
};

// ─────────────────────────────────────────────────────────
// Concept A — "Plot"
// FK rendered as plotted GPS points; the mark IS the act of mapping.
// Two clusters of dots form F and K shapes. Letterforms emerge from data.
// ─────────────────────────────────────────────────────────
function LogoPlot({ size = 220, dark = false }) {
  const accent = PALETTE.emerald;
  const ink = dark ? PALETTE.cream : PALETTE.navy;

  // F-shape and K-shape as scatter points
  const fPoints = [
    [10, 8], [10, 22], [10, 36], [10, 50], [10, 64], [10, 78], [10, 92],
    [22, 8], [34, 8], [46, 8], [58, 8],
    [22, 46], [34, 46], [46, 46],
  ];
  const kPoints = [
    [78, 8], [78, 22], [78, 36], [78, 50], [78, 64], [78, 78], [78, 92],
    [90, 36], [102, 22], [114, 8],
    [90, 56], [102, 72], [114, 92],
  ];

  return (
    <svg viewBox="-6 -6 134 110" width={size} height={size * 110 / 134} style={{ display: 'block' }}>
      {/* connection lines — hint at routes between points */}
      <g stroke={accent} strokeWidth="0.5" opacity="0.35" fill="none">
        <line x1="10" y1="8" x2="58" y2="8"/>
        <line x1="10" y1="46" x2="46" y2="46"/>
        <line x1="10" y1="8" x2="10" y2="92"/>
        <line x1="78" y1="8" x2="78" y2="92"/>
        <line x1="78" y1="46" x2="114" y2="8"/>
        <line x1="78" y1="46" x2="114" y2="92"/>
      </g>
      {fPoints.map(([x, y], i) => (
        <circle key={`f${i}`} cx={x} cy={y} r="3.2" fill={ink}/>
      ))}
      {kPoints.map(([x, y], i) => (
        <circle key={`k${i}`} cx={x} cy={y} r="3.2" fill={accent}/>
      ))}
      {/* one larger "you are here" point at the F-K junction */}
      <circle cx="78" cy="46" r="5" fill={accent}/>
      <circle cx="78" cy="46" r="9" fill="none" stroke={accent} strokeWidth="1" opacity="0.5"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Concept B — "Terreng" (Terrain)
// Single custom-drawn lowercase "fk" ligature where the f's terminal
// flows into k like a river/path. Strong type-as-symbol.
// ─────────────────────────────────────────────────────────
function LogoTerreng({ size = 220, dark = false }) {
  const ink = dark ? PALETTE.cream : PALETTE.navy;
  const accent = PALETTE.emerald;

  return (
    <svg viewBox="0 0 220 110" width={size} height={size * 110 / 220} style={{ display: 'block' }}>
      {/* Custom f — tall ascender, hook on left, crossbar */}
      <path
        d="M 32 16
           C 32 8, 40 4, 50 4
           L 58 4
           L 58 16
           L 50 16
           C 46 16, 46 18, 46 22
           L 46 36
           L 60 36
           L 60 48
           L 46 48
           L 46 102
           L 32 102
           Z"
        fill={ink}
      />
      {/* Crossbar extension that becomes a route into the K */}
      <path
        d="M 60 42
           Q 90 42, 110 36
           Q 130 30, 140 30"
        stroke={accent} strokeWidth="6" fill="none" strokeLinecap="round"
      />
      {/* k — pure stroke construction */}
      <path
        d="M 116 4 L 116 102"
        stroke={ink} strokeWidth="14" strokeLinecap="square"
      />
      {/* upper k diagonal */}
      <path
        d="M 123 60 L 178 16"
        stroke={ink} strokeWidth="14" strokeLinecap="square"
      />
      {/* lower k diagonal — emerald (the signature stroke) */}
      <path
        d="M 123 60 L 188 102"
        stroke={accent} strokeWidth="14" strokeLinecap="square"
      />
      {/* Coordinate dot at the f's hook to suggest origin */}
      <circle cx="50" cy="10" r="3" fill={accent}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Concept C — "Stien" (The Path)
// A single continuous emerald stroke draws a path that forms F → arrow → K.
// Suggests a walking route, narrative, journey through territory.
// ─────────────────────────────────────────────────────────
function LogoStien({ size = 220, dark = false }) {
  const ink = dark ? PALETTE.cream : PALETTE.navy;
  const accent = PALETTE.emerald;

  return (
    <svg viewBox="0 0 220 120" width={size} height={size * 120 / 220} style={{ display: 'block' }}>
      {/* Underlying coordinate grid hint */}
      <defs>
        <pattern id="stien-grid" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="0" cy="0" r="0.6" fill={ink} opacity="0.18"/>
        </pattern>
      </defs>
      <rect width="220" height="120" fill="url(#stien-grid)"/>

      {/* The path — one continuous gesture */}
      <path
        d="M 12 108
           L 12 16
           L 60 16
           L 60 28
           L 24 28
           L 24 56
           L 56 56
           L 56 68
           L 24 68
           Q 70 68, 100 60
           Q 130 52, 140 56
           L 200 12"
        stroke={accent} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* K's spine and lower diagonal continue */}
      <path
        d="M 140 56 L 140 108
           M 140 70 L 200 108"
        stroke={ink} strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Coordinate markers along the path */}
      <circle cx="12" cy="108" r="4" fill={accent}/>
      <circle cx="140" cy="56" r="5" fill={accent} stroke={dark ? PALETTE.navyDeep : PALETTE.cream} strokeWidth="2"/>
      <circle cx="200" cy="12" r="4" fill={accent}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Concept D — "Koordinat"
// Coordinate-style FK: each letter is built from coordinate brackets
// like "[ F ]" with degree marks. Editorial, cartographic feel.
// ─────────────────────────────────────────────────────────
function LogoKoordinat({ size = 220, dark = false }) {
  const ink = dark ? PALETTE.cream : PALETTE.navy;
  const accent = PALETTE.emerald;

  return (
    <svg viewBox="0 0 240 110" width={size} height={size * 110 / 240} style={{ display: 'block' }}>
      {/* Tick brackets — top */}
      <g stroke={ink} strokeWidth="1.8" fill="none">
        <path d="M 8 6 L 8 14"/>
        <path d="M 8 6 L 16 6"/>
        <path d="M 232 6 L 232 14"/>
        <path d="M 232 6 L 224 6"/>
        <path d="M 8 104 L 8 96"/>
        <path d="M 8 104 L 16 104"/>
        <path d="M 232 104 L 232 96"/>
        <path d="M 232 104 L 224 96"/>
      </g>
      {/* Coordinates label */}
      <text x="120" y="9" fill={ink} opacity="0.55" fontFamily="ui-monospace, JetBrains Mono, monospace" fontSize="6.5" textAnchor="middle" letterSpacing="2">59.9139° N · 10.7522° E</text>

      {/* F — geometric, condensed */}
      <g transform="translate(40, 22)">
        <rect x="0" y="0" width="14" height="72" fill={ink}/>
        <rect x="0" y="0" width="48" height="14" fill={ink}/>
        <rect x="0" y="30" width="34" height="12" fill={ink}/>
      </g>

      {/* Center dot — the coordinate */}
      <g transform="translate(120, 58)">
        <circle r="3" fill={accent}/>
        <line x1="-10" y1="0" x2="-5" y2="0" stroke={accent} strokeWidth="1.2"/>
        <line x1="5" y1="0" x2="10" y2="0" stroke={accent} strokeWidth="1.2"/>
        <line x1="0" y1="-10" x2="0" y2="-5" stroke={accent} strokeWidth="1.2"/>
        <line x1="0" y1="5" x2="0" y2="10" stroke={accent} strokeWidth="1.2"/>
      </g>

      {/* K — geometric, with one emerald diagonal */}
      <g transform="translate(150, 22)">
        <rect x="0" y="0" width="14" height="72" fill={ink}/>
        <polygon points="14,46 36,14 50,14 24,46" fill={ink}/>
        <polygon points="14,46 50,78 36,78 14,72" fill={accent}/>
      </g>

      {/* Bottom coordinate label */}
      <text x="120" y="100" fill={ink} opacity="0.55" fontFamily="ui-monospace, JetBrains Mono, monospace" fontSize="6.5" textAnchor="middle" letterSpacing="3">F E L T K A R T</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Concept E — "Markert" (The Marked Plot)
// A square of land — the "felt" — divided into plots. One plot
// is highlighted emerald (the active territory). Letterforms
// implied by the grid pattern.
// ─────────────────────────────────────────────────────────
function LogoMarkert({ size = 220, dark = false }) {
  const ink = dark ? PALETTE.cream : PALETTE.navy;
  const accent = PALETTE.emerald;
  const stroke = dark ? 'rgba(244,249,253,0.25)' : 'rgba(7,34,60,0.18)';

  return (
    <svg viewBox="0 0 120 120" width={size} height={size} style={{ display: 'block' }}>
      {/* outer plot */}
      <rect x="6" y="6" width="108" height="108" fill="none" stroke={ink} strokeWidth="2"/>

      {/* internal subdivisions — like cadastral parcels */}
      <line x1="36" y1="6" x2="36" y2="60" stroke={stroke} strokeWidth="1"/>
      <line x1="6" y1="42" x2="60" y2="42" stroke={stroke} strokeWidth="1"/>
      <line x1="60" y1="6" x2="60" y2="114" stroke={stroke} strokeWidth="1"/>
      <line x1="60" y1="78" x2="114" y2="78" stroke={stroke} strokeWidth="1"/>
      <line x1="84" y1="42" x2="84" y2="78" stroke={stroke} strokeWidth="1"/>
      <line x1="6" y1="78" x2="60" y2="78" stroke={stroke} strokeWidth="1"/>

      {/* The "F" plot — three filled cells in upper-left quadrant */}
      <rect x="6" y="6" width="30" height="36" fill={ink} opacity="0.92"/>
      <rect x="6" y="42" width="30" height="36" fill={ink} opacity="0.92"/>
      <rect x="36" y="6" width="24" height="14" fill={ink} opacity="0.92"/>
      <rect x="36" y="32" width="18" height="10" fill={ink} opacity="0.92"/>

      {/* The "K" plot — emerald active territory */}
      <rect x="60" y="42" width="24" height="72" fill={accent}/>
      <polygon points="84,78 108,42 114,42 96,78" fill={accent}/>
      <polygon points="84,78 108,114 114,114 96,78" fill={accent}/>

      {/* Pin marker on active plot */}
      <circle cx="72" cy="78" r="4" fill={dark ? PALETTE.cream : '#fff'}/>
      <circle cx="72" cy="78" r="2" fill={accent}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Concept F — "Vandring" (The Walk)
// Pure typography. Custom geometric F+K, where the F's crossbar
// extends into a long horizontal that becomes the K's first diagonal —
// drawn as a single bent stroke. Reads instantly as both letters.
// ─────────────────────────────────────────────────────────
function LogoVandring({ size = 220, dark = false }) {
  const ink = dark ? PALETTE.cream : PALETTE.navy;
  const accent = PALETTE.emerald;

  return (
    <svg viewBox="0 0 240 100" width={size} height={size * 100 / 240} style={{ display: 'block' }}>
      {/* F vertical */}
      <rect x="6" y="0" width="14" height="100" fill={ink}/>
      {/* F top arm */}
      <rect x="6" y="0" width="68" height="14" fill={ink}/>

      {/* The connecting stroke: F crossbar → K upper diagonal (one continuous bent line) */}
      <path
        d="M 6 42 L 56 42 L 168 6"
        stroke={accent} strokeWidth="14" fill="none" strokeLinejoin="miter"
      />

      {/* K vertical */}
      <rect x="148" y="0" width="14" height="100" fill={ink}/>
      {/* K lower diagonal */}
      <path
        d="M 162 50 L 230 100 L 210 100 L 162 64 Z"
        fill={ink}
      />
      {/* small node where the stroke "lands" on the K spine */}
      <circle cx="162" cy="14" r="5" fill={ink}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Concept G — "Kompassrose"
// Asymmetric: a compass rose where two of the four arms form F and K.
// More abstract — a navigation symbol first, monogram second.
// ─────────────────────────────────────────────────────────
function LogoKompassrose({ size = 220, dark = false }) {
  const ink = dark ? PALETTE.cream : PALETTE.navy;
  const accent = PALETTE.emerald;

  return (
    <svg viewBox="0 0 140 140" width={size} height={size} style={{ display: 'block' }}>
      {/* Faint outer ring */}
      <circle cx="70" cy="70" r="66" fill="none" stroke={ink} strokeWidth="0.8" opacity="0.3"/>

      {/* F as a north arrow */}
      <polygon points="70,8 58,52 70,46 82,52" fill={ink}/>
      {/* F crossbar — emerald */}
      <rect x="56" y="32" width="28" height="6" fill={accent}/>

      {/* East arm — emerald (subtle pointer) */}
      <polygon points="132,70 96,62 102,70 96,78" fill={accent} opacity="0.85"/>

      {/* K — south-west, opening outward like compass arms */}
      {/* K spine: vertical going down from center */}
      <rect x="67" y="76" width="6" height="56" fill={ink}/>
      {/* K upper diagonal — west-south */}
      <path d="M 70 96 L 26 76 L 26 84 L 70 104 Z" fill={ink}/>
      {/* K lower diagonal — east-south */}
      <path d="M 70 100 L 114 122 L 114 114 L 70 92 Z" fill={ink}/>

      {/* Center jewel */}
      <circle cx="70" cy="70" r="6" fill={dark ? PALETTE.navy : PALETTE.cream}/>
      <circle cx="70" cy="70" r="3" fill={accent}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Concept H — "Krafttegnet" (The Power Mark)
// Bold, single-form mark. F and K share both verticals AND the
// crossbar position. Reads as a tightly nested ligature.
// ─────────────────────────────────────────────────────────
function LogoKraftteg({ size = 220, dark = false }) {
  const ink = dark ? PALETTE.cream : PALETTE.navy;
  const accent = PALETTE.emerald;

  return (
    <svg viewBox="0 0 130 130" width={size} height={size} style={{ display: 'block' }}>
      {/* The mark is a single chunky form */}
      {/* Left vertical (shared spine for F) */}
      <rect x="14" y="14" width="22" height="102" fill={ink}/>
      {/* Top arm */}
      <rect x="14" y="14" width="86" height="22" fill={ink}/>
      {/* The F's middle bar — but it ALSO becomes the K's pivot */}
      <rect x="14" y="58" width="62" height="20" fill={ink}/>

      {/* K diagonal stroke — emerald, dramatic */}
      <path d="M 76 58 L 116 14 L 116 36 L 92 58 L 116 80 L 116 102 L 76 78 Z" fill={accent}/>

      {/* small dot for craft / coordinate hint */}
      <circle cx="106" cy="116" r="4" fill={accent}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// Wordmark
// ─────────────────────────────────────────────────────────
function Wordmark({ color, accent, size = 28, gap = 10, mark = null, weight = 700 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap }}>
      {mark}
      <span style={{
        fontSize: size, fontWeight: weight, color,
        letterSpacing: '-0.025em',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        Felt<span style={{ color: accent || color }}>Kart</span>
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Showcase tile — three sizes + wordmark + dark background test
// ─────────────────────────────────────────────────────────
function ShowcaseTile({ Mark, name, no, description }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'grid', gridTemplateRows: '1fr 1fr',
      background: PALETTE.paper,
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      {/* Top: light bg, large mark */}
      <div style={{
        padding: '32px 28px 12px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        background: PALETTE.paper,
        position: 'relative', borderBottom: `1px solid rgba(7,34,60,0.08)`,
      }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'rgba(7,34,60,0.45)',
        }}>
          <span>Konsept {no}</span>
          <span>{name}</span>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Mark size={170}/>
        </div>
        <div style={{
          fontSize: 11, color: PALETTE.navy, opacity: 0.75,
          textAlign: 'center', maxWidth: 280, alignSelf: 'center',
          lineHeight: 1.45, fontStyle: 'italic',
        }}>{description}</div>
      </div>

      {/* Bottom: dark bg, scale test + wordmark */}
      <div style={{
        background: PALETTE.navyDeep,
        padding: '20px 28px',
        display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, justifyContent: 'center' }}>
          <Mark size={56} dark/>
          <div style={{ width: 1, height: 32, background: 'rgba(244,249,253,0.15)' }}/>
          <Mark size={32} dark/>
          <div style={{ width: 1, height: 32, background: 'rgba(244,249,253,0.15)' }}/>
          <Mark size={20} dark/>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          paddingTop: 14, borderTop: '1px solid rgba(244,249,253,0.1)',
        }}>
          <Mark size={26} dark/>
          <span style={{
            fontSize: 18, fontWeight: 700, color: PALETTE.cream,
            letterSpacing: '-0.02em',
          }}>Felt<span style={{ color: PALETTE.emerald }}>Kart</span></span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Editorial hero — present concept on a magazine-style spread
// ─────────────────────────────────────────────────────────
function EditorialHero({ Mark, conceptName, theme, idea }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: PALETTE.paper,
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      fontFamily: 'Inter, system-ui, sans-serif',
      position: 'relative',
    }}>
      {/* Left — text */}
      <div style={{
        padding: 60, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        borderRight: `1px solid rgba(7,34,60,0.08)`,
      }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase',
          color: PALETTE.emerald,
        }}>FeltKart · Identitet</div>

        <div>
          <div style={{
            fontSize: 14, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(7,34,60,0.45)', marginBottom: 12,
          }}>{theme}</div>
          <div style={{
            fontSize: 56, fontWeight: 700, color: PALETTE.navy,
            letterSpacing: '-0.035em', lineHeight: 1.0, fontVariantLigatures: 'common-ligatures',
          }}>{conceptName}</div>
          <div style={{
            marginTop: 24, fontSize: 16, color: PALETTE.navy, opacity: 0.7,
            lineHeight: 1.55, maxWidth: 380,
          }}>{idea}</div>
        </div>

        <div style={{
          fontSize: 10, fontFamily: 'ui-monospace, JetBrains Mono, monospace',
          color: 'rgba(7,34,60,0.4)', letterSpacing: '0.15em',
        }}>NAVY · EMERALD · CREAM</div>
      </div>

      {/* Right — mark in deep navy */}
      <div style={{
        background: `radial-gradient(ellipse at 60% 40%, ${PALETTE.navyMid}, ${PALETTE.navyDeep})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(rgba(16,185,129,0.18) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
        }}/>
        <Mark size={300} dark/>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// App icon mockup — beauty shot for chosen direction
// ─────────────────────────────────────────────────────────
function IconShowcase({ Mark }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: PALETTE.paper,
      padding: 50,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 36, fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'rgba(7,34,60,0.45)',
      }}>App-ikon · skalering</div>

      <div style={{
        width: 200, height: 200, borderRadius: 44,
        background: `linear-gradient(160deg, ${PALETTE.navyMid}, ${PALETTE.navy})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 32px 60px rgba(7,34,60,0.28)',
      }}>
        <Mark size={130} dark/>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {[80, 56, 40, 28].map(s => (
          <div key={s} style={{
            width: s, height: s, borderRadius: s * 0.22,
            background: `linear-gradient(160deg, ${PALETTE.navyMid}, ${PALETTE.navy})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(7,34,60,0.2)',
          }}>
            <Mark size={s * 0.62} dark/>
          </div>
        ))}
      </div>

      <div style={{ fontSize: 10, color: 'rgba(7,34,60,0.4)', fontFamily: 'ui-monospace, JetBrains Mono, monospace', letterSpacing: '0.15em' }}>
        200 · 80 · 56 · 40 · 28 PX
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Wordmark studies
// ─────────────────────────────────────────────────────────
function WordmarkStudy({ accent = PALETTE.emerald, dark = false }) {
  const ink = dark ? PALETTE.cream : PALETTE.navy;
  const bg = dark ? PALETTE.navyDeep : PALETTE.paper;
  return (
    <div style={{
      width: '100%', height: '100%', background: bg,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      padding: 40, gap: 28,
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{
        fontSize: 64, fontWeight: 700, color: ink,
        letterSpacing: '-0.04em', display: 'flex', alignItems: 'baseline',
      }}>
        <span>Felt</span>
        <span style={{
          color: accent,
          textDecoration: `underline ${accent}`,
          textDecorationThickness: 4,
          textUnderlineOffset: 8,
        }}>Kart</span>
      </div>
      <div style={{
        fontSize: 9, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase',
        color: dark ? 'rgba(244,249,253,0.45)' : 'rgba(7,34,60,0.45)',
      }}>
        Salgsstyring · I · Felt
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// App root
// ─────────────────────────────────────────────────────────
function App() {
  return (
    <DesignCanvas
      title="FeltKart · Logo — andre runde"
      subtitle="Helt nye retninger. Ingen skjold, ingen pin-kliché. Type, terreng, og kartlegging som råmateriale."
    >
      <DCSection id="hero" title="Hovedretning — Vandring (anbefalt)">
        <DCArtboard id="hero-vandring" label="Editorial hero" width={1080} height={620}>
          <EditorialHero
            Mark={LogoVandring}
            theme="Konsept · Vandring"
            conceptName="Én strek. Fra F til K."
            idea="F's crossbar fortsetter som en emerald linje gjennom tomrommet og lander som K's øvre diagonal. Logoen er en bevegelse, ikke et symbol — selve handlingen å gå fra dør til dør, fra punkt til punkt."
          />
        </DCArtboard>
        <DCArtboard id="hero-app" label="App-ikon" width={520} height={620}>
          <IconShowcase Mark={LogoVandring}/>
        </DCArtboard>
      </DCSection>

      <DCSection id="concepts" title="Åtte retninger">
        <DCArtboard id="c-vandring" label="Konsept A · Vandring" width={460} height={580}>
          <ShowcaseTile
            Mark={LogoVandring}
            no="A"
            name="Vandring"
            description="Én emerald strek bærer F's crossbar over til K's diagonal. Bevegelse som ID."
          />
        </DCArtboard>

        <DCArtboard id="c-stien" label="Konsept B · Stien" width={460} height={580}>
          <ShowcaseTile
            Mark={LogoStien}
            no="B"
            name="Stien"
            description="En sammenhengende rute tegner F → K på et koordinat-rutenett. Logoen er en gå-tur."
          />
        </DCArtboard>

        <DCArtboard id="c-plot" label="Konsept C · Plot" width={460} height={580}>
          <ShowcaseTile
            Mark={LogoPlot}
            no="C"
            name="Plot"
            description="Bokstavene oppstår fra plottede GPS-punkter. Data blir merke."
          />
        </DCArtboard>

        <DCArtboard id="c-markert" label="Konsept D · Markert" width={460} height={580}>
          <ShowcaseTile
            Mark={LogoMarkert}
            no="D"
            name="Markert"
            description="Et stykke land delt opp i parseller. F og K skåret ut som aktive territorier."
          />
        </DCArtboard>

        <DCArtboard id="c-koordinat" label="Konsept E · Koordinat" width={460} height={580}>
          <ShowcaseTile
            Mark={LogoKoordinat}
            no="E"
            name="Koordinat"
            description="Editorial og kartografisk. F og K rammet inn av koordinat-merker og sifre."
          />
        </DCArtboard>

        <DCArtboard id="c-kraft" label="Konsept F · Krafttegn" width={460} height={580}>
          <ShowcaseTile
            Mark={LogoKraftteg}
            no="F"
            name="Krafttegn"
            description="Tett ligatur. F og K deler vertikal og crossbar — én blokk, to bokstaver."
          />
        </DCArtboard>

        <DCArtboard id="c-terreng" label="Konsept G · Terreng" width={460} height={580}>
          <ShowcaseTile
            Mark={LogoTerreng}
            no="G"
            name="Terreng"
            description="Lavkast 'fk' med tegnet ligatur og en elv som forbinder bokstavene."
          />
        </DCArtboard>

        <DCArtboard id="c-kompass" label="Konsept H · Kompassrose" width={460} height={580}>
          <ShowcaseTile
            Mark={LogoKompassrose}
            no="H"
            name="Kompassrose"
            description="Asymmetrisk kompass der to armer er F og K. Et navigasjonssymbol først."
          />
        </DCArtboard>
      </DCSection>

      <DCSection id="wordmarks" title="Wordmark-studier">
        <DCArtboard id="wm-light" label="Wordmark · understreket" width={680} height={320}>
          <WordmarkStudy/>
        </DCArtboard>
        <DCArtboard id="wm-dark" label="Wordmark · mørk" width={680} height={320}>
          <WordmarkStudy dark/>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
