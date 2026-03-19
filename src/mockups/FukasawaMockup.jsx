import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const projects = [
  { id: 'kanghe', title: 'Kanghe', year: '2024', cat: 'Landing Page', logo: '/logos/kanghe-logo.svg', logoBg: '#ffffff', logoBorder: '1px solid #e0e0e0' },
  { id: 'euroaire', title: 'Euroaire', year: '2024', cat: 'Landing Page', logo: '/logos/euroaire-logo.png', logoBg: '#111111', logoFilter: 'brightness(0) invert(1)' },
  { id: 'goldenroot', title: 'Goldenroot', year: '2024', cat: 'Landing Page', logo: '/logos/panrico-logo.png', logoBg: '#0a0800' },
  { id: 'matatakitoyo', title: 'Matatakitoyo', year: '2024', cat: 'Landing Page', logo: '/logos/matatakitoyo-logo.png', logoBg: '#8a0014' },
  { id: '3m', title: '3M', year: '2024', cat: 'Landing Page', logo: '/logos/3m-logo.svg', logoBg: '#e8001b' },
  { id: 'aikwang', title: 'AI-KWANG TECH CO.', year: '2024', cat: 'Landing Page', logo: '/logos/aikwang-logo.svg', logoBg: '#0d0d0d', logoStyle: { width: '60%', height: 'auto' } },
  { id: 'gemterminal', title: 'GEM TERMINAL INDUSTRY CO', year: '2024', cat: 'Landing Page', logo: '/logos/gem-terminal-logo-color.png', logoBg: '#ffffff', logoBorder: '1px solid #e0e0e0', logoStyle: { width: '55%', height: 'auto' } },
]

const navLinks = ['All Projects', 'Landing Page', 'Product', 'Exhibition', 'Graphic', 'Editorial']

export default function FukasawaMockup() {
  const [hoveredId, setHoveredId] = useState(null)
  const [activeNav, setActiveNav] = useState('All Projects')
  const [lang, setLang] = useState('English')
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      fontFamily: '-apple-system, "SF Pro Text", "SF Pro Display", BlinkMacSystemFont, sans-serif',
      fontWeight: 200,
      fontSize: 14,
      letterSpacing: '0.04em',
      color: '#888',
      lineHeight: 1,
      position: 'relative',
      overflowX: 'hidden',
    }}>
      {/* Logo — sticky top-left */}
      <div style={{
        position: 'fixed',
        top: 66,
        left: 79,
        zIndex: 1000,
      }}>
        <img src="/logo.png" alt="Worldedit Design" style={{ height: 80, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </div>

      {/* Language switcher — sticky top-right */}
      <div style={{
        position: 'fixed',
        right: 73,
        top: 78,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 0,
      }}>
        {['English', 'Chinese'].map((l, i) => (
          <span key={l} style={{ display: 'flex', alignItems: 'center' }}>
            {i > 0 && (
              <span style={{
                display: 'inline-block',
                width: 1,
                height: 14,
                background: '#999',
                margin: '0 7px',
                verticalAlign: 'middle',
                opacity: 0.5,
              }} />
            )}
            <a
              href="#"
              onClick={e => { e.preventDefault(); setLang(l) }}
              style={{
                color: '#000',
                textDecoration: 'none',
                fontSize: 14,
                opacity: lang === l ? 1 : 0.4,
                letterSpacing: '0.04em',
              }}
            >{l}</a>
          </span>
        ))}
      </div>

      {/* Fixed left sidebar nav */}
      <div style={{
        position: 'fixed',
        top: 288,
        left: 71,
        width: 230,
        zIndex: 9999,
      }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: 30 }}>
            <a href="#" style={{
              display: 'inline-block', padding: '4px 9px',
              color: '#000', textDecoration: 'none',
              lineHeight: '150%',
              fontWeight: 400,
              fontSize: 18,
              letterSpacing: '0.02em',
            }}>Projects</a>
          </li>
          {['About', 'Publications', 'News', 'Contact'].map(link => (
            <li key={link} style={{ padding: '4px 9px' }}>
              <a href="#" style={{
                color: '#888', textDecoration: 'none',
                lineHeight: '150%', display: 'inline-block',
                fontSize: 18,
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => e.target.style.color = '#000'}
              onMouseLeave={e => e.target.style.color = '#888'}
              >{link}</a>
            </li>
          ))}
        </ul>

        {/* Category filter */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '40px 0 0', display: 'flex', flexDirection: 'column' }}>
          {navLinks.map(link => (
            <li key={link} style={{ padding: '4px 9px' }}>
              <a
                href="#"
                onClick={e => { e.preventDefault(); setActiveNav(link) }}
                style={{
                  color: activeNav === link ? '#000' : '#888',
                  textDecoration: 'none',
                  lineHeight: '150%',
                  display: 'inline-block',
                  fontSize: 18,
                  letterSpacing: '0.02em',
                }}
              >{link}</a>
            </li>
          ))}
        </ul>

        {/* Search */}
        <div style={{
          marginTop: 38,
          border: '1px solid #ccc',
          borderRadius: 10,
          width: 153,
          height: 30,
          display: 'flex',
          alignItems: 'center',
        }}>
          <input
            placeholder="Search"
            style={{
              border: 0,
              background: 'transparent',
              fontFamily: '-apple-system, "SF Pro Text", "SF Pro Display", BlinkMacSystemFont, sans-serif',
              fontWeight: 200,
              fontSize: 14,
              letterSpacing: '0.04em',
              color: '#000',
              padding: '0 12px',
              width: '100%',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Main content — exact real site values: padding 300px 0 0 360px */}
      <div style={{
        padding: '300px 0 0 360px',
        minHeight: 400,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 40,
          rowGap: 60,
          paddingRight: 80,
        }}>
          {projects
            .filter(p => activeNav === 'All Projects' || p.cat.includes(activeNav))
            .map(proj => {
              return (
                <div
                  key={proj.id}
                  onMouseEnter={() => setHoveredId(proj.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => navigate(`/project/${proj.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Image tile */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '4 / 5',
                    background: proj.logoBg,
                    border: proj.logoBorder || 'none',
                    position: 'relative',
                    display: 'block',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                    }}>
                      {proj.logo
                        ? <img src={proj.logo} alt={proj.title} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%', height: 'auto', objectFit: 'contain', display: 'block', filter: proj.logoFilter || 'none', ...proj.logoStyle }} />
                        : <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '35%', height: '35%', background: '#e8e8e8', borderRadius: '1px' }} />
                      }
                    </div>
                    {/* Hover dim */}
                    {hoveredId === proj.id && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(255,255,255,0.15)',
                      }} />
                    )}
                  </div>

                  {/* Title */}
                  <p style={{
                    marginTop: 17,
                    lineHeight: '1.5em',
                    fontSize: 14,
                  }}>
                    <a href="#" style={{
                      color: hoveredId === proj.id ? '#000' : '#aaa',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                      letterSpacing: '0.04em',
                    }}>
                      {proj.title}
                    </a>
                  </p>
                </div>
              )
            })}
        </div>

        {/* Footer */}
        <footer style={{
          fontSize: 12,
          padding: '155px 80px 80px 0',
          color: '#888',
        }}>
          © Worldedit Design
        </footer>
      </div>
    </div>
  )
}
