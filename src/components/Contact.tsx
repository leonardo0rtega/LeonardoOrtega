import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const { t } = useApp()

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--border)] bg-bg px-6 py-24 md:py-32 lg:py-36"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          micro={t('contact.micro')}
          title={t('contact.title')}
          subtitle={t('contact.text')}
          titleId="contact-title"
        />
      </div>
    </section>
  )
}
