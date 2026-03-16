export default function CreativeMockup() {
  const tags = ['UI/UX', 'Branding', 'Motion', '3D', 'Illustration']

  return (
    <div style={{
      minHeight: '100vh',
      background: '#fdf6ec',
      color: '#1a1a1a',
      fontFamily: 'system-ui, sans-serif',
    }}>
      {/* Nav */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 48px',
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'linear-gradient(135deg, #f97316, #ec4899)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 700, fontSize: 16,
        }}>A</div>
        <div style={{ display: 'flex', gap: 32 }}>
          {['Work', 'About', 'Lab', 'Contact'].map(l => (
            <a key={l} href="#" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: 15 }}>{l}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '60px 48px 40px', display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 340px' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
            {tags.map(t => (
              <span key={t} style={{
                background: '#fff', border: '1px solid #e5e5e5',
                borderRadius: 100, padding: '4px 14px', fontSize: 13, color: '#555',
              }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
            Hello, I'm <span style={{
              background: 'linear-gradient(90deg, #f97316, #ec4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Alex</span> —<br />
            a creative designer.
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.6, maxWidth: 480, marginBottom: 32 }}>
            I turn ideas into visual experiences that people remember. Based in NYC, open to remote work worldwide.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#" style={{
              background: '#1a1a1a', color: '#fff', textDecoration: 'none',
              padding: '12px 28px', borderRadius: 100, fontSize: 14, fontWeight: 600,
            }}>View Portfolio</a>
            <a href="#" style={{
              background: '#fff', color: '#1a1a1a', textDecoration: 'none',
              padding: '12px 28px', borderRadius: 100, fontSize: 14,
              border: '1px solid #e5e5e5',
            }}>Say hello ✉️</a>
          </div>
        </div>

        {/* Abstract shape */}
        <div style={{
          flex: '0 0 300px', height: 360,
          background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)',
          borderRadius: '60% 40% 70% 30% / 30% 60% 40% 70%',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', bottom: 24, left: 24, right: 24,
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
            borderRadius: 16, padding: '16px 20px',
          }}>
            <p style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Currently available</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>for freelance projects</p>
          </div>
        </div>
      </section>

      {/* Work grid */}
      <section style={{ padding: '40px 48px 80px' }}>
        <h2 style={{ fontSize: 13, letterSpacing: 3, color: '#999', textTransform: 'uppercase', marginBottom: 24 }}>Selected Work</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            { title: 'Nova App', color: '#fce7f3', tag: 'Mobile UI' },
            { title: 'Bloom Studio', color: '#ede9fe', tag: 'Branding' },
            { title: 'Drift Co.', color: '#fff7ed', tag: 'Web Design' },
            { title: 'Arc System', color: '#f0fdf4', tag: 'Product' },
          ].map((item, i) => (
            <div key={i} style={{
              background: item.color, borderRadius: 20, padding: 24,
              aspectRatio: '4/3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <span style={{
                alignSelf: 'flex-start', background: '#fff',
                borderRadius: 100, padding: '4px 12px', fontSize: 12, color: '#555',
              }}>{item.tag}</span>
              <p style={{ fontSize: 20, fontWeight: 700 }}>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #e5e5e5', padding: '24px 48px',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 13, color: '#999',
      }}>
        <span>© 2026 Alex Doe</span>
        <span>Made with ♥ in NYC</span>
      </footer>
    </div>
  )
}
