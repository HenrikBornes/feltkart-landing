// Admin onboarding video — scenes
// Loaded after animations.jsx (Stage, Sprite, useTime, useSprite, Easing, animate, interpolate, clamp)

const ADMIN_COLORS = {
  navy: '#07223c',
  navyDark: '#020b14',
  navyMid: '#0c2d4a',
  navySoft: '#103858',
  emerald: '#10b981',
  emeraldSoft: 'rgba(16,185,129,0.14)',
  emeraldBorder: 'rgba(16,185,129,0.4)',
  amber: '#f59e0b',
  red: '#ef4444',
  blue: '#3b82f6',
  purple: '#a855f7',
  border: '#1a4d73',
  borderSoft: '#103858',
  textMuted: '#94a3b8',
  textSecondary: '#cbd5e1',
};

// ── Browser frame chrome ────────────────────────────
function BrowserFrame({ children, url = 'app.feltkart.no/admin', activeNav = 'leverandorer' }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: ADMIN_COLORS.navyDark,
      borderRadius: 14,
      overflow: 'hidden',
      border: `1px solid ${ADMIN_COLORS.border}`,
      boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 16px 40px rgba(16,185,129,0.06)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Title bar */}
      <div style={{
        height: 36, padding: '0 14px',
        background: '#0a0a0a',
        borderBottom: `1px solid ${ADMIN_COLORS.border}`,
        display: 'flex', alignItems: 'center', gap: 14,
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: 99, background: '#ef4444' }}/>
          <span style={{ width: 11, height: 11, borderRadius: 99, background: '#f59e0b' }}/>
          <span style={{ width: 11, height: 11, borderRadius: 99, background: '#10b981' }}/>
        </div>
        <div style={{
          flex: 1, maxWidth: 360, height: 22, borderRadius: 6,
          background: 'rgba(255,255,255,0.06)',
          color: '#cbd5e1', fontSize: 11,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'JetBrains Mono, ui-monospace, monospace',
          letterSpacing: 0.3,
        }}>
          <span style={{ color: ADMIN_COLORS.emerald, marginRight: 4 }}>●</span>
          {url}
        </div>
      </div>

      {/* Body: sidebar + content */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <Sidebar active={activeNav}/>
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: ADMIN_COLORS.navyDark }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Sidebar({ active }) {
  const items = [
    { id: 'dashboard', label: 'Dashboard', ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
    { id: 'kart', label: 'Kart', ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/></svg> },
    { id: 'leverandorer', label: 'Leverandører', ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> },
    { id: 'teams', label: 'Team', ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { id: 'besoksgrunner', label: 'Besøksgrunner', ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
    { id: 'konkurranser', label: 'Konkurranser', ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg> },
    { id: 'okonomi', label: 'Økonomi', ico: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  ];
  return (
    <div style={{
      width: 200, background: ADMIN_COLORS.navy,
      borderRight: `1px solid ${ADMIN_COLORS.border}`,
      padding: '16px 10px',
      display: 'flex', flexDirection: 'column', gap: 14,
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 8px 8px', borderBottom: `1px solid ${ADMIN_COLORS.border}` }}>
        <div style={{
          width: 24, height: 24, borderRadius: 6,
          background: ADMIN_COLORS.emeraldSoft,
          border: `1px solid ${ADMIN_COLORS.emeraldBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke={ADMIN_COLORS.emerald} strokeWidth="1.5"/>
            <circle cx="10" cy="10" r="2" fill={ADMIN_COLORS.emerald}/>
          </svg>
        </div>
        <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>FeltKart</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(it => {
          const isActive = it.id === active;
          return (
            <div key={it.id} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 10px', borderRadius: 7,
              background: isActive ? ADMIN_COLORS.emeraldSoft : 'transparent',
              border: `1px solid ${isActive ? ADMIN_COLORS.emeraldBorder : 'transparent'}`,
              color: isActive ? '#fff' : ADMIN_COLORS.textMuted,
              fontSize: 12, fontWeight: 600,
              transition: 'background 0.3s, color 0.3s',
            }}>
              <span style={{ width: 14, height: 14, color: isActive ? ADMIN_COLORS.emerald : ADMIN_COLORS.textMuted, display: 'inline-block' }}>{it.ico}</span>
              <span>{it.label}</span>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 'auto', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8, borderTop: `1px solid ${ADMIN_COLORS.border}` }}>
        <div style={{ width: 24, height: 24, borderRadius: 99, background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 700 }}>SH</div>
        <div>
          <div style={{ color: '#fff', fontSize: 11, fontWeight: 600 }}>Sondre H.</div>
          <div style={{ color: ADMIN_COLORS.textMuted, fontSize: 9 }}>Admin</div>
        </div>
      </div>
    </div>
  );
}

// ── Cursor ──────────────────────────────────────────
function Cursor({ x, y, clicking = false }) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      pointerEvents: 'none', zIndex: 100,
      transition: 'left 0.5s cubic-bezier(0.4, 0, 0.2, 1), top 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      {clicking && (
        <div style={{
          position: 'absolute', left: -14, top: -14,
          width: 28, height: 28, borderRadius: 99,
          background: 'rgba(16,185,129,0.3)',
          border: `2px solid ${ADMIN_COLORS.emerald}`,
          transform: `scale(${1 + Math.random() * 0.2})`,
          opacity: 0.7,
        }}/>
      )}
      <svg width="22" height="22" viewBox="0 0 22 22" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>
        <path d="M2 2 L2 18 L7 13 L10 19 L13 18 L10 12 L17 12 Z" fill="#fff" stroke="#020b14" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

// ── Scene 1: Intro ──────────────────────────────────
function SceneIntro() {
  const { localTime, duration } = useSprite();
  const t = localTime;
  const exitOpacity = animate({ from: 1, to: 0, start: duration - 0.5, end: duration })(t);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(ellipse at 30% 30%, ${ADMIN_COLORS.navyMid} 0%, ${ADMIN_COLORS.navyDark} 60%)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 60,
      opacity: exitOpacity,
    }}>
      <div style={{ textAlign: 'center', maxWidth: 800 }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: ADMIN_COLORS.emerald, marginBottom: 16,
          opacity: animate({ from: 0, to: 1, start: 0.1, end: 0.6 })(t),
          transform: `translateY(${animate({ from: 12, to: 0, start: 0.1, end: 0.6, ease: Easing.easeOutCubic })(t)}px)`,
        }}>Admin · Onboarding</div>

        <div style={{
          fontSize: 56, fontWeight: 700, color: '#fff',
          letterSpacing: '-0.03em', lineHeight: 1.05,
          opacity: animate({ from: 0, to: 1, start: 0.3, end: 0.9 })(t),
          transform: `translateY(${animate({ from: 18, to: 0, start: 0.3, end: 0.9, ease: Easing.easeOutCubic })(t)}px)`,
        }}>
          Sett opp FeltKart<br/>på under tre minutter.
        </div>

        <div style={{
          marginTop: 24, fontSize: 18, color: ADMIN_COLORS.textSecondary, lineHeight: 1.5,
          opacity: animate({ from: 0, to: 1, start: 0.6, end: 1.2 })(t),
        }}>
          Tre steg, én konto. Du legger til leverandører, oppretter team, og definerer hvordan selgerne registrerer hver dør.
        </div>

        {/* 3 step pills */}
        <div style={{
          marginTop: 36, display: 'flex', justifyContent: 'center', gap: 12,
          opacity: animate({ from: 0, to: 1, start: 1.0, end: 1.6 })(t),
        }}>
          {[
            { n: '01', label: 'Leverandører' },
            { n: '02', label: 'Team' },
            { n: '03', label: 'Besøksgrunner' },
          ].map((s, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 18px 10px 10px', borderRadius: 99,
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${ADMIN_COLORS.border}`,
              transform: `translateY(${animate({ from: 16, to: 0, start: 1.0 + i * 0.1, end: 1.6 + i * 0.1, ease: Easing.easeOutBack })(t)}px)`,
            }}>
              <span style={{
                width: 28, height: 28, borderRadius: 99,
                background: ADMIN_COLORS.emeraldSoft, color: ADMIN_COLORS.emerald,
                fontSize: 11, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${ADMIN_COLORS.emeraldBorder}`,
              }}>{s.n}</span>
              <span style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Scene 2: Leverandører ───────────────────────────
function SceneSuppliers() {
  const { localTime } = useSprite();
  const t = localTime;

  // Cursor path: rests, moves to "+ Ny leverandør" at t=0.4, click at 0.9
  // Modal opens at 1.0, fields fill 1.2-3.0, save at 3.4, new row appears 3.8
  const cursorPos = (() => {
    if (t < 0.4) return { x: 80, y: 80 };
    if (t < 1.0) return { x: 540, y: 96 }; // button
    if (t < 2.0) return { x: 480, y: 220 }; // name field
    if (t < 3.2) return { x: 480, y: 290 }; // products field
    if (t < 3.8) return { x: 540, y: 400 }; // save btn
    return { x: 540, y: 400 };
  })();
  const cursorClicking = (t > 0.85 && t < 1.0) || (t > 3.6 && t < 3.8);

  const modalOpen = t > 1.0 && t < 4.0;
  const modalScale = animate({ from: 0.9, to: 1, start: 1.0, end: 1.3, ease: Easing.easeOutBack })(t);
  const modalOpacity = t < 4.0 ? animate({ from: 0, to: 1, start: 1.0, end: 1.3 })(t) : animate({ from: 1, to: 0, start: 4.0, end: 4.3 })(t);

  const nameText = 'Telia Norge AS';
  const nameTyped = t < 1.5 ? '' : nameText.slice(0, Math.floor((t - 1.5) * 12));

  const productPills = [
    { label: 'Fiber', delay: 2.5 },
    { label: 'Mobil', delay: 2.7 },
    { label: 'TV-pakke', delay: 2.9 },
  ];

  // New row appearing
  const newRowOpacity = animate({ from: 0, to: 1, start: 4.0, end: 4.5 })(t);
  const newRowOffset = animate({ from: -10, to: 0, start: 4.0, end: 4.5, ease: Easing.easeOutCubic })(t);

  return (
    <div style={{ position: 'absolute', inset: 0, padding: 24, color: '#fff' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em' }}>Leverandører</div>
          <div style={{ fontSize: 11, color: ADMIN_COLORS.textMuted, marginTop: 2 }}>3 aktive · 12 produkter</div>
        </div>
        <button style={{
          padding: '8px 14px', borderRadius: 8,
          background: ADMIN_COLORS.emerald, color: '#fff',
          fontSize: 12, fontWeight: 600, border: 'none',
          display: 'flex', alignItems: 'center', gap: 6,
          boxShadow: cursorClicking && t < 1.0 ? '0 0 0 3px rgba(16,185,129,0.3)' : 'none',
        }}>
          <span style={{ fontSize: 14 }}>+</span> Ny leverandør
        </button>
      </div>

      {/* Table */}
      <div style={{
        background: ADMIN_COLORS.navy,
        border: `1px solid ${ADMIN_COLORS.border}`,
        borderRadius: 10, overflow: 'hidden',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '40px 1fr 1.4fr 90px 70px',
          padding: '10px 14px',
          background: ADMIN_COLORS.navyMid,
          borderBottom: `1px solid ${ADMIN_COLORS.border}`,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: ADMIN_COLORS.textMuted,
          gap: 12,
        }}>
          <span></span><span>Leverandør</span><span>Produkter</span><span>Salg</span><span>Status</span>
        </div>
        {[
          { initials: 'AT', color: '#3b82f6', name: 'Altibox', products: 'Fiber, TV', sales: 142 },
          { initials: 'GE', color: '#a855f7', name: 'Get / Telenor', products: 'TV-pakke, Bredbånd', sales: 87 },
          { initials: 'IC', color: '#f59e0b', name: 'Ice Norge', products: 'Mobil, Mobilt bredbånd', sales: 64 },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '40px 1fr 1.4fr 90px 70px',
            padding: '12px 14px',
            borderBottom: `1px solid ${ADMIN_COLORS.borderSoft}`,
            fontSize: 13, alignItems: 'center', gap: 12,
          }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>{row.initials}</div>
            <span style={{ fontWeight: 600 }}>{row.name}</span>
            <span style={{ color: ADMIN_COLORS.textSecondary, fontSize: 12 }}>{row.products}</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{row.sales}</span>
            <span style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              background: ADMIN_COLORS.emeraldSoft, color: ADMIN_COLORS.emerald,
              padding: '3px 8px', borderRadius: 4, justifySelf: 'start',
            }}>Aktiv</span>
          </div>
        ))}

        {/* New row added */}
        {t > 4.0 && (
          <div style={{
            display: 'grid', gridTemplateColumns: '40px 1fr 1.4fr 90px 70px',
            padding: '12px 14px',
            background: t < 5.0 ? `rgba(16,185,129,${0.2 * (1 - (t - 4.0) / 1.0)})` : 'transparent',
            fontSize: 13, alignItems: 'center', gap: 12,
            opacity: newRowOpacity,
            transform: `translateY(${newRowOffset}px)`,
          }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>TN</div>
            <span style={{ fontWeight: 600 }}>Telia Norge AS</span>
            <span style={{ color: ADMIN_COLORS.textSecondary, fontSize: 12 }}>Fiber, Mobil, TV-pakke</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>0</span>
            <span style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              background: ADMIN_COLORS.emeraldSoft, color: ADMIN_COLORS.emerald,
              padding: '3px 8px', borderRadius: 4, justifySelf: 'start',
            }}>Aktiv</span>
          </div>
        )}
      </div>

      {/* Modal overlay */}
      {modalOpen && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(2,11,20,0.7)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: modalOpacity,
        }}>
          <div style={{
            width: 380,
            background: ADMIN_COLORS.navy,
            border: `1px solid ${ADMIN_COLORS.border}`,
            borderRadius: 14, padding: 22,
            transform: `scale(${modalScale})`,
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}>
            <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em' }}>Ny leverandør</div>
            <div style={{ fontSize: 11, color: ADMIN_COLORS.textMuted, marginTop: 2 }}>Legg til selskap, produkter, og provisjon</div>

            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ADMIN_COLORS.textMuted, marginBottom: 6 }}>Selskap</div>
              <div style={{
                height: 38, borderRadius: 8,
                background: ADMIN_COLORS.navyMid,
                border: `1px solid ${t > 1.4 && t < 2.5 ? ADMIN_COLORS.emerald : ADMIN_COLORS.border}`,
                padding: '0 12px',
                display: 'flex', alignItems: 'center',
                fontSize: 13, color: '#fff',
              }}>
                {nameTyped}
                {t > 1.5 && t < 2.6 && nameTyped.length < nameText.length && (
                  <span style={{ width: 1.5, height: 14, background: ADMIN_COLORS.emerald, marginLeft: 1 }}/>
                )}
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ADMIN_COLORS.textMuted, marginBottom: 6 }}>Produkter</div>
              <div style={{
                minHeight: 38, borderRadius: 8,
                background: ADMIN_COLORS.navyMid,
                border: `1px solid ${t > 2.5 && t < 3.4 ? ADMIN_COLORS.emerald : ADMIN_COLORS.border}`,
                padding: '6px 8px',
                display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center',
              }}>
                {productPills.map((p, i) => {
                  if (t < p.delay) return null;
                  const appear = animate({ from: 0, to: 1, start: p.delay, end: p.delay + 0.25, ease: Easing.easeOutBack })(t);
                  return (
                    <span key={i} style={{
                      padding: '4px 10px', borderRadius: 99,
                      background: ADMIN_COLORS.emeraldSoft,
                      border: `1px solid ${ADMIN_COLORS.emeraldBorder}`,
                      color: '#6ee7b7', fontSize: 11, fontWeight: 600,
                      transform: `scale(${appear})`,
                      display: 'flex', alignItems: 'center', gap: 5,
                    }}>{p.label} <span style={{ opacity: 0.5, fontSize: 10 }}>×</span></span>
                  );
                })}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 22 }}>
              <button style={{
                flex: 1, padding: '10px 0', borderRadius: 8,
                background: 'transparent', color: ADMIN_COLORS.textMuted,
                fontSize: 12, fontWeight: 600, border: `1px solid ${ADMIN_COLORS.border}`,
              }}>Avbryt</button>
              <button style={{
                flex: 1.6, padding: '10px 0', borderRadius: 8,
                background: ADMIN_COLORS.emerald, color: '#fff',
                fontSize: 12, fontWeight: 700, border: 'none',
                outline: t > 3.6 && t < 3.85 ? `2px solid #6ee7b7` : 'none',
                outlineOffset: 2,
                transform: t > 3.7 && t < 3.85 ? 'scale(0.97)' : 'scale(1)',
              }}>Lagre leverandør</button>
            </div>
          </div>
        </div>
      )}

      <Cursor x={cursorPos.x} y={cursorPos.y} clicking={cursorClicking}/>
    </div>
  );
}

// ── Scene 3: Team ───────────────────────────────────
function SceneTeam() {
  const { localTime } = useSprite();
  const t = localTime;

  // Modal at 0.5, name typed 1.0-2.0, district picked 2.5, members added 3.0-4.5, save 5.0
  const cursorPos = (() => {
    if (t < 0.4) return { x: 80, y: 80 };
    if (t < 0.9) return { x: 540, y: 96 };
    if (t < 1.6) return { x: 480, y: 200 };
    if (t < 2.6) return { x: 480, y: 270 };
    if (t < 4.5) return { x: 480, y: 360 };
    return { x: 540, y: 460 };
  })();
  const cursorClicking = (t > 0.8 && t < 0.92) || (t > 4.9 && t < 5.05);

  const modalOpen = t > 0.9;
  const modalOpacity = t < 5.5 ? animate({ from: 0, to: 1, start: 0.9, end: 1.2 })(t) : animate({ from: 1, to: 0, start: 5.5, end: 5.8 })(t);

  const nameText = 'Team Oslo Vest';
  const nameTyped = t < 1.0 ? '' : nameText.slice(0, Math.floor((t - 1.0) * 14));

  const districtPicked = t > 2.5;

  const members = [
    { name: 'Emilie Johansen', email: 'emilie@feltkart.no', initials: 'EJ', color: '#a855f7', delay: 3.0 },
    { name: 'Mathias Kvam', email: 'mathias@feltkart.no', initials: 'MK', color: '#10b981', delay: 3.3 },
    { name: 'Ingrid Berg', email: 'ingrid@feltkart.no', initials: 'IB', color: '#f59e0b', delay: 3.6 },
    { name: 'Fredrik Lie', email: 'fredrik@feltkart.no', initials: 'FL', color: '#ef4444', delay: 3.9 },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, padding: 24, color: '#fff' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em' }}>Team</div>
          <div style={{ fontSize: 11, color: ADMIN_COLORS.textMuted, marginTop: 2 }}>2 team · 11 selgere · 3 distrikter</div>
        </div>
        <button style={{
          padding: '8px 14px', borderRadius: 8,
          background: ADMIN_COLORS.emerald, color: '#fff',
          fontSize: 12, fontWeight: 600, border: 'none',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ fontSize: 14 }}>+</span> Nytt team
        </button>
      </div>

      {/* Existing teams cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
        {[
          { name: 'Team Oslo Sentrum', district: 'Sentrum, Grünerløkka', members: 7, color: '#3b82f6' },
          { name: 'Team Bærum', district: 'Sandvika, Bekkestua', members: 4, color: '#a855f7' },
        ].map((t, i) => (
          <div key={i} style={{
            background: ADMIN_COLORS.navy,
            border: `1px solid ${ADMIN_COLORS.border}`,
            borderRadius: 10, padding: 14,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: t.color }}/>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontSize: 10, color: ADMIN_COLORS.textMuted, marginTop: 1 }}>{t.district}</div>
              </div>
            </div>
            <div style={{ fontSize: 11, color: ADMIN_COLORS.textSecondary }}>{t.members} selgere · 87% hitrate</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(2,11,20,0.7)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: modalOpacity,
        }}>
          <div style={{
            width: 420,
            background: ADMIN_COLORS.navy,
            border: `1px solid ${ADMIN_COLORS.border}`,
            borderRadius: 14, padding: 22,
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Nytt team</div>
            <div style={{ fontSize: 11, color: ADMIN_COLORS.textMuted, marginTop: 2 }}>Navngi teamet, sett distrikt, og inviter selgere</div>

            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ADMIN_COLORS.textMuted, marginBottom: 6 }}>Teamnavn</div>
              <div style={{
                height: 38, borderRadius: 8,
                background: ADMIN_COLORS.navyMid,
                border: `1px solid ${t > 0.9 && t < 2.2 ? ADMIN_COLORS.emerald : ADMIN_COLORS.border}`,
                padding: '0 12px',
                display: 'flex', alignItems: 'center',
                fontSize: 13, color: '#fff',
              }}>
                {nameTyped}
                {t > 1.0 && t < 2.2 && nameTyped.length < nameText.length && (
                  <span style={{ width: 1.5, height: 14, background: ADMIN_COLORS.emerald, marginLeft: 1 }}/>
                )}
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ADMIN_COLORS.textMuted, marginBottom: 6 }}>Distrikt</div>
              <div style={{
                height: 38, borderRadius: 8,
                background: ADMIN_COLORS.navyMid,
                border: `1px solid ${t > 2.3 && t < 3.0 ? ADMIN_COLORS.emerald : ADMIN_COLORS.border}`,
                padding: '0 12px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontSize: 13, color: districtPicked ? '#fff' : ADMIN_COLORS.textMuted,
              }}>
                <span>{districtPicked ? 'Majorstuen, Frogner, Skøyen' : 'Velg område på kart…'}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ADMIN_COLORS.textMuted, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
                <span>Inviter selgere</span>
                <span style={{ color: t > 4.0 ? ADMIN_COLORS.emerald : ADMIN_COLORS.textMuted }}>{members.filter(m => t > m.delay).length} valgt</span>
              </div>
              <div style={{
                borderRadius: 8,
                background: ADMIN_COLORS.navyMid,
                border: `1px solid ${ADMIN_COLORS.border}`,
                padding: 6,
                display: 'flex', flexDirection: 'column', gap: 4,
              }}>
                {members.map((m, i) => {
                  const checked = t > m.delay;
                  const appear = animate({ from: 0, to: 1, start: m.delay - 0.1, end: m.delay + 0.2, ease: Easing.easeOutCubic })(t);
                  return (
                    <div key={i} style={{
                      display: 'grid', gridTemplateColumns: '20px 28px 1fr', gap: 10, alignItems: 'center',
                      padding: '6px 8px', borderRadius: 6,
                      background: checked ? 'rgba(16,185,129,0.08)' : 'transparent',
                      transition: 'background 0.3s',
                    }}>
                      <div style={{
                        width: 16, height: 16, borderRadius: 4,
                        background: checked ? ADMIN_COLORS.emerald : 'transparent',
                        border: `1.5px solid ${checked ? ADMIN_COLORS.emerald : ADMIN_COLORS.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transform: `scale(${checked ? appear : 1})`,
                      }}>
                        {checked && <svg width="9" height="9" viewBox="0 0 14 14" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="2 7 6 11 12 3"/></svg>}
                      </div>
                      <div style={{ width: 22, height: 22, borderRadius: 99, background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>{m.initials}</div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600 }}>{m.name}</div>
                        <div style={{ fontSize: 10, color: ADMIN_COLORS.textMuted }}>{m.email}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 22 }}>
              <button style={{
                flex: 1, padding: '10px 0', borderRadius: 8,
                background: 'transparent', color: ADMIN_COLORS.textMuted,
                fontSize: 12, fontWeight: 600, border: `1px solid ${ADMIN_COLORS.border}`,
              }}>Avbryt</button>
              <button style={{
                flex: 1.6, padding: '10px 0', borderRadius: 8,
                background: ADMIN_COLORS.emerald, color: '#fff',
                fontSize: 12, fontWeight: 700, border: 'none',
                outline: t > 4.9 && t < 5.1 ? `2px solid #6ee7b7` : 'none',
                outlineOffset: 2,
              }}>Opprett team & send invitasjoner</button>
            </div>
          </div>
        </div>
      )}

      <Cursor x={cursorPos.x} y={cursorPos.y} clicking={cursorClicking}/>
    </div>
  );
}

// ── Scene 4: Besøksgrunner ──────────────────────────
function SceneReasons() {
  const { localTime } = useSprite();
  const t = localTime;

  // Show 4 default reasons, then drag to reorder, then add a custom one
  const cursorPos = (() => {
    if (t < 0.4) return { x: 80, y: 80 };
    if (t < 1.4) return { x: 460, y: 220 }; // hover existing
    if (t < 2.6) return { x: 540, y: 380 }; // "+" add custom
    if (t < 3.4) return { x: 360, y: 430 }; // type field
    return { x: 540, y: 480 };
  })();
  const cursorClicking = (t > 2.4 && t < 2.55) || (t > 4.5 && t < 4.65);

  const newReasonText = 'Avtale booket';
  const newTyped = t < 2.8 ? '' : newReasonText.slice(0, Math.floor((t - 2.8) * 12));

  const newReasonAppear = animate({ from: 0, to: 1, start: 4.5, end: 5.0, ease: Easing.easeOutBack })(t);

  return (
    <div style={{ position: 'absolute', inset: 0, padding: 24, color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em' }}>Besøksgrunner</div>
          <div style={{ fontSize: 11, color: ADMIN_COLORS.textMuted, marginTop: 2 }}>Hvordan selgerne registrerer hvert dørbesøk</div>
        </div>
      </div>

      <div style={{
        marginTop: 14,
        background: ADMIN_COLORS.navy,
        border: `1px solid ${ADMIN_COLORS.border}`,
        borderRadius: 10, overflow: 'hidden',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '32px 36px 1fr 110px 90px 80px',
          padding: '10px 14px',
          background: ADMIN_COLORS.navyMid,
          borderBottom: `1px solid ${ADMIN_COLORS.border}`,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: ADMIN_COLORS.textMuted, gap: 10, alignItems: 'center',
        }}>
          <span></span><span>Farge</span><span>Navn</span><span>Type</span><span>Telles som</span><span>Aktiv</span>
        </div>

        {[
          { color: ADMIN_COLORS.emerald, name: 'Solgt', type: 'Positiv', counts: 'Salg', icon: '✓' },
          { color: ADMIN_COLORS.amber, name: 'Ikke hjemme', type: 'Nøytral', counts: 'Besøk', icon: '○' },
          { color: ADMIN_COLORS.red, name: 'Nei takk', type: 'Negativ', counts: 'Besøk', icon: '✕' },
          { color: ADMIN_COLORS.blue, name: 'Følg opp', type: 'Oppfølging', counts: 'Lead', icon: '⏱' },
        ].map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '32px 36px 1fr 110px 90px 80px',
            padding: '12px 14px',
            borderBottom: i < 3 ? `1px solid ${ADMIN_COLORS.borderSoft}` : 'none',
            fontSize: 13, alignItems: 'center', gap: 10,
            background: t > 0.8 && t < 1.4 && i === 0 ? 'rgba(255,255,255,0.04)' : 'transparent',
            transition: 'background 0.3s',
          }}>
            <div style={{ color: ADMIN_COLORS.textMuted, fontSize: 14, cursor: 'grab', display: 'flex', justifyContent: 'center' }}>⋮⋮</div>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 700 }}>{r.icon}</div>
            <span style={{ fontWeight: 600 }}>{r.name}</span>
            <span style={{ color: ADMIN_COLORS.textSecondary, fontSize: 12 }}>{r.type}</span>
            <span style={{ color: ADMIN_COLORS.textSecondary, fontSize: 12 }}>{r.counts}</span>
            <div style={{
              width: 32, height: 18, borderRadius: 99,
              background: ADMIN_COLORS.emerald,
              position: 'relative',
              justifySelf: 'start',
            }}>
              <div style={{ position: 'absolute', right: 2, top: 2, width: 14, height: 14, borderRadius: 99, background: '#fff' }}/>
            </div>
          </div>
        ))}

        {/* Custom new row appearing */}
        {t > 4.5 && (
          <div style={{
            display: 'grid', gridTemplateColumns: '32px 36px 1fr 110px 90px 80px',
            padding: '12px 14px',
            borderTop: `1px solid ${ADMIN_COLORS.borderSoft}`,
            fontSize: 13, alignItems: 'center', gap: 10,
            background: t < 5.5 ? `rgba(16,185,129,${0.18 * (1 - (t - 4.5))})` : 'transparent',
            opacity: newReasonAppear,
            transform: `translateY(${(1 - newReasonAppear) * -8}px)`,
          }}>
            <div style={{ color: ADMIN_COLORS.textMuted, fontSize: 14, display: 'flex', justifyContent: 'center' }}>⋮⋮</div>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: ADMIN_COLORS.purple, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 700 }}>★</div>
            <span style={{ fontWeight: 600 }}>Avtale booket</span>
            <span style={{ color: ADMIN_COLORS.textSecondary, fontSize: 12 }}>Egendefinert</span>
            <span style={{ color: ADMIN_COLORS.textSecondary, fontSize: 12 }}>Lead</span>
            <div style={{ width: 32, height: 18, borderRadius: 99, background: ADMIN_COLORS.emerald, position: 'relative', justifySelf: 'start' }}>
              <div style={{ position: 'absolute', right: 2, top: 2, width: 14, height: 14, borderRadius: 99, background: '#fff' }}/>
            </div>
          </div>
        )}
      </div>

      {/* Add row */}
      <div style={{
        marginTop: 12,
        background: ADMIN_COLORS.navy,
        border: `1px dashed ${t > 1.6 && t < 4.5 ? ADMIN_COLORS.emerald : ADMIN_COLORS.border}`,
        borderRadius: 10, padding: 14,
        display: 'flex', alignItems: 'center', gap: 10,
        opacity: t < 4.5 ? 1 : 0.5,
        transition: 'opacity 0.3s, border 0.3s',
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: ADMIN_COLORS.emeraldSoft, color: ADMIN_COLORS.emerald,
          border: `1px solid ${ADMIN_COLORS.emeraldBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 700,
        }}>+</div>
        <div style={{
          flex: 1, height: 32, borderRadius: 7,
          background: t > 2.6 ? ADMIN_COLORS.navyMid : 'transparent',
          border: t > 2.6 ? `1px solid ${ADMIN_COLORS.emerald}` : 'none',
          padding: '0 12px',
          display: 'flex', alignItems: 'center',
          fontSize: 12,
          color: t > 2.8 ? '#fff' : ADMIN_COLORS.textMuted,
        }}>
          {t < 2.6 ? 'Legg til egendefinert besøksgrunn (f.eks. "Avtale booket")' : newTyped}
          {t > 2.8 && newTyped.length < newReasonText.length && (
            <span style={{ width: 1.5, height: 13, background: ADMIN_COLORS.emerald, marginLeft: 1 }}/>
          )}
        </div>
        {t > 4.0 && (
          <button style={{
            padding: '6px 12px', borderRadius: 6,
            background: ADMIN_COLORS.emerald, color: '#fff',
            fontSize: 11, fontWeight: 700, border: 'none',
            outline: t > 4.5 && t < 4.65 ? `2px solid #6ee7b7` : 'none', outlineOffset: 2,
            opacity: animate({ from: 0, to: 1, start: 4.0, end: 4.4 })(t),
          }}>Legg til</button>
        )}
      </div>

      <Cursor x={cursorPos.x} y={cursorPos.y} clicking={cursorClicking}/>
    </div>
  );
}

