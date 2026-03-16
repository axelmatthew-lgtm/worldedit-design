import { useNavigate } from 'react-router-dom'
import PremiumContact from '../components/PremiumContact'

const accent = '#0ea5e9'
const bg = '#0c2340'
const HR = () => <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.12)', marginBottom: 40 }} />
const ST = ({ children }) => <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 20, color: '#fff' }}>{children}</h2>

export default function EuroairePage() {
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
          <div style={{ width: 64, height: 64, borderRadius: 10, background: 'rgba(14,165,233,0.2)', border: '1px solid rgba(14,165,233,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: accent }}>E</span>
          </div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4, lineHeight: 1.2 }}>EURO AIR CZ, s.r.o.</h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>Euroaire · Denmark / Czech Republic</p>
            <span style={{ background: 'rgba(14,165,233,0.2)', color: accent, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 4, letterSpacing: '0.05em' }}>Textile Ducting · HVAC</span>
          </div>
        </div>
        <HR />

        {/* Video */}
        <div style={{ width: '100%', aspectRatio: '16/9', background: 'rgba(0,0,0,0.3)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid rgba(255,255,255,0.8)', marginLeft: 4 }} />
          </div>
        </div>

        {/* About */}
        <section style={{ marginBottom: 48 }}>
          <ST>About</ST>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.9 }}>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Mission</p>
            <p style={{ marginBottom: 20 }}>EuroAir has been designing and manufacturing innovative textile ducting systems since 1991. With more than 30 years of experience and production exclusively in Europe, we create lightweight, aesthetic alternatives to traditional metal HVAC ducting for healthier indoor environments.</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Textile Ducting Division:</p>
            <p style={{ marginBottom: 2 }}>Up to 70% lighter than metal ducting systems</p>
            <p style={{ marginBottom: 2 }}>Up to 70% faster installation time</p>
            <p style={{ marginBottom: 2 }}>Cradle to Cradle certified for full sustainability</p>
            <p style={{ marginBottom: 20 }}>Custom TBV Designer software for technical specs & airflow visualization</p>
            <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Value We Deliver:</p>
            <p style={{ marginBottom: 2 }}>Even air distribution, draft-free comfort</p>
            <p style={{ marginBottom: 2 }}>In-house R&D laboratory and weaving mill</p>
            <p>Thousands of completed projects worldwide</p>
          </div>
        </section>
        <HR />

        {/* Products */}
        <section style={{ marginBottom: 48 }}>
          <ST>Products</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { title: 'Textile Ducting', desc: 'Lightweight air distribution system — even airflow, quick install, available in any colour or shape.', tags: ['HVAC', 'AIR DISTRIBUTION'], img: 'https://www.euroair.eu/userfiles/thumbs/f/untitled-c7df216e-480x1080-1.webp' },
              { title: 'FBS Panels', desc: 'Ventilation solution for cassette ceilings designed for draft-free, comfortable indoor spaces.', tags: ['CEILING SYSTEMS', 'VENTILATION'], img: 'https://www.euroair.eu/userfiles/thumbs/e/img-2755-copy-341afe57-600x300-1.webp' },
              { title: 'DefrostSock', desc: 'Specialized ducting that accelerates evaporator defrosting by up to 50%. Cold storage solution.', tags: ['COLD STORAGE', 'DEFROST'], img: 'https://www.euroair.eu/userfiles/thumbs/b/149-2160-copy-47ea741e-600x300-1.webp' },
            ].map((p, i) => (
              <div key={i} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <div style={{ minHeight: 160, overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: '#fff' }}>{p.title}</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tags.map(t => <span key={t} style={{ fontSize: 10, fontWeight: 700, color: accent, background: 'rgba(14,165,233,0.15)', padding: '3px 8px', borderRadius: 4 }}>◈ {t}</span>)}
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
              <div key={i} style={{ aspectRatio: '4/3', borderRadius: 8, background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            {[{ label: 'SALES KIT', name: 'EuroAir Company Overview' }, { label: 'CATALOG', name: 'Textile Ducting Product Catalog' }, { label: 'GUIDE', name: 'TBV Designer Software Guide' }, { label: 'SPEC', name: 'Technical Specifications Sheet' }].map((d, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
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
          <PremiumContact accent="#0ea5e9" bg="#0c2340" company="Euro Air CZ, s.r.o." email="info@euroair.eu" phone="+420 412 384 451" address="Industrivej Vest 21, 6600 Vejen, Denmark" />
        </section>
        <HR />

        {/* Trusted By */}
        <section style={{ marginBottom: 48 }}>
          <ST>Trusted By</ST>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              <svg key="kef" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="20" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="16" fontWeight="800" fontFamily="-apple-system,sans-serif" letterSpacing="1">KE</text><text x="70" y="38" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10" fontWeight="500" fontFamily="-apple-system,sans-serif" letterSpacing="0.5">FIBERTEC</text></svg>,
              <svg key="trox" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="20" fontWeight="800" fontFamily="-apple-system,sans-serif" letterSpacing="2">TROX</text></svg>,
              <svg key="systemair" viewBox="0 0 140 50" width="100%" height="44"><circle cx="70" cy="20" r="7" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/><text x="70" y="42" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="9" fontWeight="700" fontFamily="-apple-system,sans-serif" letterSpacing="1">SYSTEMAIR</text></svg>,
              <svg key="swegon" viewBox="0 0 140 50" width="100%" height="44"><text x="70" y="30" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="16" fontWeight="700" fontFamily="-apple-system,sans-serif" letterSpacing="1.5">SWEGON</text></svg>,
            ].map((logo, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, aspectRatio: '3/2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
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
              { quote: 'The installation was incredibly fast — we finished 3 days ahead of schedule. The textile system looks clean and performs beautifully.', author: 'Facility Engineer', org: 'Commercial Office Complex' },
              { quote: 'Air distribution is perfectly even throughout the entire cold storage room. The DefrostSock solution saved us significant energy costs.', author: 'Operations Manager', org: 'Food Distribution Centre' },
              { quote: 'We switched from metal ducting 5 years ago and have never looked back. Lighter, faster, and better airflow quality.', author: 'HVAC Contractor', org: 'Nordic Installation Group' },
              { quote: 'Cradle to Cradle certified — this was a key requirement for our sustainable building project. Excellent product.', author: 'Sustainability Architect', org: 'Green Building Institute' },
            ].map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '20px 22px' }}>
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
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>36 reviews</p>
            </div>
            <div style={{ flex: 1 }}>
              {[[5,78],[4,15],[3,5],[2,1],[1,1]].map(([s,p]) => (
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
              { name: 'J. Hansen', stars: 5, product: 'Textile Ducting', review: 'Exceptional product. The even airflow distribution transformed our warehouse environment completely.' },
              { name: 'M. Novak', stars: 5, product: 'DefrostSock', review: 'Defrost time cut by nearly half. The ROI on this product was faster than we expected.' },
              { name: 'S. Berg', stars: 4, product: 'FBS Panels', review: 'Clean integration with cassette ceilings. Installation team was professional and efficient.' },
            ].map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '16px 18px' }}>
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
          <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '40px 36px', textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Free Resource</p>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>The Complete Guide to Textile Ducting vs. Metal — Free</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 440, margin: '0 auto 28px' }}>Cost comparison, installation time savings, airflow performance data, and sustainability certifications explained.</p>
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
        <span>Euro Air CZ · info@euroair.eu</span>
      </footer>
    </div>
  )
}
