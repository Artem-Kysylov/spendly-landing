// components/utils/motion.ts
import type { Variants, Transition, EasingDefinition } from 'framer-motion'

type ViewportOptions = {
  once?: boolean
  amount?: number
  margin?: string
}

export const ease: EasingDefinition = [0.22, 1, 0.36, 1]
export const defaultTransition: Transition = { duration: 0.6, ease }

export const viewportDefault: ViewportOptions = { once: true, amount: 0.2 }
export const viewportLong: ViewportOptions = { once: true, amount: 0.2, margin: '0px 0px -10% 0px' }
export const viewportStrict: ViewportOptions = { once: true, amount: 0.6, margin: '0px 0px -20% 0px' }

export function fadeUp(delay = 0, y = 24): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { ...defaultTransition, delay } }
  }
}

export function fadeUpDelayed(delay = 0.1, y = 24): Variants {
  return fadeUp(delay, y)
}

export function fadeUpSlow(delay = 0, y = 24): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { ...defaultTransition, duration: 0.9, delay } }
  }
}

export function fadeUpScale(delay = 0.15, y = 24, scaleFrom = 0.98): Variants {
  return {
    hidden: { opacity: 0, y, scale: scaleFrom },
    visible: { opacity: 1, y: 0, scale: 1, transition: { ...defaultTransition, delay } }
  }
}

export function containerStagger(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } }
  }
}