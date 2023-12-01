'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type MotionDivProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof motion.div>

export const MotionDiv = ({ children, ...props }: MotionDivProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial='closed'
      animate={isInView ? 'open' : 'closed'}
      {...props}
    >
      {children}
    </motion.div>
  )
}
