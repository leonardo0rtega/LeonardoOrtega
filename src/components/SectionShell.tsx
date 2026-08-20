import type { ReactNode } from 'react'
import SectionHeader from './SectionHeader'

interface SectionShellProps {
  id: string
  micro: string
  title: string
  subtitle?: string
  titleId: string
  highlightWord?: string
  tone?: 'bg' | 'surface'
  /** stack: encabezado a lo ancho y contenido debajo. split: encabezado a la izquierda y contenido a la derecha. */
  layout?: 'stack' | 'split'
  /** Solo en layout split: mantiene la columna izquierda fija durante el scroll. */
  sticky?: boolean
  /** Solo en layout split: contenido extra bajo el encabezado en la columna izquierda. */
  aside?: ReactNode
  /** Solo en layout split: columnas (de 12) que ocupa la columna del encabezado. */
  headerSpan?: 4 | 5 | 6 | 7
  children: ReactNode
}

const headerSpanClass = {
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
} as const

const contentSpanClass = {
  4: 'lg:col-span-8',
  5: 'lg:col-span-7',
  6: 'lg:col-span-6',
  7: 'lg:col-span-5',
} as const

export default function SectionShell({
  id,
  micro,
  title,
  subtitle,
  titleId,
  highlightWord,
  tone = 'bg',
  layout = 'stack',
  sticky = false,
  aside,
  headerSpan = 5,
  children,
}: SectionShellProps) {
  const sectionClass = `relative border-b border-[var(--border)] px-6 py-16 md:py-20 lg:py-24 ${
    tone === 'surface' ? 'bg-surface' : 'bg-bg'
  }`

  if (layout === 'split') {
    return (
      <section id={id} className={sectionClass} aria-labelledby={titleId}>
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <div className={headerSpanClass[headerSpan]}>
            <div className={sticky ? 'lg:sticky lg:top-24' : undefined}>
              <SectionHeader
                micro={micro}
                title={title}
                subtitle={subtitle}
                titleId={titleId}
                highlightWord={highlightWord}
              />
              {aside && <div className="mt-8">{aside}</div>}
            </div>
          </div>

          <div className={contentSpanClass[headerSpan]}>{children}</div>
        </div>
      </section>
    )
  }

  return (
    <section id={id} className={sectionClass} aria-labelledby={titleId}>
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          variant="row"
          micro={micro}
          title={title}
          subtitle={subtitle}
          titleId={titleId}
          highlightWord={highlightWord}
        />

        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  )
}
