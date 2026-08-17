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
    <div className="w-full">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <span className="border border-accent/40 bg-surface-2 px-2.5 py-1 font-mono text-[11px] font-bold text-accent">
          {index}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-secondary">
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
        className="mt-6 max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[3.25rem]"
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
          className="mt-4 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
