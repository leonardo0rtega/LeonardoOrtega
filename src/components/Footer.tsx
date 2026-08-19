import { contact } from '../data/contact.ts'
import { useApp } from '../context/AppContext.tsx'

const InstagramIcon = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const FacebookIcon = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

export default function Footer() {
  const { t } = useApp()
  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.capabilities'), href: '#capabilities' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.cv'), href: '#cv' },
  ]
  const socials = [
    { id: 'instagram', href: contact.instagram, icon: InstagramIcon, label: 'Instagram' },
    { id: 'facebook', href: contact.facebook, icon: FacebookIcon, label: 'Facebook' },
  ].filter((s) => s.href)

  return (
    <footer className="border-t border-[var(--border)] bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl">
              {t('footer.ctaTitle')}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-secondary">
              {t('footer.ctaDescription')}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="group mt-8 inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-primary transition-transform hover:-translate-y-0.5"
            >
              {t('footer.ctaButton')}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-6">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-secondary">
                {t('footer.navLabel')}
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-xs font-medium uppercase tracking-wide text-primary transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-secondary">
                {t('footer.emailLabel')}
              </h3>
              <a
                href={`mailto:${contact.email}`}
                className="mt-3 inline-block text-xs font-medium text-primary underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {contact.email}
              </a>

              {socials.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-secondary">
                    {t('footer.socialLabel')}
                  </h3>
                  <div className="mt-3 flex items-center gap-3">
                    {socials.map((s) => {
                      const Icon = s.icon
                      return (
                        <a
                          key={s.id}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-secondary transition-all hover:border-accent hover:text-accent"
                        >
                          <Icon size={18} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-4 md:flex-row md:items-center">
          <a href="#hero" className="font-display text-xl font-semibold italic tracking-tight text-primary">
            Leo<span className="text-accent">.</span>
          </a>
          <p className="text-xs text-secondary">{t('footer.copyright')}</p>
          <a
            href="#hero"
            className="text-xs font-mono font-bold uppercase tracking-widest text-secondary transition-colors hover:text-accent"
          >
            {t('nav.home')}
          </a>
        </div>
      </div>
    </footer>
  )
}
