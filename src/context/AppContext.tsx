import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'
type Language = 'es' | 'en'

interface AppContextValue {
  theme: Theme
  language: Language
  toggleTheme: () => void
  toggleLanguage: () => void
  t: (key: string) => string
}

const AppContext = createContext<AppContextValue | null>(null)

import { translations } from '../translations'

const STORAGE_KEY = 'leo-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyThemeToDom(next: Theme) {
  if (next === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem(STORAGE_KEY, next)
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    applyThemeToDom(theme)
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
  }
  const toggleLanguage = () => setLanguage((l) => (l === 'es' ? 'en' : 'es'))

  const t = (key: string) => {
    const dict = translations[language] as unknown as Record<string, string | string[]>
    const value = dict[key]
    if (Array.isArray(value)) return value.join('\n')
    return (value as string | undefined) ?? key
  }

  return (
    <AppContext.Provider value={{ theme, language, toggleTheme, toggleLanguage, t }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
