export default function BoldMockup() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0d0d0d',
      color: '#fff',
      fontFamily: '"Arial Black", Impact, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Nav */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 48px', borderBottom: '1px solid #222',
      }}>
        <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: -1 }}>ALEX.DOE</span>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Work', 'About', 'Contact'].map(l => (
            <a key={l} href="#" style={{
              color: '#fff', textDecoration: 'none', fontSize: 13,
              letterSpacing: 2, textTransform: 'uppercase',
            }}>{l}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '80px 48px 60px', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 60, right: 48,
          width: 320, height: 320, borderRadius: '50%',
          background: 'linear-gradient(135deg, #ff3cac, #784ba0, #2b86c5)',
          opacity: 0.15, filter: 'blur(60px)',
        }} />
        <p style={{ fontSize: 13, color: '#ff3cac', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16 }}>
          Available for freelance
        </p>
        <h1 style={{
          fontSize: 'clamp(56px, 10vw, 110px)',
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: -4,
          marginBottom: 40,
          textTransform: 'uppercase',
        }}>
          MAKE<br />
          <span style={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}>BOLD</span><br />
          THINGS.
        </h1>
        <a href="#" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #ff3cac, #784ba0)',
          color: '#fff', textDecoration: 'none',
          padding: '16px 40px', borderRadius: 2,
          fontSize: 14, letterSpacing: 3, textTransform: 'uppercase',
          fontWeight: 900,
        }}>See My Work →</a>
      </section>

      {/* Projects */}
      <section style={{ padding: '40px 48px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 4 }}>
          {[
            { label: 'Branding', color: '#ff3cac' },
            { label: 'Web', color: '#784ba0' },
            { label: 'Motion', color: '#2b86c5' },
          ].map((proj, i) => (
            <div key={i} style={{
              background: '#1a1a1a',
              aspectRatio: '3/4',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'flex-end', padding: 28,
              borderLeft: `3px solid ${proj.color}`,
              cursor: 'pointer',
            }}>
              <p style={{ fontSize: 11, color: proj.color, letterSpacing: 3, marginBottom: 8, textTransform: 'uppercase' }}>0{i + 1}</p>
              <p style={{ fontSize: 28, fontWeight: 900, textTransform: 'uppercase', letterSpacing: -1 }}>{proj.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #222', padding: '20px 48px',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 12, color: '#555', letterSpacing: 2, textTransform: 'uppercase',
      }}>
        <span>© 2026 Alex Doe</span>
        <span>hello@alexdoe.com</span>
      </footer>
    </div>
  )
}
