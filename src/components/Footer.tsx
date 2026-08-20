import { contact } from '../data/contact.ts'
import { useApp } from '../context/AppContext.tsx'
import { FacebookIcon, InstagramIcon } from './icons/SocialIcons'

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
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.contact'), href: '#contact' },
  ]
  const socials = [
    { id: 'instagram', href: contact.instagram, icon: InstagramIcon, label: 'Instagram' },
    { id: 'facebook', href: contact.facebook, icon: FacebookIcon, label: 'Facebook' },
  ].filter((s) => s.href)

  return (
    <footer className="bg-surface px-6 py-12 md:py-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <a
              href="#hero"
              className="font-display text-2xl font-semibold italic tracking-tight text-primary"
            >
              Leo<span className="text-accent">.</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
              {t('footer.navLabel')}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
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

          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
              {t('footer.emailLabel')}
            </h3>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 inline-block break-all text-xs font-medium text-primary underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {contact.email}
            </a>

            {socials.length > 0 && (
              <div className="mt-6">
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
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
                        className="flex h-9 w-9 items-center justify-center border border-[var(--border)] text-secondary transition-all hover:border-accent hover:text-accent"
                      >
                        <Icon size={16} />
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center">
          <p className="text-xs text-secondary">{t('footer.copyright')}</p>
          <a
            href="#hero"
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary transition-colors hover:text-accent"
          >
            {t('nav.home')}
          </a>
        </div>
      </div>
    </footer>
  )
}
