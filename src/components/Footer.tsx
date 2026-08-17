import { Github, Linkedin } from 'lucide-react'
import { contact } from '../data/contact.ts'
import { useApp } from '../context/AppContext.tsx'

export default function Footer() {
  const { t } = useApp()
  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.contact'), href: `mailto:${contact.email}` },
  ]
  const socials = [
    { id: 'github', icon: Github, href: contact.github, label: 'GitHub' },
    { id: 'linkedin', icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
  ].filter((s) => s.href)

  return (
    <footer className="border-t border-[var(--border)] bg-surface px-6 py-10 md:py-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* CTA */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              {t('footer.ctaTitle')}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-secondary">
              {t('footer.ctaDescription')}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-6 inline-flex items-center rounded-full border border-[var(--border)] bg-surface px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-widest text-primary transition-all hover:border-accent hover:text-accent"
            >
              {t('footer.ctaButton')}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-6">
            {/* Navigation */}
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

            {/* Contact / Social */}
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
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-secondary transition-all hover:border-accent hover:text-accent"
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
          <a href="#hero" className="text-xl font-bold tracking-tight text-primary">
            LEO.
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
