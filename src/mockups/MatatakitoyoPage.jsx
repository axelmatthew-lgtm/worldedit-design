import { useNavigate } from 'react-router-dom'
import PremiumContact from '../components/PremiumContact'

const accent = '#e11d48'
const bg = '#0a0000'
const HR = () => <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.10)', marginBottom: 40 }} />
const ST = ({ children }) => <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20, color: '#fff' }}>{children}</h2>

export default function MatatakitoyoPage() {
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
          <div style={{ width: 64, height: 64, borderRadius: 10, background: 'rgba(225,29,72,0.15)', border: '1px solid rgba(225,29,72,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: accent }}>M</span>
          </div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4, lineHeight: 1.2 }}>MATATAKITOYO TOOL CO., LTD.</h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>Matatakitoyo · Taiwan, Est. 1992</p>
            <span style={{ background: 'rgba(225,29,72,0.15)', color: accent, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 4, letterSpacing: '0.05em' }}>Torque Tools · Precision Instruments</span>
          </div>
        </div>
        <HR />

        {/* Video */}
        <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 10, overflow: 'hidden', marginBottom: 48 }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/xFhiIx4YTyA?start=8"
            title="MATATAKITOYO TOOL CO., LTD."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block', width: '100%', height: '100%' }}
          />
        </div>

        {/* About */}
        <section style={{ marginBottom: 48 }}>
          <ST>About</ST>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.9 }}>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Mission</p>
            <p style={{ marginBottom: 20 }}>Founded in 1992, MATATAKITOYO TOOL CO., LTD. has grown into a leading Taiwanese manufacturer of precision torque tools, torque wrenches, and measurement instruments. With over 120 employees and a fully integrated production facility, we deliver engineering-grade accuracy to industries across the globe.</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Manufacturing Strength:</p>
            <p style={{ marginBottom: 2 }}>120+ skilled engineers and production specialists</p>
            <p style={{ marginBottom: 2 }}>Full in-house production from raw material to finished product</p>
            <p style={{ marginBottom: 2 }}>ISO 9001:2015 certified quality management</p>
            <p style={{ marginBottom: 20 }}>30+ years of accumulated torque tool engineering expertise</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Global Reach:</p>
            <p style={{ marginBottom: 2 }}>Products exported to 40+ countries worldwide</p>
            <p style={{ marginBottom: 2 }}>OEM and ODM services available for international brands</p>
            <p>Automotive, aerospace, and industrial application specialists</p>
          </div>
        </section>
        <HR />

        {/* Products */}
        <section style={{ marginBottom: 48 }}>
          <ST>Products</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { title: 'Click Torque Wrench', desc: 'Audible click mechanism signals exact torque achievement — precision from 5 to 500 Nm across multiple drive sizes.', tags: ['TORQUE', 'CLICK TYPE'], img: 'https://www.matatakitoyo.com/comm/upimage/op_221121_00227.jpg' },
              { title: 'Digital Torque Adapter', desc: 'LCD digital readout with peak-hold function, compatible with standard square drive ratchets and extensions.', tags: ['DIGITAL', 'ADAPTER'], img: 'https://www.matatakitoyo.com/comm/upimage/op_251223_05841.png' },
              { title: 'Torque Screwdriver Set', desc: 'Preset or adjustable torque screwdrivers for electronics, assembly lines, and delicate fastening applications.', tags: ['SCREWDRIVER', 'ASSEMBLY'], img: 'https://www.matatakitoyo.com/comm/upimage/op_220104_01835.jpg' },
            ].map((p, i) => (
              <div key={i} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
                <div style={{ minHeight: 160, overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: '#fff' }}>{p.title}</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tags.map(t => <span key={t} style={{ fontSize: 10, fontWeight: 700, color: accent, background: 'rgba(225,29,72,0.12)', padding: '3px 8px', borderRadius: 4 }}>◈ {t}</span>)}
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
              <div key={i} style={{ aspectRatio: '4/3', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            {[{ label: 'CATALOG', name: 'Torque Tool Full Catalog 2024' }, { label: 'SPEC', name: 'Technical Specification Sheets' }, { label: 'CERT', name: 'ISO 9001:2015 Certificate' }, { label: 'GUIDE', name: 'OEM/ODM Service Guide' }].map((d, i) => (
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
          <PremiumContact accent="#e11d48" bg="#0a0000" company="MATATAKITOYO TOOL CO., LTD." email="sales@matatakitoyo.com.tw" phone="+886-4-XXXX-XXXX" address="Taiwan, R.O.C." />
        </section>
        <HR />

        {/* Trusted By */}
        <section style={{ marginBottom: 48 }}>
          <ST>Trusted By</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              <svg key="snapon" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="22" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="18" fontWeight="800" fontFamily="Georgia,serif" letterSpacing="-0.5">Snap-on</text><rect x="20" y="28" width="100" height="1.5" fill="rgba(255,255,255,0.3)"/></svg>,
              <svg key="wurth" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="22" fontWeight="900" fontFamily="-apple-system,sans-serif" letterSpacing="2">WÜRTH</text></svg>,
              <svg key="stanley" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="20" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="14" fontWeight="900" fontFamily="-apple-system,sans-serif" letterSpacing="2">STANLEY</text><text x="70" y="38" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="-apple-system,sans-serif" letterSpacing="1">BLACK &amp; DECKER</text></svg>,
              <svg key="hazet" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="22" fontWeight="800" fontFamily="-apple-system,sans-serif" letterSpacing="3">HAZET</text></svg>,
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
              { quote: 'The click torque wrenches have been running on our assembly line for 3 years with zero calibration issues. Reliability is outstanding.', author: 'Production Manager', org: 'Automotive Assembly Plant, Japan' },
              { quote: 'We\'ve sourced OEM torque tools from MATATAKITOYO for 5 years. Consistent quality, competitive pricing, and responsive support.', author: 'Procurement Director', org: 'European Tool Distributor' },
              { quote: 'Accuracy within ±4% across the full torque range — meets our aerospace maintenance spec requirements perfectly.', author: 'MRO Engineer', org: 'Aviation Services Provider' },
              { quote: 'Their digital torque adapters are our go-to recommendation for clients needing real-time torque monitoring without full wrench replacement.', author: 'Technical Advisor', org: 'Industrial Equipment Supplier' },
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
              <p style={{ fontSize: 52, fontWeight: 800, lineHeight: 1 }}>4.7</p>
              <p style={{ fontSize: 20, color: '#fbbf24', letterSpacing: 2 }}>★★★★★</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>58 reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5,72],[4,20],[3,6],[2,1],[1,1]].map(([s,p]) => (
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
              { name: 'H. Yamamoto', stars: 5, product: 'Click Torque Wrench 1/2"', review: 'Calibration remained within spec after 18 months of daily use. Excellent build quality for the price point.' },
              { name: 'R. Mueller', stars: 5, product: 'Digital Torque Adapter', review: 'Real-time readings and the peak-hold function make this indispensable on our QC line. Highly recommended.' },
              { name: 'T. Chen', stars: 4, product: 'Torque Screwdriver Set', review: 'Good accuracy and comfortable grip. Delivery from Taiwan was faster than expected.' },
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
            <p style={{ fontSize: 11, color: accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Free Resource</p>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>Complete Torque Tool Selection Guide — Free</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 440, margin: '0 auto 28px' }}>Which torque tool is right for your application? Compare click, beam, digital, and electronic torque solutions with our engineering guide.</p>
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
        <span>MATATAKITOYO TOOL CO., LTD. · Taiwan</span>
      </footer>
    </div>
  )
}
