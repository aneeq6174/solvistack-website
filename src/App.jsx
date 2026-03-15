import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { FloatingButtons } from './components/ui/FloatingButtons'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { Scene } from './components/3d/Scene'
import { HomePage } from './pages/HomePage'
import { ROUTES } from './constants/sections'

function App() {
  return (
    <SmoothScroll>
      <Scene />
      <BrowserRouter>
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </SmoothScroll>
  )
}

export default App
