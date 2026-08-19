import { motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
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

        {/* Masthead de la empresa */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="mt-16"
        >
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-b border-[var(--border)] pb-8">
            <div>
              <div className="flex items-center gap-2.5">
                <BriefcaseBusiness size={16} className="text-accent" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-secondary">
                  {experience.period}
                </span>
              </div>

              <h3 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl">
                {experience.company}
              </h3>
            </div>

            <div className="flex items-center gap-3 pb-1">
              <span className="hidden h-px w-10 bg-accent sm:block" />
              <p className="max-w-xs font-mono text-xs font-semibold uppercase leading-relaxed tracking-[0.15em] text-accent">
                {experience.role}
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-4xl text-xl leading-relaxed text-secondary sm:text-2xl sm:leading-relaxed">
            {experience.intro}
          </p>
        </motion.div>

        {/* Fases con regla vertical continua */}
        <div className="relative mt-20 border-l border-[var(--border)] pl-8 sm:pl-12 md:mt-24">
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
