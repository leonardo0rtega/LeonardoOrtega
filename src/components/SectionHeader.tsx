import { motion } from 'framer-motion'
import { fadeUp, lineRevealX } from '../lib/motion'

interface SectionHeaderProps {
  micro: string
  title: string
  subtitle?: string
  titleId?: string
  highlightWord?: string
}

export default function SectionHeader({
  micro,
  title,
  subtitle,
  titleId,
  highlightWord,
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

  return (
    <div className="w-full">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <span className="flex h-7 w-7 items-center justify-center bg-primary font-mono text-[11px] font-bold text-bg">
          {index}
        </span>
        <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-secondary">
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

      <motion.h2
        id={titleId}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.08}
        className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]"
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
          className="mt-5 max-w-md text-base leading-relaxed text-secondary"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
