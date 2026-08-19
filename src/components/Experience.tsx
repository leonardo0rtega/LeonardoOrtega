import { motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
import { experience } from '../data/experience'
import { useApp } from '../context/AppContext.tsx'
import SectionShell from './SectionShell'
import { fadeUp } from '../lib/motion'

export default function Experience() {
  const { t } = useApp()

  return (
    <SectionShell
      id="experience"
      tone="surface"
      micro={t('experience.micro')}
      title={t('experience.title')}
      titleId="experience-title"
    >
      {/* Masthead de la empresa */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.15}
      >
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5 border-b border-[var(--border)] pb-7">
          <div>
            <div className="flex items-center gap-2.5">
              <BriefcaseBusiness size={16} className="text-accent" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-secondary">
                {experience.period}
              </span>
            </div>

            <h3 className="mt-3 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-4xl md:text-5xl">
              {experience.company}
            </h3>
          </div>

          <div className="flex items-center gap-3 pb-1">
            <span className="hidden h-px w-8 bg-accent sm:block" />
            <p className="max-w-xs font-mono text-xs font-semibold uppercase leading-relaxed tracking-[0.15em] text-accent">
              {experience.role}
            </p>
          </div>
        </div>

        <p className="mt-8 text-lg leading-relaxed text-secondary sm:text-xl sm:leading-relaxed">
          {experience.intro}
        </p>
      </motion.div>

      {/* Fases con regla vertical continua */}
      <div className="relative mt-16 border-l border-[var(--border)] pl-8 sm:pl-10">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute -left-px bottom-0 top-0 w-px origin-top bg-accent/50"
        />

        <div className="space-y-12 md:space-y-14">
          {experience.items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="group relative"
            >
              <span className="absolute -left-8 top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150 sm:-left-10" />

              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs font-bold text-secondary">
                  {item.number}
                </span>
                <h4 className="font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                  {item.title}
                </h4>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary/70 transition-colors duration-300 group-hover:text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
