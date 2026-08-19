import { Mail } from 'lucide-react'
import { contact } from '../data/contact'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'

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

export default function Contact() {
  const { t } = useApp()

  const links = [
    {
      id: 'email',
      href: `mailto:${contact.email}`,
      icon: Mail,
      label: contact.email,
      external: false,
    },
    {
      id: 'instagram',
      href: contact.instagram,
      icon: InstagramIcon,
      label: '@leonxrdoxx',
      external: true,
    },
    {
      id: 'facebook',
      href: contact.facebook,
      icon: FacebookIcon,
      label: 'Facebook',
      external: true,
    },
  ].filter((l) => l.href)

  return (
    <section
      id="contact"
      className="relative border-t border-[var(--border)] bg-bg px-6 py-20 md:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          micro={t('contact.micro')}
          title={t('contact.title')}
          subtitle={t('contact.text')}
          titleId="contact-title"
        />

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-3 border border-[var(--border)] bg-surface px-6 py-4 font-mono text-sm text-primary transition-all hover:border-accent hover:text-accent shadow-sm"
              >
                <Icon size={18} className="text-accent transition-transform group-hover:scale-110" />
                <span>{link.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
