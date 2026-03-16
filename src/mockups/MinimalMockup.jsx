export default function MinimalMockup() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      color: '#111',
      fontFamily: 'Georgia, serif',
    }}>
      {/* Nav */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '24px 60px', borderBottom: '1px solid #e5e5e5',
      }}>
        <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: 2, textTransform: 'uppercase' }}>Alex Doe</span>
        <div style={{ display: 'flex', gap: 32 }}>
          {['Work', 'About', 'Contact'].map(l => (
            <a key={l} href="#" style={{ color: '#555', textDecoration: 'none', fontSize: 14, letterSpacing: 1 }}>{l}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        padding: '100px 60px 80px',
      }}>
        <p style={{ fontSize: 13, letterSpacing: 3, color: '#999', marginBottom: 20, textTransform: 'uppercase' }}>Designer & Developer</p>
        <h1 style={{ fontSize: 64, fontWeight: 400, lineHeight: 1.1, maxWidth: 600, marginBottom: 32 }}>
          Crafting calm,<br />purposeful work.
        </h1>
        <a href="#" style={{
          display: 'inline-block', padding: '12px 28px',
          border: '1px solid #111', color: '#111', textDecoration: 'none',
          fontSize: 13, letterSpacing: 2, textTransform: 'uppercase',
          transition: 'all 0.2s',
        }}>View Work</a>
      </section>

      {/* Projects */}
      <section style={{ padding: '0 60px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {['Brand Identity', 'Web Design', 'Motion'].map((proj, i) => (
            <div key={i} style={{
              background: ['#f7f7f5', '#f0ede8', '#f5f5f5'][i],
              aspectRatio: '4/3', borderRadius: 2,
              display: 'flex', alignItems: 'flex-end', padding: 24,
            }}>
              <div>
                <p style={{ fontSize: 11, color: '#999', letterSpacing: 2, marginBottom: 6, textTransform: 'uppercase' }}>Project 0{i + 1}</p>
                <p style={{ fontSize: 18, fontWeight: 500 }}>{proj}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #e5e5e5', padding: '24px 60px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 13, color: '#999',
      }}>
        <span>© 2026 Alex Doe</span>
        <span>hello@alexdoe.com</span>
      </footer>
    </div>
  )
}
