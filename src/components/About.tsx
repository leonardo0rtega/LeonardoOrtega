import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'
import { fadeUp, staggerContainer, staggerItem } from '../lib/motion'
import { Handshake, TrendingUp, Fingerprint, Globe, BrainCircuit } from 'lucide-react'

const conceptKeys = ['about.concept1', 'about.concept2', 'about.concept3', 'about.concept4', 'about.concept5']
const conceptIcons = [Handshake, TrendingUp, Fingerprint, Globe, BrainCircuit]

export default function About() {
  const { t } = useApp()

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[var(--border)] bg-bg px-6 py-24 md:py-32 lg:py-36"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeader
              micro={t('about.micro')}
              title={t('about.title')}
              highlightWord={t('about.highlight')}
              titleId="about-title"
            />
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-secondary sm:text-xl"
            >
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-secondary"
            >
              {t('about.concepts.title')}
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 border-t border-[var(--border)]"
            >
              {conceptKeys.map((key, i) => {
                const Icon = conceptIcons[i]
                return (
                  <motion.div
                    key={key}
                    variants={staggerItem}
                    className="group flex items-center gap-5 border-b border-[var(--border)] py-5 transition-colors duration-300"
                  >
                    <span className="font-mono text-[10px] font-bold text-secondary transition-colors duration-300 group-hover:text-accent">
                      0{i + 1}
                    </span>
                    <Icon
                      size={20}
                      className="shrink-0 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
                    />
                    <p className="text-lg font-semibold leading-tight text-primary">
                      {t(key)}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
