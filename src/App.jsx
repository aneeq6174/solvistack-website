import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { FloatingButtons } from './components/ui/FloatingButtons'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ROUTES } from './constants/sections'

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  )
}

export default App
