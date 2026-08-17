import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Target, Palette, FolderKanban } from 'lucide-react'
import { useApp } from '../context/AppContext.tsx'
import { site } from '../config/site'

const specs = [
  { key: 'hero.spec.role', value: 'hero.spec.roleValue' },
  { key: 'hero.spec.focus', value: 'hero.spec.focusValue' },
  { key: 'hero.spec.location', value: 'hero.spec.locationValue' },
  { key: 'hero.spec.status', value: 'hero.spec.statusValue' },
]

export default function Hero() {
  const { t } = useApp()
  const tags = t('hero.tags').split(',')

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden border-b border-[var(--border)] bg-bg px-6 pb-20 pt-28 md:pb-24 md:pt-36"
      aria-label={t('nav.home')}
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[55%_45%] lg:items-center lg:gap-16">
        <div className="z-10 flex flex-col gap-8">
          <span className="inline-flex w-fit items-center gap-2 border border-[var(--border)] bg-surface px-3 py-1 font-mono text-xs uppercase tracking-widest text-secondary">
            <TrendingUp size={14} className="text-accent" />
            {t('hero.micro')}
          </span>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-primary md:text-7xl"
            >
              Leonardo Emmauel
              <br />
              Ortega Nava
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-xl font-medium text-accent-2 md:text-2xl"
            >
              {t('hero.h2').split(' y ')[0]}
              <br className="md:hidden" /> y {t('hero.h2').split(' y ')[1]}
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
              href="#services"
              className="inline-flex items-center gap-2 border border-[var(--border)] bg-surface px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
            >
              {t('hero.cta.services')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2 pt-2"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 border border-[var(--border)] bg-surface px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-secondary"
              >
                {tag === 'ESTRATEGIA' && <Target size={12} className="text-accent" />}
                {tag === 'CONVERSION' && <TrendingUp size={12} className="text-accent" />}
                {tag === 'BRANDING' && <Palette size={12} className="text-accent" />}
                {tag === 'PROJECT MANAGEMENT' && <FolderKanban size={12} className="text-accent" />}
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
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden border border-[var(--border)] bg-surface-2 lg:max-w-[420px]">
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

      <motion.dl
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mx-auto mt-14 grid max-w-[1400px] grid-cols-2 border border-[var(--border)] bg-surface md:grid-cols-4"
      >
        {specs.map((spec, i) => (
          <div
            key={spec.key}
            className={`border-[var(--border)] px-5 py-5 ${
              i < 2 ? 'border-b md:border-b-0' : ''
            } ${i % 2 === 0 ? 'border-r' : ''} ${
              i < specs.length - 1 ? 'md:border-r' : 'md:border-r-0'
            }`}
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
              {t(spec.key)}
            </dt>
            <dd className="mt-2 font-mono text-sm font-semibold text-primary">
              {t(spec.value)}
            </dd>
          </div>
        ))}
      </motion.dl>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[var(--border)]" />
    </section>
  )
}
