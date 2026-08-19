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

          <div className="lg:col-span-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="h-full border border-[var(--border)] bg-surface p-8 sm:p-10"
            >
              <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {t('about.concepts.title')}
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {conceptKeys.map((key, i) => {
                  const Icon = conceptIcons[i]
                  return (
                    <motion.div
                      key={key}
                      variants={staggerItem}
                      whileHover={{ y: -3 }}
                      className="group flex items-start gap-3 border border-[var(--border)] bg-bg p-5 transition-all duration-300 hover:border-accent/70 hover:bg-surface-2"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--border)] bg-surface text-accent transition-colors group-hover:border-accent/70">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] font-bold text-secondary">0{i + 1}</span>
                        <p className="mt-0.5 text-sm font-semibold leading-tight text-primary sm:text-base">
                          {t(key)}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
