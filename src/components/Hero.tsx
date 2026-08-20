import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Target, Palette, BrainCircuit } from 'lucide-react'
import { useApp } from '../context/AppContext.tsx'
import { site } from '../config/site'

const tagIcons = [Target, TrendingUp, Palette, BrainCircuit]

export default function Hero() {
  const { t } = useApp()
  const tags = t('hero.tags')
    .split(',')
    .map((tag) => tag.trim())

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--border)] bg-bg px-6 pb-12 pt-28 md:pb-14 md:pt-32"
      aria-label={t('nav.home')}
    >
      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
        <div className="z-10 flex flex-col gap-7 lg:col-span-7">
          <span className="inline-flex w-fit items-center gap-2 border border-[var(--border)] bg-surface px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
            <TrendingUp size={14} className="text-accent" />
            {t('hero.micro')}
          </span>

          <div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-5 h-1.5 w-16 origin-left bg-accent"
            />
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-primary sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]"
            >
              Leonardo Emmanuel
              <br />
              <span className="italic text-accent">Ortega Nava</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-xl font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm"
            >
              {t('hero.role')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-2 max-w-xl text-base font-medium leading-snug text-secondary sm:text-lg"
            >
              {t('hero.h2')}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl whitespace-pre-line text-base leading-relaxed text-secondary"
          >
            {t('hero.text')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
            >
              {t('hero.cta.cv')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[var(--border)] bg-surface px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
            >
              {t('hero.cta.contact')}
            </a>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative z-10 flex justify-center lg:col-span-5 lg:justify-end"
        >
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden border border-[var(--border)] bg-surface-2 sm:max-w-[360px] lg:max-w-none">
            <motion.img
              src={site.photo}
              alt={site.name}
              loading="eager"
              decoding="async"
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className="h-full w-full object-cover object-top grayscale-[15%] contrast-[1.05]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60" />

            <div className="pointer-events-none absolute left-4 top-4 border-l-2 border-accent bg-bg/70 pl-2 pr-2 font-mono text-[10px] text-accent backdrop-blur-sm">
              MARKETING / SALES / AI / BUSINESS
            </div>

            <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 bg-bg/70 px-2 py-1 font-mono text-[10px] text-secondary backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent" />
              ACTIVE
            </div>

            <div className="pointer-events-none absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-accent" />
            <div className="pointer-events-none absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-accent" />
          </div>
        </motion.div>
        </div>

        {/* Banda de áreas a ancho completo: conecta el hero con el resto de la página */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 grid grid-cols-2 border-t border-[var(--border)] sm:grid-cols-4 md:mt-14"
        >
          {tags.map((tag, i) => {
            const Icon = tagIcons[i] ?? Target
            return (
              <div
                key={tag}
                className="group flex items-center gap-3 border-b border-[var(--border)] py-5 pr-4 sm:border-b-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-6"
              >
                <Icon
                  size={16}
                  className="shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
                />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-secondary transition-colors duration-300 group-hover:text-primary sm:text-[11px]">
                  {tag}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
