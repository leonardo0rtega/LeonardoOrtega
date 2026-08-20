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
        className="grid grid-cols-1 border-l border-t border-[var(--border)] md:grid-cols-2"
      >
        {skills.map((item) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.id}
              variants={staggerItem}
              className="group relative flex flex-col border-b border-r border-[var(--border)] p-6 transition-colors duration-300 hover:bg-bg sm:p-8 lg:p-10"
            >
              <span className="pointer-events-none absolute left-0 top-0 h-0.5 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />

              {/* Categoría a la izquierda y número decorativo a la derecha: nunca comparten posición con el icono */}
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                  {t(`skills.${item.id}.label`)}
                </span>
                <span
                  aria-hidden="true"
                  className="-mt-2 select-none font-display text-4xl font-semibold leading-none text-primary/[0.12] transition-colors duration-500 group-hover:text-accent/25 sm:text-5xl"
                >
                  {item.number}
                </span>
              </div>

              <span className="mt-5 flex h-10 w-10 items-center justify-center border border-[var(--border)] text-secondary transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                <Icon size={20} />
              </span>

              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-primary sm:text-[1.75rem]">
                {t(`skills.${item.id}.title`)}
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-secondary sm:text-base">
                {t(`skills.${item.id}.description`)}
              </p>

              <div className="mt-auto pt-6">
                <span className="block h-px w-8 bg-[var(--border)] transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-accent" />
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </SectionShell>
  )
}
