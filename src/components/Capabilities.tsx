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
      className="relative overflow-hidden border-b border-[var(--border)] bg-bg px-6 py-24 md:py-32 lg:py-36"
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
          className="mt-16 grid grid-cols-1 border-l border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {expertiseItems.map((item) => {
            const Icon = item.icon
            const isFeatured = item.featured
            return (
              <motion.article
                key={item.id}
                variants={staggerItem}
                className={`group relative flex flex-col border-b border-r border-[var(--border)] p-8 transition-colors duration-300 sm:p-10 ${
                  isFeatured ? 'bg-surface' : 'hover:bg-surface'
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-0.5 bg-accent transition-all duration-500 ease-out ${
                    isFeatured ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />

                <div className="flex items-start justify-between">
                  <Icon
                    size={26}
                    className={`transition-all duration-300 group-hover:scale-110 ${
                      isFeatured ? 'text-accent' : 'text-primary group-hover:text-accent'
                    }`}
                  />
                  <span className="font-mono text-xs font-bold text-secondary">{item.number}</span>
                </div>

                <h3 className="mt-14 text-xl font-bold leading-tight tracking-tight text-primary sm:text-2xl">
                  {t(`expertise.${item.id}.title`)}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                  {t(`expertise.${item.id}.desc`)}
                </p>

                {isFeatured && (
                  <span className="mt-5 w-fit font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    {t('expertise.ai.badge')}
                  </span>
                )}
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
