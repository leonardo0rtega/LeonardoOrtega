import { motion } from 'framer-motion'
import { fadeUp, lineRevealX } from '../lib/motion'

interface SectionHeaderProps {
  micro: string
  title: string
  subtitle?: string
  titleId?: string
  highlightWord?: string
  variant?: 'column' | 'row'
}

export default function SectionHeader({
  micro,
  title,
  subtitle,
  titleId,
  highlightWord,
  variant = 'column',
}: SectionHeaderProps) {
  const [index, name] = micro.split('/').map((part) => part.trim())

  const renderTitle = () => {
    if (!highlightWord) return title

    const parts = title.split(new RegExp(`(${highlightWord})`, 'gi'))
    return parts.map((part, i) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={i} className="font-display italic text-accent">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  const eyebrow = (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex items-center gap-3"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-primary font-mono text-[10px] font-bold text-bg">
        {index}
      </span>
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-secondary">
        {name}
      </span>
      <motion.span
        variants={lineRevealX}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.15}
        className="h-px flex-1 bg-[var(--border)]"
      />
    </motion.div>
  )

  if (variant === 'row') {
    return (
      <div className="w-full">
        {eyebrow}

        <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <motion.h2
            id={titleId}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.08}
            className="max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-primary sm:text-4xl lg:text-[2.6rem]"
          >
            {renderTitle()}
          </motion.h2>

          {subtitle && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              className="max-w-sm border-l border-accent/40 pl-4 text-sm leading-relaxed text-secondary lg:pb-1"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {eyebrow}

      <motion.h2
        id={titleId}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.08}
        className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-primary sm:text-4xl lg:text-[2.6rem]"
      >
        {renderTitle()}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="mt-4 max-w-md text-base leading-relaxed text-secondary"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
