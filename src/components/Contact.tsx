import { Mail, Phone, Linkedin } from 'lucide-react'
import { contact } from '../data/contact'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const { t } = useApp()
  return (
    <section
      id="contact"
      className="relative bg-bg px-6 py-20 md:py-28"
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
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-3 border border-[var(--border)] bg-surface px-6 py-4 font-mono text-sm text-primary transition-all hover:border-accent hover:text-accent shadow-sm"
            >
              <Mail size={18} className="text-accent transition-transform group-hover:scale-110" />
              <span>{contact.email}</span>
            </a>
          )}
          {contact.whatsapp && (
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-[var(--border)] bg-surface px-6 py-4 font-mono text-sm text-primary transition-all hover:border-accent hover:text-accent shadow-sm"
            >
              <Phone size={18} className="text-accent transition-transform group-hover:scale-110" />
              <span>WhatsApp</span>
            </a>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-[var(--border)] bg-surface px-6 py-4 font-mono text-sm text-primary transition-all hover:border-accent hover:text-accent shadow-sm"
            >
              <Linkedin size={18} className="text-accent transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>

        {!contact.email && !contact.whatsapp && !contact.linkedin && (
          <div className="mt-10 border border-[var(--border)] bg-surface p-8 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <p className="font-mono text-xs uppercase tracking-wider text-secondary">
                {t('contact.empty')}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
