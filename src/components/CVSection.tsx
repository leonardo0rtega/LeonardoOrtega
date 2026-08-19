import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Expand, X } from 'lucide-react'
import { useApp } from '../context/AppContext.tsx'
import { site } from '../config/site'
import SectionHeader from './SectionHeader'

export default function CVSection() {
  const { t } = useApp()
  const [open, setOpen] = useState(false)

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
    <section id="cv" className="relative overflow-hidden border-b border-[var(--border)] bg-surface px-6 py-20 md:py-24" aria-labelledby="cv-title">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader micro={t('cv.micro')} title={t('cv.title')} titleId="cv-title" />

        <div className="mt-8 grid items-center gap-6 border border-[var(--border)] bg-bg p-5 md:p-6 lg:grid-cols-[1fr_240px]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-xl text-sm leading-relaxed text-secondary"
            >
              {t('cv.text')}
            </motion.p>

            <motion.a
              href={site.cv}
              download
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 inline-flex items-center gap-2 border border-accent bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2"
            >
              <Download size={16} />
              {t('cv.download')}
            </motion.a>
          </div>

          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            aria-label={t('cv.button')}
            className="group relative block w-full overflow-hidden border border-[var(--border)] bg-surface-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <img
              src={site.cv}
              alt={t('cv.previewAlt')}
              loading="lazy"
              decoding="async"
              className="h-[220px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--bg)] to-transparent" />
            <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 border border-accent/40 bg-bg/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur-sm">
              <Expand size={10} />
              {t('cv.preview')}
            </span>
          </motion.button>
        </div>
      </div>

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
