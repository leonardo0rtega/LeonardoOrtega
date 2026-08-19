import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'
import { staggerContainer, staggerItem } from '../lib/motion'

export default function Skills() {
  const { t } = useApp()

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-[var(--border)] bg-surface px-6 py-24 md:py-32 lg:py-36"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          micro={t('skills.micro')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
          titleId="skills-title"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {skills.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.id}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden border border-[var(--border)] bg-bg p-7 sm:p-8 transition-all duration-300 hover:border-accent/70 hover:bg-surface-2 hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="pointer-events-none absolute -right-2 -top-4 font-mono text-7xl font-bold text-accent/5 sm:text-8xl">
                  {item.number}
                </span>

                <div className="relative z-10 flex items-start justify-between border-b border-[var(--border)] pb-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-3xl font-bold text-accent">{item.number}</span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-secondary">
                      {t(`skills.${item.id}.label`)}
                    </span>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-surface text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent/70">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="relative z-10 mt-6 text-xl font-bold tracking-tight text-primary sm:text-2xl">
                  {t(`skills.${item.id}.title`)}
                </h3>
                <p className="relative z-10 mt-3.5 text-sm leading-relaxed text-secondary sm:text-base">
                  {t(`skills.${item.id}.description`)}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
