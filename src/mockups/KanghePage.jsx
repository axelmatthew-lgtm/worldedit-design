import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PremiumContact from '../components/PremiumContact'

const bg       = '#FFFFFF'
const bgLight  = '#F9FAFB'
const bgDark   = '#04006B'
const bgBlue   = '#EEF2FF'
const text     = '#0a0a0a'
const textMid  = '#6F7790'
const textLight= '#9197AB'
const border   = '#E7E7F1'
const accent   = '#183FD9'
const font     = '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'

// Isometric-style illustration placeholder
const IsoIllustration = ({ type = 'cube', size = 160 }) => {
  const styles = {
    cube: { bg: 'linear-gradient(135deg, #a5b4fc 0%, #6366f1 40%, #4338ca 100%)', shape: 'cube' },
    stack: { bg: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1d4ed8 100%)', shape: 'stack' },
    pyramid: { bg: 'linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 50%, #6d28d9 100%)', shape: 'pyramid' },
    building: { bg: 'linear-gradient(135deg, #bfdbfe 0%, #60a5fa 50%, #2563eb 100%)', shape: 'building' },
  }
  const s = styles[type] || styles.cube
  return (
    <div style={{ width: size, height: size * 0.75, margin: '0 auto', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', background: s.bg, borderRadius: 12, opacity: 0.85 }} />
      <div style={{ position: 'absolute', top: '15%', left: '15%', right: '15%', bottom: '15%', border: '2px solid rgba(255,255,255,0.45)', borderRadius: 6 }} />
      <div style={{ position: 'absolute', top: '30%', left: '30%', right: '30%', bottom: '30%', background: 'rgba(255,255,255,0.2)', borderRadius: 3 }} />
    </div>
  )
}

const STEPS = [
  { title: 'Scan', desc: 'We assess your project specs — pipe size, pressure rating, system type — and match the right Aquatherm product.', type: 'cube' },
  { title: 'Refine', desc: 'Our engineers review drawings with your team and supply a complete, optimised bill of materials with fittings.', type: 'stack' },
  { title: 'Integrate', desc: 'Certified installer partners complete heat-fusion welding on-site. No leaks, no threads, permanent joints.', type: 'pyramid' },
]

const BENEFITS = [
  { icon: '🌐', title: 'Global coverage', desc: 'Aquatherm PPR is certified across 70+ countries — the most trusted polypropylene pipe system worldwide.' },
  { icon: '⚡', title: 'Real-time support', desc: 'Direct line to Kanghe engineers during installation and commissioning. Issues resolved same day.' },
  { icon: '🔒', title: 'Scale & certify', desc: 'From single buildings to hospital campuses. Every install qualifies for an Aquatherm system certificate.' },
  { icon: '⚙️', title: 'Custom setup', desc: 'We size and configure each system to your project — no generic specs, no over-engineering.' },
]

const COMPARISON_ITEMS = [
  { label: 'PPR Fusiotherm®', pct: 95, color: accent },
  { label: 'Copper pipe', pct: 62, color: '#9197AB' },
  { label: 'CPVC', pct: 54, color: '#9197AB' },
  { label: 'Galvanised steel', pct: 31, color: '#9197AB' },
]

const INDUSTRIES_TAB = ['Risk & Fraud Intelligence', 'Brand Monitoring', 'Financial Analysis', 'Market Research', 'AI & LLM Training', 'Media Monitoring']
const INDUSTRIES_KANGHE = [
  { title: 'Risk & Fraud', label: 'Healthcare', sub: 'Hospitals & Medical', desc: 'Potable water and medical gas lines. BPA-free, NSF-certified, hygienic fusion joints for clinical environments.' },
  { title: 'Brand', label: 'Government', sub: 'Public Infrastructure', desc: 'Compliant with Taiwan government procurement. Proven across public works, schools, and civic buildings.' },
  { title: 'Finance', label: 'Industrial', sub: 'Factories & Plants', desc: 'Chemical-resistant, pressure-rated PPR for HVAC, cooling, and industrial process water.' },
]

const SECTORS = [
  { title: 'Healthcare', sub: 'Hospitals & Clinics', type: 'cube', desc: 'NSF-certified potable water systems, fusion-welded for zero contamination risk.' },
  { title: 'Financial Services & Banking', sub: 'Data Centers & HQ', type: 'stack', desc: 'Precision cooling lines for data center infrastructure. Pressure-rated and maintenance-free.' },
  { title: 'Government', sub: 'Public Works', type: 'building', desc: 'Fully compliant with Taiwan government procurement standards for civil infrastructure.' },
]

const BADGES = [
  { label: 'NSF/ANSI 61', sub: 'Potable water certified' },
  { label: 'ISO 15874', sub: 'PPR pipe standard' },
  { label: 'WRAS', sub: 'UK water regulation' },
  { label: 'CE Marked', sub: 'European conformity' },
]

const USED_BY = [
  { tag: 'CASE STUDY', date: 'Jan 2026', title: 'Changhua Christian Hospital — 8-year zero-leak record', desc: 'Full hot/cold potable water system, 12 buildings, Aquatherm Fusiotherm® throughout.' },
  { quote: '"Kanghe PPR has been running flawlessly in our hospital for over 8 years. Zero leaks, exceptional quality." Professional installation training and responsive after-sales support.', name: 'Facility Manager', org: 'Changhua Christian Hospital' },
  { metric: '4.9', sub: 'Average rating', detail: '48 reviews from project managers, engineers, and facility teams.' },
]

const FAQS = [
  { q: 'What is there a process you cover?', a: 'We handle specification, supply, certified installation, and post-project warranty. From drawings to commissioning — one team, one point of contact.' },
  { q: "Does NewsCatcher provide Service Level Agreements (SLA) for enterprise?", a: 'Yes. Kanghe provides project SLAs including lead time commitments, on-site response times, and Aquatherm system certification for every qualifying installation.' },
  { q: 'What is the delivery from a source and the time it hits your News API?', a: 'Standard stock items ship within 3–5 business days from our Changhua warehouse. Large or custom orders are quoted with confirmed lead times at time of order.' },
  { q: 'How much historical data do you have?', a: 'Kanghe has been distributing Aquatherm in Taiwan since the 1990s. We have project records and installed base data across hundreds of buildings nationwide.' },
  { q: 'What success does NewsCatcher have to hide?', a: 'Aquatherm PPR installations we have supplied have maintained a leak-free record in all certified projects. Our re-order rate from institutional clients exceeds 90%.' },
]

export default function KanghePage() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div style={{ minHeight: '100vh', background: bg, fontFamily: font, color: text, overflowX: 'hidden', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; }
        .kh-link { transition: color 0.15s; cursor: pointer; }
        .kh-link:hover { color: ${accent} !important; }
        .kh-btn-primary { transition: background 0.15s; cursor: pointer; }
        .kh-btn-primary:hover { background: #0d2fb8 !important; }
        .kh-btn-ghost { transition: background 0.15s, border-color 0.15s; cursor: pointer; }
        .kh-btn-ghost:hover { background: ${bgBlue} !important; border-color: ${accent} !important; }
        .kh-sector-card { transition: box-shadow 0.2s, transform 0.2s; }
        .kh-sector-card:hover { box-shadow: 0 8px 32px rgba(24,63,217,0.12) !important; transform: translateY(-3px); }
        .kh-faq-row { transition: background 0.15s; cursor: pointer; }
        .kh-faq-row:hover { background: ${bgLight} !important; }
        .kh-badge-card { transition: box-shadow 0.18s; }
        .kh-badge-card:hover { box-shadow: 0 4px 16px rgba(24,63,217,0.1) !important; }
        @media (max-width:767px) {
          .kh-steps-grid { grid-template-columns: 1fr !important; }
          .kh-benefits-grid { grid-template-columns: 1fr 1fr !important; }
          .kh-sectors-grid { grid-template-columns: 1fr !important; }
          .kh-badges-grid { grid-template-columns: 1fr 1fr !important; }
          .kh-used-grid { grid-template-columns: 1fr !important; }
          .kh-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .kh-hero-h1 { font-size: 32px !important; letter-spacing: -1px !important; }
          .kh-compare { flex-direction: column !important; }
          .kh-industry-2col { grid-template-columns: 1fr !important; }
          .kh-reviews-summary { flex-direction: column !important; gap: 20px !important; }
          .kh-reviews-summary > div:first-child { align-self: flex-start !important; }
        }
      `}</style>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div style={{ background: bgBlue, borderBottom: `1px solid ${border}`, padding: '8px 24px', textAlign: 'center', fontSize: 12, color: accent, fontWeight: 500 }}>
        🇩🇪 Taiwan's exclusive distributor of <strong>Aquatherm Germany</strong> — inventor of PPR pipe technology since 1973.{' '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Learn more →</span>
      </div>

      {/* ── NAV ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1rem, 4vw, 2.5rem)', height: 52,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, background: accent, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 9, fontWeight: 900, color: '#fff' }}>K</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>Kanghe International</span>
          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: 13, color: textMid }}>
            {['Products', 'Industries', 'Pricing', 'Docs'].map(l => (
              <span key={l} className="kh-link" style={{ fontWeight: 500 }}>{l}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="kh-link" onClick={() => navigate('/')} style={{ fontSize: 13, color: textMid, fontWeight: 500 }}>← Back</span>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Prev', 'Next'].map(l => <span key={l} className="kh-link" style={{ fontSize: 13, color: textMid, fontWeight: 500 }}>{l}</span>)}
          </div>
          <span className="kh-link" style={{ fontSize: 13, color: textMid, fontWeight: 500 }}>Log in</span>
          <button className="kh-btn-primary" style={{ background: accent, color: '#fff', border: 'none', borderRadius: 8, padding: '7px 16px', fontSize: 13, fontWeight: 600 }}>
            Start for free
          </button>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{ background: bg, textAlign: 'center', padding: 'clamp(4rem, 10vh, 7rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 7vh, 5rem)', borderBottom: `1px solid ${border}` }}>
        <h1 className="kh-hero-h1" style={{
          fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800,
          lineHeight: 1.1, letterSpacing: '-2px', color: text,
          marginBottom: 20, maxWidth: 740, margin: '0 auto 20px',
        }}>
          The real world standard.<br />Keep your buildings in sync.
        </h1>
        <p style={{ fontSize: 16, color: textMid, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 36px' }}>
          Taiwan's exclusive distributor of Aquatherm Germany — PPR piping for hospitals, universities, and infrastructure projects.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="kh-btn-primary" style={{ background: accent, color: '#fff', border: 'none', borderRadius: 8, padding: '11px 24px', fontSize: 14, fontWeight: 600 }}>
            Start for free
          </button>
          <button className="kh-btn-ghost" style={{ background: 'transparent', color: text, border: `1.5px solid ${border}`, borderRadius: 8, padding: '11px 24px', fontSize: 14, fontWeight: 500 }}>
            Read our docs
          </button>
        </div>
      </section>

      {/* ══ 3-STEP ══ */}
      <section style={{ background: bg, padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 4vw, 2rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 10 }}>
            You don't need more piping options.
          </h2>
          <p style={{ textAlign: 'center', fontSize: 15, color: textMid, marginBottom: 56 }}>You need signals.</p>
          <div className="kh-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <IsoIllustration type={s.type} size={140} />
                <h3 style={{ fontSize: 15, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: textMid, lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY IT'S BETTER ══ */}
      <section style={{ background: bgLight, padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 4vw, 2rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 48 }}>Why it's better</h2>
          <div className="kh-benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {BENEFITS.map((b, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: bgBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', fontSize: 20 }}>{b.icon}</div>
                <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{b.title}</h3>
                <p style={{ fontSize: 12, color: textMid, lineHeight: 1.75 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHEN ACCURACY MATTERS ══ */}
      <section style={{ background: bg, padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 4vw, 2rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 8 }}>
            When accuracy, speed,<br />and scale matter
          </h2>
          <p style={{ textAlign: 'center', fontSize: 14, color: textMid, marginBottom: 48 }}>See how Aquatherm PPR compares on key performance metrics.</p>

          <div className="kh-compare" style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
            {/* Left: category list */}
            <div style={{ width: 180, flexShrink: 0 }}>
              {['Leak rate', 'Lifespan', 'Install time', 'Maintenance cost', 'Certifications'].map((cat, i) => (
                <div key={i} style={{
                  padding: '10px 12px', fontSize: 13, fontWeight: i === 0 ? 600 : 400,
                  color: i === 0 ? accent : textMid,
                  borderLeft: `2px solid ${i === 0 ? accent : 'transparent'}`,
                  background: i === 0 ? bgBlue : 'transparent',
                  marginBottom: 2, borderRadius: '0 4px 4px 0', cursor: 'pointer',
                }}>{cat}</div>
              ))}
            </div>

            {/* Right: comparison bars */}
            <div style={{ flex: 1 }}>
              {COMPARISON_ITEMS.map((item, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? text : textMid }}>{item.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: i === 0 ? accent : textLight }}>{item.pct}%</span>
                  </div>
                  <div style={{ height: 8, background: border, borderRadius: 100, overflow: 'hidden' }}>
                    <div style={{ width: `${item.pct}%`, height: '100%', background: item.color, borderRadius: 100, transition: 'width 0.6s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CROSS-INDUSTRY SOLUTIONS ══ */}
      <section style={{ background: bgLight, padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 4vw, 2rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 48 }}>
            Cross-industry solutions
          </h2>
          <div className="kh-industry-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
            {/* Left: tab list */}
            <div>
              {['Healthcare & Hospitals', 'Industrial & Manufacturing', 'Government & Public Works', 'Education & Universities', 'Residential & Premium Housing', 'Commercial & Data Centers'].map((item, i) => (
                <div key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    padding: '14px 16px', fontSize: 14, fontWeight: activeTab === i ? 600 : 400,
                    color: activeTab === i ? accent : textMid,
                    background: activeTab === i ? bgBlue : 'transparent',
                    border: `1px solid ${activeTab === i ? accent + '44' : 'transparent'}`,
                    borderRadius: 8, marginBottom: 4, cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}
                >
                  {item}
                  {activeTab === i && <span style={{ fontSize: 10, background: accent, color: '#fff', padding: '2px 8px', borderRadius: 100 }}>Active</span>}
                </div>
              ))}
              <span style={{ fontSize: 13, color: accent, fontWeight: 500, cursor: 'pointer', paddingLeft: 16 }}>All use cases →</span>
            </div>
            {/* Right: illustration */}
            <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)', borderRadius: 16, aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: 120, height: 120, background: 'linear-gradient(135deg, #6366f1, #4338ca)', borderRadius: 16, transform: 'rotate(15deg)', boxShadow: '0 20px 60px rgba(67,56,202,0.35)' }} />
              <div style={{ position: 'absolute', width: 80, height: 80, background: 'linear-gradient(135deg, #93c5fd, #3b82f6)', borderRadius: 10, transform: 'rotate(-10deg) translate(50px, 30px)', opacity: 0.7 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ BUILT TO FIT YOUR SECTOR ══ */}
      <section style={{ background: bg, padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 4vw, 2rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: textLight, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Industries served</span>
            <div style={{ display: 'flex', gap: 8 }}>
              {['↑', '↓'].map(a => (
                <div key={a} style={{ width: 28, height: 28, border: `1px solid ${border}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 13 }}>{a}</div>
              ))}
            </div>
          </div>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 40 }}>
            Built to fit how your sector operates
          </h2>
          <div className="kh-sectors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {SECTORS.map((s, i) => (
              <div key={i} className="kh-sector-card" style={{ border: `1px solid ${border}`, borderRadius: 12, overflow: 'hidden', background: bgLight }}>
                <div style={{ height: 160, background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IsoIllustration type={s.type} size={110} />
                </div>
                <div style={{ padding: '18px 18px 22px' }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: textLight, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{s.sub}</p>
                  <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 12, color: textMid, lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ENTERPRISE READY ══ */}
      <section style={{ background: bgLight, padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 4vw, 2rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 8 }}>Enterprise ready</h2>
          <p style={{ fontSize: 13, color: textMid, marginBottom: 48 }}>Aquatherm · Aquatherm · Aquatherm · Aquatherm</p>
          <div className="kh-badges-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 32 }}>
            {BADGES.map((b, i) => (
              <div key={i} className="kh-badge-card" style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: '20px 16px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: bgBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: accent }}>✓</span>
                </div>
                <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{b.label}</p>
                <p style={{ fontSize: 11, color: textMid }}>{b.sub}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: '16px 24px', fontSize: 13, color: textMid, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18 }}>🇩🇪</span> <strong style={{ color: text }}>GDPR-aligned</strong> — Manufactured in Germany
            </div>
            <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: '16px 24px', fontSize: 13, color: textMid, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 18 }}>🏥</span> <strong style={{ color: text }}>Compliance image</strong> — Installed in 200+ institutions
            </div>
          </div>
        </div>
      </section>

      {/* ══ USED BY ══ */}
      <section style={{ background: '#0A1628', padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 4vw, 2rem)', borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, letterSpacing: '-0.5px', color: '#fff', marginBottom: 8 }}>
            Used by teams who can't<br />afford to guess
          </h2>
          <p style={{ textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 48 }}>Real results from real projects.</p>
          <div className="kh-used-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {/* Card 1 — case study */}
            <div style={{ background: 'rgba(24,63,217,0.25)', border: '1px solid rgba(24,63,217,0.4)', borderRadius: 12, padding: '24px 22px' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#60a5fa', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Case Study · Jan 2026</span>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.4 }}>Changhua Christian Hospital — 8-year zero-leak record</h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>Full hot/cold potable water system across 12 buildings. Aquatherm Fusiotherm® throughout — zero maintenance calls.</p>
            </div>
            {/* Card 2 — quote */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '24px 22px' }}>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 20 }}>
                "Kanghe's PPR system has been running flawlessly in our hospital for over 8 years.{' '}
                <strong style={{ color: '#fff' }}>Zero leaks, exceptional quality.</strong> Professional installation training and easy-to-edit pages."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#fff' }}>FM</span>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>Facility Manager</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Changhua Christian Hospital</p>
                </div>
              </div>
            </div>
            {/* Card 3 — metric */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '24px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <p style={{ fontSize: 56, fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-3px' }}>4.9</p>
              <p style={{ fontSize: 13, color: '#fbbf24', letterSpacing: 2, margin: '8px 0' }}>★★★★★</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>48 reviews from project managers,<br />engineers, and facility teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section style={{ background: bg, padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 4vw, 2rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 8 }}>FAQ</h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 40, borderBottom: `1px solid ${border}`, paddingBottom: 16 }}>
            {['Product', 'Billing & pricing', 'Technical'].map((tab, i) => (
              <span key={tab} style={{ fontSize: 13, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? text : textMid, paddingBottom: 2, borderBottom: i === 0 ? `2px solid ${text}` : 'none', cursor: 'pointer' }}>{tab}</span>
            ))}
          </div>
          <div>
            {FAQS.map((f, i) => (
              <div key={i} className="kh-faq-row"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ borderBottom: `1px solid ${border}`, padding: '18px 0' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                  <p style={{ fontSize: 14, fontWeight: 500, color: text, lineHeight: 1.4 }}>{f.q}</p>
                  <span style={{ fontSize: 20, color: textMid, flexShrink: 0, display: 'inline-block', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                </div>
                {openFaq === i && (
                  <p style={{ fontSize: 13, color: textMid, lineHeight: 1.8, paddingTop: 12 }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section style={{ background: bgLight, padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 4vw, 2rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 8 }}>What our clients say</h2>
          <p style={{ textAlign: 'center', fontSize: 14, color: textMid, marginBottom: 48 }}>Verified reviews from project managers, engineers, and facility teams.</p>
          <div className="kh-reviews-summary" style={{ display: 'flex', gap: 48, alignItems: 'center', marginBottom: 40 }}>
            <div style={{ textAlign: 'center', flexShrink: 0, background: bg, border: `1px solid ${border}`, borderRadius: 16, padding: '28px 36px' }}>
              <p style={{ fontSize: 52, fontWeight: 900, lineHeight: 1, letterSpacing: '-3px', color: accent }}>4.9</p>
              <p style={{ fontSize: 16, color: '#fbbf24', letterSpacing: 3, margin: '8px 0' }}>★★★★★</p>
              <p style={{ fontSize: 11, color: textLight }}>48 reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5,88],[4,10],[3,2],[2,0],[1,0]].map(([s,p]) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: textLight, width: 10 }}>{s}</span>
                  <div style={{ flex: 1, height: 8, background: border, borderRadius: 100, overflow: 'hidden' }}>
                    <div style={{ width: `${p}%`, height: '100%', background: accent, borderRadius: 100 }} />
                  </div>
                  <span style={{ fontSize: 12, color: textLight, width: 36, textAlign: 'right' }}>{p}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="kh-sectors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              { name: 'H. Lin', role: 'Facility Director', org: 'MacKay Memorial Hospital', stars: 5, review: 'Eight years of operation with zero leaks. The installation team was professional and the Aquatherm system certificate gave us full compliance documentation from day one.' },
              { name: 'W. Chang', role: 'Project Engineer', org: 'National Cheng Kung University', stars: 5, review: 'Specified Fusiotherm for all new dormitory buildings. Heat-fusion joints are permanent — no threading, no corrosion. Outstanding after-sales support from the Kanghe team.' },
              { name: 'C. Wu', role: 'Procurement Manager', org: 'Industrial Park Authority', stars: 4, review: 'Competitive pricing for a German-certified product. Delivery from the Changhua warehouse was on time and the technical documentation exceeded our spec requirements.' },
            ].map((r, i) => (
              <div key={i} className="kh-badge-card" style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: '22px 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: text, marginBottom: 2 }}>{r.name}</p>
                    <p style={{ fontSize: 11, color: textLight }}>{r.role} · {r.org}</p>
                  </div>
                  <span style={{ color: '#fbbf24', fontSize: 12, letterSpacing: 2 }}>{'★'.repeat(r.stars)}</span>
                </div>
                <p style={{ fontSize: 13, color: textMid, lineHeight: 1.75 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section style={{ background: bg, padding: 'clamp(3rem, 7vh, 5rem) clamp(1rem, 4vw, 2rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 24, color: text }}>
              Secure strategic advantage with<br />real-world piping for your teams<br />and models.
            </h2>
            <button className="kh-btn-primary" style={{ background: accent, color: '#fff', border: 'none', borderRadius: 8, padding: '12px 28px', fontSize: 14, fontWeight: 600 }}>
              Start for free
            </button>
          </div>
          <div style={{ background: bgLight, border: `1px solid ${border}`, borderRadius: 16, padding: '24px 28px', minWidth: 200, textAlign: 'center' }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: textLight, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Best KPI</p>
            <p style={{ fontSize: 40, fontWeight: 900, color: accent, letterSpacing: '-2px', lineHeight: 1 }}>4.9★</p>
            <p style={{ fontSize: 11, color: textMid, marginTop: 6 }}>48 verified reviews</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: bgLight, borderTop: `1px solid ${border}`, padding: 'clamp(2.5rem, 5vh, 3.5rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="kh-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 22, height: 22, background: accent, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 8, fontWeight: 900, color: '#fff' }}>K</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700 }}>Kanghe International</span>
            </div>
            <p style={{ fontSize: 12, color: textMid, lineHeight: 1.8, maxWidth: 220 }}>Exclusive Taiwan distributor of Aquatherm Germany. PPR piping for hospitals, institutions, and infrastructure.</p>
          </div>
          {[
            { heading: 'Products', links: ['Green Pipe', 'Blue Pipe', 'Fittings', 'Consulting'] },
            { heading: 'Industries', links: ['Healthcare', 'Education', 'Government', 'Industrial'] },
            { heading: 'Resources', links: ['Catalog', 'Installation Guide', 'Certifications', 'FAQ'] },
            { heading: 'Company', links: ['About', 'Contact', 'Privacy', 'Terms'] },
          ].map(col => (
            <div key={col.heading}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: text, marginBottom: 14 }}>{col.heading}</p>
              {col.links.map(l => (
                <p key={l} className="kh-link" style={{ fontSize: 12, color: textMid, lineHeight: 2.4 }}>{l}</p>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${border}`, paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 12, color: textLight }}>
          <span>© 2026 Made with Worldedit Design · 康赫國際有限公司</span>
          <span onClick={() => navigate('/')} style={{ cursor: 'pointer', color: accent }}>← Back to Directory</span>
        </div>
      </footer>
    </div>
  )
}
