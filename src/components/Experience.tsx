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

        {/* Bloque Corporativo Principal: Albeh Global */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="mt-12 border border-[var(--border)] bg-bg p-6 sm:p-8 md:p-10 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-accent/40 bg-surface text-accent">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
                  {experience.company}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-accent">
                  {experience.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 border border-[var(--border)] bg-surface px-3 py-1.5 font-mono text-xs text-secondary">
              <Calendar size={14} className="text-accent" />
              <span>{experience.period}</span>
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-relaxed text-secondary sm:text-lg">
            {experience.intro}
          </p>
        </motion.div>

        {/* Timeline Alternado Compacto */}
        <div className="relative mt-14 sm:mt-16">
          {/* Línea Central Continua */}
          <div className="absolute bottom-4 left-4 top-4 w-px bg-[var(--border)] md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute bottom-4 left-4 top-4 w-px origin-top bg-accent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-6 sm:space-y-8">
            {experience.items.map((item, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className={`relative flex flex-col pl-10 md:flex-row md:pl-0 ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Tarjeta de Experiencia con profundidad y microelementos */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`group relative w-full border border-[var(--border)] bg-bg p-6 transition-all duration-200 hover:border-accent/70 hover:bg-surface hover:shadow-lg hover:shadow-accent/5 md:w-[48%] ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
                      <span className="font-mono text-xs font-bold text-accent">
                        PHASE {item.number}
                      </span>
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                        {item.title}
                      </h4>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-secondary transition-colors group-hover:text-primary sm:text-base">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[var(--border)] bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary transition-colors group-hover:border-accent/40 group-hover:text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Nodo central animado */}
                  <div className="absolute left-4 top-7 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full border border-accent bg-bg shadow-sm shadow-accent/50 md:left-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
