import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const blue     = '#182987'
const blueLight= '#2CA6E0'
const bluePale = '#EEF4FB'
const blueMid  = '#1E3BA0'
const text     = '#1a1a2e'
const textMid  = '#5a6070'
const textLight= '#9197AB'
const border   = '#dde5f0'
const bg       = '#ffffff'
const bgLight  = '#f5f8fd'
const font     = '"Helvetica Neue", Helvetica, Arial, sans-serif'

// Real images from aquatherm-ppr.com
const IMG_BANNER1 = 'https://www.aquatherm-ppr.com/_i/assets/upload/bannersub/ae8332cfac3b4cb5f307949af39b32a5.jpg'
const IMG_BANNER2 = 'https://www.aquatherm-ppr.com/_i/assets/upload/bannersub/156d2f34ab5575a58526a76e3ab45e51.jpg'
const IMG_NEWS1   = 'https://www.aquatherm-ppr.com/_i/assets/upload/news/5eb51cd86dd95f7478245914e7c3ea66.jpg'
const IMG_NEWS2   = 'https://www.aquatherm-ppr.com/_i/assets/upload/news/6dcc3dad13e6a3b97b0e36c451bf5e61.png'
const IMG_NEWS3   = 'https://www.aquatherm-ppr.com/_i/assets/upload/news/b7248ff3939c269c35a9a8a35052528b.png'

const STATS = [
  { num: '40+', label: '年品牌歷史\nYears of Heritage' },
  { num: '70+', label: '國家認證銷售\nCountries Worldwide' },
  { num: '200+', label: '台灣機構案例\nProjects in Taiwan' },
]

const PROJECTS = [
  { name: '彰化基督教醫院', en: 'Changhua Christian Hospital', type: '醫療院所' },
  { name: '台中榮民總醫院', en: 'Taichung Veterans General Hospital', type: '醫療院所' },
  { name: '高雄海軍醫院', en: 'Kaohsiung Naval Hospital', type: '軍方設施' },
  { name: '國立體育大學', en: 'Taiwan Sport University', type: '教育機構' },
]

const NEWS_ITEMS = [
  {
    img: IMG_NEWS1,
    tag: '展覽',
    date: '2025.10.13',
    title: '2025 國際冷凍空調綠能科技展',
    en: '2025 International Cold Chain & Green Energy Technology Exhibition',
    desc: '10/14～10/16 展覽圓滿落幕。感謝所有來訪貴賓的支持與參與，我們期待明年再相聚。',
  },
  {
    img: IMG_NEWS2,
    tag: '認證',
    date: '2021.07.19',
    title: '品質優良認證',
    en: 'Quality Excellence Certification',
    desc: '康赫國際榮獲品質優良認證，持續為台灣各項重大工程提供最高品質的PPR管材系統。',
  },
  {
    img: IMG_NEWS3,
    tag: '公告',
    date: '2021.07.19',
    title: '形象官網正式上線',
    en: 'Official Website Launch',
    desc: '新站正式啟用！全新品牌形象官網正式上線，提供更完整的產品資訊與工程案例查詢服務。',
  },
]

