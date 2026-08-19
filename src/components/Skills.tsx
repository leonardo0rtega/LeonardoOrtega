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
          className="mt-16 border-t border-[var(--border)]"
        >
          {skills.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.id}
                variants={staggerItem}
                className="group relative grid grid-cols-1 items-start gap-x-8 gap-y-4 border-b border-[var(--border)] py-8 transition-colors duration-300 hover:bg-bg md:grid-cols-12 md:py-10"
              >
                <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />

                <div className="flex items-center gap-4 md:col-span-1">
                  <span className="font-mono text-sm font-bold text-secondary transition-colors duration-300 group-hover:text-accent">
                    {item.number}
                  </span>
                  <Icon
                    size={18}
                    className="text-secondary transition-colors duration-300 group-hover:text-accent md:hidden"
                  />
                </div>

                <div className="md:col-span-5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    {t(`skills.${item.id}.label`)}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">
                    {t(`skills.${item.id}.title`)}
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-secondary md:col-span-5">
                  {t(`skills.${item.id}.description`)}
                </p>

                <div className="hidden md:col-span-1 md:flex md:justify-end">
                  <Icon
                    size={22}
                    className="text-secondary/40 transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
                  />
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
