import { useNavigate } from 'react-router-dom'
import PremiumContact from '../components/PremiumContact'

const accent = '#f59e0b'
const bg = '#0c0a00'
const HR = () => <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.10)', marginBottom: 40 }} />
const ST = ({ children }) => <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20, color: '#fff' }}>{children}</h2>

export default function GoldenrootPage() {
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
          <div style={{ width: 64, height: 64, borderRadius: 10, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 22, fontWeight: 900, color: accent }}>GR</span>
          </div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4, lineHeight: 1.2 }}>Golden Root Co., Ltd.</h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>Panrico · Taiwan</p>
            <span style={{ background: 'rgba(245,158,11,0.15)', color: accent, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 4, letterSpacing: '0.05em' }}>Hand Tools · Power Tools · Inspection Equipment</span>
          </div>
        </div>
        <HR />

        {/* Video */}
        <div style={{ width: '100%', aspectRatio: '16/9', background: 'rgba(0,0,0,0.4)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid rgba(255,255,255,0.8)', marginLeft: 4 }} />
          </div>
        </div>

        {/* About */}
        <section style={{ marginBottom: 48 }}>
          <ST>About</ST>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.9 }}>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Mission</p>
            <p style={{ marginBottom: 20 }}>Golden Root Co., Ltd. develops and distributes the Panrico brand of professional hand tools, power tools, and inspection equipment. Inspired by the Spanish spirit of "Enrich Your Life," we design tools that combine ergonomic precision with industrial durability — trusted by technicians, mechanics, and builders across global markets.</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Product Strengths:</p>
            <p style={{ marginBottom: 2 }}>Comprehensive range: hand tools, cordless power tools, borescopes, LED lighting</p>
            <p style={{ marginBottom: 2 }}>Professional-grade quality at competitive price points</p>
            <p style={{ marginBottom: 2 }}>OEM and ODM capability for international buyers</p>
            <p style={{ marginBottom: 20 }}>Direct-to-buyer e-commerce platform via panricotool.com</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Global Reach:</p>
            <p style={{ marginBottom: 2 }}>Export-ready products certified for key international markets</p>
            <p style={{ marginBottom: 2 }}>Automotive, industrial maintenance, and home improvement sectors</p>
            <p>Fast worldwide shipping from Taiwan distribution hub</p>
          </div>
        </section>
        <HR />

        {/* Products */}
        <section style={{ marginBottom: 48 }}>
          <ST>Products</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { title: '1/2" Digital Torque Wrench', desc: 'Precision digital torque measurement with LCD readout — 40–200 Nm range, peak-hold function for QC use.', tags: ['TORQUE', 'DIGITAL'], img: 'https://panricotool.com/cdn/shop/files/227-53021P1_1000.jpg?v=1719224528&width=533' },
              { title: 'LED Work Light', desc: 'High-lumen rechargeable LED work light for automotive and industrial maintenance in low-light environments.', tags: ['LED', 'RECHARGEABLE'], img: 'https://panricotool.com/cdn/shop/files/BI-LW-M0031_1000.jpg?v=1731911968&width=533' },
              { title: 'Borescope Inspection Camera', desc: 'Flexible endoscope with HD camera head for inspecting engine cylinders, pipes, and confined spaces.', tags: ['INSPECTION', 'CAMERA'], img: 'https://panricotool.com/cdn/shop/files/BCH-RS20020_B.jpg?v=1716538808&width=533' },
            ].map((p, i) => (
              <div key={i} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
                <div style={{ minHeight: 160, overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: '#fff' }}>{p.title}</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tags.map(t => <span key={t} style={{ fontSize: 10, fontWeight: 700, color: accent, background: 'rgba(245,158,11,0.12)', padding: '3px 8px', borderRadius: 4 }}>◈ {t}</span>)}
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
            {[
              'https://panricotool.com/cdn/shop/files/BCH-ID16020_B.jpg?v=1717061380&width=533',
              'https://panricotool.com/cdn/shop/files/BCH-ID12020_B.jpg?v=1716449570&width=533',
              'https://panricotool.com/cdn/shop/files/PST-D601_B.jpg?v=1719396441&width=533',
              'https://panricotool.com/cdn/shop/files/BCH-RS20020A_1000.jpg?v=1731313807&width=533',
              'https://panricotool.com/cdn/shop/files/BI-LW-F05_DB__B.jpg?v=1715250119&width=533',
              'https://panricotool.com/cdn/shop/files/PST-2486-055_1000_E_b9ad09b7-c5b1-4d84-a0dc-4a386c4c9118.jpg?v=1719224528&width=533',
            ].map((src, i) => (
              <div key={i} style={{ aspectRatio: '4/3', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                <img src={src} alt={`Gallery ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </section>
        <HR />

        {/* Download */}
        <section style={{ marginBottom: 48 }}>
          <ST>Download Center</ST>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[{ label: 'CATALOG', name: 'Panrico Full Product Catalog' }, { label: 'SPEC', name: 'Technical Specification Sheets' }, { label: 'GUIDE', name: 'OEM/ODM Capability Guide' }, { label: 'CERT', name: 'Safety & Compliance Certificates' }].map((d, i) => (
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
          <PremiumContact accent="#f59e0b" bg="#0c0a00" company="Golden Root Co., Ltd." email="service@panricotool.com" phone="+886-2-XXXX-XXXX" address="Taiwan, R.O.C." />
        </section>
        <HR />

        {/* Trusted By */}
        <section style={{ marginBottom: 48 }}>
          <ST>Trusted By</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              <svg key="snap" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="22" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="18" fontWeight="800" fontFamily="Georgia,serif" letterSpacing="-0.5">Snap-on</text><rect x="20" y="28" width="100" height="1.5" fill="rgba(255,255,255,0.3)"/></svg>,
              <svg key="stanley" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="20" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="14" fontWeight="900" fontFamily="-apple-system,sans-serif" letterSpacing="2">STANLEY</text><text x="70" y="38" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="-apple-system,sans-serif" letterSpacing="1">BLACK &amp; DECKER</text></svg>,
              <svg key="bosch" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="22" fontWeight="800" fontFamily="-apple-system,sans-serif" letterSpacing="1">BOSCH</text></svg>,
              <svg key="makita" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="18" fontWeight="800" fontFamily="-apple-system,sans-serif" letterSpacing="1">MAKITA</text></svg>,
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
              { quote: 'The Panrico digital torque wrench is incredibly accurate and easy to read. We use it daily in our automotive workshop with zero issues.', author: 'Workshop Manager', org: 'Auto Repair Centre, Japan' },
              { quote: 'The borescope camera is compact, durable, and the image quality is excellent for inspecting engine cylinders. Great value for professionals.', author: 'Fleet Maintenance Tech', org: 'Transport Company, Australia' },
              { quote: 'We\'ve been an OEM buyer for 3 years. Golden Root\'s production quality is consistent and their lead times are reliable.', author: 'Procurement Manager', org: 'Tool Distributor, Germany' },
              { quote: 'The LED work lights are our go-to recommendation for mechanics. Bright output, solid battery life, and they hold up in tough shop conditions.', author: 'Tool Buyer', org: 'Automotive Parts Chain, USA' },
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
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>87 reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5,80],[4,14],[3,5],[2,1],[1,0]].map(([s,p]) => (
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
              { name: 'K. Tanaka', stars: 5, product: '1/2" Digital Torque Wrench', review: 'Readings are consistent and the build quality feels very solid. Perfectly meets our assembly line torque specs.' },
              { name: 'M. Fischer', stars: 5, product: 'Borescope Camera', review: 'Used it to inspect a blocked exhaust — crystal clear image even in tight spaces. Excellent flexibility on the cable.' },
              { name: 'R. Nguyen', stars: 4, product: 'LED Work Light', review: 'Very bright and the magnetic base is super useful. Would love a longer battery life but otherwise great for the price.' },
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
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>Panrico OEM Capability Deck — Free</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 440, margin: '0 auto 28px' }}>Explore our full OEM/ODM manufacturing capabilities, MOQ requirements, certifications, and lead time schedules.</p>
            <div style={{ display: 'flex', gap: 10, maxWidth: 400, margin: '0 auto' }}>
              <input placeholder="Your email address" style={{ flex: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '10px 14px', fontSize: 13, color: '#fff', fontFamily: 'inherit', outline: 'none' }} />
              <button style={{ background: '#fff', color: bg, border: 'none', borderRadius: 4, padding: '10px 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>Get Deck</button>
            </div>
          </div>
        </section>

        <span onClick={() => navigate('/')} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.4)'}>← Back to Directory</span>
      </div>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '32px', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
        <span>© 2025 Made with Worldedit Design</span>
        <span>Golden Root Co., Ltd. · panricotool.com</span>
      </footer>
    </div>
  )
}
