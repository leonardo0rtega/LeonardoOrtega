import { motion } from 'framer-motion'
import { services } from '../data/services'
import { useApp } from '../context/AppContext.tsx'
import SectionShell from './SectionShell'
import { staggerContainer, staggerItem } from '../lib/motion'

export default function Services() {
  const { t } = useApp()

  return (
    <SectionShell
      id="services"
      micro={t('services.micro')}
      title={t('services.title')}
      subtitle={t('services.subtitle')}
      titleId="services-title"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5"
      >
        {services.map((service) => {
          const Icon = service.icon
          return (
            <motion.article
              key={service.id}
              variants={staggerItem}
              className="group relative flex flex-col border border-[var(--border)] bg-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-surface sm:p-6"
            >
              <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] pb-4 transition-colors duration-300 group-hover:border-accent/30">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--border)] text-primary transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                  <Icon size={18} />
                </span>
                <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-secondary/70 transition-colors duration-300 group-hover:text-accent">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-5 font-display text-base font-semibold leading-tight tracking-tight text-primary sm:text-lg">
                {service.title}
              </h3>

              <p className="mt-3 text-[13px] leading-relaxed text-secondary">
                {service.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-2 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-secondary transition-colors duration-300 group-hover:text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </SectionShell>
  )
}
