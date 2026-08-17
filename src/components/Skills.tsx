import { motion } from 'framer-motion'
import {
  Handshake,
  MessageSquareText,
  Puzzle,
  Target,
  TrendingUp,
} from 'lucide-react'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'
import { staggerContainer, staggerItem } from '../lib/motion'

const frameworkSteps = [
  'LEADERSHIP',
  'COMMUNICATION',
  'ANALYSIS',
  'EXECUTION',
  'RESULTS',
]

export default function Skills() {
  const { t } = useApp()

  return (
    <section
      id="skills"
      className="relative border-b border-[var(--border)] bg-bg px-6 py-20 md:py-28"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          micro={t('skills.micro')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
          titleId="skills-title"
        />

        {/* Bento Capabilities Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12"
        >
          {/* 01 LEADERSHIP (7 cols) */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between border border-[var(--border)] bg-surface p-6 sm:p-8 transition-all duration-200 hover:border-accent/70 hover:shadow-lg hover:shadow-accent/5 lg:col-span-7"
          >
            <div>
              <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-accent">01</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-secondary group-hover:text-primary">
                    {t('skills.leadership.label')}
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-bg text-accent transition-transform group-hover:translate-x-1 group-hover:border-accent">
                  <Target size={20} />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-primary sm:text-2xl">
                {t('skills.leadership.title')}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-secondary transition-colors group-hover:text-primary sm:text-base">
                {t('skills.leadership.description')}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
              {['DIRECTION', 'OBJECTIVES', 'EXECUTION'].map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--border)] bg-bg px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary transition-colors group-hover:border-accent/40 group-hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 02 COMMUNICATION (5 cols) */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between border border-[var(--border)] bg-surface p-6 sm:p-8 transition-all duration-200 hover:border-accent/70 hover:shadow-lg hover:shadow-accent/5 lg:col-span-5"
          >
            <div>
              <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-accent">02</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-secondary group-hover:text-primary">
                    {t('skills.communication.label')}
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-bg text-accent transition-transform group-hover:translate-x-1 group-hover:border-accent">
                  <MessageSquareText size={20} />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-primary sm:text-2xl">
                {t('skills.communication.title')}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-secondary transition-colors group-hover:text-primary sm:text-base">
                {t('skills.communication.description')}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
              {['CLARITY', 'PERSUASION', 'KEY ACCOUNTS'].map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--border)] bg-bg px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary transition-colors group-hover:border-accent/40 group-hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 03 RESULTS ORIENTATION / CONVERSION (Heroic Block: 8 cols) */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between border-2 border-accent/80 bg-surface p-6 sm:p-8 md:p-10 shadow-lg shadow-accent/5 transition-all duration-200 hover:border-accent md:col-span-2 lg:col-span-8"
          >
            {/* Gráfico abstracto de crecimiento decorativo */}
            <div className="pointer-events-none absolute right-4 top-4 opacity-10 transition-opacity group-hover:opacity-25 sm:right-8 sm:top-8">
              <svg width="180" height="90" viewBox="0 0 180 90" fill="none" className="stroke-accent">
                <path d="M5 80 L50 60 L95 68 L140 30 L175 10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 80 L50 60 L95 68 L140 30 L175 10 L175 85 L5 85 Z" fill="url(#grad)" opacity="0.3" />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-extrabold text-accent">03</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">
                    {t('skills.conversion.label')}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 border border-accent bg-accent/15 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-accent shadow-sm">
                  <TrendingUp size={14} />
                  <span>{t('skills.conversion.badge')}</span>
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                {t('skills.conversion.title')}
              </h3>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-secondary transition-colors group-hover:text-primary sm:text-lg">
                {t('skills.conversion.description')}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
              {['SEGMENTATION', 'BUYER PERSONA', 'SALES CONVERSION', 'DATA-DRIVEN ROI'].map((tag) => (
                <span
                  key={tag}
                  className="border border-accent/40 bg-bg px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual Alignment System Card (4 cols) */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col justify-between border border-[var(--border)] bg-surface-2 p-6 sm:p-8 md:col-span-2 lg:col-span-4"
          >
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                EXECUTION FLOW
              </span>
              <p className="mt-1 font-mono text-[11px] text-accent">
                CORE CAPABILITY VECTOR
              </p>

              <div className="mt-6 space-y-2.5">
                {frameworkSteps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-accent">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                      {step}
                    </span>
                    {idx < frameworkSteps.length - 1 && (
                      <span className="ml-auto font-mono text-xs text-accent">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-[var(--border)] pt-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-secondary">
                OUTCOME: HIGH CONVERSION REVENUE
              </span>
            </div>
          </motion.div>

          {/* 04 PROBLEM SOLVING (6 cols) */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between border border-[var(--border)] bg-surface p-6 sm:p-8 transition-all duration-200 hover:border-accent/70 hover:shadow-lg hover:shadow-accent/5 md:col-span-1 lg:col-span-6"
          >
            <div>
              <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-accent">04</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-secondary group-hover:text-primary">
                    {t('skills.problemSolving.label')}
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-bg text-accent transition-transform group-hover:translate-x-1 group-hover:border-accent">
                  <Puzzle size={20} />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-primary sm:text-2xl">
                {t('skills.problemSolving.title')}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-secondary transition-colors group-hover:text-primary sm:text-base">
                {t('skills.problemSolving.description')}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
              {['ADAPT', 'SOLVE', 'EXECUTE'].map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--border)] bg-bg px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary transition-colors group-hover:border-accent/40 group-hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 05 COLLABORATION (6 cols) */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between border border-[var(--border)] bg-surface p-6 sm:p-8 transition-all duration-200 hover:border-accent/70 hover:shadow-lg hover:shadow-accent/5 md:col-span-1 lg:col-span-6"
          >
            <div>
              <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-accent">05</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-secondary group-hover:text-primary">
                    {t('skills.collaboration.label')}
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-bg text-accent transition-transform group-hover:translate-x-1 group-hover:border-accent">
                  <Handshake size={20} />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-primary sm:text-2xl">
                {t('skills.collaboration.title')}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-secondary transition-colors group-hover:text-primary sm:text-base">
                {t('skills.collaboration.description')}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
              {['TEAMWORK', 'ALIGNMENT', 'EXECUTION'].map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--border)] bg-bg px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary transition-colors group-hover:border-accent/40 group-hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
