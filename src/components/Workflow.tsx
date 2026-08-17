import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { workflowSteps } from '../data/workflow'
import { useApp } from '../context/AppContext.tsx'
import SectionHeader from './SectionHeader'
import { fadeUp, staggerContainer, staggerItem } from '../lib/motion'

export default function Workflow() {
  const { t } = useApp()

  return (
    <section
      id="workflow"
      className="relative border-b border-[var(--border)] bg-surface px-6 py-20 md:py-28"
      aria-labelledby="workflow-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          micro={t('workflow.micro')}
          title={t('workflow.title')}
          subtitle={t('workflow.subtitle')}
          titleId="workflow-title"
        />

        {/* DESKTOP: Full Continuous Horizontal Connected Flow (01 -> 02 -> 03 -> 04 -> 05) */}
        <div className="relative mt-16 hidden lg:block">
          {/* Línea horizontal continua conectora */}
          <div className="absolute left-6 right-6 top-[28px] h-px bg-[var(--border)]" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute left-6 right-6 top-[28px] h-px origin-left bg-accent"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative grid grid-cols-5 gap-5"
          >
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col pt-12 transition-all duration-200"
              >
                {/* Nodo sobre la línea horizontal */}
                <div className="absolute left-6 top-4 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-accent/80 bg-bg font-mono text-xs font-bold text-accent shadow-sm shadow-accent/20 transition-all group-hover:scale-125 group-hover:border-accent group-hover:bg-accent group-hover:text-dark">
                  {step.number}
                </div>

                {/* Tarjeta de la fase */}
                <div className="flex h-full flex-col justify-between border border-[var(--border)] bg-bg p-6 transition-all duration-200 group-hover:border-accent/70 group-hover:bg-surface-2 group-hover:shadow-lg group-hover:shadow-accent/5">
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-[var(--border)] pb-3">
                      <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
                        {step.title}
                      </h3>
                      <ArrowRight
                        size={14}
                        className="text-secondary opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100"
                      />
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-secondary transition-colors group-hover:text-primary sm:text-sm">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-3 font-mono text-[10px] text-secondary">
                    <span className="uppercase tracking-wider">STAGE 0{i + 1}</span>
                    <span className="font-semibold text-accent">ACTIVE</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* MOBILE & TABLET: Vertical Connected Timeline */}
        <div className="relative mt-12 space-y-6 lg:hidden">
          {/* Línea vertical conectora */}
          <div className="absolute bottom-4 left-4 top-4 w-px bg-[var(--border)]" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute bottom-4 left-4 top-4 w-px origin-top bg-accent"
          />

          {workflowSteps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.08}
              className="group relative pl-10"
            >
              {/* Nodo sobre la línea vertical */}
              <div className="absolute left-4 top-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-accent bg-bg font-mono text-[11px] font-bold text-accent shadow-sm shadow-accent/20">
                {step.number}
              </div>

              <div className="border border-[var(--border)] bg-bg p-5 transition-all duration-200 hover:border-accent/70 hover:bg-surface-2">
                <div className="flex items-center justify-between gap-2 border-b border-[var(--border)] pb-2.5">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[10px] text-accent">STAGE 0{i + 1}</span>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-secondary sm:text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
