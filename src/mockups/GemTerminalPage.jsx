import { useNavigate } from 'react-router-dom'
import PremiumContact from '../components/PremiumContact'

const accent = '#a78bfa'
const bg = '#0c0814'
const HR = () => <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.10)', marginBottom: 40 }} />
const ST = ({ children }) => <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20, color: '#fff' }}>{children}</h2>

export default function GemTerminalPage() {
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
          <div style={{ width: 64, height: 64, borderRadius: 10, background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 10 }}>
            <img src="/logos/gem-terminal-logo-white.svg" alt="GEM Terminal logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4, lineHeight: 1.2 }}>GEM TERMINAL INDUSTRY CO., LTD.</h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>GEM Terminal · Kaohsiung, Taiwan · Est. 1977</p>
            <span style={{ background: 'rgba(167,139,250,0.12)', color: accent, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 4, letterSpacing: '0.05em' }}>Terminal Blocks · Electrical Connectors · Listed on TSE</span>
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
            <p style={{ marginBottom: 20 }}>Founded in 1977 and listed on the Taiwan Stock Exchange, GEM TERMINAL INDUSTRY CO., LTD. is one of Taiwan's most established manufacturers of terminal blocks and electrical connection components. With over 1,000 product specifications across our catalog, we serve electrical panel builders, machine manufacturers, and infrastructure projects worldwide.</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Manufacturing Heritage:</p>
            <p style={{ marginBottom: 2 }}>46+ years of terminal block manufacturing expertise in Kaohsiung</p>
            <p style={{ marginBottom: 2 }}>Listed on Taiwan Stock Exchange — public company with transparent governance</p>
            <p style={{ marginBottom: 2 }}>1,000+ product specifications covering all wiring applications</p>
            <p style={{ marginBottom: 20 }}>UL, CE, and CNS certified product lines for global compliance</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Market Reach:</p>
            <p style={{ marginBottom: 2 }}>Exported to 50+ countries across 5 continents</p>
            <p style={{ marginBottom: 2 }}>Trusted by control panel builders, OEM machinery manufacturers</p>
            <p>Used in renewable energy, industrial automation, and infrastructure projects</p>
          </div>
        </section>
        <HR />

        {/* Products */}
        <section style={{ marginBottom: 48 }}>
          <ST>Products</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { title: 'Screw Terminal Blocks', desc: 'Standard and feed-through screw clamp terminal blocks from 2.5mm² to 95mm², rated up to 1000V.', tags: ['SCREW CLAMP', 'PANEL'] },
              { title: 'Spring Clamp Terminals', desc: 'Tool-free push-in connection terminals for fast wiring of control cabinets and automation systems.', tags: ['SPRING CLAMP', 'AUTOMATION'] },
              { title: 'Fuse Terminal Blocks', desc: 'Integrated fuse-holder terminals for circuit protection in industrial panels — DIN rail mountable.', tags: ['FUSE HOLDER', 'DIN RAIL'] },
            ].map((p, i) => (
              <div key={i} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
                <div style={{ background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: '#fff' }}>{p.title}</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tags.map(t => <span key={t} style={{ fontSize: 10, fontWeight: 700, color: accent, background: 'rgba(167,139,250,0.10)', padding: '3px 8px', borderRadius: 4 }}>◈ {t}</span>)}
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
            {[{ label: 'CATALOG', name: 'GEM Terminal Full Product Catalog' }, { label: 'SPEC', name: 'Technical Data Sheets by Series' }, { label: 'CERT', name: 'UL / CE / CNS Certificates' }, { label: 'GUIDE', name: 'Panel Wiring Application Guide' }].map((d, i) => (
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
          <PremiumContact accent="#a78bfa" bg="#0c0814" company="GEM TERMINAL INDUSTRY CO., LTD." email="info@gemterminal.com.tw" phone="+886-7-696-3037" address="Kaohsiung City, Taiwan" />
        </section>
        <HR />

        {/* Trusted By */}
        <section style={{ marginBottom: 48 }}>
          <ST>Trusted By</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              <svg key="siemens" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="16" fontWeight="700" fontFamily="-apple-system,sans-serif" letterSpacing="1.5">SIEMENS</text></svg>,
              <svg key="abb" viewBox="0 0 140 50" width="100%" height="44"><rect x="30" y="10" width="80" height="30" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/><text x="70" y="31" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="22" fontWeight="900" fontFamily="-apple-system,sans-serif" letterSpacing="3">ABB</text></svg>,
              <svg key="schneider" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="20" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="700" fontFamily="-apple-system,sans-serif" letterSpacing="1">SCHNEIDER</text><text x="70" y="38" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10" fontWeight="400" fontFamily="-apple-system,sans-serif" letterSpacing="0.5">ELECTRIC</text></svg>,
              <svg key="phoenix" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="20" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11" fontWeight="700" fontFamily="-apple-system,sans-serif" letterSpacing="1">PHOENIX</text><text x="70" y="36" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="9" fontWeight="500" fontFamily="-apple-system,sans-serif" letterSpacing="1.5">CONTACT</text></svg>,
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
              { quote: 'We\'ve standardized our entire control panel production on GEM Terminal spring clamp series. Wiring time cut by 35% compared to screw terminals.', author: 'Panel Production Manager', org: 'Industrial Automation Builder, Germany' },
              { quote: 'The UL and CE dual certification made approvals seamless for our North American and European projects. Reliable quality every batch.', author: 'Electrical Engineer', org: 'Infrastructure Project, Singapore' },
              { quote: 'Over 1,000 specs in one catalog — we can source virtually any terminal configuration from a single trusted supplier. Logistics simplified.', author: 'Procurement Manager', org: 'Electrical Distributor, Japan' },
              { quote: 'As a listed company, GEM Terminal\'s financial stability and long-term commitment give us confidence for multi-year supply agreements.', author: 'Strategic Sourcing Director', org: 'Machine Tool Manufacturer, Italy' },
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
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>91 reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5,74],[4,19],[3,5],[2,1],[1,1]].map(([s,p]) => (
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
              { name: 'M. Bauer', stars: 5, product: 'Spring Clamp Terminal Series', review: 'Tool-free insertion is a game changer for our panel wiring team. Consistent grip across the full temperature range.' },
              { name: 'K. Tanaka', stars: 5, product: 'Fuse Terminal Blocks', review: 'DIN rail mounting clicks in perfectly every time. The integrated fuse holder design saves significant cabinet space.' },
              { name: 'R. Santos', stars: 4, product: 'Screw Terminal 10mm²', review: 'Solid build quality, good torque retention after thermal cycling. Would appreciate more color variants.' },
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
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>Terminal Block Selection Guide for Industrial Panels — Free</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 440, margin: '0 auto 28px' }}>Screw, spring, or fuse terminal — which is right for your panel? Download our engineer's selection matrix with current ratings, certifications, and application notes.</p>
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
        <span>GEM Terminal Industry Co., Ltd. · Kaohsiung</span>
      </footer>
    </div>
  )
}
