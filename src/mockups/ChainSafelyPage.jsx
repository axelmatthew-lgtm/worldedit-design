import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const DARK = '#0c0c0c'
const WHITE = '#ffffff'
const LIME = '#c1ff00'
const CYAN = '#40f0f4'
const PINK = '#ff0080'
const GRAY = 'rgba(255,255,255,0.45)'
const DIM = 'rgba(255,255,255,0.12)'
const LINE = 'rgba(255,255,255,0.1)'
const FONT = '"Aeonik", "Inter", "Helvetica Neue", Arial, sans-serif'

const GRADIENT = `linear-gradient(90deg, ${LIME} 0%, ${CYAN} 40%, ${PINK} 100%)`

export default function ChainSafelyPage() {
  const navigate = useNavigate()
  const [time, setTime] = useState('')
  const [spinDeg, setSpinDeg] = useState(0)
  const spinRef = useRef(null)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-TW', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    let frame
    let deg = 0
    const spin = () => {
      deg += 0.4
      setSpinDeg(deg)
      frame = requestAnimationFrame(spin)
    }
    frame = requestAnimationFrame(spin)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: DARK, color: WHITE, fontFamily: FONT, overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .cs-nav-link { color: rgba(255,255,255,0.55); font-size: 0.875rem; font-weight: 500; text-decoration: none; cursor: pointer; transition: color 0.2s; letter-spacing: 0.01em; }
        .cs-nav-link:hover { color: #fff; }
        .cs-section-line { border: none; border-top: 1px solid ${LINE}; margin: 0; }
        .cs-project-card { position: relative; overflow: hidden; cursor: pointer; background: #1a1a1a; }
        .cs-project-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .cs-project-card:hover .cs-project-img { transform: scale(1.03); }
        .cs-project-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.3); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; }
        .cs-project-card:hover .cs-project-overlay { opacity: 1; }
        .cs-cta-btn { position: relative; overflow: hidden; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; font-weight: 600; color: #fff; text-decoration: none; cursor: pointer; padding: 0.75rem 1.5rem; border: 1px solid ${LINE}; background: transparent; font-family: inherit; letter-spacing: 0.02em; transition: border-color 0.2s; }
        .cs-cta-btn:hover { border-color: rgba(255,255,255,0.4); }
        .cs-cta-grad { position: absolute; inset: 0; background: ${GRADIENT}; background-size: 250% 250%; animation: gradOrbit 4s linear infinite; clip-path: inset(0 100% 0 0); opacity: 0; transition: clip-path 300ms ease, opacity 300ms ease; }
        .cs-cta-btn:hover .cs-cta-grad { clip-path: inset(0 0 0 0); opacity: 0.18; }
        @keyframes gradOrbit {
          0%   { background-position: 50% 0%; }
          25%  { background-position: 100% 50%; }
          50%  { background-position: 50% 100%; }
          75%  { background-position: 0% 50%; }
          100% { background-position: 50% 0%; }
        }
        .cs-choose-card { padding: 2.5rem 0; border-top: 1px solid ${LINE}; }
        .cs-footer-link { display: flex; align-items: center; gap: 0.5rem; color: rgba(255,255,255,0.45); font-size: 0.875rem; text-decoration: none; cursor: pointer; transition: color 0.2s; padding: 0.25rem 0; }
        .cs-footer-link:hover { color: #fff; }
        .cs-grad-text { background: ${GRADIENT}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        @media (max-width: 900px) {
          .cs-hero-grid { grid-template-columns: 1fr !important; }
          .cs-project-grid { grid-template-columns: 1fr !important; }
          .cs-choose-grid { grid-template-columns: 1fr !important; }
          .cs-three-col { grid-template-columns: 1fr 1fr !important; }
          .cs-footer-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .cs-nav-links { display: none !important; }
          .cs-contact-stat-grid { grid-template-columns: 1fr 1fr !important; }
          .cs-contact-two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 600px) {
          .cs-three-col { grid-template-columns: 1fr !important; }
          .cs-contact-stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, borderBottom: `1px solid ${LINE}`, background: 'rgba(12,12,12,0.85)', backdropFilter: 'blur(16px)', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src="/logos/chainsafely-logo.svg" alt="Chain-Safely" style={{ height: 28, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
        </div>
        <div className="cs-nav-links" style={{ display: 'flex', gap: '2rem' }}>
          {['Products', 'About', 'Certifications', 'Contact'].map(l => (
            <span key={l} className="cs-nav-link">{l}</span>
          ))}
        </div>
        <span onClick={() => navigate('/')} className="cs-nav-link" style={{ fontSize: '0.8rem', letterSpacing: '0.06em' }}>← Back</span>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: 'clamp(1.5rem,4vw,3rem)', paddingTop: '8rem' }}>
        <div className="cs-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'end', maxWidth: 1440, margin: '0 auto', paddingTop: '6rem' }}>
          {/* Left — label + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p style={{ fontSize: '0.8rem', color: GRAY, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.6 }}>
              Taoyuan, Taiwan<br />PPE Manufacturer<br />Since 1990s
            </p>
            <button className="cs-cta-btn">
              <div className="cs-cta-grad" />
              <span style={{ position: 'relative', zIndex: 1 }}>Request a quote →</span>
            </button>
          </div>

          {/* Right — big headline */}
          <div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', color: WHITE }}>
              Working with construction &amp; engineering teams — to build safety that works.
            </h1>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section style={{ position: 'relative', height: 'clamp(360px, 55vw, 640px)', overflow: 'hidden', margin: '0 clamp(1.5rem,4vw,3rem)', borderRadius: 2 }}>
        <img src="https://www.chainsafely.com.tw/wp-content/uploads/2018/01/about-bg03.jpg" alt="Chain-Safely" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', maxWidth: '100%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.6) 100%)' }} />
        {/* Logo centered */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/logos/chainsafely-logo.svg" alt="Chain-Safely" style={{ height: 'clamp(48px, 8vw, 96px)', objectFit: 'contain' }} />
        </div>
        {/* Bottom label */}
        <div style={{ position: 'absolute', bottom: 28, left: 32, right: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Head · Eye · Face · Respiratory · Noise Protection</span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>01 / 06</span>
        </div>
      </section>

      <hr className="cs-section-line" style={{ margin: '0 clamp(1.5rem,4vw,3rem)', marginTop: '4rem' }} />

      {/* ── SECTION 01 — ABOUT ── */}
      <section style={{ padding: 'clamp(3rem,5vw,5rem) clamp(1.5rem,4vw,3rem)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.12em', textTransform: 'uppercase' }}>WHY CHAIN-SAFELY</span>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.08em' }}>01</span>
          </div>
          <div style={{ maxWidth: 860 }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: WHITE, marginBottom: '2rem' }}>
              When you work with Chain-Safely, you work with a team that understands what's at stake on every job site.
            </h2>
            <div className="cs-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <p style={{ fontSize: '0.95rem', color: GRAY, lineHeight: 1.8 }}>
                We've been manufacturing personal protective equipment for Taiwan's construction and engineering industry for decades. Every helmet, goggle, and respirator we make is built around one principle: protection that workers actually want to wear.
              </p>
              <div>
                <p style={{ fontSize: '0.95rem', color: GRAY, lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Certified to US, European, and CNS standards. Featured in 民視, 華視, and 東森. Trusted by site managers, HSE officers, and procurement teams across Taiwan and internationally.
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 32, height: 1.5, background: LIME }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: WHITE }}>Hazard → Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="cs-section-line" style={{ margin: '0 clamp(1.5rem,4vw,3rem)' }} />

      {/* ── SECTION 02 — FEATURED PRODUCTS ── */}
      <section style={{ padding: 'clamp(3rem,5vw,5rem) clamp(1.5rem,4vw,3rem)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.12em', textTransform: 'uppercase' }}>FEATURED PRODUCTS</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <span className="cs-cta-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                <div className="cs-cta-grad" />
                <span style={{ position: 'relative', zIndex: 1 }}>View all →</span>
              </span>
              <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.08em' }}>02</span>
            </div>
          </div>

          <div className="cs-project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { title: 'Head Protection',        sub: 'Engineering Helmets',         tag: 'SN Series · 11 models', accent: LIME, bgImg: 'https://www.chainsafely.com.tw/wp-content/uploads/2025/02/%E9%A0%AD%E9%83%A8%E9%98%B2%E8%AD%B7%E8%83%8C%E6%99%AF%E5%9C%96-1.jpg',   productImg: 'https://www.chainsafely.com.tw/wp-content/uploads/2018/11/SN-90%E9%A0%AD%E9%83%A8%E9%98%B2%E8%AD%B7%E7%B4%A2%E5%BC%95-1.png' },
              { title: 'Eye Protection',          sub: 'Safety Glasses & Goggles',   tag: 'SG Series · 12 models', accent: CYAN, bgImg: 'https://www.chainsafely.com.tw/wp-content/uploads/2019/01/eye_02.jpg',                                                             productImg: 'https://www.chainsafely.com.tw/wp-content/uploads/2019/07/SG-401.png' },
              { title: 'Respiratory Protection',  sub: 'Masks & Respirators',        tag: 'SD Series · 9 models',  accent: PINK, bgImg: 'https://www.chainsafely.com.tw/wp-content/uploads/2018/09/%E5%91%BC%E5%90%B8%E7%94%A2%E5%93%81%E9%A6%96%E9%A0%81_02.jpg',        productImg: 'https://www.chainsafely.com.tw/wp-content/uploads/2024/11/6610-%E9%A6%96%E9%A0%81%E7%94%A8.png' },
              { title: 'Face Shields',            sub: 'Full-Face Protection',       tag: 'SK Series · 6 models',  accent: LIME, bgImg: 'https://www.chainsafely.com.tw/wp-content/uploads/2019/01/face-01.jpg',                                                            productImg: 'https://www.chainsafely.com.tw/wp-content/uploads/2019/07/SK-201.png' },
            ].map((p, i) => (
              <div key={i} className="cs-project-card" style={{ minHeight: 320 }}>
                {/* Background photo */}
                <img src={p.bgImg} alt="" className="cs-project-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', maxWidth: '100%' }} />
                {/* Dark overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.7) 100%)' }} />
                {/* Product PNG — multiply removes white, product merges with bg photo */}
                <img
                  src={p.productImg}
                  alt={p.title}
                  style={{
                    position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)',
                    height: '72%', width: 'auto', objectFit: 'contain', zIndex: 1,
                    mixBlendMode: 'multiply',
                    filter: 'brightness(3.5) contrast(1.1) saturate(1.2)',
                    maxWidth: '40%',
                  }}
                />
                {/* Text */}
                <div style={{ position: 'absolute', inset: 0, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 2 }}>
                  <span style={{ fontSize: '0.68rem', color: p.accent, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>{p.tag}</span>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)', fontWeight: 800, color: WHITE, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 4 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: GRAY }}>{p.sub}</p>
                </div>
                <div className="cs-project-overlay" style={{ zIndex: 3 }}>
                  <span style={{ background: WHITE, color: DARK, fontSize: '0.8rem', fontWeight: 700, padding: '0.6rem 1.4rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>View Range</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="cs-section-line" style={{ margin: '0 clamp(1.5rem,4vw,3rem)' }} />

      {/* ── SECTION 03 — WHY CHOOSE ── */}
      <section style={{ padding: 'clamp(3rem,5vw,5rem) clamp(1.5rem,4vw,3rem)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.12em', textTransform: 'uppercase' }}>WHY CHOOSE US</span>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.08em' }}>03</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: WHITE, marginBottom: '3rem', maxWidth: 700 }}>
            Why safety managers choose Chain-Safely
          </h2>
          <div className="cs-choose-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 4rem' }}>
            {[
              { num: '01', title: 'Certified to international standards', body: "Every product meets ANSI/ISEA, EN/CE, and CNS requirements. Dual-certification means approvals go through faster — whether your project is domestic or export." },
              { num: '02', title: 'Full-range from a single supplier', body: "Head, eye, face, respiratory, and noise protection — sourced from one trusted manufacturer. Fewer vendors, consistent quality, simplified procurement." },
              { num: '03', title: 'Protection workers actually wear', body: "We design for comfort and compliance. PPE that fits well and feels good gets worn all shift — and that's what reduces incidents." },
              { num: '04', title: 'Custom printing & OEM available', body: "Logo, color, and branding printed directly on helmets and gear. Ideal for large-site deployments, brand identity on site, and OEM supply agreements." },
            ].map((c, i) => (
              <div key={i} className="cs-choose-card">
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.08em', flexShrink: 0, paddingTop: 4 }}>{c.num}</span>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: WHITE, marginBottom: '0.75rem', lineHeight: 1.3 }}>{c.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: GRAY, lineHeight: 1.75 }}>{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="cs-section-line" style={{ margin: '0 clamp(1.5rem,4vw,3rem)' }} />

      {/* ── PHILOSOPHY TEXT ── */}
      <section style={{ padding: 'clamp(4rem,6vw,6rem) clamp(1.5rem,4vw,3rem)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.08em' }}>04</span>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.9rem)', fontWeight: 400, color: GRAY, lineHeight: 1.65, maxWidth: 900 }}>
            In a world full of hazards, the difference between an injury and a near-miss is often a single piece of equipment. Workers don't choose to wear PPE they find uncomfortable. They wear what fits, what breathes, what moves with them. The best protection is protection that feels like it was made for the person wearing it.
          </p>
        </div>
      </section>

      <hr className="cs-section-line" style={{ margin: '0 clamp(1.5rem,4vw,3rem)' }} />

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: 'clamp(3rem,5vw,5rem) clamp(1.5rem,4vw,3rem)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.12em', textTransform: 'uppercase' }}>WHAT OUR CUSTOMERS SAY</span>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.08em' }}>05</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: WHITE, marginBottom: '3rem', maxWidth: 700 }}>
            Protection workers<br />trust every shift.
          </h2>
          <div className="cs-choose-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { quote: "We've been equipping our entire construction crew with O.PO helmets for three years. The comfort keeps workers compliant — they actually keep them on all day.", author: 'Site Safety Manager', org: 'Infrastructure Contractor, Taipei' },
              { quote: 'The SG-401 safety glasses passed our industrial impact tests with no issues. CE and ANSI dual-certification made procurement approval straightforward.', author: 'HSE Officer', org: 'Manufacturing Plant, Taoyuan' },
              { quote: 'Custom-printed helmets arrived exactly on spec. Using Chain-Safely across three active job sites — consistent quality, competitive pricing, fast service.', author: 'Project Manager', org: 'Construction Group, Kaohsiung' },
              { quote: 'The respirator range covers everything from dust to chemical vapors. One supplier for our full PPE compliance checklist — that simplicity is invaluable.', author: 'Safety Coordinator', org: 'Chemical Plant, Hsinchu' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#161616', border: `1px solid ${LINE}`, padding: '2.5rem' }}>
                <p style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.75rem' }}>"{t.quote}"</p>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: WHITE, marginBottom: 4 }}>{t.author}</p>
                <p style={{ fontSize: '0.78rem', color: GRAY }}>{t.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="cs-section-line" style={{ margin: '0 clamp(1.5rem,4vw,3rem)' }} />

      {/* ── REVIEWS ── */}
      <section style={{ padding: 'clamp(3rem,5vw,5rem) clamp(1.5rem,4vw,3rem)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.12em', textTransform: 'uppercase' }}>REVIEWS</span>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.08em' }}>06</span>
          </div>
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <p style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', color: WHITE }}>4.8</p>
              <p style={{ fontSize: '1rem', letterSpacing: 4, margin: '8px 0', color: LIME }}>★★★★★</p>
              <p style={{ fontSize: '0.75rem', color: GRAY }}>183 reviews</p>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              {[[5,84],[4,12],[3,3],[2,1],[1,0]].map(([s,p]) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: '0.75rem', color: GRAY, width: 10 }}>{s}</span>
                  <div style={{ flex: 1, height: 3, background: LINE }}>
                    <div style={{ width: `${p}%`, height: '100%', background: WHITE }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: GRAY, width: 32, textAlign: 'right' }}>{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="cs-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.75rem' }}>
            {[
              { name: 'C. Wu', stars: 5, product: 'SN-90 Safety Helmet', review: 'Worn on high-rise sites for two years. Excellent ventilation and the suspension system distributes weight well. No complaints after full shift wear.' },
              { name: 'M. Huang', stars: 5, product: 'SG-401 Safety Glasses', review: 'Anti-fog coating genuinely works in our humid factory environment. Passed all internal impact tests. Reordering for the whole floor.' },
              { name: 'J. Lin', stars: 5, product: 'SD-6610 Respirator', review: 'Comfortable fit even for extended wear. N95 filtration confirmed in our lab testing. The custom printed helmets we ordered came out sharp.' },
            ].map((r, i) => (
              <div key={i} style={{ background: '#161616', border: `1px solid ${LINE}`, padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 700, color: WHITE, marginBottom: 3 }}>{r.name}</p>
                    <p style={{ fontSize: '0.72rem', color: GRAY }}>{r.product}</p>
                  </div>
                  <span style={{ color: LIME, letterSpacing: 2, fontSize: '0.85rem' }}>{'★'.repeat(r.stars)}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="cs-section-line" style={{ margin: '0 clamp(1.5rem,4vw,3rem)' }} />

      {/* ── CONTACT ── */}
      <section style={{ padding: 'clamp(3rem,5vw,5rem) clamp(1.5rem,4vw,3rem)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.12em', textTransform: 'uppercase' }}>CONTACT</span>
            <span style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.08em' }}>07</span>
          </div>

          {/* Stat cards */}
          <div className="cs-contact-stat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '3.5rem' }}>
            {[
              { icon: '⚡', num: '< 2hrs', label: 'Response Time' },
              { icon: '✓', num: '3', label: 'Cert. Standards' },
              { icon: '◎', num: '40+', label: 'Product Lines' },
              { icon: '★', num: '98%', label: 'Satisfaction' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#161616', border: `1px solid ${LINE}`, padding: '1.75rem 1.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', color: LIME, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', fontWeight: 800, color: WHITE, letterSpacing: '-0.03em', marginBottom: 6 }}>{s.num}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: GRAY }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Two-col: form + contact info */}
          <div className="cs-contact-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {/* LEFT: form */}
            <div>
              <p style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Send a message</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Name', ph: 'Your name' },
                  { label: 'Email', ph: 'your@email.com' },
                  { label: 'Company (optional)', ph: 'Company name' },
                ].map((f, i) => (
                  <div key={i}>
                    <label style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: 8 }}>{f.label}</label>
                    <input placeholder={f.ph} style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid ${LINE}`, padding: '10px 0', fontSize: '0.875rem', color: WHITE, fontFamily: FONT, outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => e.currentTarget.style.borderBottomColor = LIME} onBlur={e => e.currentTarget.style.borderBottomColor = LINE} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: 8 }}>Message</label>
                  <textarea placeholder="Tell us about your PPE safety requirements..." rows={4} style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid ${LINE}`, padding: '10px 0', fontSize: '0.875rem', color: WHITE, fontFamily: FONT, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={e => e.currentTarget.style.borderBottomColor = LIME} onBlur={e => e.currentTarget.style.borderBottomColor = LINE} />
                </div>
                <div>
                  <button className="cs-cta-btn" style={{ fontSize: '0.875rem', padding: '0.75rem 1.75rem' }}>
                    <div className="cs-cta-grad" />
                    <span style={{ position: 'relative', zIndex: 1 }}>Send Message →</span>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: contact info */}
            <div>
              <p style={{ fontSize: '0.75rem', color: GRAY, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Other ways to reach us</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: '✉', label: 'Email', value: 'cs4721010@chainsafely.com.tw', sub: 'Response within 2 hours' },
                  { icon: '◎', label: 'Phone', value: '+886-3-472-8989', sub: 'Mon–Fri 8:00–17:30' },
                  { icon: '◈', label: 'Location', value: 'No. 28, Minlong Rd., Yangmei Dist., Taoyuan', sub: 'Taiwan, R.O.C.' },
                ].map((c, i) => (
                  <div key={i} style={{ background: '#161616', border: `1px solid ${LINE}`, padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '1rem', color: LIME, flexShrink: 0, marginTop: 2 }}>{c.icon}</div>
                    <div>
                      <p style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>{c.label}</p>
                      <p style={{ fontSize: '0.875rem', fontWeight: 700, color: WHITE, marginBottom: 2 }}>{c.value}</p>
                      <p style={{ fontSize: '0.75rem', color: GRAY }}>{c.sub}</p>
                    </div>
                  </div>
                ))}
                {/* Quick response guarantee */}
                <div style={{ background: '#161616', border: `1px solid ${LIME}33`, padding: '1.25rem 1.5rem' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, color: LIME, marginBottom: 6, letterSpacing: '0.06em' }}>⚡ Quick Response Guarantee</p>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>All B2B safety procurement inquiries receive a reply within 2 business hours. Custom OEM/branding quotes within 1 business day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="cs-section-line" style={{ margin: '0 clamp(1.5rem,4vw,3rem)' }} />

      {/* ── FOOTER CTA ── */}
      <section style={{ padding: 'clamp(4rem,7vw,7rem) clamp(1.5rem,4vw,3rem)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 4rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: WHITE, maxWidth: 800, marginBottom: '2.5rem' }}>
            We're always ready to help teams build safer workplaces.{' '}
            <span className="cs-grad-text">Start your safety journey →</span>
          </h2>
          <button className="cs-cta-btn" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
            <div className="cs-cta-grad" />
            <span style={{ position: 'relative', zIndex: 1 }}>Get in touch →</span>
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${LINE}`, padding: '4rem clamp(1.5rem,4vw,3rem) 3rem' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            {/* Spinning logomark */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img
                src="/logos/chainsafely-logo.svg"
                alt="Chain-Safely"
                style={{ height: 40, objectFit: 'contain', objectPosition: 'left', filter: 'brightness(0) invert(1)', transform: `rotate(${spinDeg}deg)`, transformOrigin: 'center', display: 'block', width: 40, objectPosition: 'center' }}
              />
            </div>

            {/* Footer links grid */}
            <div className="cs-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 5rem' }}>
              {[
                ['Products', 'About', 'Certifications', 'Contact'],
                ['Instagram', 'LinkedIn', 'Facebook'],
                ['Privacy', 'Terms'],
              ].map((col, ci) => (
                <div key={ci} style={{ display: 'flex', flexDirection: 'column' }}>
                  {col.map(l => (
                    <span key={l} className="cs-footer-link">{l}</span>
                  ))}
                </div>
              ))}
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <span className="cs-footer-link">cs4721010@chainsafely.com.tw</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4 }}>+886-3-472-8989</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>LINE: @308zevfg</span>
            </div>
          </div>

          {/* Footer banner image */}
          <div style={{ overflow: 'hidden', marginBottom: '2rem', borderRadius: 2 }}>
            <img src="https://www.chainsafely.com.tw/wp-content/uploads/2018/01/about-bg02.jpg" alt="Chain-Safely" style={{ width: '100%', height: 'clamp(200px, 28vw, 360px)', objectFit: 'cover', objectPosition: 'center top', opacity: 0.4, display: 'block', filter: 'grayscale(1)', maxWidth: '100%' }} />
          </div>

          {/* Bottom bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>©2025 Chain-Safely · 俊安興業有限公司</span>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)' }}>TW · {time}</span>
            <span onClick={() => navigate('/')} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = WHITE} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.25)'}>← Back to Directory</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
