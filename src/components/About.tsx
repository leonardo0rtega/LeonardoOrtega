import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'
import { fadeUp, staggerContainer, staggerItem } from '../lib/motion'

const conceptKeys = ['about.concept1', 'about.concept2', 'about.concept3', 'about.concept4', 'about.concept5']

export default function About() {
  const { t } = useApp()

  return (
    <section
      id="about"
      className="relative border-b border-[var(--border)] bg-bg px-6 py-20 md:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
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
              className="mt-8 space-y-5 border-l-2 border-accent/40 pl-6 text-base leading-relaxed text-secondary sm:text-lg"
            >
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </motion.div>
          </div>

          <div>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-primary"
            >
              {t('about.concepts.title')}
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {conceptKeys.map((key, i) => (
                <motion.span
                  key={key}
                  variants={staggerItem}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="group inline-flex items-center gap-2 border border-[var(--border)] bg-surface px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-secondary transition-all hover:border-accent hover:bg-surface-2 hover:text-primary"
                >
                  <span className="font-bold text-accent">0{i + 1}</span>
                  {t(key)}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
