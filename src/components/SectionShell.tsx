import type { ReactNode } from 'react'
import SectionHeader from './SectionHeader'

interface SectionShellProps {
  id: string
  micro: string
  title: string
  subtitle?: string
  titleId: string
  highlightWord?: string
  ariaLabelledBy?: string
  tone?: 'bg' | 'surface'
  children: ReactNode
}

export default function SectionShell({
  id,
  micro,
  title,
  subtitle,
  titleId,
  highlightWord,
  tone = 'bg',
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative border-b border-[var(--border)] px-6 py-24 md:py-32 ${
        tone === 'surface' ? 'bg-surface' : 'bg-bg'
      }`}
      aria-labelledby={titleId}
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              micro={micro}
              title={title}
              subtitle={subtitle}
              titleId={titleId}
              highlightWord={highlightWord}
            />
          </div>
        </div>

        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  )
}
