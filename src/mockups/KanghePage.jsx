import { useNavigate } from 'react-router-dom'
import PremiumContact from '../components/PremiumContact'

const base = 'https://www.aquatherm-ppr.com'

const HR = () => <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.12)', marginBottom: 40 }} />
const SectionTitle = ({ children }) => (
  <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20, color: '#fff' }}>{children}</h2>
)

export default function KanghePage() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a3a6b',
      fontFamily: '-apple-system, "SF Pro Text", BlinkMacSystemFont, sans-serif',
      color: '#fff',
      fontSize: 14,
    }}>

      {/* ── Nav ── */}
      <nav style={{
        background: 'transparent', border: 'none',
        display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        padding: '0 32px', height: 56,
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      }}>
        <span onClick={() => navigate('/')} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
        >← Back</span>
        <img src="/logo.png" alt="Worldedit Design" style={{ height: 36, width: 'auto', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 16, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
          <span style={{ cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>Prev</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>Next</span>
        </div>
      </nav>

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '104px 24px 80px' }}>

        {/* ── Company Header ── */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 40 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 10,
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: '#fff' }}>K</span>
          </div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.3px', marginBottom: 4, lineHeight: 1.2, color: '#fff' }}>
              KANGHE INTERNATIONAL CO., LTD.
            </h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 10 }}>康赫國際有限公司</p>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#93c5fd', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 4, letterSpacing: '0.05em' }}>
              PPR Piping · Taiwan
            </span>
          </div>
        </div>

        <HR />

        {/* ── Video ── */}
        <div style={{ width: '100%', aspectRatio: '16/9', background: 'rgba(0,0,0,0.25)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid rgba(255,255,255,0.8)', marginLeft: 4 }} />
          </div>
        </div>

        {/* ── About ── */}
        <section style={{ marginBottom: 48 }}>
          <SectionTitle>About</SectionTitle>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.9 }}>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Mission</p>
            <p style={{ marginBottom: 20 }}>Kanghe International is committed to providing high-quality German PPR pipe systems as the exclusive Taiwan distributor for Aquatherm — the world's originator of PPR pipe technology. Founded in Changhua, Taiwan, we serve hospitals, universities, government buildings, and industrial projects across the country.</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>PPR Piping Division:</p>
            <p style={{ marginBottom: 2 }}>Exclusive Taiwan distributor of Germany's Aquatherm brand, founded 1973</p>
            <p style={{ marginBottom: 2 }}>Hot & cold water systems, industrial piping, and fire suppression lines</p>
            <p style={{ marginBottom: 2 }}>Full accessories system — one-stop procurement</p>
            <p style={{ marginBottom: 20 }}>Professional installation training and site consulting</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Project References:</p>
            <p style={{ marginBottom: 2 }}>Changhua Christian Hospital, Taichung Veterans General Hospital</p>
            <p style={{ marginBottom: 2 }}>National Taiwan University of Sport and multiple academic institutions</p>
            <p>Government facilities, industrial plants, and premium residential projects</p>
          </div>
        </section>

        <HR />

        {/* ── Products ── */}
        <section style={{ marginBottom: 48 }}>
          <SectionTitle>Products</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { title: 'Aquatherm Green Pipe — Fusiotherm®', desc: 'The world\'s most widely used PPR pipe for drinking water and hot/cold systems. Certified safe, fused joints, zero leaks...', tags: ['DRINKING WATER', 'HOT & COLD'], img: 'https://www.aquatherm-ppr.com/_i/assets/upload/banner/a1898f139401adf44c3cbdc66c0f5f09.jpg' },
              { title: 'Aquatherm Blue Pipe — Climatherm®', desc: 'Industrial-grade PPR piping for cooling water, compressed air, and HVAC systems. Pressure-rated for demanding environments...', tags: ['INDUSTRIAL', 'HVAC'], img: 'https://www.aquatherm-ppr.com/_i/assets/upload/banner/3d753ff10bf94506517b45757cc88218.jpg' },
              { title: 'PPR Consulting & Training', desc: 'Professional on-site consulting, installation training, and project management. Certified by Aquatherm Germany...', tags: ['CONSULTING', 'CERTIFIED'], img: 'https://www.aquatherm-ppr.com/images_v4/index_01.jpg' },
            ].map((p, i) => (
              <div key={i} style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, background: 'rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ minHeight: 180, overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '16px 18px 18px' }}>
                  <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, lineHeight: 1.4, color: '#fff' }}>{p.title}</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', color: '#93c5fd', background: 'rgba(147,197,253,0.15)', padding: '3px 8px', borderRadius: 4 }}>◈ {t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <HR />

        {/* ── Gallery ── */}
        <section style={{ marginBottom: 48 }}>
          <SectionTitle>Gallery</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{ aspectRatio: '4/3', borderRadius: 8, background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
            ))}
          </div>
        </section>

        <HR />

        {/* ── Download Center ── */}
        <section style={{ marginBottom: 48 }}>
          <SectionTitle>Download Center</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { label: 'SALES KIT', name: 'Kanghe International — Company Overview' },
              { label: 'CATALOG', name: 'Aquatherm Green Pipe Product Catalog' },
              { label: 'CATALOG', name: 'Aquatherm Blue Pipe Industrial Guide' },
              { label: 'GUIDE', name: 'PPR Installation & Training Manual' },
            ].map((d, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div>
                  <p style={{ fontSize: 10, color: '#93c5fd', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{d.label}</p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>{d.name}</p>
                </div>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, flexShrink: 0 }}>↓</div>
              </div>
            ))}
          </div>
        </section>

        <HR />

        {/* ── Contact Information ── */}
        <section style={{ marginBottom: 48 }}>
          <SectionTitle>Contact Information</SectionTitle>
          <PremiumContact accent="#60a5fa" bg="#1a3a6b" company="康赫國際有限公司" email="info@kanghe.com.tw" phone="04-7261626" address="彰化市平安街278巷15號" />
        </section>

        <HR />

        {/* ── Client Brands ── */}
        <section style={{ marginBottom: 48 }}>
          <SectionTitle>Trusted By</SectionTitle>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 24 }}>Brands & institutions that have permitted us to feature their partnership.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              <svg key="cch" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="22" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="20" fontWeight="800" fontFamily="-apple-system,sans-serif">CCH</text><text x="70" y="38" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="8" fontWeight="500" fontFamily="-apple-system,sans-serif" letterSpacing="0.5">CHANGHUA CHRISTIAN</text></svg>,
              <svg key="tvgh" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="22" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="20" fontWeight="800" fontFamily="-apple-system,sans-serif">TVGH</text><text x="70" y="38" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="8" fontWeight="500" fontFamily="-apple-system,sans-serif" letterSpacing="0.5">TAICHUNG VETERANS</text></svg>,
              <svg key="ntus" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="22" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="20" fontWeight="800" fontFamily="-apple-system,sans-serif">NTUS</text><text x="70" y="38" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="8" fontWeight="500" fontFamily="-apple-system,sans-serif" letterSpacing="0.5">TAIWAN UNIV. OF SPORT</text></svg>,
              <svg key="aquatherm" viewBox="0 0 140 50" width="100%" height="44"><polygon points="70,6 79,22 61,22" fill="rgba(255,255,255,0.9)"/><text x="70" y="38" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11" fontWeight="700" fontFamily="-apple-system,sans-serif" letterSpacing="1">AQUATHERM</text></svg>,
            ].map((logo, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, aspectRatio: '3/2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
                {logo}
              </div>
            ))}
          </div>
        </section>

        <HR />

        {/* ── Testimonials ── */}
        <section style={{ marginBottom: 48 }}>
          <SectionTitle>Testimonials</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { quote: 'Kanghe\'s PPR system has been running flawlessly in our hospital for over 8 years. Zero leaks, exceptional quality.', author: 'Facility Manager', org: 'Changhua Christian Hospital' },
              { quote: 'Professional installation training and responsive after-sales support. We recommend Kanghe for all our projects.', author: 'Lead Engineer', org: 'Industrial Construction Co.' },
              { quote: 'The Aquatherm Green Pipe exceeded all our potable water compliance requirements. Excellent product.', author: 'Project Director', org: 'Government Infrastructure Bureau' },
              { quote: 'Reliable, eco-friendly and cost-effective. Kanghe is our go-to PPR supplier for residential developments.', author: 'Chief Architect', org: 'Premium Residential Developer' },
            ].map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '20px 22px' }}>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 16, fontStyle: 'italic' }}>"{t.quote}"</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{t.author}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{t.org}</p>
              </div>
            ))}
          </div>
        </section>

        <HR />

        {/* ── Reviews ── */}
        <section style={{ marginBottom: 48 }}>
          <SectionTitle>Reviews</SectionTitle>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', marginBottom: 24 }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 52, fontWeight: 800, color: '#fff', lineHeight: 1 }}>4.9</p>
              <p style={{ fontSize: 20, color: '#fbbf24', letterSpacing: 2 }}>★★★★★</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>48 reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5, 82], [4, 12], [3, 4], [2, 1], [1, 1]].map(([stars, pct]) => (
                <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', width: 8 }}>{stars}</span>
                  <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: '#fbbf24', borderRadius: 3 }} />
                  </div>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', width: 28 }}>{pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { name: 'C.H. Lin', stars: 5, product: 'Aquatherm Green Pipe', review: 'Outstanding quality. The fusion welding system is far superior to traditional threaded joints. Highly recommend.' },
              { name: 'M.Y. Chen', stars: 5, product: 'PPR Consulting Services', review: 'The team provided thorough on-site training. Our contractors were certified within two days. Excellent service.' },
              { name: 'P.W. Huang', stars: 4, product: 'Aquatherm Blue Pipe', review: 'Solid industrial pipe solution. Delivery was prompt and the fitting accessories are well-designed.' },
            ].map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '16px 18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div>
                    <span style={{ fontWeight: 600, fontSize: 13, color: '#fff' }}>{r.name}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginLeft: 10 }}>{r.product}</span>
                  </div>
                  <span style={{ color: '#fbbf24', fontSize: 13 }}>{'★'.repeat(r.stars)}</span>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </section>

        <HR />

        {/* ── Lead Magnet ── */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '40px 36px', textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#93c5fd', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Free Resource</p>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>
              Get the Complete PPR Piping<br />Buyer's Guide — Free
            </h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 440, margin: '0 auto 28px' }}>
              Learn how to choose the right PPR system for your project, avoid common installation mistakes, and calculate long-term cost savings vs. traditional metal pipes.
            </p>
            <div style={{ display: 'flex', gap: 10, maxWidth: 400, margin: '0 auto' }}>
              <input placeholder="Your email address" style={{ flex: 1, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, padding: '10px 14px', fontSize: 13, color: '#fff', fontFamily: 'inherit', outline: 'none' }} />
              <button style={{ background: '#fff', color: '#1a3a6b', border: 'none', borderRadius: 4, padding: '10px 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>Get Guide</button>
            </div>
          </div>
        </section>

        {/* ── Back ── */}
        <div style={{ marginBottom: 40 }}>
          <span onClick={() => navigate('/')} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
          >← Back to Exhibitor Directory</span>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '32px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
        <span>© 2025 Made with Worldedit Design</span>
        <span>康赫國際有限公司 · 04-7261626</span>
      </footer>
    </div>
  )
}
