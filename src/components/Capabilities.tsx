import { motion } from 'framer-motion'
import { expertiseItems } from '../data/capabilities'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'
import { staggerContainer, staggerItem } from '../lib/motion'

export default function Capabilities() {
  const { t } = useApp()

  return (
    <section
      id="capabilities"
      className="relative border-b border-[var(--border)] bg-bg px-6 py-20 md:py-28"
      aria-labelledby="expertise-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          micro={t('expertise.micro')}
          title={t('expertise.title')}
          subtitle={t('expertise.subtitle')}
          titleId="expertise-title"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {expertiseItems.map((item) => {
            const Icon = item.icon
            const isFeatured = item.featured
            return (
              <motion.article
                key={item.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className={`group relative flex flex-col justify-between overflow-hidden border p-7 sm:p-8 transition-all duration-300 ${
                  isFeatured
                    ? 'border-accent/80 bg-surface shadow-lg shadow-accent/5 hover:border-accent'
                    : 'border-[var(--border)] bg-surface hover:border-accent/60 hover:bg-surface-2 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between border-b border-[var(--border)] pb-4">
                    <span className="font-mono text-sm font-bold text-accent">{item.number}</span>
                    {isFeatured && (
                      <span className="border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-accent">
                        {t('expertise.ai.badge')}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-bg text-accent transition-transform duration-300 group-hover:scale-110 group-hover:border-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
                      {t(`expertise.${item.id}.title`)}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                    {t(`expertise.${item.id}.desc`)}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
