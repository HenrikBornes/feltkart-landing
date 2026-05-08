// Seller onboarding video — scenes
// Loaded after animations.jsx (which exposes Stage, Sprite, useTime, Easing, interpolate, animate, clamp)

const COLORS = {
  navy: '#07223c',
  navyDark: '#020b14',
  navyMid: '#0c2d4a',
  emerald: '#10b981',
  emeraldSoft: 'rgba(16,185,129,0.14)',
  amber: '#f59e0b',
  red: '#ef4444',
  cream: '#f4f9fd',
  border: '#1a4d73',
  borderSoft: '#103858',
  white: '#ffffff',
  textMuted: '#94a3b8',
  textSecondary: '#cbd5e1',
};

// ── Phone bezel ─────────────────────────────────────
function Phone({ x, y, scale = 1, children }) {
  const w = 320, h = 680;
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: w, height: h,
      transform: `scale(${scale})`, transformOrigin: 'center',
      background: '#0a0a0a', borderRadius: 52,
      padding: 10,
      boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 16px 40px rgba(16,185,129,0.08), inset 0 0 0 1px rgba(255,255,255,0.06)',
    }}>
      <div style={{
        width: '100%', height: '100%',
        background: COLORS.navyDark, borderRadius: 42,
        overflow: 'hidden', position: 'relative',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
          width: 100, height: 26, borderRadius: 99, background: '#0a0a0a', zIndex: 10,
        }}/>
        {children}
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div style={{
      height: 46, padding: '14px 28px 0',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: 13, fontWeight: 600, color: '#fff', flexShrink: 0,
    }}>
      <span>09:42</span>
      <span style={{ display: 'flex', gap: 4, opacity: 0.85 }}>
        <span style={{ fontSize: 11 }}>●●●●</span>
        <span style={{ fontSize: 11, marginLeft: 4 }}>5G</span>
        <span style={{ fontSize: 11, marginLeft: 6 }}>▮▮▮</span>
      </span>
    </div>
  );
}

