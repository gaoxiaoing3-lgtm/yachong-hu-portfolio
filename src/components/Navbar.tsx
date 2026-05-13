import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navItems = [
    { name: '首页', path: '/' },
    { name: '作品集', path: '/portfolio' },
    { name: '关于我', path: '/about' },
    { name: '联系', path: '/contact' },
    { name: '心法面板', path: '/wudi' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 theme-navbar ${isHome ? 'border-b-0 bg-transparent backdrop-blur-none' : 'bg-white/90 backdrop-blur-md border-b border-surface-200'}`}
    >
      <div className="container-custom section-padding !py-0">
        <div
          className={`flex items-center justify-between ${isHome ? 'studio-glass-nav studio-glow-line mx-auto mt-5 h-auto max-w-6xl rounded-[1.75rem] px-5 py-4' : 'h-16'}`}
        >

          {/* Logo */}
          <Link to="/" className="group">
            <div className="px-1 py-1 transition-transform duration-200 group-hover:-translate-y-0.5">
              <img
                src="/logo-wordmark.svg"
                alt="HUYACHONG"
                className="logo-adaptive h-7 w-auto sm:h-8"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === item.path
                    ? isHome
                      ? 'text-white'
                      : 'text-ink-900'
                    : isHome
                      ? 'text-white/70 hover:text-white'
                      : 'text-ink-500 hover:text-ink-900'
                } font-ui`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                      isHome ? 'bg-white/80' : 'bg-ink-900'
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:contact@example.com"
              className={`hidden md:inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition-colors font-ui ${
                isHome
                  ? 'border border-white/14 bg-white/8 text-white hover:bg-white/12'
                  : 'bg-ink-900 text-white hover:bg-ink-700'
              }`}
            >
              合作接洽
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isHome ? 'hover:bg-white/8' : 'hover:bg-surface-100'
              }`}
              aria-label="菜单"
            >
              {isOpen ? (
                <X className={`w-5 h-5 ${isHome ? 'text-white' : 'text-ink-700'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isHome ? 'text-white' : 'text-ink-700'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden pb-4"
            >
              <div
                className={`pt-3 space-y-1 ${
                  isHome
                    ? 'rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,33,0.74)_0%,rgba(12,18,28,0.64)_100%)] p-3 backdrop-blur-2xl'
                    : ''
                }`}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors font-ui ${
                      location.pathname === item.path
                        ? isHome
                          ? 'bg-white/12 text-white'
                          : 'bg-ink-900 text-white'
                        : isHome
                          ? 'text-white/76 hover:bg-white/8'
                          : 'text-ink-600 hover:bg-surface-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="mailto:contact@example.com"
                  className={`block px-4 py-3 text-sm rounded-xl text-center font-medium mt-2 ${
                    isHome
                      ? 'border border-white/12 bg-white/8 text-white'
                      : 'bg-ink-900 text-white'
                  }`}
                >
                  合作接洽
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
