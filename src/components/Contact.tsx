import { Mail } from 'lucide-react'
import { contact } from '../data/contact'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const { t } = useApp()

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

        <a
          href={`mailto:${contact.email}`}
          className="group mt-12 inline-flex w-full items-center gap-3 border border-[var(--border)] bg-surface px-6 py-4 font-mono text-sm text-primary transition-all hover:border-accent hover:text-accent shadow-sm sm:w-auto"
        >
          <Mail size={18} className="text-accent transition-transform group-hover:scale-110" />
          <span>{contact.email}</span>
        </a>
      </div>
    </section>
  )
}
