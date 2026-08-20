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
      layout="split"
      headerSpan={7}
      micro={t('about.micro')}
      title={t('about.title')}
      highlightWord={t('about.highlight')}
      titleId="about-title"
      aside={
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="space-y-5 border-l border-accent/30 pl-6 text-base leading-relaxed text-secondary sm:text-lg sm:leading-relaxed"
        >
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </motion.div>
      }
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border border-[var(--border)] bg-surface p-6 sm:p-8 lg:h-full"
      >
        <motion.h3
          variants={staggerItem}
          className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-secondary"
        >
          {t('about.concepts.title')}
          <span className="h-px flex-1 bg-[var(--border)]" />
        </motion.h3>

        <div className="mt-6">
          {conceptKeys.map((key, i) => {
            const Icon = conceptIcons[i]
            return (
              <motion.div
                key={key}
                variants={staggerItem}
                className="group flex items-center gap-4 border-b border-[var(--border)] py-4 last:border-b-0"
              >
                <span className="font-mono text-[10px] font-bold text-secondary/70 transition-colors duration-300 group-hover:text-accent">
                  0{i + 1}
                </span>
                <Icon
                  size={18}
                  className="shrink-0 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
                />
                <p className="font-display text-lg font-semibold leading-tight text-primary">
                  {t(key)}
                </p>
                <span className="ml-auto h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-8" />
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </SectionShell>
  )
}