// ── Scene 1: Login (0–3.5s) ─────────────────────────
function SceneLogin() {
  const { localTime } = useSprite();
  const logoScale = animate({ from: 0.6, to: 1, start: 0.1, end: 0.8, ease: Easing.easeOutBack })(localTime);
  const logoOpacity = animate({ from: 0, to: 1, start: 0.1, end: 0.6 })(localTime);
  const inputFill = interpolate([1.0, 1.6, 2.0, 2.6], [0, 1, 1, 1])(localTime);
  const btnPress = localTime > 2.7 && localTime < 2.9 ? 0.96 : 1;
  const exitOpacity = animate({ from: 1, to: 0, start: 3.0, end: 3.5 })(localTime);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: COLORS.navyDark,
      display: 'flex', flexDirection: 'column',
      padding: '60px 32px 32px',
      opacity: exitOpacity,
    }}>
      <div style={{
        marginTop: 60, alignSelf: 'center',
        opacity: logoOpacity,
        transform: `scale(${logoScale})`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 18,
          background: COLORS.emeraldSoft,
          border: '1.5px solid rgba(16,185,129,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="36" height="36" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke={COLORS.emerald} strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="10" cy="10" r="2.2" fill={COLORS.emerald}/>
          </svg>
        </div>
        <span style={{ color: '#fff', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>FeltKart</span>
      </div>

      <div style={{ marginTop: 56 }}>
        <p style={{ color: COLORS.textMuted, fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', margin: 0 }}>E-post</p>
        <div style={{
          marginTop: 8, height: 44, borderRadius: 10,
          background: COLORS.navyMid, border: `1px solid ${COLORS.border}`,
          display: 'flex', alignItems: 'center', padding: '0 14px',
          color: '#fff', fontSize: 14,
        }}>
          {'sondre@feltkart.no'.slice(0, Math.floor(inputFill * 19))}
          <span style={{
            display: localTime > 1.0 && localTime < 1.7 ? 'inline-block' : 'none',
            width: 1.5, height: 16, background: COLORS.emerald, marginLeft: 1,
          }}/>
        </div>

        <p style={{ color: COLORS.textMuted, fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', margin: '20px 0 0' }}>Passord</p>
        <div style={{
          marginTop: 8, height: 44, borderRadius: 10,
          background: COLORS.navyMid, border: `1px solid ${COLORS.border}`,
          display: 'flex', alignItems: 'center', padding: '0 14px',
          color: '#fff', fontSize: 14, letterSpacing: 4,
        }}>
          {'••••••••'.slice(0, Math.max(0, Math.floor((localTime - 1.7) * 14)))}
        </div>

        <button style={{
          marginTop: 24, width: '100%', height: 46, borderRadius: 10,
          background: COLORS.emerald, color: '#fff',
          fontSize: 14, fontWeight: 600, border: 'none',
          transform: `scale(${btnPress})`,
          boxShadow: '0 4px 12px rgba(16,185,129,0.4)',
        }}>Logg inn</button>
      </div>
    </div>
  );
}

// ── Scene 2-4: Map + selecting + selling (3.5s onwards) ─
function SceneMap() {
  const { localTime } = useSprite();
  const t = localTime; // local to this sprite (starts at 3.5s in stage)

  // Pin animation: pins appear staggered
  const pins = [
    { x: 22, y: 28, color: COLORS.emerald, delay: 0.2 },
    { x: 36, y: 22, color: COLORS.amber, delay: 0.3 },
    { x: 18, y: 44, color: COLORS.red, delay: 0.4 },
    { x: 60, y: 38, color: COLORS.emerald, delay: 0.5 },
    { x: 78, y: 60, color: COLORS.amber, delay: 0.6 },
    { x: 50, y: 56, color: COLORS.emerald, delay: 0.45, isCurrent: true },
    { x: 30, y: 70, color: COLORS.red, delay: 0.7 },
    { x: 70, y: 30, color: COLORS.emerald, delay: 0.55 },
  ];

  // The "current target" pin pulses from t=2.5
  const currentPulse = t > 2.5 ? 1 + 0.15 * Math.sin(t * 6) : 1;

  // Bottom sheet appears at t=3.5
  const sheetOffset = animate({ from: 200, to: 0, start: 3.5, end: 4.2, ease: Easing.easeOutCubic })(t);
  const sheetOpacity = animate({ from: 0, to: 1, start: 3.5, end: 4.2 })(t);

  // "Solgt" button press at t=6.0
  const solgtPress = t > 5.8 && t < 6.0 ? 0.92 : 1;

  // Success flash at t=6.0
  const successOpacity = t > 6.0 ? Math.max(0, 1 - (t - 6.0) * 1.2) : 0;

  // Pin turns green at t=6.0
  const pinJustSold = t > 6.0;

  // KPI counter increments at t=6.5
  const salesCount = t < 6.2 ? 11 : 12;
  const kpiPulse = t > 6.2 && t < 6.5 ? 1 + 0.1 * (1 - (t - 6.2) / 0.3) : 1;

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <StatusBar/>
      <div style={{
        padding: '6px 16px 12px', background: COLORS.navy, color: '#fff',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: `1px solid ${COLORS.border}`,
      }}>
        <span style={{ fontSize: 16, fontWeight: 600 }}>Mitt kart</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M21 21l-4.35-4.35"/><circle cx="11" cy="11" r="8"/></svg>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </div>
        </div>
      </div>

      {/* KPI bar */}
      <div style={{
        display: 'flex', gap: 6, padding: '8px 12px', background: COLORS.navy,
        borderBottom: `1px solid ${COLORS.border}`,
      }}>
        {[
          { l: 'Dører', v: t < 6.2 ? '187' : '188' },
          { l: 'Salg', v: salesCount, highlight: t > 6.0 && t < 7.0 },
          { l: 'Hitrate', v: `${Math.round((salesCount / (t < 6.2 ? 187 : 188)) * 1000) / 10}%` },
        ].map((k, i) => (
          <div key={i} style={{
            flex: 1, padding: '6px 8px', borderRadius: 6,
            background: k.highlight ? COLORS.emeraldSoft : COLORS.navyMid,
            border: `1px solid ${k.highlight ? 'rgba(16,185,129,0.5)' : COLORS.border}`,
            transform: k.highlight ? `scale(${kpiPulse})` : 'scale(1)',
            transition: 'background 0.3s',
          }}>
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: k.highlight ? COLORS.emerald : COLORS.textMuted }}>{k.l}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginTop: 2 }}>{k.v}</div>
          </div>
        ))}
      </div>

      {/* Map area */}
      <div style={{
        flex: 1, position: 'relative', overflow: 'hidden',
        background: `radial-gradient(ellipse at 30% 30%, rgba(16,185,129,0.08), transparent 60%), ${COLORS.navyDark}`,
      }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 300 460" preserveAspectRatio="none">
          <defs>
            <pattern id="streets-vid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0,20 L40,20 M20,0 L20,40" stroke={COLORS.borderSoft} strokeWidth="0.6" opacity="0.7"/>
            </pattern>
          </defs>
          <rect width="300" height="460" fill="url(#streets-vid)"/>
          <path d="M20,180 Q100,160 160,200 T280,170" stroke={COLORS.border} strokeWidth="2.5" fill="none" opacity="0.5"/>
          <path d="M150,40 Q140,150 160,260 T170,440" stroke={COLORS.border} strokeWidth="2.5" fill="none" opacity="0.5"/>
        </svg>

        {/* Territory polygon */}
        <div style={{
          position: 'absolute', left: '8%', top: '12%', width: '78%', height: '60%',
          borderRadius: 18, background: 'rgba(16,185,129,0.07)',
          border: `1.5px dashed rgba(16,185,129,0.5)`,
          opacity: animate({ from: 0, to: 1, start: 0.1, end: 0.8 })(t),
        }}/>

        {/* Pins */}
        {pins.map((p, i) => {
          const appear = animate({ from: 0, to: 1, start: p.delay, end: p.delay + 0.4, ease: Easing.easeOutBack })(t);
          let color = p.color;
          let extraScale = 1;
          if (p.isCurrent) {
            extraScale = currentPulse;
            if (pinJustSold) color = COLORS.emerald;
          }
          return (
            <div key={i} style={{
              position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
              width: p.isCurrent ? 18 : 12, height: p.isCurrent ? 18 : 12,
              borderRadius: 99, background: color,
              border: `2.5px solid ${COLORS.navyDark}`,
              boxShadow: `0 2px 6px rgba(0,0,0,0.5)`,
              transform: `translate(-50%,-50%) scale(${appear * extraScale})`,
              zIndex: p.isCurrent ? 5 : 1,
            }}>
              {p.isCurrent && t > 2.0 && (
                <div style={{
                  position: 'absolute', inset: -8, borderRadius: 99,
                  border: `2px solid ${color}`,
                  opacity: 0.5 + 0.5 * Math.sin(t * 5),
                }}/>
              )}
            </div>
          );
        })}

        {/* Success burst */}
        {successOpacity > 0 && (
          <div style={{
            position: 'absolute', left: '50%', top: '56%',
            width: 120, height: 120, borderRadius: 999,
            background: 'radial-gradient(circle, rgba(16,185,129,0.4), transparent 70%)',
            transform: `translate(-50%,-50%) scale(${1 + (1 - successOpacity) * 2})`,
            opacity: successOpacity,
            pointerEvents: 'none',
          }}/>
        )}

        {/* Confetti dots */}
        {t > 6.0 && t < 7.5 && [...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const dist = (t - 6.0) * 80;
          const fall = (t - 6.0) * (t - 6.0) * 50;
          const opacity = Math.max(0, 1 - (t - 6.0) / 1.5);
          const colors = [COLORS.emerald, COLORS.amber, '#fff', '#6ee7b7'];
          return (
            <div key={i} style={{
              position: 'absolute', left: '50%', top: '56%',
              width: 6, height: 6, borderRadius: 1,
              background: colors[i % 4],
              transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist + fall}px) rotate(${i * 47}deg)`,
              opacity,
            }}/>
          );
        })}

        {/* Bottom sheet */}
        <div style={{
          position: 'absolute', left: 12, right: 12, bottom: 12,
          background: '#fff', color: COLORS.navy,
          borderRadius: 14, padding: '14px 16px',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.4)',
          transform: `translateY(${sheetOffset}px)`,
          opacity: sheetOpacity,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' }}>Storgata 14</div>
              <div style={{ fontSize: 11, color: '#64748b', marginTop: 3 }}>Du er her · 4. etasje · Glassfiber</div>
            </div>
            {pinJustSold ? (
              <span style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                background: COLORS.emeraldSoft, color: '#047857',
                padding: '4px 8px', borderRadius: 4,
              }}>Solgt</span>
            ) : (
              <span style={{ fontSize: 18 }}>📍</span>
            )}
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
            <button style={{
              flex: 1.4, padding: '10px 0', borderRadius: 8,
              background: COLORS.emerald, color: '#fff',
              fontSize: 13, fontWeight: 700, border: 'none',
              transform: `scale(${solgtPress})`,
              boxShadow: '0 2px 6px rgba(16,185,129,0.4)',
              outline: t > 5.6 && t < 5.9 ? `2px solid #6ee7b7` : 'none',
              outlineOffset: 2,
            }}>Solgt</button>
            <button style={{
              flex: 1, padding: '10px 0', borderRadius: 8,
              background: '#f1f5f9', color: COLORS.navy,
              fontSize: 12, fontWeight: 600, border: 'none',
            }}>Ikke hjemme</button>
            <button style={{
              flex: 1, padding: '10px 0', borderRadius: 8,
              background: '#f1f5f9', color: COLORS.navy,
              fontSize: 12, fontWeight: 600, border: 'none',
            }}>Følg opp</button>
          </div>
        </div>

        {/* Tap indicator at t=5.7 */}
        {t > 5.5 && t < 6.0 && (
          <div style={{
            position: 'absolute', left: 60, bottom: 50,
            width: 36, height: 36, borderRadius: 99,
            background: 'rgba(16,185,129,0.35)',
            border: `2px solid ${COLORS.emerald}`,
            transform: `translate(-50%,-50%) scale(${1 + (t - 5.5) * 2})`,
            opacity: Math.max(0, 1 - (t - 5.5) * 2),
            pointerEvents: 'none',
          }}/>
        )}
      </div>

      {/* Tab bar */}
      <div style={{
        background: COLORS.navy, display: 'flex', padding: '8px 0 14px',
        borderTop: `1px solid ${COLORS.border}`,
      }}>
        {[
          { l: 'Kart', active: true, ico: 'M' },
          { l: 'Besøk', ico: 'B' },
          { l: 'Salg', ico: 'S' },
          { l: 'Stat.', ico: 'X' },
        ].map((tab, i) => (
          <div key={i} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: tab.active ? '#fff' : '#64748b',
            fontSize: 9, fontWeight: 700,
          }}>
            <div style={{ width: 18, height: 18, opacity: tab.active ? 1 : 0.6 }}>
              {tab.l === 'Kart' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/></svg>}
              {tab.l === 'Besøk' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>}
              {tab.l === 'Salg' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>}
              {tab.l === 'Stat.' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>}
            </div>
            <span>{tab.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Scene 5: Leaderboard pop-up (after sale) ────────
function SceneLeaderboard() {
  const { localTime } = useSprite();
  const t = localTime;

  const cardOffset = animate({ from: 100, to: 0, start: 0.1, end: 0.7, ease: Easing.easeOutBack })(t);
  const cardOpacity = animate({ from: 0, to: 1, start: 0.1, end: 0.6 })(t);

  // You jump from 4th to 3rd at t=2.0
  const yourRank = t < 2.0 ? 4 : 3;
  const swapY = t > 2.0 ? animate({ from: 0, to: -52, start: 2.0, end: 2.6, ease: Easing.easeInOutCubic })(t) : 0;
  const otherY = t > 2.0 ? animate({ from: 0, to: 52, start: 2.0, end: 2.6, ease: Easing.easeInOutCubic })(t) : 0;

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: COLORS.navyDark,
      padding: 24, paddingTop: 60,
      display: 'flex', flexDirection: 'column',
    }}>
      <StatusBar/>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Toast */}
        <div style={{
          background: 'linear-gradient(135deg, #07223c, #103858)',
          border: `1px solid rgba(16,185,129,0.4)`,
          borderRadius: 14, padding: 16,
          marginBottom: 24,
          transform: `translateY(${cardOffset}px)`,
          opacity: cardOpacity,
          boxShadow: '0 12px 36px rgba(0,0,0,0.4)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 99,
              background: COLORS.emeraldSoft, border: `1px solid rgba(16,185,129,0.5)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16,
            }}>🎉</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Salg registrert!</div>
              <div style={{ fontSize: 11, color: COLORS.textSecondary, marginTop: 2 }}>Glassfiber Premium · 7 800 kr</div>
            </div>
          </div>
        </div>

        {/* Mini leaderboard */}
        <div style={{
          background: COLORS.navy,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 14, padding: 16,
          opacity: cardOpacity,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.textMuted, marginBottom: 12 }}>
            Konkurranse · Vårsprint
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'relative' }}>
            {[
              { rank: 1, name: 'Sondre H.', sales: 23, isYou: false, baseY: 0 },
              { rank: 2, name: 'Emilie J.', sales: 19, isYou: false, baseY: 0 },
              { rank: 3, name: 'Mathias K.', sales: t < 2.0 ? 17 : 12, isYou: false, baseY: 0, willMove: 'down' },
              { rank: 4, name: 'Du', sales: t < 2.0 ? 11 : 12, isYou: true, baseY: 0, willMove: 'up' },
            ].map((p, i) => {
              const offset = p.willMove === 'up' ? swapY : p.willMove === 'down' ? otherY : 0;
              const finalRank = t < 2.0 ? p.rank : (p.willMove === 'up' ? 3 : p.willMove === 'down' ? 4 : p.rank);
              return (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '24px 1fr auto', gap: 10, alignItems: 'center',
                  padding: '10px 12px', borderRadius: 8,
                  background: p.isYou ? COLORS.emeraldSoft : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${p.isYou ? 'rgba(16,185,129,0.4)' : COLORS.border}`,
                  transform: `translateY(${offset}px)`,
                  transition: 'background 0.3s',
                  zIndex: p.isYou ? 5 : 1,
                }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: p.isYou ? COLORS.emerald : COLORS.textMuted }}>{finalRank}.</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{p.name}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: p.isYou ? COLORS.emerald : '#fff', fontVariantNumeric: 'tabular-nums' }}>{p.sales}</span>
                </div>
              );
            })}
          </div>

          {t > 2.6 && (
            <div style={{
              marginTop: 14, padding: '8px 12px', borderRadius: 8,
              background: COLORS.emeraldSoft,
              border: `1px solid rgba(16,185,129,0.4)`,
              fontSize: 11, color: COLORS.emerald, fontWeight: 600,
              textAlign: 'center',
              opacity: animate({ from: 0, to: 1, start: 2.6, end: 3.2 })(t),
            }}>
              Du klatret til 3. plass 🚀
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Caption (off-phone) ─────────────────────────────
function Caption({ children, accent }) {
  const { localTime, duration } = useSprite();
  const opacity = (() => {
    if (localTime < 0.4) return localTime / 0.4;
    if (localTime > duration - 0.4) return (duration - localTime) / 0.4;
    return 1;
  })();
  const ty = (() => {
    if (localTime < 0.4) return (1 - localTime / 0.4) * 14;
    return 0;
  })();
  return (
    <div style={{
      opacity, transform: `translateY(${ty}px)`,
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      {accent && (
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: COLORS.emerald,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 24, height: 1.5, background: COLORS.emerald }}/>
          {accent}
        </div>
      )}
      {children}
    </div>
  );
}

// ── Outro ───────────────────────────────────────────
function SceneOutro() {
  const { localTime } = useSprite();
  const t = localTime;
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(ellipse at 50% 50%, ${COLORS.navyMid}, ${COLORS.navyDark})`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 16, padding: 32,
      opacity: animate({ from: 0, to: 1, start: 0, end: 0.5 })(t),
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: 18,
        background: COLORS.emeraldSoft,
        border: '1.5px solid rgba(16,185,129,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: `scale(${animate({ from: 0.7, to: 1, start: 0.1, end: 0.6, ease: Easing.easeOutBack })(t)})`,
      }}>
        <svg width="36" height="36" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke={COLORS.emerald} strokeWidth="1.5" strokeLinejoin="round"/>
          <circle cx="10" cy="10" r="2.2" fill={COLORS.emerald}/>
        </svg>
      </div>
      <div style={{
        fontSize: 18, fontWeight: 700, color: '#fff', textAlign: 'center', letterSpacing: '-0.02em',
        lineHeight: 1.3,
      }}>Du er klar.<br/>Lykke til på første dør.</div>
      <div style={{ fontSize: 12, color: COLORS.textMuted, textAlign: 'center' }}>FeltKart · Selger-onboarding</div>
    </div>
  );
}

// ── Whole scene composition ─────────────────────────
function SellerOnboardingVideo() {
  const t = useTime();
  const stageRef = React.useRef(null);

  // Update timestamp label each second
  React.useEffect(() => {
    const root = document.querySelector('[data-screen-label-root]');
    if (root) root.setAttribute('data-screen-label', `Selger Onboarding · ${t.toFixed(1)}s`);
  }, [Math.floor(t)]);

  return (
    <div data-screen-label-root style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(ellipse at 30% 20%, ${COLORS.navyMid} 0%, ${COLORS.navyDark} 60%)`,
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${COLORS.borderSoft} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.borderSoft} 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        opacity: 0.25,
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)',
      }}/>

      {/* Brand tag top-left */}
      <div style={{
        position: 'absolute', top: 36, left: 48,
        display: 'flex', alignItems: 'center', gap: 10,
        color: '#fff',
      }}>
        <div style={{
          width: 30, height: 30, borderRadius: 8,
          background: COLORS.emeraldSoft,
          border: '1px solid rgba(16,185,129,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke={COLORS.emerald} strokeWidth="1.5"/>
            <circle cx="10" cy="10" r="2" fill={COLORS.emerald}/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>FeltKart</div>
          <div style={{ fontSize: 11, color: COLORS.textMuted, letterSpacing: '0.04em' }}>Selger-onboarding · Modul 1 av 4</div>
        </div>
      </div>

      {/* Chapter pill top-right */}
      <Sprite start={0} end={3.5}>
        {() => (
          <div style={{ position: 'absolute', top: 36, right: 48 }}>
            <ChapterPill num="01" label="Logg inn" />
          </div>
        )}
      </Sprite>
      <Sprite start={3.5} end={8.5}>
        {() => (
          <div style={{ position: 'absolute', top: 36, right: 48 }}>
            <ChapterPill num="02" label="Finn ditt område" />
          </div>
        )}
      </Sprite>
      <Sprite start={8.5} end={12.5}>
        {() => (
          <div style={{ position: 'absolute', top: 36, right: 48 }}>
            <ChapterPill num="03" label="Registrer salg" />
          </div>
        )}
      </Sprite>
      <Sprite start={12.5} end={17}>
        {() => (
          <div style={{ position: 'absolute', top: 36, right: 48 }}>
            <ChapterPill num="04" label="Klatre i konkurransen" />
          </div>
        )}
      </Sprite>
      <Sprite start={17} end={22}>
        {() => (
          <div style={{ position: 'absolute', top: 36, right: 48 }}>
            <ChapterPill num="✓" label="Klar for første dør" />
          </div>
        )}
      </Sprite>

      {/* Main two-column layout */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'grid', gridTemplateColumns: '1fr 380px',
        alignItems: 'center', padding: '0 80px',
      }}>
        {/* Left: caption */}
        <div style={{ paddingRight: 48, maxWidth: 580 }}>
          <Sprite start={0.4} end={3.4}>
            <Caption accent="Steg 1">
              <div style={{ fontSize: 44, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Logg inn med din<br/>FeltKart-konto
              </div>
              <div style={{ fontSize: 16, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                Velkomstmailen din inneholder lenken. Kontoen er allerede koblet til ditt team og distrikt — du trenger bare passordet.
              </div>
            </Caption>
          </Sprite>

          <Sprite start={3.8} end={8.4}>
            <Caption accent="Steg 2">
              <div style={{ fontSize: 44, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Hele området ditt,<br/>kart-til-kart.
              </div>
              <div style={{ fontSize: 16, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                Kartet åpner direkte på ditt distrikt. Grønne pins er solgt, gule "ikke hjemme", røde "nei takk". Tap på en adresse for å se detaljer.
              </div>
            </Caption>
          </Sprite>

          <Sprite start={8.7} end={12.4}>
            <Caption accent="Steg 3">
              <div style={{ fontSize: 44, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Solgt? <span style={{ color: COLORS.emerald }}>Ett trykk.</span>
              </div>
              <div style={{ fontSize: 16, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                Når du har en ny kunde, tap "Solgt". Salget logges, KPI'er oppdateres og teamet ser det i sanntid. Ingen skjemaer, ingen telling på papir.
              </div>
            </Caption>
          </Sprite>

          <Sprite start={12.8} end={16.9}>
            <Caption accent="Steg 4">
              <div style={{ fontSize: 44, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Hvert salg<br/>teller på podiet.
              </div>
              <div style={{ fontSize: 16, color: COLORS.textSecondary, lineHeight: 1.5 }}>
                Konkurranser oppdateres live. Du ser umiddelbart hvor du står — og kan klatre med hver dør du banker.
              </div>
            </Caption>
          </Sprite>
        </div>

        {/* Right: phone */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <Phone x={30} y={-340} scale={0.92}>
            <Sprite start={0} end={3.6} keepMounted>
              <SceneLogin/>
            </Sprite>
            <Sprite start={3.5} end={12.5} keepMounted>
              <SceneMap/>
            </Sprite>
            <Sprite start={12.5} end={17}>
              <SceneLeaderboard/>
            </Sprite>
            <Sprite start={17} end={22}>
              <SceneOutro/>
            </Sprite>
          </Phone>
        </div>
      </div>

      {/* Progress bar at bottom */}
      <ProgressBar t={t} duration={22}/>
    </div>
  );
}

function ChapterPill({ num, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      background: 'rgba(255,255,255,0.04)',
      border: `1px solid ${COLORS.border}`,
      borderRadius: 99, padding: '8px 14px 8px 8px',
      backdropFilter: 'blur(8px)',
    }}>
      <span style={{
        width: 28, height: 28, borderRadius: 99,
        background: COLORS.emeraldSoft,
        border: '1px solid rgba(16,185,129,0.4)',
        color: COLORS.emerald,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace',
      }}>{num}</span>
      <span style={{ color: '#fff', fontSize: 13, fontWeight: 600, letterSpacing: '-0.005em' }}>{label}</span>
    </div>
  );
}

function ProgressBar({ t, duration }) {
  return (
    <div style={{
      position: 'absolute', bottom: 32, left: 80, right: 80,
      display: 'flex', alignItems: 'center', gap: 16,
      color: COLORS.textMuted, fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: 11,
    }}>
      <span>{t.toFixed(1).padStart(4, '0')}s</span>
      <div style={{ flex: 1, height: 2, background: COLORS.borderSoft, borderRadius: 99, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${(t / duration) * 100}%`, background: COLORS.emerald }}/>
      </div>
      <span>{duration.toFixed(1)}s</span>
    </div>
  );
}

// Expose for the HTML host
Object.assign(window, { SellerOnboardingVideo });
