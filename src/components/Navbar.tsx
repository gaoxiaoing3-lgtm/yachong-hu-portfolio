import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: '首页', path: '/' },
    { name: '作品集', path: '/portfolio' },
    { name: '关于我', path: '/about' },
    { name: '联系', path: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-200"
    >
      <div className="container-custom section-padding !py-0">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-ink-900 flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-base font-display font-semibold text-ink-900">胡亚崇</span>
              <span className="hidden sm:inline text-ink-400 text-sm ml-2">AIGC动画师</span>
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
                    ? 'text-ink-900'
                    : 'text-ink-500 hover:text-ink-900'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-ink-900 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA — desktop */}
          <a
            href="mailto:contact@example.com"
            className="hidden md:inline-flex items-center px-5 py-2 bg-ink-900 text-white text-sm rounded-full hover:bg-ink-700 transition-colors font-medium"
          >
            合作接洽
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-100 transition-colors"
            aria-label="菜单"
          >
            {isOpen ? <X className="w-5 h-5 text-ink-700" /> : <Menu className="w-5 h-5 text-ink-700" />}
          </button>
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
              <div className="pt-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-ink-900 text-white'
                        : 'text-ink-600 hover:bg-surface-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="mailto:contact@example.com"
                  className="block px-4 py-3 bg-ink-900 text-white text-sm rounded-xl text-center font-medium mt-2"
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
