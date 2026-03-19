import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const red = '#e8001b'
const redDark = '#b8001a'
const redDeep = '#8a0014'
const fontSans = '"Helvetica Neue", Helvetica, Arial, sans-serif'


export default function ThreeMPage() {
  const navigate = useNavigate()
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <div style={{ minHeight: '100vh', background: red, fontFamily: fontSans, color: '#fff', overflowX: 'hidden' }}>
      <style>{`
.tm-pill:hover { background: rgba(255,255,255,0.15) !important; }
        .tm-product-img { transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .tm-product-card:hover .tm-product-img { transform: scale(1.04); }
        @media (max-width:767px) {
          .tm-three-col { grid-template-columns: 1fr !important; }
          .tm-two-col { grid-template-columns: 1fr !important; }
          .tm-stats { grid-template-columns: 1fr 1fr !important; }
          .tm-reviews-summary { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
          .tm-hero-img { display: none !important; }
        }
      `}</style>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div style={{ background: redDeep, color: 'rgba(255,255,255,0.85)', textAlign: 'center', padding: '9px 20px', fontSize: 12, fontWeight: 500, letterSpacing: '0.05em' }}>
        Taiwan's Authorized 3M Safety Partner — Free shipping on orders over NT$3,000
      </div>

      {/* ── NAV ── */}
      <nav style={{
        background: redDark,
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
        padding: '0 clamp(1.5rem, 4vw, 3rem)', height: 58,
        position: 'sticky', top: 0, zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.12)',
      }}>
        <span onClick={() => navigate('/')} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', cursor: 'pointer', fontWeight: 500 }}
          onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>← Back</span>
        <img src="/logos/3m-logo.svg" alt="3M" style={{ height: 36, objectFit: 'contain' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 20, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
          <span style={{ cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>Prev</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>Next</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: red, minHeight: '100svh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <img className="tm-hero-img" src="/products/tm_harness2_nobg.png" alt="" style={{
          position: 'absolute', right: '-2%', bottom: 0,
          height: '95%', width: '52%',
          objectFit: 'contain', objectPosition: 'right bottom',
          zIndex: 0, opacity: 0.95,
          mixBlendMode: 'luminosity',
          filter: 'brightness(1.1) contrast(0.9)',
        }} />
        {/* subtle dark vignette left */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(180,0,20,0.6) 0%, rgba(180,0,20,0.25) 50%, transparent 100%)', zIndex: 1 }} />

        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          position: 'relative', zIndex: 2,
          maxWidth: 1200, margin: '0 auto', width: '100%',
          padding: '0 clamp(1.5rem, 5vw, 3rem) 5rem',
        }}>
          <img src="/logos/3m-logo.svg" alt="3M" style={{ height: 60, objectFit: 'contain', marginBottom: 32, display: 'block', alignSelf: 'flex-start' }} />
          <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 20, fontWeight: 500 }}>3M Taiwan Limited</p>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 110px)', fontWeight: 800, lineHeight: 0.88, letterSpacing: '-4px', color: '#fff', marginBottom: 36, maxWidth: 680 }}>
            Safety<br />Built<br />To Last.
          </h1>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'rgba(255,255,255,0.65)', maxWidth: 380, lineHeight: 1.75, marginBottom: 44, fontWeight: 400 }}>
            Taiwan's authorized distributor of 3M Personal Protective Equipment — from N95 respirators to full-body fall protection.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="tm-pill" style={{
              background: '#fff', color: red, border: 'none',
              borderRadius: 100, padding: '15px 40px',
              fontSize: 13, fontWeight: 700, letterSpacing: '0.04em',
              cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
            }}>Shop All Safety</button>
            <button className="tm-pill" style={{
              background: 'rgba(255,255,255,0.12)', color: '#fff',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 100, padding: '15px 36px',
              fontSize: 13, fontWeight: 500, letterSpacing: '0.04em',
              cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
            }}>Learn More</button>
          </div>
        </div>
      </section>


      {/* ── STATS BAR — red bg, white text ── */}
      <section style={{ background: red, borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="tm-stats" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { num: '60K+', label: 'Products in Portfolio' },
            { num: '100+', label: 'Countries Served' },
            { num: '1902', label: 'Founded — 120+ Years' },
            { num: '50K+', label: 'Employees Worldwide' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '36px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
              <p style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-1px', color: '#fff', marginBottom: 6 }}>{s.num}</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 400, letterSpacing: '0.03em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS — white section for contrast ── */}
      <section style={{ background: '#ffffff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem clamp(1.5rem, 4vw, 3rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52 }}>
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#999', marginBottom: 14, fontWeight: 600 }}>Safety Range</p>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-1px', color: '#1a1a1a' }}>Protection for Every Hazard</h2>
            </div>
            <button style={{
              background: red, color: '#fff', border: 'none',
              borderRadius: 100, padding: '12px 28px',
              fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'inherit',
            }}>View All</button>
          </div>

          <div className="tm-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { title: 'N95 Respirator 8210', sub: 'NIOSH approved · Adjustable nose clip · Box of 20', img: '/products/tm_n95_nobg.png', tag: 'RESPIRATORY' },
              { title: 'Half-Face Respirator 7500', sub: 'Reusable · Silicone face seal · Multiple cartridges', img: '/products/tm_respirator_nobg.png', tag: 'RESPIRATORY' },
              { title: 'SecureFit Safety Glasses', sub: 'ANSI Z87.1 · Pressure diffusion · Anti-scratch', img: '/products/tm_glasses1_nobg.png', tag: 'EYE PROTECTION' },
              { title: 'Solus 1000 Safety Glasses', sub: 'Dual lens · 5x anti-scratch coating · UV400', img: '/products/tm_glasses2_nobg.png', tag: 'EYE PROTECTION' },
              { title: 'PELTOR X4A Earmuffs', sub: 'NRR 27dB · Over-the-head · Padded headband', img: '/products/tm_earmuff1_nobg.png', tag: 'HEARING' },
              { title: 'SecureFit Hard Hat H-801', sub: 'Full brim · UV indicator · Ratchet suspension', img: '/products/tm_hardhat1_nobg.png', tag: 'HEAD PROTECTION' },
              { title: 'Safety Helmet X5005 ANSI', sub: 'Type II Class E · 6-point suspension · Hi-viz', img: '/products/tm_hardhat2_nobg.png', tag: 'HEAD PROTECTION' },
              { title: 'ExoFit X300 Harness', sub: 'Comfort vest · Quick-connect buckles · ANSI Z359', img: '/products/tm_harness1_nobg.png', tag: 'FALL PROTECTION' },
              { title: 'PELTOR H10A Optime 105', sub: 'NRR 29dB · Highest rated · Industrial use', img: '/products/tm_earmuff2_nobg.png', tag: 'HEARING' },
            ].map((p, i) => (
              <div key={i} className="tm-product-card"
                onMouseEnter={() => setHoveredProduct(i)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{ cursor: 'pointer' }}
              >
                <div style={{ overflow: 'hidden', aspectRatio: '4/3', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img className="tm-product-img" src={p.img} alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 20, display: 'block' }} />
                </div>
                <div style={{ paddingTop: 16 }}>
                  <div style={{ height: 2, background: hoveredProduct === i ? red : 'transparent', marginBottom: 12, transition: 'background 0.2s' }} />
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.16em', color: red, textTransform: 'uppercase', marginBottom: 6 }}>{p.tag}</p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', marginBottom: 5, lineHeight: 1.3 }}>{p.title}</p>
                  <p style={{ fontSize: 12, color: '#999' }}>{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN — red section ── */}
      <section style={{ background: redDeep, position: 'relative', overflow: 'hidden', minHeight: 480 }}>
        <img src="/products/tm_harness1_nobg.png" alt="" style={{
          position: 'absolute', right: '3%', top: '50%', transform: 'translateY(-50%)',
          height: '92%', width: '45%', objectFit: 'contain', zIndex: 0, opacity: 0.9,
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(140,0,16,0.8) 0%, rgba(140,0,16,0.4) 60%, transparent 100%)', zIndex: 1 }} />
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: 1200, margin: '0 auto',
          padding: '6rem clamp(1.5rem, 4vw, 3rem)',
          display: 'flex', alignItems: 'center', minHeight: 480,
        }}>
          <div style={{ maxWidth: 520 }}>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>Fall Protection</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 800, lineHeight: 0.92, letterSpacing: '-2px', color: '#fff', marginBottom: 28 }}>
              DBI-SALA ExoFit.<br />Work at heights<br />with confidence.
            </h2>
            <button style={{
              background: '#fff', color: red, border: 'none',
              borderRadius: 100, padding: '14px 36px',
              fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'inherit',
            }}>Shop Harnesses</button>
          </div>
        </div>
      </section>

      {/* ── ABOUT — red bg ── */}
      <section style={{ background: red }}>
        <div className="tm-two-col" style={{
          maxWidth: 1200, margin: '0 auto', padding: '6rem clamp(1.5rem, 4vw, 3rem)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem',
        }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 20, fontWeight: 600 }}>About 3M Taiwan</p>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.0, marginBottom: 28, color: '#fff' }}>
              Science Applied<br />to Life.
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, marginBottom: 16 }}>
              3M Taiwan Limited brings the global power of 3M's 60,000+ products to the Taiwan market, spanning industrial, consumer, healthcare, and electronics sectors.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.85 }}>
              As Taiwan's authorized Safety & Worker Protection partner, we supply certified PPE to semiconductor fabs, electronics manufacturers, construction firms, and industrial operations across the island.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 20, fontWeight: 600 }}>Certifications</p>
            {[
              ['NIOSH', 'N95 respirator approval'],
              ['ANSI Z87.1', 'Eye and face protection standard'],
              ['ANSI Z359', 'Fall protection systems standard'],
              ['CE / EN 397', 'European industrial safety helmet'],
              ['ISO 45001', 'Occupational health & safety management'],
            ].map(([title, desc], i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.15)', padding: '17px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', minWidth: 100 }}>{title}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, textAlign: 'right' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — white cards on red ── */}
      <section style={{ background: redDark }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14, fontWeight: 600 }}>Testimonials</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 48, color: '#fff' }}>What our customers say.</h2>
          <div className="tm-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {[
              { quote: '3M N95 respirators are our standard issue for all cleanroom personnel. Zero compromise on worker protection.', author: 'EHS Manager', org: 'Semiconductor Fab, Hsinchu' },
              { quote: 'The VHB tape replaced welding in one of our assembly lines — bond strength is exceptional and production speed improved significantly.', author: 'Manufacturing Director', org: 'Electronics OEM, Taoyuan' },
              { quote: 'Their abrasive finishing systems cut our surface prep time by 40%. The technical support from the 3M Taiwan team is always responsive.', author: 'Quality Engineer', org: 'Metal Fabrication, Taichung' },
              { quote: "We've been a 3M authorized distributor for 12 years. The product breadth and brand trust makes it our strongest line.", author: 'Sales Director', org: 'Industrial Supplies Distributor' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#fff', padding: '40px 36px' }}>
                <p style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', fontWeight: 400, color: '#1a1a1a', lineHeight: 1.75, marginBottom: 28 }}>"{t.quote}"</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', marginBottom: 3 }}>{t.author}</p>
                <p style={{ fontSize: 12, color: '#999' }}>{t.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS — white bg ── */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e8e8e8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#999', marginBottom: 14, fontWeight: 600 }}>Reviews</p>
          <div className="tm-reviews-summary" style={{ display: 'flex', gap: 52, alignItems: 'center', marginBottom: 48 }}>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <p style={{ fontSize: 64, fontWeight: 800, lineHeight: 1, letterSpacing: '-3px', color: '#1a1a1a' }}>4.8</p>
              <p style={{ fontSize: 16, letterSpacing: 3, margin: '8px 0', color: red }}>★★★★★</p>
              <p style={{ fontSize: 11, color: '#aaa' }}>1,240 reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5,83],[4,12],[3,4],[2,1],[1,0]].map(([s,p]) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 11, color: '#aaa', width: 10 }}>{s}</span>
                  <div style={{ flex: 1, height: 6, background: '#f0f0f0', borderRadius: 100, overflow: 'hidden' }}>
                    <div style={{ width: `${p}%`, height: '100%', background: red, borderRadius: 100 }} />
                  </div>
                  <span style={{ fontSize: 11, color: '#aaa', width: 32, textAlign: 'right' }}>{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="tm-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              { name: 'J. Huang', stars: 5, product: 'N95 Respirator 8210', review: 'Standard issue for all our cleanroom operators. Consistent seal, easy donning, and the NIOSH certification is essential for our semiconductor compliance audits.' },
              { name: 'A. Lin', stars: 5, product: 'ExoFit X300 Harness', review: 'Construction team wears these daily on high-rise sites. The quick-connect buckles save time and the padded vest keeps workers comfortable through a full shift.' },
              { name: 'D. Tsai', stars: 4, product: 'PELTOR X4A Earmuffs', review: 'Excellent noise reduction on our press floor. Comfortable over long shifts. Durable build quality — pairs in use for over two years without issues.' },
            ].map((r, i) => (
              <div key={i} style={{ border: '1.5px solid #f0f0f0', padding: '28px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', marginBottom: 3 }}>{r.name}</p>
                    <p style={{ fontSize: 11, color: '#999' }}>{r.product}</p>
                  </div>
                  <span style={{ color: red, letterSpacing: 2, fontSize: 13 }}>{'★'.repeat(r.stars)}</span>
                </div>
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.8 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CENTER — red bg ── */}
      <section style={{ background: red, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14, fontWeight: 600 }}>Resources</p>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 32, color: '#fff' }}>Download Center</h2>
          <div className="tm-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {[
              { label: 'CATALOG', name: '3M Taiwan Product Overview 2025' },
              { label: 'SPEC', name: 'PPE Industrial Solutions Datasheet' },
              { label: 'CERT', name: 'Safety & Compliance Certificates' },
              { label: 'GUIDE', name: 'PPE Selection Guide by Hazard Type' },
            ].map((d, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.08)', padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'background 0.15s', border: '1px solid rgba(255,255,255,0.12)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              >
                <div>
                  <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{d.label}</p>
                  <p style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>{d.name}</p>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#fff' }}>↓</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET — deep red ── */}
      <section style={{ background: redDeep }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem clamp(1.5rem, 4vw, 3rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14, fontWeight: 600 }}>Free Download</p>
            <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 34px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.5px' }}>
              3M PPE Selection Guide<br />for Taiwan Manufacturers
            </h3>
          </div>
          <div style={{ display: 'flex', gap: 0, maxWidth: 420, flex: 1, minWidth: 280 }}>
            <input placeholder="Your work email" style={{
              flex: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
              borderRight: 'none', borderRadius: '100px 0 0 100px', padding: '14px 22px',
              fontSize: 13, color: '#fff', fontFamily: 'inherit', outline: 'none',
            }} />
            <button style={{
              background: '#fff', color: red, border: 'none',
              borderRadius: '0 100px 100px 0', padding: '14px 28px',
              fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
            }}>Get Guide</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#1a0003', padding: '36px clamp(1.5rem, 4vw, 3rem)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <img src="/logo.png" alt="Worldedit" style={{ height: 22, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.25 }} />
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>3M Taiwan Limited · Taipei · +886-2-2704-9011</p>
          <span onClick={() => navigate('/')} style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}
            onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}>← Back to Directory</span>
        </div>
      </footer>
    </div>
  )
}
