import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Waves } from '../components/ui/wave-background'

const accent = '#e8001b'
const fontSans = '"TT Norms Pro", Arial, sans-serif'

export default function MatatakitoyoPage() {
  const navigate = useNavigate()
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [openAccordion, setOpenAccordion] = useState(null)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: fontSans,
      color: '#111',
      overflowX: 'hidden',
    }}>

      <style>{`
        .mt-nav-link { transition: opacity 0.2s; opacity: 0.45; cursor: pointer; }
        .mt-nav-link:hover { opacity: 1; }
        .mt-product-img { transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .mt-product-card:hover .mt-product-img { transform: scale(1.04); }
        .mt-accordion { cursor: pointer; }
        .mt-accordion:hover { background: rgba(0,0,0,0.02); }
        .mt-cta { transition: background 0.2s, color 0.2s; }
        .mt-cta:hover { background: #080808 !important; color: #fff !important; }
        .mt-cta-inv { transition: background 0.2s, color 0.2s; }
        .mt-cta-inv:hover { background: #fff !important; color: #080808 !important; }
        .mt-cta-outline { transition: background 0.2s, color 0.2s; }
        .mt-cta-outline:hover { background: #111 !important; color: #fff !important; }
        @media (max-width: 900px) {
          .mt-two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .mt-three-col { grid-template-columns: 1fr 1fr !important; }
          .mt-four-col { grid-template-columns: 1fr 1fr !important; }
          .mt-hero-h1 { font-size: clamp(52px, 13vw, 80px) !important; }
          .mt-stat-row { flex-direction: column !important; gap: 0 !important; }
          .mt-stat-row > div { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .mt-footer-grid { grid-template-columns: 1fr !important; }
          .mt-masonry { grid-template-columns: 1fr !important; }
          .mt-reviews-grid { grid-template-columns: 1fr !important; }
          .mt-contact-two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .mt-nav-links { display: none !important; }
        }
        @media (max-width: 600px) {
          .mt-section-pad { padding-top: 3rem !important; padding-bottom: 3rem !important; }
          .mt-three-col { grid-template-columns: 1fr !important; }
          .mt-four-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ══ NAV ══ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 56,
        display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        padding: '0 clamp(1.5rem, 4vw, 3rem)',
        background: '#ffffff',
        borderBottom: '1px solid #e5e5e5',
      }}>
        <span
          className="mt-nav-link"
          onClick={() => navigate('/')}
          style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: fontSans, color: '#111' }}
        >← Back</span>
        <img src="/logos/matatakitoyo-logo.png" alt="Matatakitoyo" style={{ height: 32, objectFit: 'contain' }} />
        <div className="mt-nav-links" style={{ display: 'flex', justifyContent: 'flex-end', gap: 28, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: fontSans, color: '#111' }}>
          <span className="mt-nav-link">Prev</span>
          <span className="mt-nav-link">Next</span>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 56,
        background: '#080808',
      }}>
        {/* Wave background animation */}
        <Waves strokeColor="rgba(255,30,30,0.75)" backgroundColor="#080808" pointerSize={0.4} />

        {/* Hero product image — right-aligned */}
        <img
          src="/products/mt_precise3_v2_nobg.png"
          alt="Torque Wrench"
          style={{
            position: 'absolute',
            right: 0, top: 0, bottom: 0,
            height: '100%',
            width: '55%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
            maxWidth: '100%',
          }}
        />
        {/* Left dark fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #080808 30%, rgba(8,8,8,0.55) 65%, rgba(8,8,8,0.15) 100%)', zIndex: 1 }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 260, background: 'linear-gradient(to top, #080808, transparent)', zIndex: 2 }} />

        {/* Hero content — bottom left */}
        <div style={{
          position: 'relative', zIndex: 3,
          maxWidth: 1440, margin: '0 auto', width: '100%',
          padding: '0 clamp(1.5rem, 4vw, 3rem) clamp(3rem, 6vh, 5rem)',
        }}>
          {/* Company logo */}
          <img src="/logos/matatakitoyo-logo.png" alt="Matatakitoyo" style={{ height: 52, objectFit: 'contain', objectPosition: 'left', marginBottom: 32, alignSelf: 'flex-start', maxWidth: 240 }} />

          {/* Eyebrow */}
          <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20, fontFamily: fontSans }}>
            Taiwan · Est. 1992
          </p>

          {/* Giant editorial title */}
          <h1 className="mt-hero-h1" style={{
            fontSize: 'clamp(4rem, 9vw, 8.125rem)',
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: '-2px',
            marginBottom: 32,
            fontStyle: 'italic',
            color: '#fff',
            fontFamily: fontSans,
          }}>
            <span style={{ display: 'block' }}>Matataki-</span>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.22)' }}>toyo.</span>
          </h1>

          {/* Thin red rule + tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
            <div style={{ width: 48, height: 1, background: accent }} />
            <p style={{ fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: fontSans }}>
              Precision Torque Instruments
            </p>
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="mt-cta-inv" style={{
              background: accent, color: '#fff',
              border: 'none', padding: '13px 32px',
              fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: fontSans,
            }}>View Products</button>
            <button className="mt-cta-outline" style={{
              background: 'transparent', color: 'rgba(255,255,255,0.55)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '13px 32px',
              fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: fontSans,
            }}>Company</button>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <div style={{ borderBottom: '1px solid #e5e5e5', background: '#ffffff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="mt-stat-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
            {[
              { n: '1992', label: 'Founded' },
              { n: '120+', label: 'Employees' },
              { n: '40+', label: 'Countries' },
              { n: 'ISO', label: '9001:2015' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '2.5rem 0',
                borderRight: i < 3 ? '1px solid #e5e5e5' : 'none',
                flex: 1, textAlign: 'center',
              }}>
                <p style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 300, letterSpacing: '-1px', marginBottom: 6, color: '#111', fontFamily: fontSans }}>{s.n}</p>
                <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', fontFamily: fontSans }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section style={{ borderBottom: '1px solid #e5e5e5', background: '#ffffff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="mt-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)', padding: 'clamp(3.5rem, 6vh, 6rem) 0' }}>
            {/* Left: big editorial heading */}
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 28, fontFamily: fontSans }}>Company</p>
              <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.625rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-1px', fontStyle: 'italic', marginBottom: 0, color: '#111', fontFamily: fontSans }}>
                Thirty years of torque precision.
              </h2>
            </div>
            {/* Right: body copy + accordion */}
            <div>
              <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.9, marginBottom: 32, fontFamily: fontSans, fontWeight: 300 }}>
                Founded in 1992, Matatakitoyo Tool Co., Ltd. manufactures precision torque instruments trusted by automotive, aerospace, and industrial clients across 40 countries. Every tool leaves our facility ISO-certified and calibration-verified.
              </p>

              {/* Accordion */}
              {[
                { title: 'Manufacturing', body: '120+ skilled engineers and production specialists. Full in-house production from raw material to finished product.' },
                { title: 'Certifications', body: 'ISO 9001:2015 certified quality management system. All products meet international calibration standards.' },
                { title: 'OEM / ODM', body: 'Custom torque tools for international brands. Flexible MOQ, fast lead times, private labelling available.' },
                { title: 'Global Reach', body: 'Products exported to 40+ countries. Automotive, aerospace, and industrial specialists.' },
              ].map((item, i) => (
                <div key={i}
                  className="mt-accordion"
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  style={{ padding: '18px 0', borderTop: '1px solid #e5e5e5', ...(i === 3 ? { borderBottom: '1px solid #e5e5e5' } : {}) }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 14, fontFamily: fontSans, letterSpacing: '0.02em', color: openAccordion === i ? '#111' : 'rgba(0,0,0,0.6)' }}>{item.title}</span>
                    <span style={{ fontSize: 18, color: 'rgba(0,0,0,0.3)', lineHeight: 1 }}>{openAccordion === i ? '−' : '+'}</span>
                  </div>
                  {openAccordion === i && (
                    <p style={{ marginTop: 12, fontSize: 13, color: 'rgba(0,0,0,0.45)', lineHeight: 1.8, fontFamily: fontSans, fontWeight: 300 }}>
                      {item.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEO ══ */}
      <section style={{ background: '#080808', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(3rem, 5vh, 5rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 28, fontFamily: fontSans }}>Brand Film</p>
          <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
            <iframe
              width="100%" height="100%"
              src="https://www.youtube.com/embed/xFhiIx4YTyA?start=8"
              title="MATATAKITOYO TOOL CO., LTD."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: 'block', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section style={{ borderBottom: '1px solid #e5e5e5', background: '#ffffff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(3.5rem, 6vh, 6rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 14, fontFamily: fontSans }}>Products</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.875rem)', fontWeight: 300, letterSpacing: '-0.5px', fontStyle: 'italic', color: '#111', fontFamily: fontSans }}>The Collection</h2>
            </div>
            <button className="mt-cta-outline" style={{
              background: 'transparent', color: 'rgba(0,0,0,0.45)',
              border: '1px solid rgba(0,0,0,0.2)',
              padding: '10px 22px', fontSize: 10, letterSpacing: '0.16em',
              textTransform: 'uppercase', cursor: 'pointer',
              fontFamily: fontSans,
            }}>View All</button>
          </div>

          {/* 3-col grid */}
          <div className="mt-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { title: 'MET Digital Torque Wrench', sub: 'Digital readout · Peak-hold function', img: 'https://www.matatakitoyo.com/comm/upimage/p_200226_02595.jpg' },
              { title: 'MEB Digital Torque Handle', sub: 'Interchangeable · Multiple drive sizes', img: 'https://www.matatakitoyo.com/comm/upimage/p_200226_02607.jpg' },
              { title: 'META Digital Angle Wrench', sub: 'Angle measurement · Assembly grade', img: 'https://www.matatakitoyo.com/comm/upimage/p_200226_02616.jpg' },
            ].map((p, i) => (
              <div key={i}
                className="mt-product-card"
                onMouseEnter={() => setHoveredProduct(i)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Image container — 4:5 ratio */}
                <div style={{ overflow: 'hidden', aspectRatio: '4/5', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    className="mt-product-img"
                    src={p.img} alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px', display: 'block' }}
                  />
                </div>
                {/* Text below image */}
                <div style={{ paddingTop: 16 }}>
                  <div style={{ height: 1, background: hoveredProduct === i ? accent : 'transparent', marginBottom: 14, transition: 'background 0.2s' }} />
                  <p style={{ fontSize: 14, fontFamily: fontSans, fontWeight: 400, marginBottom: 5, color: '#111' }}>{p.title}</p>
                  <p style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.04em', fontFamily: fontSans }}>{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FULL-BLEED CAMPAIGN IMAGE ══ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 'clamp(320px, 45vw, 520px)', background: '#888' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 1 }} />
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: 1440, margin: '0 auto',
          padding: 'clamp(4rem, 7vh, 7rem) clamp(1.5rem, 4vw, 3rem)',
          display: 'flex', alignItems: 'flex-end', minHeight: 'clamp(320px, 45vw, 520px)',
        }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20, fontFamily: fontSans }}>Engineering</p>
            <h2 style={{ fontSize: 'clamp(2.25rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-2px', fontStyle: 'italic', maxWidth: 600, color: '#fff', fontFamily: fontSans }}>
              Accuracy within ±4%<br />across the full range.
            </h2>
          </div>
        </div>
      </section>

      {/* ══ TRUSTED BY ══ */}
      <section style={{ borderBottom: '1px solid #e5e5e5', borderTop: '1px solid #e5e5e5', background: '#ffffff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(2.5rem, 4vh, 4rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 36, fontFamily: fontSans }}>Trusted by</p>
          <div className="mt-four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
            {[
              <svg key="s" viewBox="0 0 160 48" width="100%"><text x="80" y="26" textAnchor="middle" fill="rgba(0,0,0,0.45)" fontSize="19" fontWeight="400" fontFamily="Georgia,serif" letterSpacing="-0.5">Snap-on</text></svg>,
              <svg key="w" viewBox="0 0 160 48" width="100%"><text x="80" y="30" textAnchor="middle" fill="rgba(0,0,0,0.45)" fontSize="22" fontWeight="400" fontFamily="Georgia,serif" letterSpacing="2">WÜRTH</text></svg>,
              <svg key="st" viewBox="0 0 160 48" width="100%"><text x="80" y="22" textAnchor="middle" fill="rgba(0,0,0,0.45)" fontSize="14" fontWeight="400" fontFamily="-apple-system,sans-serif" letterSpacing="3">STANLEY</text><text x="80" y="38" textAnchor="middle" fill="rgba(0,0,0,0.22)" fontSize="8" fontFamily="-apple-system,sans-serif" letterSpacing="1">BLACK &amp; DECKER</text></svg>,
              <svg key="h" viewBox="0 0 160 48" width="100%"><text x="80" y="30" textAnchor="middle" fill="rgba(0,0,0,0.45)" fontSize="22" fontWeight="400" fontFamily="-apple-system,sans-serif" letterSpacing="4">HAZET</text></svg>,
            ].map((logo, i) => (
              <div key={i} style={{
                aspectRatio: '3/1.5', display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRight: i < 3 ? '1px solid #e5e5e5' : 'none',
                padding: '0 24px', transition: 'opacity 0.2s', opacity: 0.7,
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
              >{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALLERY MASONRY ══ */}
      <section style={{ background: '#080808' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(3rem, 5vh, 5rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 28, fontFamily: fontSans }}>Product Video</p>
          <div className="mt-masonry" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '260px 260px', gap: 2 }}>
            {/* Video tiles — all 5 embed the product video page */}
            {[
              { style: { gridRow: '1 / 3' } },
              { style: {} },
              { style: {} },
              { style: {} },
              { style: {} },
            ].map((item, i) => (
              <div key={i} style={{ ...item.style, overflow: 'hidden', position: 'relative' }}>
                <iframe
                  src="https://www.matatakitoyo.com/en/page-5151/Video.html"
                  title={`MATATAKITOYO Product Video ${i + 1}`}
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section style={{ borderBottom: '1px solid #e5e5e5', background: '#ffffff' }}>
        <div className="mt-section-pad" style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(4rem, 7vh, 7rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 48, fontFamily: fontSans }}>Testimonials</p>
          <div className="mt-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {[
              { quote: 'The click torque wrenches have been running on our assembly line for 3 years with zero calibration issues.', author: 'Production Manager', org: 'Automotive Assembly Plant, Japan' },
              { quote: 'Consistent quality, competitive pricing, and responsive support — an OEM partner we trust completely.', author: 'Procurement Director', org: 'European Tool Distributor' },
              { quote: 'Accuracy within ±4% across the full torque range. Meets our aerospace maintenance spec requirements.', author: 'MRO Engineer', org: 'Aviation Services Provider' },
              { quote: 'Our go-to recommendation for clients needing real-time torque monitoring without full wrench replacement.', author: 'Technical Advisor', org: 'Industrial Equipment Supplier' },
            ].map((t, i) => (
              <div key={i} style={{ borderTop: '1px solid #e5e5e5', paddingTop: 28 }}>
                <p style={{ fontSize: 'clamp(0.9375rem, 1.8vw, 1.125rem)', fontWeight: 300, lineHeight: 1.65, fontStyle: 'italic', marginBottom: 24, color: 'rgba(0,0,0,0.8)', fontFamily: fontSans }}>
                  "{t.quote}"
                </p>
                <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', fontFamily: fontSans }}>
                  {t.author} — {t.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section style={{ borderBottom: '1px solid #e5e5e5', background: '#ffffff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(3.5rem, 6vh, 6rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 40, fontFamily: fontSans }}>Reviews</p>
          <div style={{ display: 'flex', gap: 48, alignItems: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <p style={{ fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 300, lineHeight: 1, color: '#111', fontFamily: fontSans }}>4.7</p>
              <p style={{ fontSize: 18, color: '#f59e0b', letterSpacing: 3, margin: '8px 0' }}>★★★★★</p>
              <p style={{ fontSize: 11, color: 'rgba(0,0,0,0.3)', fontFamily: fontSans }}>94 reviews</p>
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              {[[5,76],[4,17],[3,5],[2,2],[1,0]].map(([s,p]) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
                  <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.3)', width: 8, fontFamily: fontSans }}>{s}</span>
                  <div style={{ flex: 1, height: 4, background: '#f0f0f0', borderRadius: 2 }}><div style={{ width: `${p}%`, height: '100%', background: '#111', borderRadius: 2 }} /></div>
                  <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.25)', width: 28, fontFamily: fontSans }}>{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-reviews-grid" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { name: 'A. Fischer', stars: 5, product: 'Click Torque Wrench 200Nm', review: 'Clicked at exactly the right torque every time. Checked against our reference gauge — deviation within 2%. Solid build quality throughout.' },
              { name: 'K. Yamamoto', stars: 5, product: 'Digital Torque Adapter', review: 'The peak-hold function is essential for our assembly line. LCD is clear even in low-light conditions. Highly recommended for production use.' },
              { name: 'M. Chen', stars: 4, product: 'Torque Screwdriver Set', review: 'Well-calibrated out of the box. The preset torque feature saves significant setup time. Would love a wider range option in future.' },
            ].map((r, i) => (
              <div key={i} style={{ borderTop: '1px solid #e5e5e5', padding: '24px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div><span style={{ fontWeight: 500, fontSize: 13, fontFamily: fontSans }}>{r.name}</span><span style={{ fontSize: 11, color: 'rgba(0,0,0,0.3)', marginLeft: 12, fontFamily: fontSans }}>{r.product}</span></div>
                  <span style={{ color: '#f59e0b', letterSpacing: 2, fontSize: 13 }}>{'★'.repeat(r.stars)}</span>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, fontFamily: fontSans, fontWeight: 300 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DOWNLOAD CENTER ══ */}
      <section style={{ borderBottom: '1px solid #e5e5e5', background: '#ffffff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(3.5rem, 6vh, 6rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 40, fontFamily: fontSans }}>Resources</p>
          <div className="mt-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
            {[
              { label: 'Catalog', name: 'Torque Tool Full Catalog 2024' },
              { label: 'Spec Sheets', name: 'Technical Specification Sheets' },
              { label: 'Certificate', name: 'ISO 9001:2015 Certificate' },
              { label: 'OEM Guide', name: 'OEM/ODM Service Guide' },
            ].map((d, i) => (
              <div key={i}
                style={{
                  borderTop: '1px solid #e5e5e5',
                  padding: '22px 0',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  cursor: 'pointer', transition: 'opacity 0.18s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="1.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 5, fontFamily: fontSans }}>{d.label}</p>
                    <p style={{ fontSize: 14, fontFamily: fontSans, fontWeight: 300, color: '#111' }}>{d.name}</p>
                  </div>
                </div>
                <span style={{ fontSize: 16, color: 'rgba(0,0,0,0.3)' }}>↓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section style={{ borderBottom: '1px solid #e5e5e5', background: '#ffffff' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(3.5rem, 6vh, 6rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 48, fontFamily: fontSans }}>Contact</p>

          {/* Stat cards */}
          <div className="mt-four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#e5e5e5', marginBottom: 64 }}>
            {[
              { icon: '⚡', num: '< 4hrs', label: 'Response Time' },
              { icon: '◎', num: '10+', label: 'Markets Served' },
              { icon: '✓', num: 'JIS', label: 'Certified' },
              { icon: '★', num: '97%', label: 'Quality Rate' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#ffffff', padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem)', textAlign: 'center' }}>
                <div style={{ fontSize: 14, color: accent, marginBottom: 12, fontFamily: fontSans }}>{s.icon}</div>
                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, color: '#111', letterSpacing: '-1px', marginBottom: 8, fontFamily: fontSans }}>{s.num}</div>
                <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', fontFamily: fontSans }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Two-col: form + contact info */}
          <div className="mt-contact-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)' }}>
            {/* LEFT: form */}
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 28, fontFamily: fontSans }}>Send a message</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { label: 'Name', ph: 'Your name' },
                  { label: 'Email', ph: 'your@email.com' },
                  { label: 'Company (optional)', ph: 'Company name' },
                ].map((f, i) => (
                  <div key={i}>
                    <label style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', display: 'block', marginBottom: 8, fontFamily: fontSans }}>{f.label}</label>
                    <input placeholder={f.ph} style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #e5e5e5', padding: '10px 0', fontSize: 14, color: '#111', fontFamily: fontSans, outline: 'none', fontWeight: 300, boxSizing: 'border-box' }}
                      onFocus={e => e.currentTarget.style.borderBottomColor = accent} onBlur={e => e.currentTarget.style.borderBottomColor = '#e5e5e5'} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', display: 'block', marginBottom: 8, fontFamily: fontSans }}>Message</label>
                  <textarea placeholder="Tell us about your torque requirements..." rows={4} style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #e5e5e5', padding: '10px 0', fontSize: 14, color: '#111', fontFamily: fontSans, outline: 'none', resize: 'none', fontWeight: 300, boxSizing: 'border-box' }}
                    onFocus={e => e.currentTarget.style.borderBottomColor = accent} onBlur={e => e.currentTarget.style.borderBottomColor = '#e5e5e5'} />
                </div>
                <div>
                  <button className="mt-cta" style={{ background: accent, color: '#fff', border: 'none', padding: '13px 32px', fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: fontSans }}>Send Message</button>
                </div>
              </div>
            </div>

            {/* RIGHT: contact info */}
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 28, fontFamily: fontSans }}>Other ways to reach us</p>
              <div>
                {[
                  { icon: '✉', label: 'Email', value: 'info@matatakitoyo.com.tw', sub: 'Response within 4 hours' },
                  { icon: '◎', label: 'Phone', value: '+886-4-2233-5566', sub: 'Mon–Fri 8:00–17:00' },
                  { icon: '◈', label: 'Location', value: 'No. 23, Gongyuan Rd., Central Dist., Taichung', sub: 'Taiwan, R.O.C.' },
                ].map((c, i) => (
                  <div key={i} style={{ borderTop: '1px solid #e5e5e5', padding: '20px 0', display: 'flex', gap: 16, alignItems: 'flex-start', ...(i === 2 ? { borderBottom: '1px solid #e5e5e5' } : {}) }}>
                    <span style={{ fontSize: 14, color: accent, marginTop: 2, flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <p style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 5, fontFamily: fontSans }}>{c.label}</p>
                      <p style={{ fontSize: 14, fontFamily: fontSans, fontWeight: 400, color: '#111', marginBottom: 3 }}>{c.value}</p>
                      <p style={{ fontSize: 11, color: 'rgba(0,0,0,0.35)', fontFamily: fontSans, fontWeight: 300 }}>{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Quick response guarantee */}
              <div style={{ marginTop: 20, padding: '20px 0', borderTop: '1px solid #e5e5e5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <div style={{ width: 24, height: 1, background: accent }} />
                  <span style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', fontFamily: fontSans }}>Quick Response Guarantee</span>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)', lineHeight: 1.8, fontFamily: fontSans, fontWeight: 300, margin: 0 }}>All precision machining inquiries receive a response within 4 business hours. OEM/ODM quotations delivered within 5 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ LEAD MAGNET ══ */}
      <section style={{ borderBottom: '1px solid #e5e5e5', background: '#ffffff' }}>
        <div className="mt-section-pad" style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(4rem, 7vh, 7rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="mt-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 20, fontFamily: fontSans }}>Free Resource</p>
              <h2 style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.75rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.1, letterSpacing: '-0.5px', color: '#111', fontFamily: fontSans }}>
                Torque Tool Selection Guide
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)', lineHeight: 1.8, marginBottom: 28, fontFamily: fontSans, fontWeight: 300 }}>
                Compare click, beam, digital, and electronic torque solutions with our engineering guide.
              </p>
              <div style={{ display: 'flex', gap: 0 }}>
                <input
                  placeholder="Email address"
                  style={{ flex: 1, background: 'transparent', border: '1px solid #e5e5e5', borderRight: 'none', padding: '13px 18px', fontSize: 12, color: '#111', fontFamily: fontSans, outline: 'none', letterSpacing: '0.04em' }}
                />
                <button className="mt-cta" style={{ background: '#111', color: '#fff', border: 'none', padding: '13px 28px', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: fontSans, fontWeight: 500 }}>Download</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: '#080808' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(3rem, 5vh, 5rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="mt-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.0, letterSpacing: '-1px', marginBottom: 32, color: '#fff', fontFamily: fontSans }}>
                Engineering-grade<br />precision.
              </h3>
              <button className="mt-cta-inv" style={{ background: accent, color: '#fff', border: 'none', padding: '13px 32px', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: fontSans, fontWeight: 500 }}>Request Catalog</button>
            </div>
            <div className="mt-two-col mt-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 20, fontFamily: fontSans }}>Company</p>
                {['About', 'Products', 'OEM / ODM', 'Certifications'].map(l => (
                  <p key={l} className="mt-nav-link" style={{ fontSize: 13, marginBottom: 12, cursor: 'pointer', opacity: 0.5, color: '#fff', fontFamily: fontSans }}>{l}</p>
                ))}
              </div>
              <div>
                <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 20, fontFamily: fontSans }}>Contact</p>
                {['Email', 'LinkedIn', 'Export Inquiry', 'Distributors'].map(l => (
                  <p key={l} className="mt-nav-link" style={{ fontSize: 13, marginBottom: 12, cursor: 'pointer', opacity: 0.5, color: '#fff', fontFamily: fontSans }}>{l}</p>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', fontFamily: fontSans }}>
            <span>© 2025 Worldedit Design</span>
            <img src="/logo.png" alt="Worldedit" style={{ height: 20, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.18 }} />
            <span>Matatakitoyo Tool Co., Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
