import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useApp } from '../context/AppContext.tsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, language, theme, toggleLanguage, toggleTheme } = useApp()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.capabilities'), href: '#capabilities' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.cv'), href: '#cv' },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-black/5 dark:border-white/5 bg-surface/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5" aria-label="Navegación principal">
        <a href="#hero" className="font-display text-2xl font-semibold italic tracking-tight text-primary" aria-label={t('nav.home')}>
          Leo<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium text-secondary xl:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-accent transition-colors focus:outline-none focus-visible:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            aria-label={t('nav.language')}
            className="flex h-9 min-w-[3.25rem] items-center justify-center gap-1 rounded border border-[var(--border)] px-2 text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <span className={`font-mono text-xs ${language === 'es' ? 'text-accent' : 'text-secondary'}`}>ES</span>
            <span className="text-secondary/50">/</span>
            <span className={`font-mono text-xs ${language === 'en' ? 'text-accent' : 'text-secondary'}`}>EN</span>
          </button>

          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('nav.themeToLight') : t('nav.themeToDark')}
            className="flex h-9 w-9 items-center justify-center rounded border border-[var(--border)] text-primary transition-colors hover:border-accent hover:text-accent"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="ml-1 text-primary xl:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-black/5 dark:border-white/5 bg-surface xl:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6 text-sm text-secondary">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
