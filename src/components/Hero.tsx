import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Target, Palette, BrainCircuit } from 'lucide-react'
import { useApp } from '../context/AppContext.tsx'
import { site } from '../config/site'


export default function Hero() {
  const { t } = useApp()
  const tags = t('hero.tags').split(',')

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden border-b border-[var(--border)] bg-bg px-6 pb-24 pt-32 md:pb-28 md:pt-40"
      aria-label={t('nav.home')}
    >
      <span className="pointer-events-none absolute -right-10 -top-16 select-none font-mono text-[13rem] font-bold leading-none text-primary/[0.03] sm:text-[18rem] md:-right-16 md:-top-24 md:text-[24rem]">
        L
      </span>

      <div className="relative mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[58%_42%] lg:items-center lg:gap-16">
        <div className="z-10 flex flex-col gap-9">
          <span className="inline-flex w-fit items-center gap-2 border border-[var(--border)] bg-surface px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            <TrendingUp size={14} className="text-accent" />
            {t('hero.micro')}
          </span>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold leading-[0.98] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Leonardo Emmanuel
              <br />
              Ortega Nava
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-xl text-xl font-bold leading-snug text-accent sm:text-2xl md:text-[1.75rem]"
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
            className="flex flex-wrap items-center gap-4"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 border border-[var(--border)] bg-surface px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-secondary"
              >
                {tag === 'RELACIONES PÚBLICAS' && <Target size={12} className="text-accent" />}
                {tag === 'VENTAS' && <TrendingUp size={12} className="text-accent" />}
                {tag === 'BRANDING' && <Palette size={12} className="text-accent" />}
                {tag === 'IA' && <BrainCircuit size={12} className="text-accent" />}
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative z-10 mt-4 flex justify-center lg:mt-0"
        >
          <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden border border-[var(--border)] bg-surface-2 lg:max-w-[440px]">
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

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[var(--border)]" />
    </section>
  )
}
