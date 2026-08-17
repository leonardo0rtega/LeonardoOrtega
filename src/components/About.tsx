import { motion } from 'framer-motion'
import {
  BrainCircuit,
  FolderKanban,
  Layers,
  Target,
  TrendingUp,
  Workflow,
} from 'lucide-react'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'
import { fadeUp, staggerContainer, staggerItem } from '../lib/motion'

const tags = [
  { label: 'MARKET RESEARCH', icon: Target },
  { label: 'BRAND STRATEGY', icon: Layers },
  { label: 'ARTIFICIAL INTELLIGENCE', icon: BrainCircuit },
  { label: 'SALES CONVERSION', icon: TrendingUp },
  { label: 'PROJECT MANAGEMENT', icon: FolderKanban },
  { label: 'CUSTOMER JOURNEY', icon: Workflow },
]

const focusPillars = [
  { id: 'pillar1', number: '01', icon: Target },
  { id: 'pillar2', number: '02', icon: Workflow },
  { id: 'pillar3', number: '03', icon: TrendingUp, featured: true },
]

export default function About() {
  const { t } = useApp()

  return (
    <section
      id="about"
      className="relative border-b border-[var(--border)] bg-bg px-6 py-20 md:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Grid de 12 columnas: 7 columnas izquierda (Perfil), 5 columnas derecha (Enfoque Profesional) */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* LADO IZQUIERDO: Editorial Profile (7 cols) */}
          <div className="flex flex-col lg:col-span-7">
            <SectionHeader
              micro={t('about.micro')}
              title={t('about.title')}
              highlightWord={t('about.highlight')}
              titleId="about-title"
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              className="mt-8 space-y-5 border-l-2 border-accent/40 pl-6 text-base leading-relaxed text-secondary sm:text-lg"
            >
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </motion.div>

            {/* Microetiquetas interactivas */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap gap-2.5"
            >
              {tags.map((tag) => {
                const Icon = tag.icon
                return (
                  <motion.div
                    key={tag.label}
                    variants={staggerItem}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="group flex cursor-default items-center gap-2 border border-[var(--border)] bg-surface px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-secondary transition-all hover:border-accent hover:bg-surface-2 hover:text-primary shadow-xs"
                  >
                    <Icon size={14} className="text-accent transition-transform group-hover:scale-110" />
                    <span>{tag.label}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* LADO DERECHO: Mi Enfoque Profesional — Resumen ejecutivo visual (5 cols) */}
          <div className="flex flex-col lg:col-span-5">
            {/* Encabezado del panel */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
            >
              <span className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-primary sm:text-base">
                {t('about.focus.title')}
              </span>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-secondary sm:text-base">
                {t('about.focus.subtitle')}
              </p>
            </motion.div>

            {/* 3 Pilares visuales, amplios y bien espaciados */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 space-y-5"
            >
              {focusPillars.map((pillar) => {
                const Icon = pillar.icon
                const isFeatured = pillar.featured

                return (
                  <motion.div
                    key={pillar.id}
                    variants={staggerItem}
                    whileHover={{ y: -3 }}
                    className={`group relative flex items-start gap-5 border p-6 transition-all duration-200 sm:p-7 ${
                      isFeatured
                        ? 'border-accent/70 bg-surface shadow-sm hover:border-accent'
                        : 'border-[var(--border)] bg-surface hover:border-accent/50 hover:bg-surface-2'
                    }`}
                  >
                    {/* Número grande */}
                    <span
                      className={`shrink-0 font-mono text-4xl font-black leading-none transition-colors sm:text-5xl ${
                        isFeatured ? 'text-accent' : 'text-primary/15 group-hover:text-accent/70'
                      }`}
                    >
                      {pillar.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-200 group-hover:scale-110 ${
                            isFeatured
                              ? 'border-accent bg-accent text-dark'
                              : 'border-[var(--border)] bg-bg text-accent group-hover:border-accent'
                          }`}
                        >
                          <Icon size={17} />
                        </div>
                        <h3 className="text-lg font-bold tracking-tight text-primary transition-colors group-hover:text-accent sm:text-xl">
                          {t(`about.focus.${pillar.id}.title`)}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-secondary transition-colors group-hover:text-primary">
                        {t(`about.focus.${pillar.id}.desc`)}
                      </p>

                      {/* Palabras clave */}
                      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-secondary">
                        <span>{t(`about.focus.${pillar.id}.k1`)}</span>
                        <span className="text-accent">/</span>
                        <span>{t(`about.focus.${pillar.id}.k2`)}</span>
                        <span className="text-accent">/</span>
                        <span>{t(`about.focus.${pillar.id}.k3`)}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
