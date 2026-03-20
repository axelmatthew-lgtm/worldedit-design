import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const bg      = '#0d0d0d'
const bgCard  = '#161616'
const text    = '#f0f0f0'
const textMid = '#888'
const textDim = '#555'
const border  = 'rgba(255,255,255,0.08)'
const accent  = '#e8001b'
const font    = '"Helvetica Neue", Helvetica, Arial, sans-serif'
const serif   = '"Helvetica Neue", Helvetica, Arial, sans-serif'

const SERVICES = [
  { icon: '⬡', title: 'CNC Machining Centers',    desc: 'High-speed 5-axis simultaneous machining for aluminum, steel, titanium, and exotic alloys. Tolerances to ±0.005mm.' },
  { icon: '◈', title: 'EDM Systems',               desc: 'Wire and sinker EDM for complex internal geometries, hardened tool steel, and zero-draft mold cavities.' },
  { icon: '◎', title: 'Precision Components',      desc: 'Custom-machined parts per client drawings — from single prototype to high-volume production batches.' },
  { icon: '◻', title: 'Quality Assurance',         desc: 'CMM inspection, ISO 9001 certification, and full traceability on every order.' },
  { icon: '⬜', title: 'Mold & Die Manufacturing', desc: 'Precision mold bases, inserts, and electrodes for plastics, electronics, and automotive industries.' },
]

const POSTS = [
  {
    img: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=200&q=80',
    title: 'Machining a 5-Axis Impeller for an Aerospace Client',
    desc: 'A complex titanium impeller required simultaneous 5-axis toolpaths, sub-0.005mm wall tolerances, and zero-rework delivery.',
    tags: ['case study', 'cnc', 'aerospace'],
    date: 'Mar 12, 2026',
  },
  {
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&q=80',
    title: 'Wire EDM Tooling for a Consumer Electronics Mold',
    desc: 'Ultra-tight internal corner radii in hardened D2 steel for a 128-cavity connector mold. First-article approval on first submission.',
    tags: ['case study', 'edm', 'mold'],
    date: 'Jan 8, 2026',
  },
]

const TESTIMONIALS = [
  {
    initials: 'TE',
    name: 'Tooling Engineer',
    org: 'Injection Mold Manufacturer, Tainan',
    quote: 'AI-KWANG delivered complex EDM electrode work to ±0.003mm tolerance — consistently. They are our go-to precision machining partner in Kaohsiung.',
  },
  {
    initials: 'PM',
    name: 'Project Manager',
    org: 'Automation Equipment Builder',
    quote: 'Lead time from drawing to first article was just 7 days for a 32-part fixture assembly. Exceptional speed without sacrificing quality.',
  },
]

