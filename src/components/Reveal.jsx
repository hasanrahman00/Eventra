import { motion, useReducedMotion } from 'framer-motion'

// Fade-up on scroll-into-view. `as` swaps the motion element (e.g. 'li').
export default function Reveal({ children, className, delay = 0, as = 'div', y = 16 }) {
  const reduce = useReducedMotion()
  const M = motion[as] || motion.div
  return (
    <M
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </M>
  )
}
