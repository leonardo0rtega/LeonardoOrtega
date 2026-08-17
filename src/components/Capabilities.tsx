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

        {/* Grid Editorial de 6 Áreas de Especialización (3 columnas en desktop, 2 en tablet, 1 en móvil) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
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
                {/* Número grande de fondo con baja opacidad */}
                <div className="pointer-events-none absolute -right-3 -top-6 select-none font-mono text-8xl font-black text-primary/5 transition-all duration-300 group-hover:text-accent/15 group-hover:scale-105">
                  {item.number}
                </div>

                <div>
                  {/* Header de la tarjeta */}
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-accent">
                        {item.number}
                      </span>
                      <span className="h-px w-6 bg-accent/40" />
                    </div>

                    <div className="flex items-center gap-2">
                      {isFeatured && (
                        <span className="border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-accent">
                          {t('expertise.item6.badge')}
                        </span>
                      )}
                      <div className="flex h-9 w-9 items-center justify-center border border-[var(--border)] bg-bg text-accent transition-transform duration-300 group-hover:scale-110 group-hover:border-accent">
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Título claro */}
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-primary transition-colors group-hover:text-accent sm:text-2xl">
                    {t(`expertise.${item.id}.title`)}
                  </h3>

                  {/* Explicación concisa y humana */}
                  <p className="mt-3.5 text-sm leading-relaxed text-secondary transition-colors group-hover:text-primary sm:text-base">
                    {t(`expertise.${item.id}.desc`)}
                  </p>
                </div>

                {/* Conceptos clave relacionados */}
                <div className="mt-8 border-t border-[var(--border)] pt-5">
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center gap-1.5 border border-[var(--border)] bg-bg px-3 py-1 font-mono text-xs text-secondary transition-all group-hover:border-accent/40 group-hover:text-primary"
                      >
                        <span className="text-accent">→</span>
                        <span>{t(`expertise.${item.id}.c${cIdx}`)}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