export default function AiKwangPage() {
  const navigate = useNavigate()
  const [hovSvc, setHovSvc] = useState(null)

  return (
    <div style={{ minHeight: '100vh', background: bg, fontFamily: font, color: text, overflowX: 'hidden' }}>
      <style>{`
        * { box-sizing: border-box; }
        .ak-cta-btn { transition: background 0.18s, color 0.18s; }
        .ak-cta-btn:hover { background: #fff !important; color: #000 !important; }
        .ak-ghost-btn { transition: background 0.18s; }
        .ak-ghost-btn:hover { background: rgba(255,255,255,0.06) !important; }
        .ak-post-row { transition: background 0.15s; cursor: pointer; }
        .ak-post-row:hover { background: rgba(255,255,255,0.03) !important; }
        .ak-svc { transition: background 0.18s; }
        .ak-svc:hover { background: #1e1e1e !important; }
        .ak-back { transition: opacity 0.15s; }
        .ak-back:hover { opacity: 1 !important; }
        @media (max-width: 900px) {
          .ak-svc-grid { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
          .ak-svc-grid > *:first-child { grid-row: auto !important; }
          .ak-testi-grid { grid-template-columns: 1fr !important; }
          .ak-section-header { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
          .ak-decorative { display: none !important; }
          .ak-nav-links { display: none !important; }
          .ak-contact-stat-grid { grid-template-columns: 1fr 1fr !important; }
          .ak-contact-two-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .ak-hero-h1 { font-size: clamp(2rem, 10vw, 3rem) !important; }
          .ak-contact-stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── DECORATIVE VERTICAL BORDER LINES ── */}
      <div className="ak-decorative" style={{ position: 'fixed', top: 0, left: 48, bottom: 0, width: 1, background: border, zIndex: 50, pointerEvents: 'none' }} />
      <div className="ak-decorative" style={{ position: 'fixed', top: 0, right: 48, bottom: 0, width: 1, background: border, zIndex: 50, pointerEvents: 'none' }} />

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 52,
        background: 'rgba(13,13,13,0.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 7vw, 6rem)',
      }}>
        {/* Logo */}
        <img src="/logos/aikwang-logo.svg" alt="AI-KWANG Tech" style={{ height: 36, width: 'auto', display: 'block' }} />

        {/* Right nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="ak-back" onClick={() => navigate('/')}
            style={{ fontSize: 12, color: textMid, cursor: 'pointer', opacity: 0.6 }}>← Back</span>
          <a href="mailto:sales@aikwang.com.tw" style={{ textDecoration: 'none' }}>
            <button className="ak-cta-btn" style={{
              background: accent, color: '#fff',
              border: 'none', borderRadius: 100,
              padding: '7px 16px', fontSize: 12, fontWeight: 600,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ fontSize: 10 }}>⊕</span> Request a Quote
            </button>
          </a>
          <div className="ak-nav-links" style={{ display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer', padding: '4px 2px' }}>
            <div style={{ width: 18, height: 1.5, background: textMid }} />
            <div style={{ width: 14, height: 1.5, background: textMid }} />
          </div>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{ position: 'relative', minHeight: 'clamp(500px, 95svh, 95svh)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Full-bleed grayscale factory image */}
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=85"
          alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            filter: 'grayscale(1) brightness(0.38)',
            zIndex: 0, maxWidth: '100%',
          }}
        />
        {/* Gradient: dark bottom-left, fade top-right */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.2) 60%, rgba(13,13,13,0.05) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, background: `linear-gradient(to top, ${bg}, transparent)`, zIndex: 2 }} />

        {/* Bottom-left content */}
        <div style={{
          position: 'relative', zIndex: 3,
          flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '0 clamp(1.5rem, 7vw, 6rem) clamp(3rem, 6vh, 5rem)',
          maxWidth: 1440,
        }}>
          {/* AI-KWANG logo */}
          <img src="/logos/aikwang-logo.svg" alt="AI-KWANG Tech" style={{ height: 72, width: 'auto', display: 'block', marginBottom: 28 }} />

          <p style={{
            fontSize: 13, fontStyle: 'italic', color: accent,
            marginBottom: 16, fontWeight: 400, letterSpacing: '0.01em',
          }}>
            Precision engineering for the world's most demanding industries.
          </p>
          <h1 className="ak-hero-h1" style={{
            fontFamily: serif,
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-1px',
            color: '#fff',
            marginBottom: 36,
          }}>
            Machining Taiwan's<br />Industrial Future.
          </h1>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="mailto:sales@aikwang.com.tw" style={{ textDecoration: 'none' }}>
              <button className="ak-cta-btn" style={{
                background: accent, color: '#fff',
                border: 'none', borderRadius: 100,
                padding: '11px 24px', fontSize: 13, fontWeight: 600,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7,
              }}>
                <span style={{ fontSize: 11 }}>⊕</span> Request a Quote
              </button>
            </a>
            <button className="ak-ghost-btn" style={{
              background: 'rgba(255,255,255,0.08)', color: '#fff',
              border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100,
              padding: '11px 24px', fontSize: 13, fontWeight: 500,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7,
            }}>
              <span style={{ fontSize: 11 }}>◎</span> Read Testimonials
            </button>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section style={{ borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
        {/* Section header */}
        <div className="ak-section-header" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: 'clamp(1.5rem, 4vh, 2.5rem) clamp(1.5rem, 7vw, 6rem)',
          borderBottom: `1px solid ${border}`,
          maxWidth: 1440, margin: '0 auto', width: '100%',
        }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.5px' }}>Our Capabilities</h2>
          <p style={{ fontSize: 13, fontStyle: 'italic', color: accent }}>From drawing to delivery—precise, fast, traceable.</p>
        </div>

        {/* Asymmetric service grid — first card spans 2 rows */}
        <div className="ak-svc-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto auto',
          maxWidth: 1440, margin: '0 auto', width: '100%',
        }}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="ak-svc"
              onMouseEnter={() => setHovSvc(i)}
              onMouseLeave={() => setHovSvc(null)}
              style={{
                gridRow: i === 0 ? 'span 2' : 'auto',
                background: bgCard,
                padding: 'clamp(1.5rem, 3vh, 2.5rem) clamp(1.5rem, 7vw, 6rem)',
                borderRight: i % 2 === 0 ? `1px solid ${border}` : 'none',
                borderBottom: i < 3 ? `1px solid ${border}` : 'none',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: hovSvc === i ? accentDim : 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, color: hovSvc === i ? accent : textMid,
                  transition: 'background 0.18s, color 0.18s',
                  flexShrink: 0,
                }}>{s.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: text, letterSpacing: '-0.2px' }}>{s.title}</h3>
              </div>
              <p style={{ fontSize: 13, color: textMid, lineHeight: 1.8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FROM THE BLOG ══ */}
      <section style={{ borderBottom: `1px solid ${border}` }}>
        {/* Header */}
        <div className="ak-section-header" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: 'clamp(1.5rem, 4vh, 2.5rem) clamp(1.5rem, 7vw, 6rem)',
          borderBottom: `1px solid ${border}`,
          maxWidth: 1440, margin: '0 auto', width: '100%',
        }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.5px' }}>From the Workshop</h2>
          <p style={{ fontSize: 13, fontStyle: 'italic', color: accent }}>Insights, case studies, and updates from the floor.</p>
        </div>

        <div style={{ padding: '0 clamp(1.5rem, 7vw, 6rem)', maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: textDim, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '16px 0', borderBottom: `1px solid ${border}` }}>Posts</p>
          {POSTS.map((p, i) => (
            <div key={i} className="ak-post-row" style={{
              display: 'grid', gridTemplateColumns: '96px 1fr auto',
              gap: 20, padding: '20px 0', alignItems: 'start',
              borderBottom: `1px solid ${border}`,
            }}>
              {/* Thumbnail */}
              <div style={{ width: 96, height: 72, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.4)' }} />
              </div>
              {/* Title + desc */}
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 6, letterSpacing: '-0.2px', lineHeight: 1.4 }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: textMid, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
              {/* Tags + date */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, minWidth: 130 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 10, fontWeight: 600, letterSpacing: '0.04em',
                      background: 'rgba(255,255,255,0.07)', color: textMid,
                      padding: '3px 8px', borderRadius: 4,
                    }}>{t}</span>
                  ))}
                </div>
                <span style={{ fontSize: 11, color: textDim, marginTop: 4 }}>{p.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section id="testimonials" style={{ borderBottom: `1px solid ${border}` }}>
        <div className="ak-section-header" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: 'clamp(1.5rem, 4vh, 2.5rem) clamp(1.5rem, 7vw, 6rem)',
          borderBottom: `1px solid ${border}`,
          maxWidth: 1440, margin: '0 auto', width: '100%',
        }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.5px' }}>Testimonials</h2>
          <p style={{ fontSize: 13, fontStyle: 'italic', color: accent }}>Results speak louder than specs.</p>
        </div>

        <div className="ak-testi-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          borderBottom: `1px solid ${border}`,
          maxWidth: 1440, margin: '0 auto', width: '100%',
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              padding: 'clamp(2rem, 4vh, 3rem) clamp(1.5rem, 7vw, 6rem)',
              borderRight: i === 0 ? `1px solid ${border}` : 'none',
            }}>
              {/* Avatar + name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.07)',
                  border: `1px solid ${border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: textMid }}>{t.initials}</span>
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: text }}>{t.name}</p>
                  <p style={{ fontSize: 11, color: textMid }}>{t.org}</p>
                </div>
              </div>
              {/* Quote */}
              <p style={{ fontSize: 14, color: textMid, lineHeight: 1.85 }}>
                {t.quote.split('±').map((part, idx) =>
                  idx === 0 ? part : <span key={idx}><strong style={{ color: text, fontWeight: 600 }}>±</strong>{part}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section style={{ borderBottom: `1px solid ${border}` }}>
        <div className="ak-section-header" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: 'clamp(1.5rem, 4vh, 2.5rem) clamp(1.5rem, 7vw, 6rem)',
          borderBottom: `1px solid ${border}`,
          maxWidth: 1440, margin: '0 auto', width: '100%',
        }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.5px' }}>Reviews</h2>
          <p style={{ fontSize: 13, fontStyle: 'italic', color: accent }}>Verified by engineers who hold tolerances for a living.</p>
        </div>
        <div style={{ padding: 'clamp(2rem, 4vh, 3rem) clamp(1.5rem, 7vw, 6rem)', maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', gap: 48, alignItems: 'center', marginBottom: 36, paddingBottom: 36, borderBottom: `1px solid ${border}` }}>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <p style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-3px', color: text }}>4.9</p>
              <p style={{ fontSize: 16, color: '#fbbf24', letterSpacing: 3, margin: '8px 0' }}>★★★★★</p>
              <p style={{ fontSize: 11, color: textMid }}>63 verified reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5,90],[4,7],[3,2],[2,1],[1,0]].map(([s,p]) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 9 }}>
                  <span style={{ fontSize: 11, color: textMid, width: 10 }}>{s}</span>
                  <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 0 }}>
                    <div style={{ width: `${p}%`, height: '100%', background: accent }} />
                  </div>
                  <span style={{ fontSize: 11, color: textDim, width: 32, textAlign: 'right' }}>{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ak-testi-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${border}` }}>
            {[
              { initials: 'QE', name: 'Quality Engineer', org: 'Medical Device Manufacturer, Taipei', stars: 5, review: 'First-article approval on every submission across three separate projects. Tolerances held to ±0.003mm on hardened stainless parts. AI-KWANG is our benchmark for precision.' },
              { initials: 'SD', name: 'Supply Chain Director', org: 'Automation Systems Integrator', stars: 5, review: 'Consistent lead times, full CMM reports with every batch, and ISO 9001 documentation that our customers accept without question. That level of traceability is rare.' },
              { initials: 'ME', name: 'Mechanical Engineer', org: 'Semiconductor Equipment Builder', stars: 5, review: 'Complex 5-axis aluminum housings for vacuum chambers — zero re-spins in two years of production. The team understands DFM and flags issues before they become problems.' },
              { initials: 'PM', name: 'Plant Manager', org: 'Automotive Parts OEM, Kaohsiung', stars: 4, review: 'Production-volume EDM work delivered on time and within budget. Surface finish and corner radii were exactly as specified. Will be expanding our orders next quarter.' },
            ].map((r, i) => (
              <div key={i} style={{
                padding: 'clamp(2rem, 4vh, 3rem) clamp(1.5rem, 7vw, 6rem)',
                borderRight: i % 2 === 0 ? `1px solid ${border}` : 'none',
                borderBottom: i < 2 ? `1px solid ${border}` : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.07)', border: `1px solid ${border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: textMid }}>{r.initials}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: text }}>{r.name}</p>
                    <p style={{ fontSize: 11, color: textMid }}>{r.org}</p>
                  </div>
                  <span style={{ color: '#fbbf24', fontSize: 13, letterSpacing: 2 }}>{'★'.repeat(r.stars)}</span>
                </div>
                <p style={{ fontSize: 14, color: textMid, lineHeight: 1.85 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 7vw, 6rem)',
        borderBottom: `1px solid ${border}`,
        textAlign: 'center',
        maxWidth: 1440, margin: '0 auto', width: '100%',
      }}>
        <p style={{ fontSize: 13, color: textMid, marginBottom: 16 }}>Ready to machine something exceptional?</p>
        <h2 style={{
          fontFamily: serif,
          fontSize: 'clamp(2rem, 6vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-1.5px',
          color: text,
          marginBottom: 48,
          maxWidth: 700,
          margin: '0 auto 48px',
        }}>
          Let's Build Your Vision Together.
        </h2>
        <a href="mailto:sales@aikwang.com.tw" style={{ textDecoration: 'none' }}>
          <button className="ak-cta-btn" style={{
            background: accent, color: '#fff',
            border: 'none', borderRadius: 100,
            padding: '13px 32px', fontSize: 14, fontWeight: 600,
            cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            <span>⊕</span> Request a Quote
          </button>
        </a>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ borderBottom: `1px solid ${border}` }}>
        {/* Section header */}
        <div className="ak-section-header" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: 'clamp(1.5rem, 4vh, 2.5rem) clamp(1.5rem, 7vw, 6rem)',
          borderBottom: `1px solid ${border}`,
          maxWidth: 1440, margin: '0 auto', width: '100%',
        }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.5px' }}>Contact</h2>
          <p style={{ fontSize: 13, fontStyle: 'italic', color: accent }}>Let's discuss your precision requirements.</p>
        </div>

        {/* Stat cards */}
        <div className="ak-contact-stat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: bgCard, borderBottom: `1px solid ${border}`, maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          {[
            { icon: '⚡', num: '< 2hrs', label: 'Response Time' },
            { icon: '◎', num: '25+', label: 'Countries Served' },
            { icon: '✓', num: 'ISO', label: 'Certified' },
            { icon: '★', num: '99%', label: 'Precision Rate' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '2rem clamp(1.5rem, 7vw, 6rem)', borderRight: i < 3 ? `1px solid ${border}` : 'none', textAlign: 'center' }}>
              <div style={{ fontSize: 14, color: accent, marginBottom: 10 }}>{s.icon}</div>
              <div style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.125rem)', fontWeight: 700, color: text, letterSpacing: '-0.5px', marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: 10, color: textMid, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Two-col: form + contact info */}
        <div className="ak-contact-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${border}`, maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          {/* LEFT: form */}
          <div style={{ padding: 'clamp(2rem, 5vh, 3.5rem) clamp(1.5rem, 7vw, 6rem)', borderRight: `1px solid ${border}` }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: textDim, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Send a message</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { label: 'Name', ph: 'Your name' },
                { label: 'Email', ph: 'your@email.com' },
                { label: 'Company (optional)', ph: 'Company name' },
              ].map((f, i) => (
                <div key={i}>
                  <label style={{ fontSize: 10, fontWeight: 600, color: textDim, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 7 }}>{f.label}</label>
                  <input placeholder={f.ph} style={{ width: '100%', background: bgCard, border: `1px solid ${border}`, borderRadius: 6, padding: '10px 14px', fontSize: 13, color: text, fontFamily: font, outline: 'none', boxSizing: 'border-box' }}
                    onFocus={e => e.currentTarget.style.borderColor = accent} onBlur={e => e.currentTarget.style.borderColor = border} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 10, fontWeight: 600, color: textDim, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 7 }}>Message</label>
                <textarea placeholder="Describe your machining requirements..." rows={4} style={{ width: '100%', background: bgCard, border: `1px solid ${border}`, borderRadius: 6, padding: '10px 14px', fontSize: 13, color: text, fontFamily: font, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                  onFocus={e => e.currentTarget.style.borderColor = accent} onBlur={e => e.currentTarget.style.borderColor = border} />
              </div>
              <a href="mailto:sales@aikwang.com.tw" style={{ textDecoration: 'none', alignSelf: 'flex-start' }}>
                <button className="ak-cta-btn" style={{ background: accent, color: '#fff', border: 'none', borderRadius: 100, padding: '10px 24px', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 11 }}>⊕</span> Send Message
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT: contact info */}
          <div style={{ padding: 'clamp(2rem, 5vh, 3.5rem) clamp(1.5rem, 7vw, 6rem)' }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: textDim, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Other ways to reach us</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { icon: '✉', label: 'Email', value: 'sales@aikwang.com.tw', sub: 'Response within 2 hours' },
                { icon: '◎', label: 'Phone', value: '+886-3-598-7654', sub: 'Mon–Fri 8:00–17:30' },
                { icon: '◈', label: 'Location', value: 'No. 67, Zhonghua Rd., Zhubei City, Hsinchu County', sub: 'Taiwan, R.O.C.' },
              ].map((c, i) => (
                <div key={i} style={{ padding: '18px 0', borderBottom: `1px solid ${border}`, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(232,0,27,0.1)', border: `1px solid rgba(232,0,27,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: accent, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 600, color: textDim, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 2 }}>{c.value}</p>
                    <p style={{ fontSize: 11, color: textMid }}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Quick response guarantee */}
            <div style={{ marginTop: 20, padding: '18px', background: bgCard, border: `1px solid ${border}`, borderRadius: 8 }}>
              <p style={{ fontSize: 13, fontStyle: 'italic', color: accent, marginBottom: 6 }}>Quick Response Guarantee</p>
              <p style={{ fontSize: 13, color: textMid, lineHeight: 1.75, margin: 0 }}>All precision machining inquiries receive a response within 2 business hours. Quotations for standard CNC parts within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{
        padding: '20px clamp(1.5rem, 7vw, 6rem)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12,
        borderTop: `1px solid ${border}`,
        maxWidth: 1440, margin: '0 auto', width: '100%',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 20, height: 20, background: accent, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 7, fontWeight: 900, color: '#fff' }}>AK</span>
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: textMid }}>AI-KWANG TECH CO., LTD.</span>
        </div>
        <span style={{ fontSize: 11, color: textDim }}>© 2026 Made with Worldedit Design</span>
        <span onClick={() => navigate('/')} style={{ fontSize: 12, color: textMid, cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.color = text}
          onMouseLeave={e => e.currentTarget.style.color = textMid}>← Back to Directory</span>
      </footer>
    </div>
  )
}

// helper used in service grid
const accentDim = 'rgba(232,0,27,0.12)'
