import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const OFF_WHITE  = '#F5F4F2'
const SOFT_BLACK = '#1A1A18'
const BLACK      = '#0A0A0A'
const MID        = '#7A7A76'
const BORDER     = 'rgba(26,26,24,0.1)'
const ACCENT     = '#1A1A18'

const font = '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'

const IMG_BANNER1 = 'https://www.aquatherm-ppr.com/_i/assets/upload/bannersub/ae8332cfac3b4cb5f307949af39b32a5.jpg'
const IMG_BANNER2 = '/products/kanghe-pipes.png'
const IMG_NEWS1   = 'https://www.aquatherm-ppr.com/_i/assets/upload/news/5eb51cd86dd95f7478245914e7c3ea66.jpg'
const IMG_NEWS2   = 'https://www.aquatherm-ppr.com/_i/assets/upload/news/6dcc3dad13e6a3b97b0e36c451bf5e61.png'
const IMG_NEWS3   = 'https://www.aquatherm-ppr.com/_i/assets/upload/news/b7248ff3939c269c35a9a8a35052528b.png'
const IMG_PHOTO1  = 'https://www.aquatherm-ppr.com/_i/assets/upload/photo/ce995d7a927180bf8a93cfc30982fc4523.jpg'

export default function KanghePage() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: OFF_WHITE, fontFamily: font, color: SOFT_BLACK, overflowX: 'hidden', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .kh2-btn-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: 100px;
          font-family: ${font}; font-size: 14px; font-weight: 500;
          cursor: pointer; border: none; transition: background 0.2s, color 0.2s, box-shadow 0.2s;
          letter-spacing: 0.01em; white-space: nowrap;
        }
        .kh2-btn-dark { background: ${SOFT_BLACK}; color: ${OFF_WHITE}; }
        .kh2-btn-dark:hover { background: #000; }
        .kh2-btn-outline { background: transparent; color: ${SOFT_BLACK}; border: 1.5px solid ${SOFT_BLACK}; }
        .kh2-btn-outline:hover { background: ${SOFT_BLACK}; color: ${OFF_WHITE}; }
        .kh2-btn-ghost { background: rgba(26,26,24,0.07); color: ${SOFT_BLACK}; }
        .kh2-btn-ghost:hover { background: rgba(26,26,24,0.14); }

        .kh2-nav-link {
          font-size: 14px; font-weight: 400; color: ${MID}; text-decoration: none; cursor: pointer;
          transition: color 0.15s; letter-spacing: 0.01em; padding: 6px 2px;
        }
        .kh2-nav-link:hover { color: ${SOFT_BLACK}; }

        .kh2-card { transition: transform 0.25s, box-shadow 0.25s; }
        .kh2-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }

        .kh2-mosaic-a { grid-column: span 7; grid-row: span 2; }
        .kh2-mosaic-b { grid-column: span 5; }
        .kh2-mosaic-c { grid-column: span 5; }
        .kh2-mosaic-d { grid-column: span 4; }
        .kh2-mosaic-e { grid-column: span 4; }
        .kh2-mosaic-f { grid-column: span 4; }

        .kh2-faq-row { border-bottom: 1px solid ${BORDER}; cursor: pointer; transition: background 0.15s; }
        .kh2-faq-row:hover { background: rgba(26,26,24,0.03); }

        .kh2-proj-row { border-bottom: 1px solid ${BORDER}; transition: background 0.15s; cursor: pointer; }
        .kh2-proj-row:hover { background: rgba(26,26,24,0.04); }

        .kh2-input {
          width: 100%; background: transparent; border: none;
          border-bottom: 1.5px solid ${BORDER}; border-radius: 0;
          padding: 12px 0; font-size: 14px; color: ${SOFT_BLACK};
          font-family: ${font}; outline: none; transition: border-color 0.2s;
        }
        .kh2-input::placeholder { color: rgba(26,26,24,0.35); }
        .kh2-input:focus { border-bottom-color: ${SOFT_BLACK}; }
        .kh2-textarea {
          width: 100%; background: transparent; border: none;
          border-bottom: 1.5px solid ${BORDER}; border-radius: 0;
          padding: 12px 0; font-size: 14px; color: ${SOFT_BLACK};
          font-family: ${font}; outline: none; resize: none; transition: border-color 0.2s;
        }
        .kh2-textarea::placeholder { color: rgba(26,26,24,0.35); }
        .kh2-textarea:focus { border-bottom-color: ${SOFT_BLACK}; }

        @media (max-width: 1024px) {
          .kh2-mosaic-a { grid-column: span 12 !important; grid-row: span 1 !important; }
          .kh2-mosaic-b, .kh2-mosaic-c { grid-column: span 6 !important; }
          .kh2-mosaic-d, .kh2-mosaic-e, .kh2-mosaic-f { grid-column: span 4 !important; }
        }
        @media (max-width: 768px) {
          .kh2-hero-layout { flex-direction: column !important; gap: 40px !important; }
          .kh2-hero-img { width: 100% !important; max-width: 100% !important; }
          .kh2-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .kh2-three-col { grid-template-columns: 1fr 1fr !important; }
          .kh2-mosaic { grid-template-columns: 1fr !important; }
          .kh2-mosaic-a, .kh2-mosaic-b, .kh2-mosaic-c,
          .kh2-mosaic-d, .kh2-mosaic-e, .kh2-mosaic-f { grid-column: span 1 !important; grid-row: span 1 !important; }
          .kh2-stats-row { grid-template-columns: 1fr 1fr !important; }
          .kh2-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
          .kh2-nav-links { display: none !important; }
          .kh2-contact-grid { grid-template-columns: 1fr !important; }
          .kh2-contact-stats { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .kh2-stats-row { grid-template-columns: 1fr !important; }
          .kh2-three-col { grid-template-columns: 1fr !important; }
          .kh2-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── FLOATING NAV ── */}
      <div style={{
        position: 'fixed', top: scrolled ? 16 : 0, left: scrolled ? '50%' : 0,
        transform: scrolled ? 'translateX(-50%)' : 'none',
        width: scrolled ? 'auto' : '100%', minWidth: scrolled ? 'unset' : 'unset',
        zIndex: 1000,
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <nav style={{
          background: scrolled ? 'rgba(245,244,242,0.96)' : OFF_WHITE,
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderRadius: scrolled ? 100 : 0,
          border: scrolled ? `1px solid ${BORDER}` : 'none',
          borderBottom: !scrolled ? `1px solid ${BORDER}` : 'none',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.12)' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: scrolled ? '10px 24px' : '0 clamp(1.5rem, 4vw, 3rem)',
          height: scrolled ? 'auto' : 60,
          gap: 32,
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}>
          <img src="/logos/kanghe-aquatherm-logo.svg" alt="Kanghe Aquatherm" style={{ height: scrolled ? 24 : 28, width: 'auto', transition: 'height 0.3s' }} />
          <div className="kh2-nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {['Products', 'Projects', 'News', 'Contact Us'].map(l => (
              <span key={l} className="kh2-nav-link">{l}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span className="kh2-nav-link" style={{ color: MID, fontSize: 13 }} onClick={() => navigate('/')}>← Back</span>
            <button className="kh2-btn-pill kh2-btn-dark" style={{ padding: '9px 20px', fontSize: 13 }}>Get a Quote</button>
          </div>
        </nav>
      </div>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 'clamp(6rem, 16vh, 11rem)',
        paddingBottom: 'clamp(4rem, 10vh, 7rem)',
        paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
        maxWidth: 1440, margin: '0 auto',
      }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
          <img src="/logos/kanghe-aquatherm-logo.svg" alt="Kanghe" style={{ height: 22, width: 'auto', opacity: 0.5 }} />
          <span style={{ width: 1, height: 18, background: BORDER }} />
          <span style={{ fontSize: 12, color: MID, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Aquatherm Germany · Exclusive Taiwan Distributor</span>
        </div>

        <div className="kh2-hero-layout" style={{ display: 'flex', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'flex-start' }}>
          {/* LEFT: headline */}
          <div style={{ flex: '0 0 auto', maxWidth: 'clamp(340px, 50%, 600px)' }}>
            <h1 style={{
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              color: SOFT_BLACK,
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}>
              The World's<br />
              Largest<br />
              <span style={{ display: 'inline-block', position: 'relative' }}>
                <span style={{ color: MID }}>PPR Piping</span>
                <span style={{ color: SOFT_BLACK }}>Brand</span>
              </span>
            </h1>
            <p style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', color: MID, lineHeight: 1.85, maxWidth: 420, marginBottom: 40 }}>
              Aquatherm Germany invented the PPR piping system in 1973, with over 40 years of history.
              We are Taiwan's sole authorized distributor, offering sales, installation training, and engineering consulting services.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="kh2-btn-pill kh2-btn-dark">Contact Us →</button>
              <button className="kh2-btn-pill kh2-btn-outline">Learn More</button>
            </div>

            {/* Certifications */}
            <div style={{ marginTop: 56, paddingTop: 40, borderTop: `1px solid ${BORDER}` }}>
              <div style={{ fontSize: 11, color: MID, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>International Certifications</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['NSF/ANSI 61', 'ISO 15874', 'WRAS', 'CE Marked', 'BPA-Free'].map(c => (
                  <span key={c} style={{
                    fontSize: 11, fontWeight: 600, color: SOFT_BLACK,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 100, padding: '5px 14px',
                    letterSpacing: '0.04em',
                  }}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: image block */}
          <div className="kh2-hero-img" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: 16,
              overflow: 'hidden',
              background: '#ddd',
            }}>
              <img
                src={IMG_BANNER1}
                alt="Aquatherm PPR"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => e.currentTarget.style.display = 'none'}
              />
            </div>
            {/* stats bar below hero image */}
            <div className="kh2-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
              {[
                { num: '40+', label: 'Years of History' },
                { num: '70+', label: 'Countries Certified' },
                { num: '200+', label: 'Taiwan Projects' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: SOFT_BLACK, borderRadius: 12,
                  padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: OFF_WHITE, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: 'rgba(245,244,242,0.5)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND INTRO (two-col) ── */}
      <section style={{
        borderTop: `1px solid ${BORDER}`,
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: 1440, margin: '0 auto',
      }}>
        <div className="kh2-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: MID, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>01 — Brand</div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 800, lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: SOFT_BLACK, marginBottom: 28,
            }}>
              World-Class<br />PPR Piping Systems
            </h2>
            <p style={{ fontSize: 15, color: MID, lineHeight: 1.9, marginBottom: 18 }}>
              Founded in Germany in 1973, Aquatherm is the inventor and world's leading PPR piping brand, certified and distributed in over 70 countries worldwide.
            </p>
            <p style={{ fontSize: 15, color: MID, lineHeight: 1.9, marginBottom: 40 }}>
              Kanghe International is Taiwan's exclusive distributor, specializing in PPR piping sales, engineering consulting, and installation training across HVAC, hot and chilled water, gas piping, and wastewater systems.
            </p>
            <button className="kh2-btn-pill kh2-btn-dark">Brand Story →</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3', background: '#ddd' }}>
              <img
                src={IMG_BANNER2}
                alt="Aquatherm Installation"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => e.currentTarget.style.display = 'none'}
              />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '16/7', background: '#ddd' }}>
              <img
                src={IMG_PHOTO1}
                alt="Aquatherm PPR System"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => e.currentTarget.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT MOSAIC ── */}
      <section style={{
        background: SOFT_BLACK,
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(245,244,242,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>02 — Products</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: OFF_WHITE }}>
                Aquatherm Piping Systems
              </h2>
            </div>
            <button className="kh2-btn-pill" style={{ background: 'rgba(245,244,242,0.1)', color: OFF_WHITE, padding: '9px 20px', fontSize: 13 }}>View All Products</button>
          </div>

          {/* Mosaic grid */}
          <div className="kh2-mosaic" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 12 }}>
            {/* Large card — Fusiotherm */}
            <div className="kh2-mosaic-a" style={{ borderRadius: 16, overflow: 'hidden', background: 'rgba(245,244,242,0.05)', border: '1px solid rgba(245,244,242,0.08)', minHeight: 360, position: 'relative', padding: 'clamp(1.5rem, 3vw, 2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <img src={IMG_BANNER1} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} onError={e => e.currentTarget.style.display='none'} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,24,0.9) 0%, transparent 60%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(245,244,242,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Hot Water System</span>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: OFF_WHITE, letterSpacing: '-0.02em', marginBottom: 12 }}>Fusiotherm®</h3>
                <p style={{ fontSize: 13, color: 'rgba(245,244,242,0.55)', lineHeight: 1.7, maxWidth: 300, marginBottom: 20 }}>The ideal choice for potable and hot water systems. BPA-free, globally NSF/ANSI 61 certified, suitable for medical and food-grade applications.</p>
                <button className="kh2-btn-pill" style={{ background: 'rgba(245,244,242,0.1)', color: OFF_WHITE, fontSize: 12, padding: '8px 18px' }}>Learn More →</button>
              </div>
            </div>

            {/* Medium card — Climatherm */}
            <div className="kh2-mosaic-b" style={{ borderRadius: 16, overflow: 'hidden', background: 'rgba(245,244,242,0.05)', border: '1px solid rgba(245,244,242,0.08)', minHeight: 220, padding: 'clamp(1.25rem, 2.5vw, 2rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(245,244,242,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>HVAC System</span>
                <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 800, color: OFF_WHITE, letterSpacing: '-0.02em' }}>Climatherm</h3>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(245,244,242,0.45)', lineHeight: 1.65 }}>Piping for chilled and hot water HVAC systems — high pressure resistance, low friction loss, ideal for large commercial buildings.</p>
            </div>

            {/* Medium card — Green Pipe */}
            <div className="kh2-mosaic-c" style={{ borderRadius: 16, overflow: 'hidden', background: '#2A2A27', border: '1px solid rgba(245,244,242,0.08)', minHeight: 220, padding: 'clamp(1.25rem, 2.5vw, 2rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(245,244,242,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Industrial System</span>
                <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 800, color: OFF_WHITE, letterSpacing: '-0.02em' }}>Green Pipe</h3>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(245,244,242,0.45)', lineHeight: 1.65 }}>Industrial process piping with chemical resistance, suitable for wastewater and gas pipeline systems.</p>
            </div>

            {/* Small stat cards */}
            {[
              { num: '40+', label: 'Years of Experience' },
              { num: '70+', label: 'Countries Certified' },
              { num: '200+', label: 'Taiwan Projects' },
            ].map((s, i) => (
              <div key={i} className={['kh2-mosaic-d','kh2-mosaic-e','kh2-mosaic-f'][i]} style={{ borderRadius: 16, background: i === 1 ? 'rgba(245,244,242,0.08)' : 'transparent', border: '1px solid rgba(245,244,242,0.08)', minHeight: 130, padding: 'clamp(1rem, 2vw, 1.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: OFF_WHITE, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: 'rgba(245,244,242,0.4)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section style={{
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: 1440, margin: '0 auto',
        borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: MID, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>03 — Why Aquatherm</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: SOFT_BLACK, maxWidth: 520, lineHeight: 1.05 }}>
            German Quality, Permanent Bond
          </h2>
          <p style={{ fontSize: 14, color: MID, lineHeight: 1.8, maxWidth: 340 }}>
            Fifty years of piping engineering experience. Every fitting represents the ultimate pursuit of quality.
          </p>
        </div>
        <div className="kh2-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: BORDER }}>
          {[
            { n: '01', title: 'Fusion Welding', sub: 'Permanent Joint', desc: 'Heat fusion creates joints stronger than the pipe itself — no threads, no corrosion, permanently sealed.' },
            { n: '02', title: 'NSF-61 Certified', sub: 'Potable Water', desc: 'NSF/ANSI 61 potable water certified, BPA-free, approved for medical and food-grade applications.' },
            { n: '03', title: 'On-Site Support', sub: 'Technical Guidance', desc: 'Kanghe engineers attend major construction sites to provide real-time technical guidance and system certification documents.' },
            { n: '04', title: 'Global Certifications', sub: 'International Standard', desc: 'Certified in over 70 countries, compliant with ISO 15874, WRAS, CE, and other international standards.' },
          ].map((f, i) => (
            <div key={i} style={{ background: OFF_WHITE, padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 2.5vw, 2rem)' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: MID, letterSpacing: '0.08em', marginBottom: 32 }}>{f.n}</div>
              <h3 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.375rem)', fontWeight: 700, color: SOFT_BLACK, lineHeight: 1.2, marginBottom: 8 }}>{f.title}</h3>
              <div style={{ fontSize: 11, color: MID, letterSpacing: '0.06em', marginBottom: 20 }}>{f.sub}</div>
              <p style={{ fontSize: 13, color: MID, lineHeight: 1.85 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DARK SHOWROOM SECTION ── */}
      <section style={{
        background: SOFT_BLACK,
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div className="kh2-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(245,244,242,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>04 — Engineering</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: OFF_WHITE, lineHeight: 1.05, marginBottom: 28 }}>
                Major Engineering<br />Projects in Taiwan
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(245,244,242,0.5)', lineHeight: 1.85, marginBottom: 40 }}>
                From hospitals to government buildings, from universities to industrial facilities — Aquatherm PPR piping systems protect every major project in Taiwan.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="kh2-btn-pill" style={{ background: OFF_WHITE, color: SOFT_BLACK, fontSize: 13 }}>View All Projects →</button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { name: 'Changhua Christian Hospital', en: '', type: 'Healthcare' },
                { name: 'Taichung Veterans General Hospital', en: '', type: 'Healthcare' },
                { name: 'Kaohsiung Naval Hospital', en: '', type: 'Military' },
                { name: 'National Taiwan Sport University', en: '', type: 'Education' },
                { name: 'Taipei City Hospital', en: '', type: 'Healthcare' },
              ].map((p, i) => (
                <div key={i} className="kh2-proj-row" style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '18px 16px', gap: 16, borderBottom: '1px solid rgba(245,244,242,0.08)',
                }}>
                  <div>
                    <span style={{ fontSize: 15, fontWeight: 600, color: OFF_WHITE, marginRight: 12 }}>{p.name}</span>
                    <span style={{ fontSize: 12, color: 'rgba(245,244,242,0.35)' }}>{p.en}</span>
                  </div>
                  <span style={{ fontSize: 11, color: 'rgba(245,244,242,0.4)', fontWeight: 600, letterSpacing: '0.06em', border: '1px solid rgba(245,244,242,0.15)', padding: '3px 12px', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0 }}>{p.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section style={{
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: 1440, margin: '0 auto',
        borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: MID, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>05 — News</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: SOFT_BLACK }}>Latest News</h2>
          </div>
          <span style={{ fontSize: 13, color: SOFT_BLACK, fontWeight: 500, cursor: 'pointer', borderBottom: `1px solid ${SOFT_BLACK}`, paddingBottom: 2 }}>View All →</span>
        </div>
        <div className="kh2-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { img: IMG_NEWS1, tag: 'Exhibition', date: '2025.10.13', title: '2025 International HVAC & Green Energy Expo', en: '', desc: 'The exhibition ran Oct 14–16 and concluded successfully. Thank you to all visitors — we look forward to seeing you next year.' },
            { img: IMG_NEWS2, tag: 'Certification', date: '2021.07.19', title: 'Quality Excellence Certification', en: '', desc: 'Kanghe International has received the Quality Excellence Certification, continuing to deliver the highest-quality PPR piping systems to major projects across Taiwan.' },
            { img: IMG_NEWS3, tag: 'Announcement', date: '2021.07.19', title: 'Official Website Launch', en: '', desc: 'Our new website is live! The redesigned brand site offers comprehensive product information and an engineering project reference database.' },
          ].map((n, i) => (
            <div key={i} className="kh2-card" style={{ borderRadius: 12, overflow: 'hidden', background: '#fff', border: `1px solid ${BORDER}`, cursor: 'pointer' }}>
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#eee' }}>
                <img src={n.img} alt={n.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => e.currentTarget.style.display='none'} />
              </div>
              <div style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: SOFT_BLACK, letterSpacing: '0.1em', textTransform: 'uppercase', border: `1px solid ${BORDER}`, padding: '3px 10px', borderRadius: 100 }}>{n.tag}</span>
                  <span style={{ fontSize: 11, color: MID }}>{n.date}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(13px, 1.2vw, 16px)', fontWeight: 700, color: SOFT_BLACK, marginBottom: 6, lineHeight: 1.4 }}>{n.title}</h3>
                <p style={{ fontSize: 11, color: MID, marginBottom: 10, letterSpacing: '0.04em' }}>{n.en}</p>
                <p style={{ fontSize: 13, color: MID, lineHeight: 1.8 }}>{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div className="kh2-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 100 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: MID, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>06 — FAQ</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: SOFT_BLACK, lineHeight: 1.05 }}>Frequently Asked Questions</h2>
            </div>
            <div>
              {[
                { q: 'How does Aquatherm PPR differ from standard plastic pipes?', a: 'Aquatherm uses German raw materials and heat fusion welding — joints are stronger than the pipe itself, requiring no threads or adhesives. Joints are permanently leak-free and BPA-free, meeting potable water standards.' },
                { q: 'Does Kanghe provide installation training?', a: 'Yes. Kanghe International provides comprehensive installation training and on-site technical support, and issues an official Aquatherm system certificate upon project completion.' },
                { q: 'What project types is it suitable for?', a: 'Suitable applications include HVAC systems, hot and chilled water systems, gas pipelines, wastewater treatment, and industrial process water — across healthcare, government, education, and industrial facilities.' },
                { q: 'What international certifications does Aquatherm hold?', a: 'Aquatherm products are certified to NSF/ANSI 61 (potable water), ISO 15874 (PPR piping), WRAS (UK water regulations), and CE (EU), with legal sales in over 70 countries.' },
                { q: 'How do I request a quote?', a: 'Please provide your project drawings, pipe size specifications, and system type, then contact Kanghe International at 04-7261626. We will provide a complete BOM and quotation.' },
              ].map((f, i) => (
                <div key={i} className="kh2-faq-row" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ padding: '24px 12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
                    <p style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 600, color: SOFT_BLACK, lineHeight: 1.4 }}>{f.q}</p>
                    <span style={{
                      fontSize: 22, color: MID, flexShrink: 0,
                      display: 'inline-flex', width: 28, height: 28, alignItems: 'center', justifyContent: 'center',
                      border: `1px solid ${BORDER}`, borderRadius: '50%',
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.25s',
                    }}>+</span>
                  </div>
                  {openFaq === i && (
                    <p style={{ fontSize: 14, color: MID, lineHeight: 1.9, paddingTop: 16, maxWidth: 620 }}>{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{
        background: '#fff',
        padding: 'clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)',
        borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: MID, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>07 — Contact</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: SOFT_BLACK, lineHeight: 1.05 }}>
              Ready to Start?<br />Contact Us
            </h2>
            <p style={{ fontSize: 14, color: MID, lineHeight: 1.8, maxWidth: 320 }}>
              Fill in the form or call us directly — we respond to all enquiries within 24 hours.
            </p>
          </div>

          {/* Stats */}
          <div className="kh2-contact-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 56 }}>
            {[
              { num: '< 24hrs', label: 'Response Time' },
              { num: '40+', label: 'Years Experience' },
              { num: 'ISO 9001', label: 'Certified Quality' },
              { num: '98%', label: 'Client Satisfaction' },
            ].map((s, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: 'clamp(1rem, 2vw, 1.5rem)', textAlign: 'center', background: OFF_WHITE }}>
                <div style={{ fontSize: 'clamp(1.125rem, 2vw, 1.625rem)', fontWeight: 800, color: SOFT_BLACK, letterSpacing: '-0.02em', marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: MID, letterSpacing: '0.04em' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Form + Info */}
          <div className="kh2-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 7rem)' }}>
            {/* Left: form */}
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: SOFT_BLACK, marginBottom: 32 }}>Send a Message</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: MID, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Name</label>
                  <input className="kh2-input" placeholder="Your name" />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: MID, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email</label>
                  <input className="kh2-input" placeholder="your@email.com" />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: MID, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Company <span style={{ opacity: 0.5, fontWeight: 400 }}>(optional)</span></label>
                  <input className="kh2-input" placeholder="Company name" />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: MID, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Message</label>
                  <textarea className="kh2-textarea" placeholder="Tell us about your project..." rows={5} />
                </div>
                <div>
                  <button className="kh2-btn-pill kh2-btn-dark" style={{ marginTop: 8 }}>Send Message →</button>
                </div>
              </div>
            </div>

            {/* Right: info */}
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: SOFT_BLACK, marginBottom: 32 }}>Other Ways to Reach Us</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1px solid ${BORDER}` }}>
                {[
                  { label: 'Email', value: 'info@kanghe.com.tw', sub: 'Response within 24 hours' },
                  { label: 'Phone', value: '04-7261626', sub: 'Mon–Fri 9:00–18:00 (Taiwan Time)' },
                  { label: 'Address', value: '15, Lane 278, Pingan St, Changhua City', sub: 'Taiwan 500' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, padding: '22px 0', borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: MID, letterSpacing: '0.1em', textTransform: 'uppercase', minWidth: 70 }}>{c.label}</span>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: SOFT_BLACK, marginBottom: 2 }}>{c.value}</div>
                      <div style={{ fontSize: 12, color: MID }}>{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA note */}
              <div style={{ marginTop: 32, padding: 'clamp(1.25rem, 2.5vw, 2rem)', background: SOFT_BLACK, borderRadius: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: OFF_WHITE, marginBottom: 10 }}>⚡ Fast Quote Service</div>
                <p style={{ fontSize: 13, color: 'rgba(245,244,242,0.6)', lineHeight: 1.7 }}>Provide your project drawings and pipe specifications — our engineers will reply with a full BOM quotation within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH CTA ── */}
      <section style={{
        background: SOFT_BLACK,
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 40 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', color: OFF_WHITE, marginBottom: 20 }}>
              Ready to Start<br />Your Project?
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(245,244,242,0.45)', lineHeight: 1.8 }}>
              15, Lane 278, Pingan St, Changhua City, Taiwan · 04-7261626
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="kh2-btn-pill" style={{ background: OFF_WHITE, color: SOFT_BLACK, fontSize: 14 }}>Get a Quote →</button>
            <button className="kh2-btn-pill" style={{ background: 'rgba(245,244,242,0.1)', color: 'rgba(245,244,242,0.7)', fontSize: 14 }}>Download Catalogue</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: BLACK, padding: 'clamp(3rem, 6vh, 5rem) clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div className="kh2-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
            <div>
              <img src="/logos/kanghe-aquatherm-logo.svg" alt="Kanghe Aquatherm" style={{ height: 22, width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: 20, opacity: 0.6 }} />
              <p style={{ fontSize: 12, color: 'rgba(245,244,242,0.3)', lineHeight: 1.9, maxWidth: 220 }}>
                Kanghe International Co., Ltd.<br />
                15, Lane 278, Pingan St,<br />
                Changhua City 500, Taiwan<br />
                Tel: 04-7261626
              </p>
            </div>
            {[
              { heading: 'Products', links: ['Fusiotherm®', 'Climatherm', 'Green Pipe', 'Fittings & Accessories'] },
              { heading: 'Services', links: ['HVAC Systems', 'Hot & Chilled Water', 'Gas Pipelines', 'Wastewater Treatment'] },
              { heading: 'Company', links: ['About Us', 'Brand Story', 'Project References', 'News'] },
              { heading: 'Contact', links: ['Contact Us', 'Technical Support', 'Installation Training', 'Get a Quote'] },
            ].map(col => (
              <div key={col.heading}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,244,242,0.3)', marginBottom: 20 }}>{col.heading}</p>
                {col.links.map(l => (
                  <p key={l} style={{ fontSize: 13, color: 'rgba(245,244,242,0.45)', lineHeight: 3, cursor: 'pointer', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = OFF_WHITE}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,244,242,0.45)'}
                  >{l}</p>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(245,244,242,0.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 12, color: 'rgba(245,244,242,0.2)' }}>
            <span>Copyright © 2026 Kanghe International Co., Ltd. All Rights Reserved. · Made with Worldedit Design</span>
            <span onClick={() => navigate('/')} style={{ cursor: 'pointer', color: 'rgba(245,244,242,0.4)' }}>← Back to Directory</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
