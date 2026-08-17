import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom,
      ease: 'easeOut',
    },
  }),
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: custom,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export const lineRevealX: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: (custom = 0) => ({
    scaleX: 1,
    transition: {
      duration: 0.7,
      delay: custom,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export const lineRevealY: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: (custom = 0) => ({
    scaleY: 1,
    transition: {
      duration: 0.7,
      delay: custom,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
