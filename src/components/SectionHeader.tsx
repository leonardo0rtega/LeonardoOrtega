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
        <span key={i} className="text-accent underline decoration-accent/30 decoration-2 underline-offset-8">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute -left-1 -top-6 select-none font-mono text-[5rem] font-bold leading-none text-primary/[0.04] sm:-top-8 sm:text-[7rem] md:-top-10 md:text-[9rem]">
        {index}
      </span>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative flex items-center gap-3"
      >
        <span className="font-mono text-[11px] font-bold tracking-wider text-accent">
          {index}
        </span>
        <span className="h-3 w-px bg-[var(--border)]" />
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
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
        className="relative mt-7 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-[4rem]"
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
          className="relative mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
