import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { useApp } from '../context/AppContext.tsx'

const items = [
  { id: 'q1', question: 'faq.q1', answer: 'faq.a1' },
  { id: 'q2', question: 'faq.q2', answer: 'faq.a2' },
  { id: 'q3', question: 'faq.q3', answer: 'faq.a3' },
  { id: 'q4', question: 'faq.q4', answer: 'faq.a4' },
]

export default function FAQ() {
  const { t } = useApp()
  const [openId, setOpenId] = useState<string | null>(null)
  const [index, label] = t('faq.micro')
    .split('/')
    .map((part) => part.trim())

  return (
    <section
      id="faq"
      className="relative border-b border-[var(--border)] bg-bg px-6 py-16 md:py-20 lg:py-24"
      aria-labelledby="faq-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="font-mono text-[11px] font-bold text-secondary/70">{index}</span>
          <span className="h-px w-8 bg-[var(--border)]" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            {label}
          </span>
        </div>

        <h2
          id="faq-title"
          className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-4xl lg:text-5xl"
        >
          {t('faq.title')}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-secondary">
          {t('faq.subtitle')}
        </p>
      </motion.div>

      <div className="mx-auto mt-12 max-w-3xl border-t border-[var(--border)] md:mt-14">
        {items.map((item) => {
          const isOpen = openId === item.id

          return (
            <div key={item.id} className="border-b border-[var(--border)]">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="group flex w-full items-center gap-5 py-6 text-left focus:outline-none focus-visible:text-accent"
                >
                  <span
                    className={`min-w-0 flex-1 font-display text-lg font-semibold leading-snug tracking-tight transition-colors duration-300 sm:text-xl ${
                      isOpen ? 'text-accent' : 'text-primary group-hover:text-accent'
                    }`}
                  >
                    {t(item.question)}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? 'border-accent text-accent'
                        : 'border-[var(--border)] text-secondary group-hover:border-accent group-hover:text-accent'
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 pr-14 text-[15px] leading-relaxed text-secondary">
                      {t(item.answer)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
