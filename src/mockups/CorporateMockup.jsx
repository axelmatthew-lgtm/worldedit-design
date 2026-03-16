export default function CorporateMockup() {
  const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '120+', label: 'Projects Delivered' },
    { value: '40+', label: 'Happy Clients' },
  ]

  const skills = ['Strategy', 'UX Research', 'Product Design', 'Systems Design', 'Prototyping', 'Accessibility']

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8fafc',
      color: '#0f172a',
      fontFamily: '"Segoe UI", system-ui, sans-serif',
    }}>
      {/* Nav */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 64px', background: '#fff',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, background: '#1e40af', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 700, fontSize: 15,
          }}>A</div>
          <span style={{ fontWeight: 700, fontSize: 16, color: '#0f172a' }}>Alex Doe</span>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {['Portfolio', 'Services', 'About', 'Blog'].map(l => (
            <a key={l} href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: 14 }}>{l}</a>
          ))}
          <a href="#" style={{
            background: '#1e40af', color: '#fff', textDecoration: 'none',
            padding: '8px 20px', borderRadius: 6, fontSize: 14, fontWeight: 500,
          }}>Hire Me</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
        color: '#fff', padding: '80px 64px',
        display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap',
      }}>
        <div style={{ flex: '1 1 400px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.1)', borderRadius: 100,
            padding: '6px 16px', marginBottom: 24, fontSize: 13,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            Open to opportunities
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.15, marginBottom: 20 }}>
            Senior Product Designer<br />& UX Strategist
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', maxWidth: 520, marginBottom: 36 }}>
            I help companies build products that are intuitive, scalable, and delightful to use. 8 years of experience across fintech, SaaS, and enterprise.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#" style={{
              background: '#fff', color: '#1e40af', textDecoration: 'none',
              padding: '12px 28px', borderRadius: 6, fontSize: 14, fontWeight: 600,
            }}>Download Resume</a>
            <a href="#" style={{
              background: 'transparent', color: '#fff', textDecoration: 'none',
              padding: '12px 28px', borderRadius: 6, fontSize: 14,
              border: '1px solid rgba(255,255,255,0.4)',
            }}>View Case Studies</a>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          flex: '0 1 300px',
          display: 'grid', gridTemplateColumns: '1fr', gap: 16,
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '20px 24px',
              backdropFilter: 'blur(10px)',
            }}>
              <p style={{ fontSize: 36, fontWeight: 700, lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: '60px 64px', background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: 13, color: '#64748b', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 }}>Core Competencies</h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {skills.map(s => (
            <span key={s} style={{
              background: '#eff6ff', color: '#1e40af',
              borderRadius: 6, padding: '8px 18px', fontSize: 14, fontWeight: 500,
            }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section style={{ padding: '60px 64px 80px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Case Studies</h2>
        <p style={{ color: '#64748b', marginBottom: 32 }}>Selected projects with measurable impact.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {[
            { title: 'Fintech Dashboard Redesign', result: '+34% task completion', bg: '#eff6ff', accent: '#1e40af' },
            { title: 'SaaS Onboarding Flow', result: '-60% drop-off rate', bg: '#f0fdf4', accent: '#166534' },
            { title: 'Enterprise Design System', result: '3x faster shipping', bg: '#fdf4ff', accent: '#7e22ce' },
          ].map((item, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 12, border: '1px solid #e2e8f0',
              overflow: 'hidden',
            }}>
              <div style={{ background: item.bg, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 40, opacity: 0.3 }}>◈</span>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <p style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: item.accent, fontWeight: 600 }}>{item.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0f172a', color: '#94a3b8',
        padding: '24px 64px',
        display: 'flex', justifyContent: 'space-between', fontSize: 13,
      }}>
        <span>© 2026 Alex Doe. All rights reserved.</span>
        <span>alex@alexdoe.com</span>
      </footer>
    </div>
  )
}
