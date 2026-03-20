import { Routes, Route } from 'react-router-dom'
import './App.css'
import FukasawaMockup from './mockups/FukasawaMockup'
import KanghePage from './mockups/KanghePage'
import EuroairePage from './mockups/EuroairePage'
import GoldenrootPage from './mockups/GoldenrootPage'
import MatatakitoyoPage from './mockups/MatatakitoyoPage'
import ThreeMPage from './mockups/ThreeMPage'
import AiKwangPage from './mockups/AiKwangPage'
import GemTerminalPage from './mockups/GemTerminalPage'
import ProjectPage from './mockups/ProjectPage'
import MinimalMockup from './mockups/MinimalMockup'
import BoldMockup from './mockups/BoldMockup'
import CreativeMockup from './mockups/CreativeMockup'
import CorporateMockup from './mockups/CorporateMockup'
import ChainSafelyPage from './mockups/ChainSafelyPage'

export default function App() {
  return (
    <div className="app">
      <main className="mockup-frame">
        <Routes>
          <Route path="/" element={<FukasawaMockup />} />
          <Route path="/project/kanghe" element={<KanghePage />} />
          <Route path="/project/euroaire" element={<EuroairePage />} />
          <Route path="/project/goldenroot" element={<GoldenrootPage />} />
          <Route path="/project/matatakitoyo" element={<MatatakitoyoPage />} />
          <Route path="/project/3m" element={<ThreeMPage />} />
          <Route path="/project/aikwang" element={<AiKwangPage />} />
          <Route path="/project/gemterminal" element={<GemTerminalPage />} />
          <Route path="/project/chainsafely" element={<ChainSafelyPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/minimal" element={<MinimalMockup />} />
          <Route path="/bold" element={<BoldMockup />} />
          <Route path="/creative" element={<CreativeMockup />} />
          <Route path="/corporate" element={<CorporateMockup />} />
        </Routes>
      </main>
    </div>
  )
}
