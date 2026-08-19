import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { useApp } from '../context/AppContext.tsx'
import SectionShell from './SectionShell'
import { staggerContainer, staggerItem } from '../lib/motion'

export default function Skills() {
  const { t } = useApp()

  return (
    <SectionShell
      id="skills"
      tone="surface"
      micro={t('skills.micro')}
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
      titleId="skills-title"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t border-[var(--border)]"
      >
        {skills.map((item) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.id}
              variants={staggerItem}
              className="group relative border-b border-[var(--border)] py-8 md:py-10"
            >
              <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />

              <div className="flex items-start gap-5 sm:gap-8">
                <div className="flex shrink-0 items-center gap-4 pt-1">
                  <span className="font-mono text-sm font-bold text-secondary transition-colors duration-300 group-hover:text-accent">
                    {item.number}
                  </span>
                  <Icon
                    size={22}
                    className="text-secondary transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
                  />
                </div>

                <div className="min-w-0">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    {t(`skills.${item.id}.label`)}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-primary sm:text-3xl">
                    {t(`skills.${item.id}.title`)}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
                    {t(`skills.${item.id}.description`)}
                  </p>
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </SectionShell>
  )
}
