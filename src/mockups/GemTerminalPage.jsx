import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EtherealShadow } from '../components/ui/etheral-shadow'

// Permian World aesthetic — pure white / black, oversized type, full-bleed imagery, decorative grid lines
const bg = '#ffffff'
const text = '#000000'
const textMid = '#555'
const textLight = '#aaa'
const border = '#e8e8e8'
const accent = '#a78bfa'   // GEM violet — used sparingly
const fontSans = '"Helvetica Neue", Helvetica, Arial, sans-serif'

export default function GemTerminalPage() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{ minHeight: '100vh', background: bg, fontFamily: fontSans, color: text, overflowX: 'hidden' }}>
      <style>{`
.gem-img { transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
        .gem-card:hover .gem-img { transform: scale(1.05); }
        .gem-link { cursor:pointer; text-decoration: underline; text-underline-offset: 3px; opacity:0.4; transition: opacity 0.2s; }
        .gem-link:hover { opacity:1; }
        @media (max-width:767px) {
          .gem-two-col { grid-template-columns: 1fr !important; }
          .gem-three-col { grid-template-columns: 1fr 1fr !important; }
          .gem-decorative { display: none !important; }
          .gem-three-col { grid-template-columns: 1fr !important; }
          .gem-nav-links { display: none !important; }
        }
      `}</style>

      {/* ── DECORATIVE GRID LINES (Permian signature) ── */}
      <div aria-hidden="true" className="gem-decorative" style={{ position: 'fixed', top: 0, left: 28, bottom: 0, width: 1, background: border, zIndex: 50, pointerEvents: 'none' }} />
      <div aria-hidden="true" className="gem-decorative" style={{ position: 'fixed', top: 0, right: 28, bottom: 0, width: 1, background: border, zIndex: 50, pointerEvents: 'none' }} />

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${border}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 clamp(1.5rem, 4vw, 3rem)', height: 52,
      }}>
        <span className="gem-link" onClick={() => navigate('/')} style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}
          onMouseEnter={e => e.target.style.opacity = '1'} onMouseLeave={e => e.target.style.opacity = '0.4'}>← Back</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/logos/gem-terminal-logo.svg" alt="GEM Terminal" style={{ height: 24, objectFit: 'contain' }} />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>GEM Terminal</span>
        </div>

        <div style={{ display: 'flex', gap: 28, fontSize: 12, fontWeight: 500, letterSpacing: '0.06em' }}>
          <span className="gem-link" style={{ textDecoration: 'none' }}
            onMouseEnter={e => e.target.style.opacity = '1'} onMouseLeave={e => e.target.style.opacity = '0.4'}>Prev</span>
          <span className="gem-link" style={{ textDecoration: 'none' }}
            onMouseEnter={e => e.target.style.opacity = '1'} onMouseLeave={e => e.target.style.opacity = '0.4'}>Next</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100svh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#1e3fae' }}>
        {/* Yellow smoke animation over blue background */}
        <EtherealShadow
          color="rgba(234, 179, 8, 1)"
          animation={{ scale: 70, speed: 60 }}
          noise={{ opacity: 0.5, scale: 1.2 }}
          sizing="fill"
          style={{ zIndex: 0 }}
        />
        {/* Dark vignette so text stays readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,20,80,0.3) 0%, rgba(10,20,80,0.6) 100%)', zIndex: 1 }} />

        {/* Bottom-left text (Permian style) */}
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 clamp(1.5rem, 4vw, 3rem) 52px' }}>
          <img src="/logos/gem-terminal-logo-white.svg" alt="GEM Terminal" style={{ height: 48, objectFit: 'contain', objectPosition: 'left', marginBottom: 28, display: 'block', alignSelf: 'flex-start' }} />
          <p style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 18, fontWeight: 500 }}>Est. 1977 · Kaohsiung, Taiwan</p>
          <h1 style={{ fontSize: 'clamp(52px, 9vw, 130px)', fontWeight: 700, lineHeight: 0.88, letterSpacing: '-4px', color: '#fff', marginBottom: 36, maxWidth: 800 }}>
            GEM<br />Terminal.
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <p style={{ fontSize: 'clamp(13px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.55)', maxWidth: 360, lineHeight: 1.7 }}>
              Asia's leading manufacturer of copper electrical terminals, connectors and wire harnesses — serving automotive, EV, and electronics markets worldwide.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>22.6273° N</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>120.3014° E</p>
            </div>
          </div>
        </div>
      </section>


      {/* ── PRODUCT SHOWCASE ── */}
      <section style={{ borderBottom: `1px solid ${border}` }}>
        <div style={{ padding: '5rem clamp(1.5rem, 4vw, 3rem) 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
            <div>
              <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: textLight, marginBottom: 12, fontWeight: 600 }}>Product Range</p>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-2px', lineHeight: 1.0 }}>Precision copper.<br />Every connection.</h2>
            </div>
            <p className="gem-link" style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>View all products</p>
          </div>
        </div>

        {/* 3-col product grid (Permian social grid adapted) */}
        <div className="gem-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: border }}>
          {[
            { title: 'Automotive Connector', sub: 'High-reliability · EV ready · Multi-pin', img: 'https://www.gem.com.tw/files/images/products/iStock-1.png' },
            { title: 'AC Power Cord Connector', sub: 'Certified · Consumer & industrial', img: 'https://www.gem.com.tw/files/thumbnails/static_web_styles_images_products_img3_autoxauto.png' },
            { title: 'Wire Harness Terminal', sub: 'Electronics assembly · Automotive wiring', img: 'https://www.gem.com.tw/files/images/products/iStock-5.png' },
            { title: 'Electrical Terminal Block', sub: 'Lead-free copper · DIN rail compatible', img: 'https://www.gem.com.tw/files/thumbnails/static_web_styles_images_products_img5_autoxauto.png' },
            { title: 'New Energy Connector', sub: 'Solar · EV charging · Green energy', img: 'https://www.gem.com.tw/files/thumbnails/static_web_styles_images_products_img2_autoxauto.png' },
            { title: 'Shaped Conductor Copper', sub: 'Milled profiles · Custom spec · OEM', img: 'https://www.gem.com.tw/files/thumbnails/static_web_styles_images_products_img1_autoxauto.png' },
          ].map((p, i) => (
            <div key={i} className="gem-card" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ cursor: 'pointer', background: '#fff', overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#f5f5f5' }}>
                <img className="gem-img" src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '20px 24px 28px' }}>
                <div style={{ height: 1.5, background: hovered === i ? text : 'transparent', marginBottom: 14, transition: 'background 0.2s' }} />
                <p style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 5 }}>{p.title}</p>
                <p style={{ fontSize: 12, color: textLight }}>{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL-BLEED EDITORIAL ── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 560, background: '#0a0a0a' }}>
        <img
          src="https://www.gem.com.tw/static/web/styles/images/index/img2.jpg"
          alt="GEM Terminal factory"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.45, zIndex: 0 }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '100%', padding: '7rem clamp(1.5rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 560 }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20, fontWeight: 600 }}>Manufacturing</p>
          <h2 style={{ fontSize: 'clamp(36px, 6.5vw, 88px)', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-3px', color: '#fff', maxWidth: 700, marginBottom: 32 }}>
            Precision<br />in every<br />micron.
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', maxWidth: 420, lineHeight: 1.75 }}>
            Proprietary copper refining. Lead-free. 30 years of milling technology producing shaped conductor copper materials for the world's most demanding industries.
          </p>
        </div>
      </section>

      {/* ── ABOUT / STATS ── */}
      <section style={{ borderBottom: `1px solid ${border}` }}>
        <div className="gem-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {/* Left — story */}
          <div style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem)', borderRight: `1px solid ${border}` }}>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: textLight, marginBottom: 20, fontWeight: 600 }}>Our Story</p>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 28 }}>
              Rooted in Taiwan.<br />Connected globally.
            </h2>
            <p style={{ fontSize: 14, color: textMid, lineHeight: 1.9, marginBottom: 16 }}>
              Founded in Luzhu, Kaohsiung in 1977, GEM Terminal has grown into a publicly listed manufacturer with a reputation for lead-free copper processing that is virtually unmatched in Asia.
            </p>
            <p style={{ fontSize: 14, color: textMid, lineHeight: 1.9 }}>
              "Looking globally while rooted in Taiwan" — our commitment to sustainable business growth drives every product we design and every partnership we build.
            </p>
          </div>
          {/* Right — stats */}
          <div style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem)' }}>
            <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: textLight, marginBottom: 20, fontWeight: 600 }}>By the Numbers</p>
            {[
              ['1977', 'Year founded in Kaohsiung'],
              ['1,000+', 'Product specifications in catalog'],
              ['30+', 'Years of copper milling technology'],
              ['TSE', 'Listed on Taiwan Stock Exchange'],
            ].map(([num, label], i) => (
              <div key={i} style={{ borderTop: `1px solid ${border}`, padding: '22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-1px' }}>{num}</p>
                <p style={{ fontSize: 12, color: textLight, maxWidth: 200, textAlign: 'right', lineHeight: 1.5 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS / TRUSTED BY ── */}
      <section style={{ background: '#f8f8f8', borderBottom: `1px solid ${border}` }}>
        <div style={{ padding: '5rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: textLight, marginBottom: 40, fontWeight: 600 }}>Trusted By</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: border }}>
            {[
              { name: 'SIEMENS', sub: 'Industrial Automation' },
              { name: 'ABB', sub: 'Power & Automation' },
              { name: 'SCHNEIDER', sub: 'Energy Management' },
              { name: 'PHOENIX CONTACT', sub: 'Industrial Connectivity' },
            ].map((c, i) => (
              <div key={i} style={{ background: '#f8f8f8', padding: '36px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: 16, fontWeight: 800, letterSpacing: '0.04em', color: text, marginBottom: 6 }}>{c.name}</p>
                <p style={{ fontSize: 11, color: textLight }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (Permian community section) ── */}
      <section style={{ borderBottom: `1px solid ${border}` }}>
        <div style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: textLight, marginBottom: 14, fontWeight: 600 }}>What our customers say</p>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', marginBottom: 52 }}>Our community is open<br />to anyone who builds.</h2>
          <div className="gem-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: border }}>
            {[
              { quote: "We've standardized our entire control panel production on GEM Terminal spring clamp series. Wiring time cut by 35% compared to screw terminals.", author: 'Panel Production Manager', org: 'Industrial Automation Builder, Germany' },
              { quote: 'The UL and CE dual certification made approvals seamless for our North American and European projects. Reliable quality every batch.', author: 'Electrical Engineer', org: 'Infrastructure Project, Singapore' },
              { quote: 'Over 1,000 specs in one catalog — we can source virtually any terminal configuration from a single trusted supplier. Logistics simplified.', author: 'Procurement Manager', org: 'Electrical Distributor, Japan' },
              { quote: "As a listed company, GEM Terminal's financial stability and long-term commitment give us confidence for multi-year supply agreements.", author: 'Strategic Sourcing Director', org: 'Machine Tool Manufacturer, Italy' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#fff', padding: '40px 36px' }}>
                <p style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', fontWeight: 400, color: text, lineHeight: 1.75, marginBottom: 28 }}>"{t.quote}"</p>
                <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{t.author}</p>
                <p style={{ fontSize: 12, color: textLight }}>{t.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ borderBottom: `1px solid ${border}` }}>
        <div style={{ padding: '6rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: textLight, marginBottom: 14, fontWeight: 600 }}>Reviews</p>
          <div style={{ display: 'flex', gap: 52, alignItems: 'center', marginBottom: 48 }}>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <p style={{ fontSize: 64, fontWeight: 700, lineHeight: 1, letterSpacing: '-3px', color: text }}>4.9</p>
              <p style={{ fontSize: 16, letterSpacing: 3, margin: '8px 0', color: '#f59e0b' }}>★★★★★</p>
              <p style={{ fontSize: 11, color: textLight }}>217 reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5,88],[4,9],[3,2],[2,1],[1,0]].map(([s,p]) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: textLight, width: 10 }}>{s}</span>
                  <div style={{ flex: 1, height: 3, background: border }}>
                    <div style={{ width: `${p}%`, height: '100%', background: text }} />
                  </div>
                  <span style={{ fontSize: 11, color: textLight, width: 32, textAlign: 'right' }}>{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="gem-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: border }}>
            {[
              { name: 'K. Müller', stars: 5, product: 'Spring Clamp Terminal Series', review: 'Switched our entire panel shop to GEM spring clamps two years ago. Wiring speed up, rework down to near zero. Quality consistency batch-to-batch is excellent.' },
              { name: 'S. Tanaka', stars: 5, product: 'Shaped Conductor Copper', review: 'Custom profiles delivered to spec on first submission. Lead times shorter than any European supplier. GEM is now our preferred OEM copper source for Asia.' },
              { name: 'A. Chen', stars: 5, product: 'New Energy Connector', review: 'EV application — passed all thermal cycle testing on first attempt. UL documentation was thorough and delivery was ahead of schedule.' },
            ].map((r, i) => (
              <div key={i} style={{ background: '#fff', padding: '36px 32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: text, marginBottom: 3 }}>{r.name}</p>
                    <p style={{ fontSize: 11, color: textLight }}>{r.product}</p>
                  </div>
                  <span style={{ color: '#f59e0b', letterSpacing: 2, fontSize: 13 }}>{'★'.repeat(r.stars)}</span>
                </div>
                <p style={{ fontSize: 13, color: textMid, lineHeight: 1.8 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CENTER ── */}
      <section style={{ background: '#f8f8f8', borderBottom: `1px solid ${border}` }}>
        <div style={{ padding: '5rem clamp(1.5rem, 4vw, 3rem)' }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: textLight, marginBottom: 14, fontWeight: 600 }}>Downloads</p>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 34px)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 32 }}>Documentation</h2>
          <div className="gem-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: border }}>
            {[
              { label: 'CATALOG', name: 'GEM Terminal Full Product Catalog' },
              { label: 'SPEC', name: 'Technical Data Sheets by Series' },
              { label: 'CERT', name: 'UL / CE / CNS Certificates' },
              { label: 'GUIDE', name: 'Panel Wiring Application Guide' },
            ].map((d, i) => (
              <div key={i}
                style={{ background: '#fff', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#f0f0f0'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                <div>
                  <p style={{ fontSize: 9, color: accent, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 7 }}>{d.label}</p>
                  <p style={{ fontSize: 14, fontWeight: 500, color: text }}>{d.name}</p>
                </div>
                <span style={{ fontSize: 18, color: textLight }}>↓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET / CTA ── */}
      <section style={{ background: '#000', padding: 'clamp(3rem,7vh,5rem) clamp(1.5rem,4vw,3rem)' }}>
        <div style={{ maxWidth: 700 }}>
          <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20, fontWeight: 600 }}>Free Resource</p>
          <h3 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-1.5px', color: '#fff', lineHeight: 0.95, marginBottom: 32 }}>
            Terminal Block<br />Selection Guide —<br />Free Download.
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: 420, marginBottom: 40 }}>
            Screw, spring, or fuse terminal — which is right for your panel? Download our engineer's selection matrix with ratings, certifications, and application notes.
          </p>
          <div style={{ display: 'flex', gap: 0, maxWidth: 460 }}>
            <input placeholder="Your work email" style={{
              flex: 1, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRight: 'none', borderRadius: 0, padding: '14px 20px',
              fontSize: 13, color: '#fff', fontFamily: 'inherit', outline: 'none',
            }} />
            <button style={{
              background: '#fff', color: '#000', border: 'none',
              padding: '14px 28px', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
            }}>Get Guide</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#fff', borderTop: `1px solid ${border}`, padding: '36px clamp(1.5rem,4vw,3rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>GEM Terminal Industry Co., Ltd.</p>
            <p style={{ fontSize: 11, color: textLight }}>Driven by precision. Connecting the world — conductor by conductor.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
            <p style={{ fontSize: 11, color: textLight, letterSpacing: '0.06em' }}>Taiwan: Kaohsiung</p>
            <p style={{ fontSize: 11, color: '#ccc', letterSpacing: '0.06em' }}>22.6273° N · 120.3014° E</p>
          </div>
        </div>
        <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 11, color: '#ccc' }}>© 2025 Made with Worldedit Design</p>
          <span onClick={() => navigate('/')} style={{ fontSize: 11, color: '#ccc', cursor: 'pointer' }}
            onMouseEnter={e => e.target.style.color = text} onMouseLeave={e => e.target.style.color = '#ccc'}>← Back to Directory</span>
        </div>
      </footer>
    </div>
  )
}