// ── Scene 5: Outro ──────────────────────────────────
function SceneOutro() {
  const { localTime } = useSprite();
  const t = localTime;
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(ellipse at 50% 50%, ${ADMIN_COLORS.navyMid}, ${ADMIN_COLORS.navyDark})`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 20, padding: 40,
      opacity: animate({ from: 0, to: 1, start: 0, end: 0.5 })(t),
    }}>
      <div style={{
        display: 'flex', gap: 24, marginBottom: 8,
      }}>
        {[
          { label: 'Leverandør', value: 'Telia' },
          { label: 'Team', value: 'Oslo Vest' },
          { label: 'Besøksgrunn', value: 'Avtale booket' },
        ].map((card, i) => (
          <div key={i} style={{
            padding: '12px 18px', borderRadius: 10,
            background: ADMIN_COLORS.emeraldSoft,
            border: `1px solid ${ADMIN_COLORS.emeraldBorder}`,
            display: 'flex', alignItems: 'center', gap: 10,
            transform: `translateY(${animate({ from: 16, to: 0, start: 0.1 + i * 0.1, end: 0.7 + i * 0.1, ease: Easing.easeOutBack })(t)}px)`,
            opacity: animate({ from: 0, to: 1, start: 0.1 + i * 0.1, end: 0.7 + i * 0.1 })(t),
          }}>
            <span style={{
              width: 24, height: 24, borderRadius: 99,
              background: ADMIN_COLORS.emerald, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700,
            }}>✓</span>
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: ADMIN_COLORS.textMuted }}>{card.label}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginTop: 1 }}>{card.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        fontSize: 44, fontWeight: 700, color: '#fff', textAlign: 'center', letterSpacing: '-0.03em',
        lineHeight: 1.1, maxWidth: 740,
        opacity: animate({ from: 0, to: 1, start: 0.6, end: 1.2 })(t),
        transform: `translateY(${animate({ from: 14, to: 0, start: 0.6, end: 1.2, ease: Easing.easeOutCubic })(t)}px)`,
      }}>
        Du er klar.<br/>
        <span style={{ color: ADMIN_COLORS.emerald }}>Selgerne kan starte i dag.</span>
      </div>

      <div style={{
        fontSize: 14, color: ADMIN_COLORS.textSecondary, textAlign: 'center', maxWidth: 540,
        opacity: animate({ from: 0, to: 1, start: 1.0, end: 1.6 })(t),
      }}>
        Send invitasjonene fra Team-siden. Selgerne får en lenke til appen og er live i kartet ditt på under to minutter.
      </div>
    </div>
  );
}

// ── Caption (left side) ─────────────────────────────
function AdminCaption({ accent, children }) {
  const { localTime, duration } = useSprite();
  const opacity = (() => {
    if (localTime < 0.4) return localTime / 0.4;
    if (localTime > duration - 0.4) return Math.max(0, (duration - localTime) / 0.4);
    return 1;
  })();
  const ty = localTime < 0.4 ? (1 - localTime / 0.4) * 14 : 0;
  return (
    <div style={{ opacity, transform: `translateY(${ty}px)`, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {accent && (
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: ADMIN_COLORS.emerald,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 24, height: 1.5, background: ADMIN_COLORS.emerald }}/>
          {accent}
        </div>
      )}
      {children}
    </div>
  );
}

function ChapterPillAdmin({ num, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      background: 'rgba(255,255,255,0.04)',
      border: `1px solid ${ADMIN_COLORS.border}`,
      borderRadius: 99, padding: '8px 14px 8px 8px',
      backdropFilter: 'blur(8px)',
    }}>
      <span style={{
        width: 28, height: 28, borderRadius: 99,
        background: ADMIN_COLORS.emeraldSoft, color: ADMIN_COLORS.emerald,
        fontSize: 12, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${ADMIN_COLORS.emeraldBorder}`,
      }}>{num}</span>
      <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{label}</span>
    </div>
  );
}