export default function KanghePage() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div style={{ minHeight: '100vh', background: bg, fontFamily: font, color: text, overflowX: 'hidden', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; }
        .kh-link { transition: color 0.15s; cursor: pointer; }
        .kh-link:hover { color: ${blue} !important; }
        .kh-news-card { transition: box-shadow 0.2s, transform 0.18s; cursor: pointer; }
        .kh-news-card:hover { box-shadow: 0 8px 32px rgba(24,41,135,0.12) !important; transform: translateY(-3px); }
        .kh-faq-row { transition: background 0.15s; cursor: pointer; }
        .kh-faq-row:hover { background: ${bluePale} !important; }
        .kh-proj-row { transition: background 0.15s; }
        .kh-proj-row:hover { background: ${bluePale} !important; }
        @media (max-width: 900px) {
          .kh-hero-cols { flex-direction: column !important; }
          .kh-hero-logo { width: 240px !important; }
          .kh-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .kh-why-grid { grid-template-columns: 1fr 1fr !important; }
          .kh-news-grid { grid-template-columns: 1fr !important; }
          .kh-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .kh-hero-h1 { font-size: 36px !important; }
        }
        @media (max-width: 600px) {
          .kh-stats-grid { grid-template-columns: 1fr !important; }
          .kh-why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 4vw, 3rem)', height: 58,
      }}>
        <img src="/logos/kanghe-aquatherm-logo.svg" alt="Kanghe Aquatherm" style={{ height: 32, width: 'auto' }} />
        <div style={{ display: 'flex', gap: 28, fontSize: 13, color: textMid }}>
          {['產品介紹', '實績案例', '最新消息', '聯絡我們'].map(l => (
            <span key={l} className="kh-link" style={{ fontWeight: 400 }}>{l}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span className="kh-link" onClick={() => navigate('/')} style={{ fontSize: 13, color: textMid }}>← Back</span>
          <button
            style={{ background: blue, color: '#fff', border: 'none', borderRadius: 5, padding: '8px 18px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.background = blueMid}
            onMouseLeave={e => e.currentTarget.style.background = blue}
          >立即詢價</button>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{
        background: `linear-gradient(135deg, ${blue} 0%, #0f1f6e 50%, #0a155a 100%)`,
        padding: 'clamp(4rem, 10vh, 7rem) clamp(1.5rem, 5vw, 3.5rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* diagonal stripe decoration */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', background: `linear-gradient(135deg, transparent 40%, rgba(44,166,224,0.12) 100%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 300, height: 300, borderRadius: '50%', background: 'rgba(44,166,224,0.08)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          {/* Logo */}
          <div style={{ marginBottom: 40 }}>
            <img
              src="/logos/kanghe-aquatherm-logo.svg"
              alt="Kanghe Aquatherm"
              className="kh-hero-logo"
              style={{ width: 320, height: 'auto', filter: 'brightness(0) invert(1)' }}
            />
          </div>

          <div className="kh-hero-cols" style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
            {/* Left: text */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: blueLight, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20 }}>
                德國闊盛 Aquatherm — 台灣總代理
              </div>
              <h1 className="kh-hero-h1" style={{
                fontSize: 'clamp(36px, 5.5vw, 68px)',
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: '-2px', color: '#fff',
                marginBottom: 24,
              }}>
                全世界銷售最大<br />
                <span style={{ color: blueLight }}>PPR管材品牌</span>
              </h1>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: 480, marginBottom: 40 }}>
                德國Aquatherm公司為全世界PPR管材的創始者，從1973年至今已有逾40年以上歷史。
                本公司專業經營PPR管銷售、教學、顧問服務。
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button
                  style={{ background: blueLight, color: '#fff', border: 'none', borderRadius: 5, padding: '13px 30px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#1f8fc8'}
                  onMouseLeave={e => e.currentTarget.style.background = blueLight}
                >聯絡我們</button>
                <button
                  style={{ background: 'transparent', color: 'rgba(255,255,255,0.85)', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 5, padding: '13px 30px', fontSize: 15, fontWeight: 400, cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                >了解更多</button>
              </div>
            </div>

            {/* Right: hero image */}
            <div style={{ width: 'clamp(260px, 35vw, 480px)', flexShrink: 0 }}>
              <img
                src={IMG_BANNER1}
                alt="Aquatherm PPR"
                style={{ width: '100%', borderRadius: 10, display: 'block', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
                onError={e => e.currentTarget.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ background: bg, borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="kh-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 2.5rem)',
                borderRight: i < 2 ? `1px solid ${border}` : 'none',
              }}>
                <div style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 900, color: blue, lineHeight: 1, letterSpacing: '-2px', marginBottom: 10 }}>{s.num}</div>
                <p style={{ fontSize: 13, color: textMid, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPANY INTRO ══ */}
      <section style={{ background: bgLight, padding: 'clamp(4rem, 9vh, 6.5rem) clamp(1.5rem, 5vw, 3.5rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: blueLight, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 18 }}>品牌介紹 · Brand</div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1.5px', color: text, marginBottom: 24 }}>
              世界頂級<br />PPR管材系統
            </h2>
            <p style={{ fontSize: 15, color: textMid, lineHeight: 1.9, marginBottom: 20 }}>
              德國Aquatherm公司創立於1973年，是全球PPR管材的創始者與最大銷售品牌，
              在全球70個以上國家取得認證並銷售。
            </p>
            <p style={{ fontSize: 15, color: textMid, lineHeight: 1.9, marginBottom: 32 }}>
              康赫國際有限公司為台灣獨家代理商，專業提供PPR管材銷售、工程顧問及施工教學服務，
              服務領域涵蓋HVAC系統、冷熱水系統、氣體系統及廢水處理。
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['NSF/ANSI 61', 'ISO 15874', 'WRAS', 'CE Marked'].map(cert => (
                <span key={cert} style={{
                  background: bluePale, color: blue,
                  border: `1px solid ${blueLight}33`,
                  borderRadius: 4, padding: '5px 12px',
                  fontSize: 12, fontWeight: 600,
                }}>{cert}</span>
              ))}
            </div>
          </div>
          <div>
            <img
              src={IMG_BANNER2}
              alt="Aquatherm Installation"
              style={{ width: '100%', borderRadius: 10, display: 'block', boxShadow: `0 16px 48px rgba(24,41,135,0.14)` }}
              onError={e => e.currentTarget.style.display = 'none'}
            />
          </div>
        </div>
      </section>

      {/* ══ WHY ══ */}
      <section style={{ background: bg, padding: 'clamp(4rem, 9vh, 6.5rem) clamp(1.5rem, 5vw, 3.5rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: blueLight, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16 }}>為什麼選擇 Aquatherm</div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', fontWeight: 900, letterSpacing: '-1.5px', color: text }}>德國品質，永久接合</h2>
          </div>
          <div className="kh-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { icon: '🔗', title: '熱熔接合', en: 'Fusion Welded', desc: '熱熔焊接產生比管材本身更強的接合，無螺紋、無腐蝕、永久密封。' },
              { icon: '🏥', title: 'NSF-61認證', en: 'Potable Water', desc: 'NSF/ANSI 61飲用水認證，BPA-free，適用醫療與食品等高標準場所。' },
              { icon: '⚙️', title: '現場技術支援', en: 'On-Site Support', desc: '康赫工程師親赴重要施工現場，提供即時技術指導及系統認證文件。' },
              { icon: '🌍', title: '全球認證', en: 'Global Standard', desc: '在70個以上國家取得認證，符合ISO 15874、WRAS、CE等國際標準。' },
            ].map((f, i) => (
              <div key={i} style={{ background: bgLight, border: `1px solid ${border}`, borderRadius: 10, padding: '28px 22px' }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                <div style={{ width: 24, height: 3, background: blueLight, marginBottom: 14, borderRadius: 2 }} />
                <h3 style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 4 }}>{f.title}</h3>
                <p style={{ fontSize: 11, color: blueLight, fontWeight: 600, marginBottom: 10, letterSpacing: '0.04em' }}>{f.en}</p>
                <p style={{ fontSize: 12, color: textMid, lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section style={{ background: blue, padding: 'clamp(4rem, 9vh, 6.5rem) clamp(1.5rem, 5vw, 3.5rem)', borderBottom: `1px solid rgba(255,255,255,0.1)` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: blueLight, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 18 }}>實績案例 · Projects</div>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', fontWeight: 900, letterSpacing: '-1.5px', color: '#fff', marginBottom: 48 }}>
            台灣重大工程實績
          </h2>
          <div style={{ borderTop: `1px solid rgba(255,255,255,0.12)` }}>
            {PROJECTS.map((p, i) => (
              <div key={i} className="kh-proj-row" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '22px 16px',
                borderBottom: `1px solid rgba(255,255,255,0.12)`,
                borderRadius: 4,
              }}>
                <div>
                  <span style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginRight: 16 }}>{p.name}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{p.en}</span>
                </div>
                <span style={{ fontSize: 11, color: blueLight, fontWeight: 700, letterSpacing: '0.08em', background: 'rgba(44,166,224,0.15)', padding: '4px 12px', borderRadius: 100 }}>{p.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NEWS ══ */}
      <section style={{ background: bgLight, padding: 'clamp(4rem, 9vh, 6.5rem) clamp(1.5rem, 5vw, 3.5rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: blueLight, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16 }}>最新消息 · News</div>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-1px', color: text }}>近期動態</h2>
            </div>
            <span style={{ fontSize: 13, color: blue, fontWeight: 600, cursor: 'pointer' }}>查看全部 →</span>
          </div>
          <div className="kh-news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {NEWS_ITEMS.map((n, i) => (
              <div key={i} className="kh-news-card" style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', background: bluePale, overflow: 'hidden' }}>
                  <img src={n.img} alt={n.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={e => { e.currentTarget.parentElement.style.background = bluePale }}
                  />
                </div>
                <div style={{ padding: '22px 20px 24px' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: blueLight, letterSpacing: '0.1em', textTransform: 'uppercase', background: `${blueLight}18`, padding: '3px 9px', borderRadius: 100 }}>{n.tag}</span>
                    <span style={{ fontSize: 11, color: textLight }}>{n.date}</span>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: text, marginBottom: 6, lineHeight: 1.4 }}>{n.title}</h3>
                  <p style={{ fontSize: 11, color: blueLight, marginBottom: 10 }}>{n.en}</p>
                  <p style={{ fontSize: 13, color: textMid, lineHeight: 1.75 }}>{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section style={{ background: bg, padding: 'clamp(4rem, 9vh, 6.5rem) clamp(1.5rem, 5vw, 3.5rem)', borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: blueLight, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 18 }}>常見問題</div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, letterSpacing: '-1px', color: text, marginBottom: 48 }}>FAQ</h2>
          {[
            { q: 'Aquatherm PPR管與一般塑膠管有何不同？', a: 'Aquatherm使用德國原料，採用熱熔接合工藝，接頭強度超越管材本身，無須螺紋、黏著劑，接頭終身不漏水，且BPA-free符合飲用水衛生標準。' },
            { q: '康赫是否提供施工指導？', a: '是的，康赫國際提供完整施工教學與現場技術支援，並於工程完成後核發Aquatherm系統認證書。' },
            { q: '適用哪些工程類型？', a: '適用範圍涵蓋HVAC系統、冷熱水系統、氣體管路、廢水處理及工業製程用水，廣泛應用於醫療、政府、教育及工業廠房等場所。' },
            { q: '有哪些國際認證？', a: 'Aquatherm產品通過NSF/ANSI 61（飲用水）、ISO 15874（PPR管材）、WRAS（英國水資源）及CE歐盟認證，在70個以上國家合法銷售。' },
            { q: '如何取得報價？', a: '請提供工程圖說、管徑規格及使用系統類型，聯絡康赫國際（04-7261626），我們將提供完整BOM表及報價。' },
          ].map((f, i) => (
            <div key={i} className="kh-faq-row"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{ borderBottom: `1px solid ${border}`, padding: '20px 12px', borderRadius: 4 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: text, lineHeight: 1.4 }}>{f.q}</p>
                <span style={{
                  fontSize: 20, color: openFaq === i ? blue : textLight, flexShrink: 0,
                  display: 'inline-block', transform: openFaq === i ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.2s, color 0.2s',
                }}>+</span>
              </div>
              {openFaq === i && (
                <p style={{ fontSize: 13, color: textMid, lineHeight: 1.85, paddingTop: 12 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section style={{ background: `linear-gradient(135deg, ${blue} 0%, #0a155a 100%)`, padding: 'clamp(4rem, 9vh, 6.5rem) clamp(1.5rem, 5vw, 3.5rem)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', color: '#fff', marginBottom: 16 }}>
              準備開始您的<br /><span style={{ color: blueLight }}>工程專案</span>了嗎？
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              彰化縣彰化市平安街278巷15號 · 04-7261626
            </p>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button
              style={{ background: blueLight, color: '#fff', border: 'none', borderRadius: 5, padding: '14px 32px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1f8fc8'}
              onMouseLeave={e => e.currentTarget.style.background = blueLight}
            >立即詢價</button>
            <button
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.8)', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 5, padding: '14px 32px', fontSize: 15, fontWeight: 400, cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
            >下載產品型錄</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0a0f2e', borderTop: `1px solid rgba(255,255,255,0.08)`, padding: 'clamp(2.5rem, 5vh, 4rem) clamp(1.5rem, 5vw, 3.5rem)' }}>
        <div className="kh-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <img src="/logos/kanghe-aquatherm-logo.svg" alt="Kanghe Aquatherm" style={{ height: 28, width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: 18, opacity: 0.85 }} />
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, maxWidth: 240 }}>
              康赫國際有限公司<br />
              500彰化縣彰化市平安街278巷15號<br />
              Tel: 04-7261626
            </p>
          </div>
          {[
            { heading: '產品介紹', links: ['Fusiotherm®', 'Climatherm', 'Green Pipe', '管件配件'] },
            { heading: '服務範圍', links: ['HVAC系統', '冷熱水系統', '氣體管路', '廢水處理'] },
            { heading: '關於我們', links: ['公司簡介', '品牌介紹', '實績案例', '聯絡我們'] },
          ].map(col => (
            <div key={col.heading}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>{col.heading}</p>
              {col.links.map(l => (
                <p key={l} className="kh-link" style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 2.8, cursor: 'pointer' }}>{l}</p>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
          <span>Copyright © 2026 康赫國際有限公司 All Rights Reserved. · Made with Worldedit Design</span>
          <span onClick={() => navigate('/')} style={{ cursor: 'pointer', color: blueLight, opacity: 0.7 }}>← Back to Directory</span>
        </div>
      </footer>
    </div>
  )
}
