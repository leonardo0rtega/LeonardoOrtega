import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { contact } from '../data/contact.ts'
import { useApp } from '../context/AppContext.tsx'
import SectionShell from './SectionShell'
import { fadeUp } from '../lib/motion'

export default function Contact() {
  const { t } = useApp()

  return (
    <SectionShell
      id="contact"
      layout="stack"
      micro={t('contact.micro')}
      title={t('contact.title')}
      subtitle={t('contact.text')}
      titleId="contact-title"
    >
      {!contact.email ? (
        <p className="text-sm text-secondary">{t('contact.empty')}</p>
      ) : (
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          href={`mailto:${contact.email}`}
          className="group inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
        >
          {t('contact.cta')}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </motion.a>
      )}
    </SectionShell>
  )
}
