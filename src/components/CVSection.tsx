import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Download, Expand, X } from 'lucide-react'
import { useApp } from '../context/AppContext.tsx'
import { site } from '../config/site'

export default function CVSection() {
  const { t } = useApp()
  const [open, setOpen] = useState(false)
  const [index, label] = t('cv.micro')
    .split('/')
    .map((part) => part.trim())

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section
      id="cv"
      className="relative border-b border-[var(--border)] bg-surface px-6 py-14 md:py-16"
      aria-labelledby="cv-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[1400px] border border-[var(--border)] bg-bg"
      >
        <div className="grid items-center gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_auto_200px] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-primary font-mono text-[10px] font-bold text-bg">
                {index}
              </span>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-secondary">
                {label}
              </span>
            </div>

            <h2
              id="cv-title"
              className="mt-4 max-w-xl font-display text-2xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-3xl lg:text-[2.25rem]"
            >
              {t('cv.title')}
            </h2>

            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-secondary">
              {t('cv.text')}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
            >
              {t('cv.button')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={site.cv}
              download
              className="inline-flex items-center justify-center gap-2 border border-[var(--border)] px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
            >
              <Download size={16} />
              {t('cv.download')}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t('cv.button')}
            className="group relative hidden overflow-hidden border border-[var(--border)] bg-surface-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:block"
          >
            <img
              src={site.cv}
              alt={t('cv.previewAlt')}
              loading="lazy"
              decoding="async"
              className="h-[150px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-1.5 border border-accent/40 bg-bg/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-accent backdrop-blur-sm">
              <Expand size={10} />
              {t('cv.preview')}
            </span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={t('cv.button')}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {site.name}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={site.cv}
                    download
                    className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    <Download size={14} />
                    {t('cv.download')}
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label={t('cv.close')}
                    className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <img
                src={site.cv}
                alt={t('cv.previewAlt')}
                className="w-full border border-white/10 bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
