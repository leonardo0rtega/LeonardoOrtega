import { motion } from 'framer-motion'
import { expertiseItems } from '../data/capabilities'
import { useApp } from '../context/AppContext.tsx'
import SectionShell from './SectionShell'
import { staggerContainer, staggerItem } from '../lib/motion'

export default function Capabilities() {
  const { t } = useApp()

  return (
    <SectionShell
      id="capabilities"
      tone="surface"
      micro={t('expertise.micro')}
      title={t('expertise.title')}
      subtitle={t('expertise.subtitle')}
      titleId="expertise-title"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 border-l border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-6"
      >
        {expertiseItems.map((item, i) => {
          const Icon = item.icon
          const isFeatured = item.featured
          // Primera fila: 01-02-03 (2 columnas cada una). Segunda fila: 04-05 (3 columnas cada una).
          const spanClass = i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'

          return (
            <motion.article
              key={item.id}
              variants={staggerItem}
              className={`group relative flex flex-col border-b border-r border-[var(--border)] p-6 transition-colors duration-300 sm:p-7 ${spanClass} ${
                isFeatured ? 'bg-bg' : 'hover:bg-bg'
              }`}
            >
              <span
                className={`absolute left-0 top-0 h-0.5 bg-accent transition-all duration-500 ease-out ${
                  isFeatured ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />

              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-bold text-accent">{item.number}</span>
                <span className="h-px w-5 bg-[var(--border)] transition-all duration-500 ease-out group-hover:w-8 group-hover:bg-accent" />
                <Icon
                  size={20}
                  className={`ml-auto shrink-0 transition-all duration-300 group-hover:scale-110 ${
                    isFeatured ? 'text-accent' : 'text-primary group-hover:text-accent'
                  }`}
                />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold leading-tight tracking-tight text-primary sm:text-xl">
                {t(`expertise.${item.id}.title`)}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-[15px]">
                {t(`expertise.${item.id}.desc`)}
              </p>

              {isFeatured && (
                <div className="mt-auto pt-5">
                  <span className="inline-block border border-accent/40 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                    {t('expertise.ai.badge')}
                  </span>
                </div>
              )}
            </motion.article>
          )
        })}

        {/* Celda de relleno para cerrar la retícula en 2 columnas */}
        <div className="hidden border-b border-r border-[var(--border)] sm:block lg:hidden" />
      </motion.div>
    </SectionShell>
  )
}
