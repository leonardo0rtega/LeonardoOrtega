import { motion } from 'framer-motion'
import { services } from '../data/services'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'
import { staggerContainer, staggerItem } from '../lib/motion'

export default function Services() {
  const { t } = useApp()

  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-[var(--border)] bg-surface px-6 py-24 md:py-32 lg:py-36"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          micro={t('services.micro')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          titleId="services-title"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 border-l border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className="group relative flex flex-col justify-between border-b border-r border-[var(--border)] bg-bg p-8 transition-colors duration-300 hover:bg-surface-2 sm:p-10"
              >
                <span className="absolute left-0 top-0 h-0.5 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />

                <div>
                  <div className="flex items-start justify-between">
                    <Icon
                      size={26}
                      className="text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-accent"
                    />
                    <span className="font-mono text-xs font-bold text-secondary">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-14 font-display text-xl font-semibold leading-tight tracking-tight text-primary sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary/70 transition-colors duration-300 group-hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}

          <div className="hidden border-b border-r border-[var(--border)] lg:block" />
        </motion.div>
      </div>
    </section>
  )
}
