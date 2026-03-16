import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const projects = [
  { id: 'kanghe', title: 'Kanghe', year: '2024', cat: 'Landing Page' },
  { id: 'euroaire', title: 'Euroaire', year: '2024', cat: 'Landing Page' },
  { id: 'goldenroot', title: 'Goldenroot', year: '2024', cat: 'Landing Page' },
  { id: 'matatakitoyo', title: 'Matatakitoyo', year: '2024', cat: 'Landing Page' },
  { id: '3m', title: '3M', year: '2024', cat: 'Landing Page' },
  { id: 'aikwang', title: 'AI-KWANG TECH CO.', year: '2024', cat: 'Landing Page' },
  { id: 'gemterminal', title: 'GEM TERMINAL INDUSTRY CO', year: '2024', cat: 'Landing Page' },
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
                    background: '#f7f7f7',
                    position: 'relative',
                    display: 'block',
                    overflow: 'hidden',
                  }}>
                    {/* Subtle placeholder object */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <div style={{
                        width: '35%',
                        height: '35%',
                        background: '#e8e8e8',
                        borderRadius: proj.id % 4 === 0 ? '50%' : proj.id % 3 === 0 ? '2px' : proj.id % 2 === 0 ? '50% 0' : '1px',
                      }} />
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
