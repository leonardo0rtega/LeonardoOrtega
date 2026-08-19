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
      className="relative border-b border-[var(--border)] bg-surface px-6 py-20 md:py-28"
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
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between overflow-hidden border border-[var(--border)] bg-bg p-7 sm:p-8 transition-all duration-300 hover:border-accent/70 hover:bg-surface-2 hover:shadow-lg hover:shadow-accent/5"
              >
                <div>
                  <div className="flex items-start justify-between border-b border-[var(--border)] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-bold text-accent">{item.number}</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-secondary">
                        {t(`skills.${item.id}.label`)}
                      </span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-surface text-accent transition-transform duration-300 group-hover:scale-110 group-hover:border-accent">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-primary sm:text-2xl">
                    {t(`skills.${item.id}.title`)}
                  </h3>
                  <p className="mt-3.5 text-sm leading-relaxed text-secondary sm:text-base">
                    {t(`skills.${item.id}.description`)}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
