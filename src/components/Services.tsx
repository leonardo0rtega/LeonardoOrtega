import { motion } from 'framer-motion'
import { services } from '../data/services'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'
import { staggerContainer, staggerItem } from '../lib/motion'

export default function Services() {
  const { t } = useApp()
  const featured = services.filter((s) => s.featured)
  const others = services.filter((s) => !s.featured)

  return (
    <section
      id="services"
      className="relative border-b border-[var(--border)] bg-surface px-6 py-20 md:py-28"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          micro={t('services.micro')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          titleId="services-title"
        />

        {/* Servicios Principales / Destacados */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {featured.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between border border-[var(--border)] bg-bg p-8 transition-all duration-200 hover:border-accent/70 hover:shadow-lg hover:shadow-accent/5"
              >
                <div>
                  <div className="flex items-start justify-between border-b border-[var(--border)] pb-4">
                    <span className="font-mono text-sm font-bold text-accent">
                      {service.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-surface text-accent transition-transform group-hover:scale-110 group-hover:border-accent">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-primary sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-secondary transition-colors group-hover:text-primary">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--border)] bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary transition-colors group-hover:border-accent/40 group-hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Otros Servicios Estratégicos */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {others.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between border border-[var(--border)] bg-bg p-6 transition-all duration-200 hover:border-accent/70 hover:shadow-lg hover:shadow-accent/5"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="font-mono text-xs font-bold text-accent">
                      {service.number}
                    </span>
                    <Icon size={18} className="text-accent transition-transform group-hover:scale-110" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-primary">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-secondary transition-colors group-hover:text-primary sm:text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--border)] bg-surface px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-secondary transition-colors group-hover:border-accent/40 group-hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