// ── Whole composition ───────────────────────────────
function AdminOnboardingVideo() {
  const t = useTime();

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(ellipse at 30% 20%, ${ADMIN_COLORS.navyMid} 0%, ${ADMIN_COLORS.navyDark} 60%)`,
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${ADMIN_COLORS.borderSoft} 1px, transparent 1px), linear-gradient(90deg, ${ADMIN_COLORS.borderSoft} 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        opacity: 0.22,
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)',
      }}/>

      {/* Brand top-left */}
      <div style={{ position: 'absolute', top: 36, left: 48, display: 'flex', alignItems: 'center', gap: 10, color: '#fff' }}>
        <div style={{
          width: 30, height: 30, borderRadius: 8,
          background: ADMIN_COLORS.emeraldSoft,
          border: `1px solid ${ADMIN_COLORS.emeraldBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke={ADMIN_COLORS.emerald} strokeWidth="1.5"/>
            <circle cx="10" cy="10" r="2" fill={ADMIN_COLORS.emerald}/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>FeltKart</div>
          <div style={{ fontSize: 11, color: ADMIN_COLORS.textMuted }}>Admin-onboarding · Sett opp på 3 minutter</div>
        </div>
      </div>

      {/* Chapter pills */}
      <Sprite start={0} end={4}>{() => <div style={{ position: 'absolute', top: 36, right: 48 }}><ChapterPillAdmin num="00" label="Velkommen"/></div>}</Sprite>
      <Sprite start={4} end={9.2}>{() => <div style={{ position: 'absolute', top: 36, right: 48 }}><ChapterPillAdmin num="01" label="Leverandører"/></div>}</Sprite>
      <Sprite start={9.2} end={15.5}>{() => <div style={{ position: 'absolute', top: 36, right: 48 }}><ChapterPillAdmin num="02" label="Team"/></div>}</Sprite>
      <Sprite start={15.5} end={21.5}>{() => <div style={{ position: 'absolute', top: 36, right: 48 }}><ChapterPillAdmin num="03" label="Besøksgrunner"/></div>}</Sprite>
      <Sprite start={21.5} end={26}>{() => <div style={{ position: 'absolute', top: 36, right: 48 }}><ChapterPillAdmin num="✓" label="Klart"/></div>}</Sprite>

      {/* Intro — full bleed */}
      <Sprite start={0} end={4}>
        <SceneIntro/>
      </Sprite>

      {/* Steps 1-3: split layout */}
      <Sprite start={4} end={21.5}>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'grid', gridTemplateColumns: '1fr 760px',
          alignItems: 'center', padding: '0 60px',
          gap: 40,
        }}>
          {/* Captions */}
          <div style={{ paddingRight: 0, maxWidth: 480 }}>
            <Sprite start={4.4} end={9.0}>
              <AdminCaption accent="Steg 1">
                <div style={{ fontSize: 40, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                  Legg til dine<br/>leverandører.
                </div>
                <div style={{ fontSize: 15, color: ADMIN_COLORS.textSecondary, lineHeight: 1.5 }}>
                  Hvert team kan selge for flere leverandører. Legg inn navn, produkter og provisjon — og koble dem til kampanjer senere.
                </div>
              </AdminCaption>
            </Sprite>

            <Sprite start={9.6} end={15.3}>
              <AdminCaption accent="Steg 2">
                <div style={{ fontSize: 40, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                  Opprett team og<br/>inviter selgere.
                </div>
                <div style={{ fontSize: 15, color: ADMIN_COLORS.textSecondary, lineHeight: 1.5 }}>
                  Tegn distriktet på kart, gi teamet et navn, og huk av selgerne du vil invitere. Alle får en lenke per e-post når du lagrer.
                </div>
              </AdminCaption>
            </Sprite>

            <Sprite start={15.9} end={21.3}>
              <AdminCaption accent="Steg 3">
                <div style={{ fontSize: 40, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                  Definer hvordan<br/>hvert besøk telles.
                </div>
                <div style={{ fontSize: 15, color: ADMIN_COLORS.textSecondary, lineHeight: 1.5 }}>
                  Fire standardgrunner kommer ferdig: <span style={{ color: ADMIN_COLORS.emerald }}>Solgt</span>, <span style={{ color: ADMIN_COLORS.amber }}>Ikke hjemme</span>, <span style={{ color: ADMIN_COLORS.red }}>Nei takk</span>, <span style={{ color: ADMIN_COLORS.blue }}>Følg opp</span>. Lag dine egne i tillegg.
                </div>
              </AdminCaption>
            </Sprite>
          </div>

          {/* Browser frame */}
          <div style={{ height: 600, position: 'relative' }}>
            <Sprite start={4} end={9.2}>
              <BrowserFrame activeNav="leverandorer" url="app.feltkart.no/admin/leverandorer">
                <Sprite start={4} end={9.2}><SceneSuppliers/></Sprite>
              </BrowserFrame>
            </Sprite>
            <Sprite start={9.2} end={15.5}>
              <BrowserFrame activeNav="teams" url="app.feltkart.no/admin/team">
                <Sprite start={9.2} end={15.5}><SceneTeam/></Sprite>
              </BrowserFrame>
            </Sprite>
            <Sprite start={15.5} end={21.5}>
              <BrowserFrame activeNav="besoksgrunner" url="app.feltkart.no/admin/besoksgrunner">
                <Sprite start={15.5} end={21.5}><SceneReasons/></Sprite>
              </BrowserFrame>
            </Sprite>
          </div>
        </div>
      </Sprite>

      {/* Outro */}
      <Sprite start={21.5} end={26}>
        <SceneOutro/>
      </Sprite>

      {/* Progress bar */}
      <div style={{
        position: 'absolute', bottom: 32, left: 80, right: 80,
        display: 'flex', alignItems: 'center', gap: 16,
        color: ADMIN_COLORS.textMuted, fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        fontSize: 11,
      }}>
        <span>{t.toFixed(1).padStart(4, '0')}s</span>
        <div style={{ flex: 1, height: 2, background: ADMIN_COLORS.borderSoft, borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(t / 26) * 100}%`, background: ADMIN_COLORS.emerald }}/>
        </div>
        <span>26.0s</span>
      </div>
    </div>
  );
}

Object.assign(window, { AdminOnboardingVideo });
