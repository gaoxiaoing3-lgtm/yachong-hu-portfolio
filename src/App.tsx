import type React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

type ExperienceMode = 'professional' | 'studio'

function AppShell() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [theme, setTheme] = useState<'day' | 'night'>('day')
  const [experienceMode, setExperienceMode] = useState<ExperienceMode>('professional')

  useEffect(() => {
    const saved = window.localStorage.getItem('site-theme')
    const initialTheme = saved === 'night' ? 'night' : 'day'
    setTheme(initialTheme)
    document.documentElement.dataset.theme = initialTheme

    const savedMode = window.localStorage.getItem('site-experience-mode')
    setExperienceMode(savedMode === 'studio' ? 'studio' : 'professional')
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'day' ? 'night' : 'day'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('site-theme', nextTheme)
  }

  const toggleExperienceMode = () => {
    const nextMode: ExperienceMode =
      experienceMode === 'professional' ? 'studio' : 'professional'
    setExperienceMode(nextMode)
    window.localStorage.setItem('site-experience-mode', nextMode)
  }

  return (
    <div className={`min-h-[100dvh] flex flex-col gradient-bg ${experienceMode === 'studio' ? 'studio-shell' : ''}`}>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        experienceMode={experienceMode}
        onToggleExperienceMode={toggleExperienceMode}
      />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex-grow"
        >
          <Routes>
            <Route path="/" element={<Home experienceMode={experienceMode} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      {!isHome && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  )
}

export default App
