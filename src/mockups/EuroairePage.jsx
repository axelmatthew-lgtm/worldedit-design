import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PremiumContact from '../components/PremiumContact'
import { SmokeBackground } from '../components/ui/spooky-smoke-animation'

const bg = '#f5f5f5'
const bgDark = '#111111'
const text = '#111111'
const textMid = 'rgba(0,0,0,0.45)'
const textLight = 'rgba(0,0,0,0.28)'
const border = 'rgba(0,0,0,0.1)'
const accent = '#5E89B4'
const teal = '#85CFC6'

export default function EuroairePage() {
  const navigate = useNavigate()
  const [openAccordion, setOpenAccordion] = useState(null)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <div style={{
      minHeight: '100vh',
      background: bg,
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      color: text,
      fontWeight: 300,
      overflowX: 'hidden',
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap');
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .ea-link { opacity: 0.35; transition: opacity 0.2s; cursor: pointer; }
        .ea-link:hover { opacity: 1; }
        .ea-pill { transition: background 0.22s, color 0.22s, border-color 0.22s; cursor: pointer; }
        .ea-pill:hover { background: ${accent} !important; color: #fff !important; border-color: ${accent} !important; }
        .ea-card-img { transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94); }
        .ea-card:hover .ea-card-img { transform: scale(1.03) !important; }
        .ea-dl-row { transition: opacity 0.18s; }
        .ea-dl-row:hover { opacity: 0.5; }
        .ea-accordion { transition: background 0.15s; cursor: pointer; }
        .ea-accordion:hover { background: rgba(0,0,0,0.02) !important; }
        @media (max-width: 767px) {
          .ea-hero-h1 { font-size: clamp(38px, 10vw, 60px) !important; }
          .ea-two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .ea-three-col { grid-template-columns: 1fr !important; }
          .ea-four-col { grid-template-columns: 1fr 1fr !important; }
          .ea-stat-row > div { border-right: none !important; border-bottom: 1px solid ${border} !important; }
          .ea-footer-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── NAV — Melt style: transparent over hero, white bg after ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 52,
        display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        padding: '0 clamp(1.5rem, 4vw, 3rem)',
        background: 'rgba(245,245,245,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${border}`,
      }}>
        <span className="ea-link" onClick={() => navigate('/')}
          style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: text }}>
          ← Back
        </span>
        <img src="/logos/tuntos-logo.svg" alt="TUNTOS" style={{ height: 28, objectFit: 'contain' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 24, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <span className="ea-link" style={{ color: text }}>Prev</span>
          <span className="ea-link" style={{ color: text }}>Next</span>
        </div>
      </nav>

      {/* ══ HERO — full viewport, dark bg, centered tagline (Melt "Looks minimal. Feels infinite.") ══ */}
      <section style={{
        minHeight: '100svh',
        background: bgDark,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 52,
      }}>
        {/* WebGL smoke animation */}
        <SmokeBackground smokeColor="#5E89B4" />

        {/* Subtle background texture — faint EC fan blade */}
        <img
          src="/products/ea_hvac1_v2_nobg.png"
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            opacity: 0.07, zIndex: 0,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(17,17,17,0.4) 0%, rgba(17,17,17,0.85) 100%)', zIndex: 1 }} />

        {/* Centered hero content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 820, padding: '0 clamp(1.5rem, 5vw, 3rem)' }}>
          <img src="/logos/tuntos-logo.svg" alt="TUNTOS" style={{ height: 44, objectFit: 'contain', marginBottom: 36, display: 'block', margin: '0 auto 36px', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
          <p style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 40, fontWeight: 300 }}>
            Euroaire · 歐陸通風設備 · Taiwan
          </p>
          <h1 className="ea-hero-h1" style={{
            fontSize: 'clamp(44px, 7vw, 88px)',
            fontWeight: 100,
            lineHeight: 1.08,
            letterSpacing: '-2px',
            color: '#fff',
            marginBottom: 36,
          }}>
            Silent.<br />Efficient.<br />Intelligent.
          </h1>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: 52, maxWidth: 480, margin: '0 auto 52px' }}>
            Taiwan's leading distributor of ebm-papst and ZIEHL-ABEGG EC ventilation technology.
          </p>
          {/* Melt-style pill CTA buttons */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="ea-pill" style={{
              background: 'transparent', color: 'rgba(255,255,255,0.75)',
              border: '0.5px solid rgba(255,255,255,0.35)',
              borderRadius: 100, padding: '12px 32px',
              fontSize: 12, fontWeight: 300, letterSpacing: '0.1em',
              cursor: 'pointer', fontFamily: 'inherit',
            }}>View Products</button>
            <button className="ea-pill" style={{
              background: 'transparent', color: 'rgba(255,255,255,0.75)',
              border: '0.5px solid rgba(255,255,255,0.35)',
              borderRadius: 100, padding: '12px 32px',
              fontSize: 12, fontWeight: 300, letterSpacing: '0.1em',
              cursor: 'pointer', fontFamily: 'inherit',
            }}>Company</button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.2)' }} />
          <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>Scroll</p>
        </div>
      </section>

      {/* ══ STATS BAR — off-white, Melt rhythm ══ */}
      <div style={{ background: '#ffffff', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="ea-stat-row" style={{ display: 'flex' }}>
            {[
              { n: '1976', label: 'Founded' },
              { n: '5', label: 'Group Companies' },
              { n: '40+', label: 'Countries Served' },
              { n: '#1', label: 'EC Fan Brand' },
            ].map((s, i) => (
              <div key={i} style={{
                flex: 1, textAlign: 'center',
                padding: '2.5rem 1rem',
                borderRight: i < 3 ? `1px solid ${border}` : 'none',
              }}>
                <p style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 100, letterSpacing: '-1px', marginBottom: 6, color: text }}>{s.n}</p>
                <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: textLight, fontWeight: 400 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ABOUT — two-col, Melt generous spacing ══ */}
      <section style={{ background: bg, borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="ea-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
            {/* Left: big thin heading */}
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: textLight, marginBottom: 28, fontWeight: 400 }}>Company</p>
              <h2 style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 100, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 28, color: text }}>
                Nearly five decades of HVAC expertise.
              </h2>
              <p style={{ fontSize: 13, color: textMid, lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>
                Founded in 1976 by Chairman Huang Fu-Chi, TUNTOS Enterprise has grown into Taiwan's most comprehensive HVAC and refrigeration components group — serving as exclusive distributor for Copeland, ALCO/Emerson, SPORLAN, MUELLER, and ebm-papst.
              </p>
              <button className="ea-pill" style={{
                background: 'transparent', color: textMid,
                border: `0.5px solid ${border}`,
                borderRadius: 100, padding: '11px 28px',
                fontSize: 11, fontWeight: 300, letterSpacing: '0.1em',
                cursor: 'pointer', fontFamily: 'inherit',
              }}>Learn more</button>
            </div>

            {/* Right: accordion */}
            <div>
              {[
                { title: 'COPELAND Compressors', body: 'Exclusive Taiwan distributor since 1986. Full range of scroll, reciprocating, and semi-hermetic compressors from Emerson Climate Technologies.' },
                { title: 'EMERSON / ALCO Controls', body: 'Exclusive Taiwan distributor since 1996. Solenoid valves, expansion valves, electronic controls and system protectors.' },
                { title: 'ebm-papst EC Technology', body: 'Official partner of ebm-papst Germany — world\'s #1 EC fan brand. RadiPac centrifugal fans with TUV certification and IoT monitoring.' },
                { title: 'ZIEHL-ABEGG', body: 'Premium axial and centrifugal fans for ventilation, climate control, and drive technology applications.' },
                { title: 'Group Companies', body: '佳光企業、歐陸通風設備、台灣愷督科技、谷輪台灣冷凍、富國貿易 — five specialist subsidiaries covering the full HVAC value chain.' },
              ].map((item, i) => (
                <div key={i}
                  className="ea-accordion"
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  style={{
                    borderTop: `1px solid ${border}`,
                    padding: '18px 0',
                    ...(i === 4 ? { borderBottom: `1px solid ${border}` } : {}),
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 14, fontWeight: 300, color: openAccordion === i ? text : textMid, letterSpacing: '0.01em' }}>{item.title}</span>
                    <span style={{ fontSize: 16, color: textLight, lineHeight: 1, fontWeight: 200 }}>{openAccordion === i ? '−' : '+'}</span>
                  </div>
                  {openAccordion === i && (
                    <p style={{ marginTop: 12, fontSize: 13, color: textMid, lineHeight: 1.85, fontWeight: 300 }}>{item.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FULL-WIDTH PRODUCT IMAGE (Melt full-width video/image section) ══ */}
      <section style={{ position: 'relative', overflow: 'hidden', height: '60vh', background: '#e8e8e8' }}>
        <img
          src="/products/ea_hvac1_v2_nobg.png"
          alt="ebm-papst EC Fan"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
          maxWidth: 1200, margin: '0 auto',
          padding: '3rem clamp(1.5rem, 4vw, 3rem)',
        }}>
          <p style={{ fontSize: 'clamp(22px, 3.5vw, 44px)', fontWeight: 100, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.1 }}>
            Up to 50% energy savings<br />with EC technology.
          </p>
        </div>
      </section>

      {/* ══ PRODUCTS — Melt grid, clean image-forward ══ */}
      <section style={{ background: '#ffffff', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem clamp(1.5rem, 4vw, 3rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: textLight, marginBottom: 14, fontWeight: 400 }}>Products</p>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 42px)', fontWeight: 100, letterSpacing: '-0.5px', color: text }}>The Range</h2>
            </div>
            <button className="ea-pill" style={{
              background: 'transparent', color: textMid,
              border: `0.5px solid ${border}`,
              borderRadius: 100, padding: '10px 22px',
              fontSize: 10, fontWeight: 300, letterSpacing: '0.1em',
              cursor: 'pointer', fontFamily: 'inherit',
            }}>View All</button>
          </div>

          <div className="ea-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              { title: 'COPELAND Compressors', sub: 'Scroll · Reciprocating · Semi-hermetic', img: '/products/ea_hvac1_v2_nobg.png' },
              { title: 'ebm-papst EC Fans', sub: 'RadiPac · IoT-enabled · TUV certified', img: '/products/ea_hvac2_v2_nobg.png' },
              { title: 'EMERSON / ALCO Controls', sub: 'Solenoid valves · EEV · System protectors', img: '/products/ea_hvac1_v2_nobg.png' },
              { title: 'ZIEHL-ABEGG Fans', sub: 'Axial · Centrifugal · Drive technology', img: '/products/ea_hvac2_v2_nobg.png' },
              { title: 'SPORLAN Controls', sub: 'Refrigeration components since 1989', img: '/products/ea_hvac1_v2_nobg.png' },
              { title: 'Chiller & Condensing Units', sub: 'Custom-designed for industrial use', img: '/products/ea_hvac2_v2_nobg.png' },
            ].map((p, i) => (
              <div key={i}
                className="ea-card"
                onMouseEnter={() => setHoveredProduct(i)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{ cursor: 'pointer', background: bg, overflow: 'hidden' }}
              >
                <div style={{ overflow: 'hidden', aspectRatio: '4/3', background: '#ebebeb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    className="ea-card-img"
                    src={p.img} alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '18px 2px 28px' }}>
                  <div style={{ height: 1, background: hoveredProduct === i ? accent : 'transparent', marginBottom: 14, transition: 'background 0.2s' }} />
                  <p style={{ fontSize: 14, fontWeight: 300, color: text, marginBottom: 5 }}>{p.title}</p>
                  <p style={{ fontSize: 11, color: textLight, letterSpacing: '0.03em', fontWeight: 300 }}>{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRUSTED BY — Melt minimal logo section ══ */}
      <section style={{ background: bg, borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: textLight, marginBottom: 40, fontWeight: 400 }}>Partners</p>
          <div className="ea-four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
            {[
              <svg key="cop" viewBox="0 0 160 52" width="100%"><text x="80" y="20" textAnchor="middle" fill="rgba(0,0,0,0.35)" fontSize="9" fontWeight="400" fontFamily="Arial,sans-serif" letterSpacing="1.5">EMERSON</text><text x="80" y="38" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="13" fontWeight="400" fontFamily="Arial,sans-serif" letterSpacing="2">COPELAND</text></svg>,
              <svg key="ebm" viewBox="0 0 160 52" width="100%"><text x="80" y="28" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="15" fontWeight="300" fontFamily="Arial,sans-serif" letterSpacing="1">ebm-papst</text><text x="80" y="42" textAnchor="middle" fill="rgba(0,0,0,0.25)" fontSize="8" fontFamily="Arial,sans-serif" letterSpacing="2">GERMANY</text></svg>,
              <svg key="zie" viewBox="0 0 160 52" width="100%"><text x="80" y="26" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="11" fontWeight="300" fontFamily="Arial,sans-serif" letterSpacing="2">ZIEHL-ABEGG</text></svg>,
              <svg key="spo" viewBox="0 0 160 52" width="100%"><text x="80" y="30" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="15" fontWeight="300" fontFamily="Arial,sans-serif" letterSpacing="2">SPORLAN</text></svg>,
            ].map((logo, i) => (
              <div key={i}
                style={{ aspectRatio: '3/1.5', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: i < 3 ? `1px solid ${border}` : 'none', padding: '0 20px', transition: 'opacity 0.2s', opacity: 0.7 }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
              >{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EC TECHNOLOGY FEATURE — Melt "material storytelling" section ══ */}
      <section style={{ background: bgDark, borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="ea-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 28, fontWeight: 400 }}>EC Technology</p>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 100, lineHeight: 1.08, letterSpacing: '-1px', color: '#fff', marginBottom: 28 }}>
                Electronically commutated.<br />Intelligently controlled.
              </h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, fontWeight: 300, marginBottom: 36 }}>
                EC motors replace conventional AC drives with brushless DC technology — delivering up to 50% energy savings, IoT-ready monitoring, and virtually silent operation for data centers, cold chain, and cleanroom applications.
              </p>
              <button className="ea-pill" style={{
                background: 'transparent', color: 'rgba(255,255,255,0.55)',
                border: '0.5px solid rgba(255,255,255,0.2)',
                borderRadius: 100, padding: '11px 28px',
                fontSize: 11, fontWeight: 300, letterSpacing: '0.1em',
                cursor: 'pointer', fontFamily: 'inherit',
              }}>EC Technology Guide</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
              {[
                { n: '50%', label: 'Energy savings' },
                { n: 'IoT', label: 'Monitoring ready' },
                { n: 'TUV', label: 'Certified' },
                { n: '< 45dB', label: 'Noise level' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '2rem 1.5rem', border: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
                  <p style={{ fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 100, color: '#fff', letterSpacing: '-0.5px', marginBottom: 8 }}>{s.n}</p>
                  <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEO ══ */}
      <section style={{ background: bgDark, borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 28, fontWeight: 400 }}>Brand Film</p>
          <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#1a1a1a' }}>
            <iframe
              width="100%" height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Euroaire EC Technology"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: 'block', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS — white bg, Melt pull-quote style ══ */}
      <section style={{ background: '#ffffff', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: textLight, marginBottom: 48, fontWeight: 400 }}>Testimonials</p>
          <div className="ea-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {[
              { quote: 'TUNTOS has been our go-to partner for COPELAND compressors for over 20 years. Their technical support and fast delivery are unmatched in Taiwan.', author: 'Procurement Director', org: 'Taiwan HVAC Contractor' },
              { quote: 'The ebm-papst EC fans from TUNTOS cut our energy consumption in the data center by over 30%. The IoT monitoring integration was seamless.', author: 'Facilities Manager', org: 'Taipei Data Center' },
              { quote: 'One-stop-shopping at their Linkou warehouse is a huge time saver. Compressors, controls, fans — everything under one roof.', author: 'Project Manager', org: 'Cold Chain Engineering Firm' },
              { quote: 'Their training center helped our engineers understand the latest EC technology. Sessions from the ZIEHL-ABEGG team were outstanding.', author: 'Chief Engineer', org: 'Industrial Refrigeration Co.' },
            ].map((t, i) => (
              <div key={i} style={{ borderTop: `1px solid ${border}`, paddingTop: 28 }}>
                <p style={{ fontSize: 'clamp(14px, 1.6vw, 17px)', fontWeight: 100, lineHeight: 1.7, marginBottom: 24, color: 'rgba(0,0,0,0.75)' }}>
                  "{t.quote}"
                </p>
                <p style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: textLight, fontWeight: 400 }}>
                  {t.author} — {t.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DOWNLOAD CENTER ══ */}
      <section style={{ background: bg, borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: textLight, marginBottom: 40, fontWeight: 400 }}>Resources</p>
          <div className="ea-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
            {[
              { label: 'Catalog', name: 'COPELAND Compressor Full Lineup' },
              { label: 'Catalog', name: 'EMERSON / ALCO Controls' },
              { label: 'Guide', name: 'ebm-papst EC Fan Application Guide' },
              { label: 'Spec', name: 'MUELLER Refrigeration Fittings' },
            ].map((d, i) => (
              <div key={i}
                className="ea-dl-row"
                style={{ borderTop: `1px solid ${border}`, padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <div>
                    <p style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: textLight, marginBottom: 4, fontWeight: 400 }}>{d.label}</p>
                    <p style={{ fontSize: 13, fontWeight: 300, color: text }}>{d.name}</p>
                  </div>
                </div>
                <span style={{ fontSize: 14, color: textLight, fontWeight: 200 }}>↓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section style={{ background: bgDark, borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 28, fontWeight: 400 }}>Contact</p>
          <PremiumContact accent={teal} bg={bgDark} company="TUNTOS Enterprise Co., Ltd." email="tuntos@ms23.hinet.net" phone="+886-2-2751-2135" address="No. 23-1, Alley 10, Lane 437, Sec. 2, Bade Rd., Songshan Dist., Taipei" />
          <div style={{ marginTop: 20, padding: '16px 0', borderTop: `1px solid rgba(255,255,255,0.07)` }}>
            <p style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 6, fontWeight: 400 }}>Linkou Warehouse & Training Center</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>No. 56-7, Houhu, Hubi Village, Linkou Dist., New Taipei City · +886-2-26016321</p>
          </div>
        </div>
      </section>

      {/* ══ LEAD MAGNET — Melt pill-button style ══ */}
      <section style={{ background: bg, borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem clamp(1.5rem, 4vw, 3rem)', textAlign: 'center' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: textLight, marginBottom: 24, fontWeight: 400 }}>Free Resource</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 48px)', fontWeight: 100, letterSpacing: '-1px', color: text, marginBottom: 20, lineHeight: 1.1 }}>
            EC Fan Energy Savings Guide
          </h2>
          <p style={{ fontSize: 14, color: textMid, lineHeight: 1.8, maxWidth: 480, margin: '0 auto 44px', fontWeight: 300 }}>
            Learn how EC technology with IoT monitoring can reduce HVAC energy consumption by up to 30–50%.
          </p>
          <div style={{ display: 'flex', gap: 0, maxWidth: 440, margin: '0 auto' }}>
            <input
              placeholder="Email address"
              style={{ flex: 1, background: 'transparent', border: `1px solid ${border}`, borderRight: 'none', padding: '13px 20px', fontSize: 12, color: text, fontFamily: 'inherit', outline: 'none', fontWeight: 300, letterSpacing: '0.04em' }}
            />
            <button style={{
              background: text, color: '#fff',
              border: 'none', padding: '13px 28px',
              fontSize: 11, fontWeight: 300, letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
            }}>Download</button>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: bgDark }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="ea-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(26px, 3.5vw, 46px)', fontWeight: 100, lineHeight: 1.08, letterSpacing: '-1px', color: '#fff', marginBottom: 28 }}>
                Ventilation<br />redefined.
              </h3>
              <button className="ea-pill" style={{
                background: 'transparent', color: 'rgba(255,255,255,0.55)',
                border: '0.5px solid rgba(255,255,255,0.2)',
                borderRadius: 100, padding: '11px 28px',
                fontSize: 11, fontWeight: 300, letterSpacing: '0.1em',
                cursor: 'pointer', fontFamily: 'inherit',
              }}>Request a catalog</button>
            </div>
            <div className="ea-two-col ea-footer-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 20, fontWeight: 400 }}>Company</p>
                {['About', 'Products', 'EC Technology', 'Training Center'].map(l => (
                  <p key={l} className="ea-link" style={{ fontSize: 13, fontWeight: 300, marginBottom: 12, color: '#fff', opacity: 0.45 }}>{l}</p>
                ))}
              </div>
              <div>
                <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 20, fontWeight: 400 }}>Contact</p>
                {['Email', 'Linkou Warehouse', 'LinkedIn', 'Distributors'].map(l => (
                  <p key={l} className="ea-link" style={{ fontSize: 13, fontWeight: 300, marginBottom: 12, color: '#fff', opacity: 0.45 }}>{l}</p>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', fontWeight: 300 }}>
            <span>© 2025 Worldedit Design</span>
            <img src="/logo.png" alt="Worldedit" style={{ height: 18, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.15 }} />
            <span>TUNTOS Enterprise Co., Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
