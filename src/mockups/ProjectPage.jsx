import { useParams, useNavigate } from 'react-router-dom'

const projects = [
  { id: '1', title: 'Kanghe', year: '2024', cat: 'Landing Page' },
  { id: '2', title: 'Euroaire', year: '2024', cat: 'Landing Page' },
  { id: '3', title: 'Goldenroot', year: '2024', cat: 'Landing Page' },
  { id: '4', title: 'Matatakitoyo', year: '2024', cat: 'Landing Page' },
  { id: '5', title: '3M', year: '2024', cat: 'Landing Page' },
  { id: '6', title: 'AI-KWANG TECH CO.', year: '2024', cat: 'Landing Page' },
  { id: '7', title: 'GEM TERMINAL INDUSTRY CO', year: '2024', cat: 'Landing Page' },
]

export default function ProjectPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)
  const idx = projects.findIndex(p => p.id === id)
  const prev = projects[idx - 1]
  const next = projects[idx + 1]

  if (!project) return (
    <div style={{ padding: 80, fontFamily: '-apple-system, sans-serif', color: '#888' }}>
      Project not found. <a href="/" style={{ color: '#000' }}>Go back</a>
    </div>
  )

  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      fontFamily: '-apple-system, "SF Pro Text", BlinkMacSystemFont, sans-serif',
      fontWeight: 200,
      fontSize: 14,
      letterSpacing: '0.04em',
      color: '#888',
    }}>
      {/* Logo */}
      <div style={{ position: 'fixed', top: 66, left: 79, zIndex: 1000 }}>
        <img src="/logo.png" alt="Worldedit Design" style={{ height: 80, width: 'auto', objectFit: 'contain', display: 'block' }} />
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',
          top: 78,
          right: 73,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: 14,
          color: '#888',
          letterSpacing: '0.04em',
          fontFamily: 'inherit',
          fontWeight: 200,
          padding: '4px 9px',
        }}
        onMouseEnter={e => e.target.style.color = '#000'}
        onMouseLeave={e => e.target.style.color = '#888'}
      >← Back</button>

      {/* Content */}
      <div style={{ padding: '300px 80px 80px 360px' }}>
        {/* Project image placeholder */}
        <div style={{
          width: '100%',
          maxWidth: 900,
          aspectRatio: '4 / 3',
          background: '#f7f7f7',
          marginBottom: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ width: '30%', height: '30%', background: '#e8e8e8', borderRadius: 2 }} />
        </div>

        {/* Project info */}
        <div style={{ maxWidth: 600 }}>
          <h1 style={{
            fontSize: 28,
            fontWeight: 300,
            color: '#333',
            letterSpacing: '0.02em',
            marginBottom: 16,
          }}>{project.title}</h1>
          <table style={{ lineHeight: '28px', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ width: 120, color: '#aaa', paddingRight: 40 }}>Category</td>
                <td>{project.cat}</td>
              </tr>
              <tr>
                <td style={{ color: '#aaa', paddingRight: 40 }}>Year</td>
                <td>{project.year}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Prev | Next */}
        <div style={{
          marginTop: 80,
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          fontSize: 14,
          color: '#aaa',
        }}>
          <span
            onClick={() => prev && navigate(`/project/${prev.id}`)}
            style={{ cursor: prev ? 'pointer' : 'default', opacity: prev ? 1 : 0.3 }}
            onMouseEnter={e => prev && (e.target.style.color = '#000')}
            onMouseLeave={e => (e.target.style.color = '#aaa')}
          >Prev</span>
          <span style={{ color: '#ccc' }}>|</span>
          <span
            onClick={() => next && navigate(`/project/${next.id}`)}
            style={{ cursor: next ? 'pointer' : 'default', opacity: next ? 1 : 0.3 }}
            onMouseEnter={e => next && (e.target.style.color = '#000')}
            onMouseLeave={e => (e.target.style.color = '#aaa')}
          >Next</span>
        </div>
      </div>
    </div>
  )
}
