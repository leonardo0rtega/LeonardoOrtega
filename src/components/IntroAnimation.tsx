import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useApp } from '../context/AppContext.tsx'

interface IntroAnimationProps {
  onComplete: () => void
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const { t } = useApp()
  const [step, setStep] = useState(0)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    if (shouldReduce) {
      onComplete()
      return
    }
    const timers: number[] = []
    timers.push(window.setTimeout(() => setStep(1), 300))
    timers.push(window.setTimeout(() => setStep(2), 900))
    timers.push(window.setTimeout(() => setStep(3), 1700))
    timers.push(window.setTimeout(() => setStep(4), 2600))
    timers.push(
      window.setTimeout(() => {
        onComplete()
      }, 4800),
    )
    return () => timers.forEach(clearTimeout)
  }, [onComplete, shouldReduce])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
        aria-hidden="true"
      >
        {step >= 1 && (
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeOpacity="0.15"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        )}

        {step >= 2 && (
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={i}
                cx={20 + i * 15 + '%'}
                cy={30 + (i % 2) * 30 + '%'}
                r="4"
                fill="var(--accent)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <motion.line
                key={`line-${i}`}
                x1={22 + i * 15 + '%'}
                y1={31 + (i % 2) * 30 + '%'}
                x2={35 + i * 15 + '%'}
                y2={31 + ((i + 1) % 2) * 30 + '%'}
                stroke="var(--accent-2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              />
            ))}
          </svg>
        )}

        <div className="relative z-10 flex flex-col items-center gap-6">
          {step >= 3 && (
            <div className="flex gap-4 text-xs font-mono uppercase tracking-widest text-secondary">
              {[
                t('intro.title1'),
                t('intro.title2'),
                t('intro.title3'),
                t('intro.title4'),
              ].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          )}

          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h1 className="text-6xl font-bold tracking-tight text-primary md:text-8xl">{t('intro.name')}</h1>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent md:text-sm">
                {t('intro.tagline')}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
