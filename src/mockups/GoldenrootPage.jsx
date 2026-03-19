import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PremiumContact from '../components/PremiumContact'
import { BackgroundCircles } from '../components/ui/background-circles'

const accent = '#f59e0b'
const accentDark = '#d97706'
const bg = '#0a0800'
const bgSurface = '#110e00'
const bgSection = '#0f0c00'

const CATEGORIES = [
  'Hand Tools',
  'Torque Tools',
  'Borescopes',
  'LED Lighting',
  'Power Tools',
  'Inspection Cams',
  'OEM / ODM',
]

const ACCORDION_ITEMS = [
  { title: 'Hand Tools', sub: 'Ratchets, spanners, pliers, screwdrivers — engineered for daily professional use.' },
  { title: 'Torque Tools', sub: 'Digital and mechanical torque wrenches for precision assembly and QC.' },
  { title: 'Borescopes', sub: 'Flexible HD inspection cameras for engines, pipes, and confined spaces.' },
  { title: 'LED Lighting', sub: 'High-lumen rechargeable work lights for automotive and industrial maintenance.' },
  { title: 'Power Tools', sub: 'Drills, impact drivers, and grinders built for harsh job-site conditions.' },
]

export default function GoldenrootPage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <div style={{
      minHeight: '100vh',
      background: bg,
      fontFamily: '"Neue Montreal", -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#fff',
      overflowX: 'hidden',
      '--header-height': '64px',
      '--spacer-sm': '1.5rem',
      '--spacer-md': '2rem',
      '--spacer-lg': '4rem',
      '--container-gap': '2rem',
      '--grid-columns': '12',
      '--grid-gap': '2rem',
    }}>

      <style>{`
@keyframes accordion-open { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
        .gr-pill { transition: background 0.18s, border-color 0.18s, color 0.18s; cursor: pointer; }
        .gr-pill:hover { background: rgba(245,158,11,0.18) !important; border-color: rgba(245,158,11,0.6) !important; color: #fff !important; }
        .gr-accordion-row { transition: background 0.18s; cursor: pointer; }
        .gr-accordion-row:hover { background: rgba(245,158,11,0.05) !important; }
        .gr-card { transition: transform 0.28s, border-color 0.28s; }
        .gr-card:hover { transform: translateY(-4px) !important; }
        .gr-cta { transition: background 0.18s, transform 0.15s; }
        .gr-cta:hover { background: #fbbf24 !important; transform: scale(1.03); }
        .gr-ghost { transition: border-color 0.18s, color 0.18s; }
        .gr-ghost:hover { border-color: rgba(245,158,11,0.8) !important; color: #fff !important; }
        @media (max-width: 767px) {
          .gr-hero-inner { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
          .gr-hero-h1 { font-size: 52px !important; letter-spacing: -2px !important; }
          .gr-two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .gr-product-grid { grid-template-columns: 1fr !important; }
          .gr-masonry { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .gr-masonry > *:first-child { grid-row: auto !important; grid-column: auto !important; height: 200px !important; }
          .gr-stats { grid-template-columns: repeat(2,1fr) !important; width: 100% !important; }
          .gr-logo-grid { grid-template-columns: repeat(2,1fr) !important; }
          .gr-footer-inner { grid-template-columns: 1fr !important; }
          .gr-footer-links { flex-direction: column !important; gap: 2rem !important; }
          .gr-reviews-grid { grid-template-columns: 1fr !important; }
          .gr-reviews-summary { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      {/* ── FIXED NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 64, display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center', padding: '0 2rem',
        background: 'rgba(10,8,0,0.88)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(245,158,11,0.14)',
      }}>
        <span
          onClick={() => navigate('/')}
          style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', cursor: 'pointer', letterSpacing: '0.04em' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
        >← Back</span>
        <img src="/logos/panrico-logo.png" alt="Panrico" style={{ height: 38, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 20, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
          {['Prev', 'Next'].map((l, i) => (
            <span key={l} style={{ cursor: 'pointer', letterSpacing: '0.04em' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
            >{i === 0 ? '← ' : ''}{l}{i === 1 ? ' →' : ''}</span>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════════════════
          HERO — full viewport, text anchored bottom-left
          (mirrors Vertdure .c-hero-base pattern)
      ══════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Animated circles background */}
        <BackgroundCircles variant="amber" showText={false} />
        {/* Dark overlay — fade to let text read clearly */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(10,8,0,0.85) 0%, rgba(10,8,0,0.6) 50%, rgba(10,8,0,0.4) 100%)', zIndex: 1 }} />
        {/* Bottom fade into page */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: `linear-gradient(to top, ${bg}, transparent)`, zIndex: 2 }} />

        {/* Inner — centered */}
        <div className="gr-hero-inner" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: 1200,
          padding: '80px clamp(1.5rem, 5vw, 3rem)',
        }}>

          {/* Company logo */}
          <img src="/logos/panrico-logo.png" alt="Panrico" style={{ height: 52, objectFit: 'contain', marginBottom: 36, maxWidth: 240 }} />

          {/* Promo badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: accent, color: '#000',
            borderRadius: 8, padding: '8px 18px',
            marginBottom: 32,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#000', opacity: 0.5 }} />
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.06em' }}>OEM / ODM Manufacturer · Taiwan</span>
          </div>

          {/* Hero title */}
          <h1 className="gr-hero-h1" style={{
            fontSize: 'clamp(52px, 8vw, 100px)',
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: '-3px',
            marginBottom: 24,
          }}>
            <span style={{ display: 'block', color: '#fff' }}>GOLDEN</span>
            <span style={{ display: 'block', color: accent, letterSpacing: '-1px', fontWeight: 900 }}>ROOT</span>
          </h1>

          {/* Tagline row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
            <div style={{ width: 40, height: 1, background: `rgba(245,158,11,0.5)` }} />
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Enrich Your Life</p>
            <div style={{ width: 40, height: 1, background: `rgba(245,158,11,0.5)` }} />
          </div>

          {/* Stats row */}
          <div className="gr-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,auto)', gap: 0, width: 'fit-content', margin: '0 auto' }}>
            {[
              { n: '15+', label: 'Years' },
              { n: '50+', label: 'Countries' },
              { n: '500+', label: 'SKUs' },
              { n: 'OEM', label: 'Capable' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '16px 28px 16px 0', marginRight: 28,
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                paddingRight: i < 3 ? 28 : 0,
              }}>
                <p style={{ fontSize: 30, fontWeight: 900, color: accent, lineHeight: 1, marginBottom: 4 }}>{s.n}</p>
                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CATEGORY PILLS (horizontal scroll, like Vertdure filter pills) ── */}
      <div style={{ padding: '20px 0', background: bgSurface, borderBottom: '1px solid rgba(245,158,11,0.1)', overflowX: 'auto' }}>
        <div style={{ display: 'flex', gap: 10, padding: '0 clamp(1.5rem, 5vw, 3rem)', width: 'max-content' }}>
          {CATEGORIES.map((cat, i) => (
            <button key={i}
              className="gr-pill"
              onClick={() => setActiveCategory(i)}
              style={{
                padding: '10px 20px', borderRadius: 100,
                background: activeCategory === i ? accent : 'transparent',
                border: `1px solid ${activeCategory === i ? accent : 'rgba(245,158,11,0.25)'}`,
                color: activeCategory === i ? '#000' : 'rgba(255,255,255,0.6)',
                fontSize: 13, fontWeight: 700, cursor: 'pointer',
                whiteSpace: 'nowrap', fontFamily: 'inherit',
                letterSpacing: '0.03em',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MAIN CONTAINER — 12-col grid system
      ══════════════════════════════════════════════ */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)' }}>

        {/* ── ABOUT + ACCORDION (two-col, mirrors Vertdure text+service list) ── */}
        <section className="gr-two-col" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', padding: '5rem 0',
          borderBottom: '1px solid rgba(245,158,11,0.08)',
        }}>
          {/* Left: description */}
          <div>
            <p style={{ fontSize: 11, color: accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700 }}>Company Overview</p>
            <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 22, letterSpacing: '-0.5px' }}>
              Tools that professionals trust, worldwide.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 28 }}>
              Since 2009, Golden Root has manufactured the Panrico range of professional hand tools, torque instruments, borescopes, and LED lighting — exported to 50+ countries from Taiwan.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 36 }}>
              Our OEM/ODM division provides custom manufacturing for international brands with certified quality, flexible MOQs, and fast lead times.
            </p>
            <button className="gr-cta" style={{
              background: accent, color: '#000',
              border: 'none', borderRadius: 10,
              padding: '14px 28px', fontSize: 13, fontWeight: 900,
              cursor: 'pointer', letterSpacing: '0.08em', fontFamily: 'inherit',
            }}>Discover our products →</button>
          </div>

          {/* Right: accordion list (Vertdure service accordion) */}
          <div>
            {ACCORDION_ITEMS.map((item, i) => (
              <div key={i}
                className="gr-accordion-row"
                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                style={{
                  borderTop: `1px solid rgba(245,158,11,0.12)`,
                  padding: '20px 0',
                  ...(i === ACCORDION_ITEMS.length - 1 ? { borderBottom: '1px solid rgba(245,158,11,0.12)' } : {}),
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '-0.2px' }}>{item.title}</span>
                  <div style={{
                    width: 30, height: 30, borderRadius: '50%',
                    background: openAccordion === i ? accent : 'rgba(245,158,11,0.1)',
                    border: `1px solid ${openAccordion === i ? accent : 'rgba(245,158,11,0.3)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: openAccordion === i ? '#000' : accent,
                    fontSize: 16, fontWeight: 700, flexShrink: 0, transition: 'all 0.2s',
                  }}>
                    {openAccordion === i ? '−' : '+'}
                  </div>
                </div>
                {openAccordion === i && (
                  <p style={{ marginTop: 12, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, animation: 'accordion-open 0.22s ease' }}>
                    {item.sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── VIDEO — clean borderRadius, no corner brackets ── */}
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
          <p style={{ fontSize: 11, color: accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700 }}>Brand Film</p>
          <h2 style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 900, marginBottom: 32, letterSpacing: '-0.5px' }}>Golden Root in Action</h2>
          <div style={{ borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ width: '100%', aspectRatio: '16/9' }}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fSM_Vlc4lLQ" title="Golden Root Co., Ltd." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ display: 'block', width: '100%', height: '100%' }} />
            </div>
          </div>
        </section>

      </div>

      {/* ══ FULL-WIDTH PROMO SECTION (like Vertdure's solid "Un plaisir" block — no radial glow, no spinning gears) ══ */}
      <section style={{
        padding: '6rem clamp(1.5rem, 5vw, 3rem)',
        background: 'rgba(245,158,11,0.09)',
        borderTop: '1px solid rgba(245,158,11,0.15)',
        borderBottom: '1px solid rgba(245,158,11,0.15)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="gr-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 11, color: accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>Why Golden Root</p>
              <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1.5px', marginBottom: 0 }}>
                A pleasure to{' '}
                <span style={{ color: accent }}>
                  build with precision.
                </span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 24 }}>
                At Golden Root, we've spent 15 years developing tools that reduce effort and increase accuracy — so technicians, mechanics, and builders across 50 countries can focus on what matters.
              </p>
              <button className="gr-ghost" style={{
                background: 'transparent', border: `1px solid rgba(245,158,11,0.4)`,
                color: 'rgba(255,255,255,0.7)', borderRadius: 10,
                padding: '12px 24px', fontSize: 13, fontWeight: 700,
                cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.06em',
              }}>Learn more →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS — MASONRY GRID (like Vertdure plant cards) ══ */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)' }}>
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
            <div>
              <p style={{ fontSize: 11, color: accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>Product Range</p>
              <h2 style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 900, letterSpacing: '-0.5px' }}>Products</h2>
            </div>
            <button className="gr-ghost" style={{
              background: 'transparent', border: '1px solid rgba(245,158,11,0.3)',
              color: 'rgba(255,255,255,0.5)', borderRadius: 8,
              padding: '10px 20px', fontSize: 12, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>View all →</button>
          </div>

          {/* Masonry-style grid — large card left, 2x2 right (Vertdure layout) */}
          <div className="gr-masonry" style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gridTemplateRows: '220px 220px',
            gap: 10,
          }}>
            {[
              {
                title: '1/2" Digital Torque Wrench',
                tags: ['TORQUE', 'DIGITAL'],
                img: '/products/gr_drill_v2_nobg.png',
                style: { gridRow: '1 / 3', gridColumn: '1 / 2' },
              },
              {
                title: 'LED Work Light',
                tags: ['LED'],
                img: '/products/gr_led_v2_nobg.png',
                style: {},
              },
              {
                title: 'Borescope Camera',
                tags: ['INSPECTION'],
                img: '/products/gr_camera_v2_nobg.png',
                style: {},
              },
              {
                title: 'Hand Tools Set',
                tags: ['TOOLS', 'SET'],
                img: '/products/gr_tools_v2_nobg.png',
                style: {},
              },
              {
                title: 'Torque Wrench',
                tags: ['TORQUE'],
                img: '/products/gr_wrench_v2_nobg.png',
                style: {},
              },
            ].map((p, i) => (
              <div key={i}
                className="gr-card"
                onMouseEnter={() => setHoveredProduct(i)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  ...p.style,
                  position: 'relative', borderRadius: 14, overflow: 'hidden',
                  cursor: 'pointer',
                  background: 'rgba(24,20,4,0.85)',
                  border: `1px solid ${hoveredProduct === i ? 'rgba(245,158,11,0.5)' : 'rgba(255,255,255,0.06)'}`,
                }}
              >
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px', display: 'block', transition: 'transform 0.45s', transform: hoveredProduct === i ? 'scale(1.08)' : 'scale(1)' }} />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,0,0.85) 0%, rgba(10,8,0,0.1) 55%, transparent 100%)' }} />
                {/* Content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                  <div style={{ display: 'flex', gap: 5, marginBottom: 8, flexWrap: 'wrap' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: 9, fontWeight: 800, color: '#000', background: accent, padding: '3px 8px', borderRadius: 4, letterSpacing: '0.1em' }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: i === 0 ? 15 : 12, fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>{p.title}</p>
                </div>
                {hoveredProduct === i && (
                  <div style={{ position: 'absolute', top: 12, right: 12, background: accent, color: '#000', fontSize: 10, fontWeight: 900, padding: '4px 12px', borderRadius: 4, letterSpacing: '0.08em' }}>VIEW →</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUSTED BY ── */}
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 28, fontWeight: 700 }}>Partners & Distribution</p>
          <div className="gr-logo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {[
              <svg key="snap" viewBox="0 0 140 50" width="100%" height="40"><text x="70" y="22" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="18" fontWeight="800" fontFamily="Georgia,serif" letterSpacing="-0.5">Snap-on</text><rect x="20" y="28" width="100" height="1.2" fill="rgba(255,255,255,0.2)"/></svg>,
              <svg key="stanley" viewBox="0 0 140 50" width="100%" height="40"><text x="70" y="20" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="13" fontWeight="900" fontFamily="-apple-system,sans-serif" letterSpacing="2">STANLEY</text><text x="70" y="36" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7.5" fontFamily="-apple-system,sans-serif" letterSpacing="1">BLACK &amp; DECKER</text></svg>,
              <svg key="bosch" viewBox="0 0 140 50" width="100%" height="40"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="20" fontWeight="800" fontFamily="-apple-system,sans-serif" letterSpacing="1">BOSCH</text></svg>,
              <svg key="makita" viewBox="0 0 140 50" width="100%" height="40"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="17" fontWeight="800" fontFamily="-apple-system,sans-serif" letterSpacing="1">MAKITA</text></svg>,
            ].map((logo, i) => (
              <div key={i}
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(245,158,11,0.1)', borderRadius: 10, aspectRatio: '3/2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.07)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.1)'; }}
              >{logo}</div>
            ))}
          </div>
        </section>

        {/* ── BIG TYPOGRAPHY SECTION (Vertdure "Plus de 24 succursales") ── */}
        <section style={{
          padding: '5rem 0',
          borderBottom: '1px solid rgba(245,158,11,0.08)',
        }}>
          <div className="gr-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            {/* Big number text */}
            <div>
              <p style={{ fontSize: 'clamp(48px,7vw,90px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-3px', marginBottom: 12 }}>
                <span style={{ color: '#fff' }}>50+</span>
                <br />
                <span style={{ fontSize: '0.45em', color: 'rgba(255,255,255,0.7)', letterSpacing: '-1px' }}>countries</span>
                <br />
                <span style={{ fontSize: '0.35em', color: 'rgba(255,255,255,0.3)', letterSpacing: '-0.5px', fontWeight: 700 }}>trust Panrico</span>
              </p>
            </div>
            {/* Right text */}
            <div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, marginBottom: 24 }}>
                From automotive workshops in Japan to construction sites in Germany — Panrico tools are in daily use across 50+ countries, backed by export certification and a global distribution network.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="gr-cta" style={{ background: accent, color: '#000', border: 'none', borderRadius: 10, padding: '12px 22px', fontSize: 13, fontWeight: 900, cursor: 'pointer', fontFamily: 'inherit' }}>Our reach →</button>
                <button className="gr-ghost" style={{ background: 'transparent', border: '1px solid rgba(245,158,11,0.35)', color: 'rgba(255,255,255,0.6)', borderRadius: 10, padding: '12px 22px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>Contact us</button>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS (blog/article grid pattern from Vertdure) ── */}
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
            <div>
              <p style={{ fontSize: 11, color: accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>What clients say</p>
              <h2 style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 900, letterSpacing: '-0.5px' }}>Testimonials</h2>
            </div>
          </div>
          <div className="gr-product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {[
              { quote: 'The Panrico digital torque wrench is incredibly accurate. We use it daily in our automotive workshop with zero issues.', author: 'Workshop Manager', org: 'Auto Repair Centre, Japan' },
              { quote: 'The borescope camera image quality is excellent for inspecting engine cylinders. Great value for professionals.', author: 'Fleet Maintenance Tech', org: 'Transport Company, Australia' },
              { quote: "We've been an OEM buyer for 3 years. Golden Root's production quality is consistent and their lead times are reliable.", author: 'Procurement Manager', org: 'Tool Distributor, Germany' },
              { quote: 'The LED work lights are our go-to recommendation for mechanics. Bright output and solid battery life.', author: 'Tool Buyer', org: 'Automotive Parts Chain, USA' },
            ].map((t, i) => (
              <div key={i} style={{
                background: 'rgba(245,158,11,0.03)',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: 14, padding: '26px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: -12, left: 14, fontSize: 90, fontWeight: 900, color: 'rgba(245,158,11,0.07)', lineHeight: 1, fontFamily: 'Georgia,serif', userSelect: 'none' }}>"</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, marginBottom: 20, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: accent, flexShrink: 0 }}>{t.author[0]}</div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{t.author}</p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{t.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
          <h2 style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 36 }}>Reviews</h2>
          <div className="gr-reviews-summary" style={{ display: 'flex', gap: 40, alignItems: 'center', marginBottom: 32 }}>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <p style={{ fontSize: 56, fontWeight: 900, lineHeight: 1, color: '#fff' }}>4.8</p>
              <p style={{ fontSize: 18, color: '#fbbf24', letterSpacing: 3, margin: '6px 0' }}>★★★★★</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>182 reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5,82],[4,13],[3,4],[2,1],[1,0]].map(([s,p]) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', width: 8 }}>{s}</span>
                  <div style={{ flex: 1, height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 3 }}><div style={{ width: `${p}%`, height: '100%', background: accent, borderRadius: 3 }} /></div>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', width: 28 }}>{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="gr-reviews-grid" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { name: 'T. Watanabe', stars: 5, product: '1/2" Digital Torque Wrench', review: 'Extremely accurate — verified against our calibration bench. The digital readout is clear and the peak-hold function is essential for our QC process.' },
              { name: 'R. Schmidt', stars: 5, product: 'Borescope Camera BCH-RS20020', review: 'Image quality is impressive for the price. We use it for engine inspection and the 5.5mm probe fits where others cannot reach.' },
              { name: 'L. Huang', stars: 4, product: 'LED Work Light', review: 'Solid build, very bright output. Battery lasted longer than rated in real-world use. Would be 5 stars with a magnetic base option.' },
            ].map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '16px 20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div><span style={{ fontWeight: 700, fontSize: 13 }}>{r.name}</span><span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginLeft: 10 }}>{r.product}</span></div>
                  <span style={{ color: '#fbbf24', letterSpacing: 2 }}>{'★'.repeat(r.stars)}</span>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DOWNLOAD CENTER ── */}
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
          <p style={{ fontSize: 11, color: accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>Resources</p>
          <h2 style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 32 }}>Download Center</h2>
          <div className="gr-product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
            {[
              { label: 'CATALOG', name: 'Panrico Full Product Catalog' },
              { label: 'SPEC', name: 'Technical Specification Sheets' },
              { label: 'GUIDE', name: 'OEM/ODM Capability Guide' },
              { label: 'CERT', name: 'Safety & Compliance Certificates' },
            ].map((d, i) => (
              <div key={i}
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: 12, padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.05)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.12)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3, fontWeight: 700 }}>{d.label}</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{d.name}</p>
                  </div>
                </div>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, fontSize: 14, flexShrink: 0 }}>↓</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section style={{ padding: '5rem 0', borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
          <p style={{ fontSize: 11, color: accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>Get In Touch</p>
          <h2 style={{ fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 32 }}>Contact Information</h2>
          <PremiumContact accent="#f59e0b" bg="#0a0800" company="Golden Root Co., Ltd." email="service@panricotool.com" phone="+886-2-XXXX-XXXX" address="Taiwan, R.O.C." />
        </section>

        {/* ── LEAD MAGNET — clean box, no spinning gears ── */}
        <section style={{ padding: '5rem 0 3rem' }}>
          <div style={{ borderRadius: 18, overflow: 'hidden', padding: '52px 44px', textAlign: 'center', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.18)' }}>
            <p style={{ fontSize: 11, color: accent, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 800 }}>Free Resource</p>
            <h3 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, color: '#fff', marginBottom: 14, lineHeight: 1.2, letterSpacing: '-0.5px' }}>
              Panrico OEM Capability Deck<br/>
              <span style={{ color: accent }}>— Download Free</span>
            </h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 440, margin: '0 auto 32px' }}>Full OEM/ODM capabilities, MOQ requirements, certifications, and lead time schedules.</p>
            <div style={{ display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto' }}>
              <input placeholder="Your email address" style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 10, padding: '13px 18px', fontSize: 13, color: '#fff', fontFamily: 'inherit', outline: 'none' }} />
              <button className="gr-cta" style={{ background: accent, color: '#000', border: 'none', borderRadius: 10, padding: '13px 24px', fontSize: 13, fontWeight: 900, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit', letterSpacing: '0.06em' }}>GET IT →</button>
            </div>
          </div>
        </section>

        <span onClick={() => navigate('/')}
          style={{ display: 'inline-block', marginBottom: 48, fontSize: 13, color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
        >← Back to Directory</span>
      </div>

      {/* ══ FOOTER (Vertdure footer pattern) ══ */}
      <footer style={{
        borderTop: '1px solid rgba(245,158,11,0.12)',
        padding: '3rem clamp(1.5rem, 5vw, 3rem)',
        background: bgSurface,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="gr-footer-inner gr-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: 40 }}>
            <div>
              <h3 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 20, color: '#fff' }}>
                Built for professionals.
              </h3>
              <button className="gr-cta" style={{ background: accent, color: '#000', border: 'none', borderRadius: 10, padding: '12px 24px', fontSize: 13, fontWeight: 900, cursor: 'pointer', fontFamily: 'inherit' }}>Request a catalog →</button>
            </div>
            <div className="gr-footer-links" style={{ display: 'flex', gap: '3rem' }}>
              <div>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>Company</p>
                {['About Us', 'Products', 'OEM / ODM', 'Certifications'].map(l => (
                  <p key={l} style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10, cursor: 'pointer' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                  >{l}</p>
                ))}
              </div>
              <div>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>Contact</p>
                {['Email Us', 'Panrico Store', 'LinkedIn', 'Export Inquiry'].map(l => (
                  <p key={l} style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 10, cursor: 'pointer' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                  >{l}</p>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(245,158,11,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
            <span>© 2025 Made with Worldedit Design</span>
            <img src="/logo.png" alt="Worldedit" style={{ height: 24, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.3 }} />
            <span>Golden Root Co., Ltd. · panricotool.com</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
