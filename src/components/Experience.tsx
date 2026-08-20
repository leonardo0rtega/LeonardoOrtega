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
      layout="split"
      headerSpan={4}
      sticky
      micro={t('experience.micro')}
      title={t('experience.title')}
      titleId="experience-title"
      aside={
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.12}
          className="border-l-2 border-accent bg-surface py-5 pl-5 pr-4"
        >
          <div className="flex items-center gap-2.5">
            <BriefcaseBusiness size={15} className="text-accent" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">
              {experience.period}
            </span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-3xl">
            {experience.company}
          </h3>

          <p className="mt-3 font-mono text-[11px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-accent">
            {experience.role}
          </p>
        </motion.div>
      }
    >
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.15}
        className="border-b border-[var(--border)] pb-8 text-base leading-relaxed text-secondary sm:text-lg sm:leading-relaxed"
      >
        {experience.intro}
      </motion.p>

      <div className="mt-8 grid grid-cols-1 border-l border-t border-[var(--border)] sm:grid-cols-2">
        {experience.items.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 + i * 0.07, duration: 0.5 }}
            className="group relative flex flex-col border-b border-r border-[var(--border)] p-6 transition-colors duration-300 hover:bg-surface sm:p-7"
          >
            <span className="pointer-events-none absolute left-0 top-0 h-0.5 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />

            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] font-bold text-accent">{item.number}</span>
              <h4 className="font-display text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                {item.title}
              </h4>
            </div>

            <p className="mt-3 text-[15px] leading-relaxed text-secondary">{item.description}</p>

            <div className="mt-auto flex flex-wrap gap-x-2 gap-y-2 pt-6">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--border)] px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-secondary transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
