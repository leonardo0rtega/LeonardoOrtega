import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext.tsx'
import SectionShell from './SectionShell'
import { fadeUp, staggerContainer, staggerItem } from '../lib/motion'
import { Handshake, TrendingUp, Fingerprint, Globe, BrainCircuit } from 'lucide-react'

const conceptKeys = ['about.concept1', 'about.concept2', 'about.concept3', 'about.concept4', 'about.concept5']
const conceptIcons = [Handshake, TrendingUp, Fingerprint, Globe, BrainCircuit]

export default function About() {
  const { t } = useApp()

  return (
    <SectionShell
      id="about"
      micro={t('about.micro')}
      title={t('about.title')}
      highlightWord={t('about.highlight')}
      titleId="about-title"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.15}
        className="space-y-6 text-xl leading-relaxed text-secondary sm:text-2xl sm:leading-relaxed"
      >
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
      </motion.div>

      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.1}
        className="mt-16 font-mono text-xs font-bold uppercase tracking-[0.3em] text-secondary"
      >
        {t('about.concepts.title')}
      </motion.h3>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 grid grid-cols-1 border-t border-[var(--border)] sm:grid-cols-2"
      >
        {conceptKeys.map((key, i) => {
          const Icon = conceptIcons[i]
          return (
            <motion.div
              key={key}
              variants={staggerItem}
              className="group flex items-center gap-5 border-b border-[var(--border)] py-6 transition-colors duration-300 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
            >
              <span className="font-mono text-[10px] font-bold text-secondary transition-colors duration-300 group-hover:text-accent">
                0{i + 1}
              </span>
              <Icon
                size={20}
                className="shrink-0 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
              />
              <p className="font-display text-lg font-semibold leading-tight text-primary">
                {t(key)}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionShell>
  )
}
