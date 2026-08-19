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
      tone="surface"
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
        className="border-t border-[var(--border)]"
      >
        {services.map((service) => {
          const Icon = service.icon
          return (
            <motion.article
              key={service.id}
              variants={staggerItem}
              className="group relative flex flex-col gap-x-8 gap-y-4 border-b border-[var(--border)] py-8 sm:flex-row sm:items-start"
            >
              <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />

              <div className="flex shrink-0 items-center gap-4 sm:w-44">
                <span className="font-mono text-xs font-bold text-secondary transition-colors duration-300 group-hover:text-accent">
                  {service.number}
                </span>
                <Icon
                  size={22}
                  className="text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
                />
                <h3 className="font-display text-lg font-semibold leading-tight tracking-tight text-primary sm:text-xl">
                  {service.title}
                </h3>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-base leading-relaxed text-secondary">
                  {service.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary/70 transition-colors duration-300 group-hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </SectionShell>
  )
}
