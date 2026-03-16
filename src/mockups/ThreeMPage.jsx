import { useNavigate } from 'react-router-dom'
import PremiumContact from '../components/PremiumContact'

const accent = '#ef4444'
const bg = '#0a0a0a'
const HR = () => <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.10)', marginBottom: 40 }} />
const ST = ({ children }) => <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20, color: '#fff' }}>{children}</h2>

export default function ThreeMPage() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: bg, fontFamily: '-apple-system,BlinkMacSystemFont,sans-serif', color: '#fff', fontSize: 14 }}>
      <nav style={{ background: 'transparent', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '0 32px', height: 56, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <span onClick={() => navigate('/')} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }} onMouseEnter={e => e.target.style.color='#fff'} onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.5)'}>← Back</span>
        <img src="/logo.png" alt="Worldedit" style={{ height: 36, width: 'auto', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
          <span style={{ cursor: 'pointer' }} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.4)'}>Prev</span>
          <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
          <span style={{ cursor: 'pointer' }} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.4)'}>Next</span>
        </div>
      </nav>

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '104px 24px 80px' }}>

        {/* Header */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 40 }}>
          <div style={{ width: 64, height: 64, borderRadius: 10, background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 22, fontWeight: 900, color: accent, letterSpacing: '-1px' }}>3M</span>
          </div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4, lineHeight: 1.2 }}>3M Taiwan Limited</h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>3M · Taiwan Branch</p>
            <span style={{ background: 'rgba(239,68,68,0.15)', color: accent, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 4, letterSpacing: '0.05em' }}>Innovation · Industrial Solutions</span>
          </div>
        </div>
        <HR />

        {/* Video */}
        <div style={{ width: '100%', aspectRatio: '16/9', background: 'rgba(0,0,0,0.5)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid rgba(255,255,255,0.8)', marginLeft: 4 }} />
          </div>
        </div>

        {/* About */}
        <section style={{ marginBottom: 48 }}>
          <ST>About</ST>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.9 }}>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Mission</p>
            <p style={{ marginBottom: 20 }}>3M Taiwan Limited brings the global power of 3M's 60,000+ products to the Taiwan market, spanning industrial, consumer, healthcare, and electronics sectors. As a science-based innovation company, we apply technology across multiple platforms to improve lives and drive business performance for our partners.</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Core Divisions in Taiwan:</p>
            <p style={{ marginBottom: 2 }}>Industrial Abrasives & Adhesives for electronics manufacturing</p>
            <p style={{ marginBottom: 2 }}>Safety & Worker Protection for factory environments</p>
            <p style={{ marginBottom: 2 }}>Consumer & Office products distributed nationwide</p>
            <p style={{ marginBottom: 20 }}>Healthcare: medical tapes, wound care, and dental products</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Taiwan Manufacturing Commitment:</p>
            <p style={{ marginBottom: 2 }}>Local production facilities supporting domestic supply chains</p>
            <p style={{ marginBottom: 2 }}>R&D collaboration with Taiwan's semiconductor and display industries</p>
            <p>Sustainability goal: carbon neutrality by 2050 globally</p>
          </div>
        </section>
        <HR />

        {/* Products */}
        <section style={{ marginBottom: 48 }}>
          <ST>Products</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { title: 'Industrial Adhesives', desc: 'Structural bonding, VHB tapes, and specialty adhesives for electronics, automotive, and manufacturing applications.', tags: ['ADHESIVE', 'INDUSTRIAL'] },
              { title: 'Personal Protection', desc: 'N95 respirators, safety eyewear, hearing protection, and fall protection equipment for all work environments.', tags: ['SAFETY', 'PPE'] },
              { title: 'Abrasive Systems', desc: 'Precision abrasive discs, belts, and finishing systems for metal fabrication and surface preparation.', tags: ['ABRASIVE', 'FINISHING'] },
            ].map((p, i) => (
              <div key={i} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
                <div style={{ background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: '#fff' }}>{p.title}</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tags.map(t => <span key={t} style={{ fontSize: 10, fontWeight: 700, color: accent, background: 'rgba(239,68,68,0.12)', padding: '3px 8px', borderRadius: 4 }}>◈ {t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <HR />

        {/* Gallery */}
        <section style={{ marginBottom: 48 }}>
          <ST>Gallery</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{ aspectRatio: '4/3', borderRadius: 8, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
            ))}
          </div>
        </section>
        <HR />

        {/* Download */}
        <section style={{ marginBottom: 48 }}>
          <ST>Download Center</ST>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[{ label: 'CATALOG', name: '3M Taiwan Product Overview' }, { label: 'SPEC', name: 'Industrial Solutions Datasheet' }, { label: 'CERT', name: 'Safety & Compliance Certificates' }, { label: 'GUIDE', name: 'Application Selection Guide' }].map((d, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div><p style={{ fontSize: 10, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{d.label}</p><p style={{ fontSize: 13, fontWeight: 500 }}>{d.name}</p></div>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>↓</div>
              </div>
            ))}
          </div>
        </section>
        <HR />

        {/* Contact */}
        <section style={{ marginBottom: 48 }}>
          <ST>Contact Information</ST>
          <PremiumContact accent="#ef4444" bg="#0a0a0a" company="3M Taiwan Limited" email="3mtaiwan@mmm.com" phone="+886-2-2704-9011" address="Taipei City, Taiwan" />
        </section>
        <HR />

        {/* Trusted By */}
        <section style={{ marginBottom: 48 }}>
          <ST>Trusted By</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              <svg key="tsmc" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="22" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="22" fontWeight="800" fontFamily="-apple-system,sans-serif" letterSpacing="2">TSMC</text><text x="70" y="39" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="-apple-system,sans-serif" letterSpacing="0.5">台灣積體電路製造</text></svg>,
              <svg key="foxconn" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="14" fontWeight="800" fontFamily="-apple-system,sans-serif" letterSpacing="2">FOXCONN</text></svg>,
              <svg key="delta" viewBox="0 0 140 50" width="100%" height="44"><polygon points="70,7 81,26 59,26" fill="rgba(255,255,255,0.9)"/><text x="70" y="42" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10" fontWeight="700" fontFamily="-apple-system,sans-serif" letterSpacing="2">DELTA</text></svg>,
              <svg key="acer" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="26" fontWeight="300" fontFamily="-apple-system,sans-serif" letterSpacing="1">acer</text></svg>,
            ].map((logo, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, aspectRatio: '3/2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
                {logo}
              </div>
            ))}
          </div>
        </section>
        <HR />

        {/* Testimonials */}
        <section style={{ marginBottom: 48 }}>
          <ST>Testimonials</ST>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { quote: 'The VHB tape replaced welding in one of our assembly lines — bond strength is exceptional and production speed improved significantly.', author: 'Manufacturing Director', org: 'Electronics OEM, Taoyuan' },
              { quote: '3M N95 respirators are our standard issue for all cleanroom personnel. Zero compromise on worker protection.', author: 'EHS Manager', org: 'Semiconductor Fab, Hsinchu' },
              { quote: 'Their abrasive finishing systems cut our surface prep time by 40%. The technical support from the 3M Taiwan team is always responsive.', author: 'Quality Engineer', org: 'Metal Fabrication, Taichung' },
              { quote: 'We\'ve been a 3M authorized distributor for 12 years. The product breadth and brand trust makes it our strongest line.', author: 'Sales Director', org: 'Industrial Supplies Distributor' },
            ].map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '20px 22px' }}>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, fontStyle: 'italic' }}>"{t.quote}"</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{t.author}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{t.org}</p>
              </div>
            ))}
          </div>
        </section>
        <HR />

        {/* Reviews */}
        <section style={{ marginBottom: 48 }}>
          <ST>Reviews</ST>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', marginBottom: 24 }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 52, fontWeight: 800, lineHeight: 1 }}>4.8</p>
              <p style={{ fontSize: 20, color: '#fbbf24', letterSpacing: 2 }}>★★★★★</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>214 reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5,80],[4,15],[3,4],[2,1],[1,0]].map(([s,p]) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', width: 8 }}>{s}</span>
                  <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3 }}><div style={{ width: `${p}%`, height: '100%', background: '#fbbf24', borderRadius: 3 }} /></div>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', width: 28 }}>{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { name: 'K. Lin', stars: 5, product: 'VHB Structural Tape', review: 'Used on a facade installation project — holding strong after 2 years outdoors. Incredible adhesion strength.' },
              { name: 'W. Chang', stars: 5, product: 'N95 Respirator 8210', review: 'Best fitting N95 on the market. Our factory workers consistently prefer these over other brands.' },
              { name: 'Y. Chen', stars: 4, product: 'Cubitron II Abrasive Disc', review: 'Cuts faster and lasts longer than our previous brand. Slight premium in price but more than worth it.' },
            ].map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '16px 18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div><span style={{ fontWeight: 600, fontSize: 13 }}>{r.name}</span><span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginLeft: 10 }}>{r.product}</span></div>
                  <span style={{ color: '#fbbf24' }}>{'★'.repeat(r.stars)}</span>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </section>
        <HR />

        {/* Lead Magnet */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '40px 36px', textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Free Download</p>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>3M Solutions for Taiwan Manufacturers — Free Guide</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 440, margin: '0 auto 28px' }}>Discover how 3M products are optimizing assembly, safety, and surface finishing across Taiwan's leading factories.</p>
            <div style={{ display: 'flex', gap: 10, maxWidth: 400, margin: '0 auto' }}>
              <input placeholder="Your email address" style={{ flex: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '10px 14px', fontSize: 13, color: '#fff', fontFamily: 'inherit', outline: 'none' }} />
              <button style={{ background: '#fff', color: bg, border: 'none', borderRadius: 4, padding: '10px 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>Get Guide</button>
            </div>
          </div>
        </section>

        <span onClick={() => navigate('/')} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.4)'}>← Back to Directory</span>
      </div>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '32px', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
        <span>© 2025 Made with Worldedit Design</span>
        <span>3M Taiwan Limited · Taipei</span>
      </footer>
    </div>
  )
}
