import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeComponent = ({ children, index }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  const isEven = index % 2 === 0

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0, y: 0 },
        hidden: { opacity: 0, x: isEven ? 0 : 100, y: isEven ? 100 : 0 },
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeComponent
