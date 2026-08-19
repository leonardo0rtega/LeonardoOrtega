import { motion } from 'framer-motion'
import { BriefcaseBusiness, Calendar } from 'lucide-react'
import { experience } from '../data/experience'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'
import { fadeUp } from '../lib/motion'

export default function Experience() {
  const { t } = useApp()

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-[var(--border)] bg-surface px-6 py-24 md:py-32 lg:py-36"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          micro={t('experience.micro')}
          title={t('experience.title')}
          titleId="experience-title"
        />

        {/* Encabezado de la empresa */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="mt-16 grid grid-cols-1 gap-8 border-t border-[var(--border)] pt-10 lg:grid-cols-12 lg:gap-12"
        >
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness size={22} className="text-accent" />
              <h3 className="font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                {experience.company}
              </h3>
            </div>
            <p className="mt-3 text-base font-semibold text-accent">{experience.role}</p>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-secondary">
              <Calendar size={14} className="text-accent" />
              <span>{experience.period}</span>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-secondary lg:col-span-7">
            {experience.intro}
          </p>
        </motion.div>

        {/* Fases con regla vertical continua */}
        <div className="relative mt-16 border-l border-[var(--border)] pl-8 sm:pl-12">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute -left-px bottom-0 top-0 w-px origin-top bg-accent/50"
          />

          <div className="space-y-14 md:space-y-16">
            {experience.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="group relative grid grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-12"
              >
                <span className="absolute -left-8 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150 sm:-left-12" />

                <div className="lg:col-span-4">
                  <span className="font-mono text-xs font-bold text-secondary">
                    {item.number}
                  </span>
                  <h4 className="mt-2 font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                    {item.title}
                  </h4>
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
                </div>

                <p className="text-base leading-relaxed text-secondary lg:col-span-8 lg:text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
