import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <section className="about" id="about">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -200 },
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: 'easeOut',
        }}
      >
        <div className="about-img">
          <img src="/abeeb.png" alt="pics" className="img about-img" />
        </div>
      </motion.div>
      <div className="about-content">
        <h2>
          About <span>ME</span>
        </h2>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0, y: 0 },
            hidden: { opacity: 0, x: 100, y: 100 },
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut',
          }}
        >
          <p>
            I am Abeeb Maroof Olumide, an expert in creating responsive website
            with great user interface and user experience. I work well with
            others and have a great problem-solving skills. I thrive in dynamic
            environments leveraging on my problem-solving skills to overcome
            challenges and exceed expectation. My user centered approach allows
            me to design captivating visuals and provide an optimal use
            experience. Continually seeking the latest trends. I enjoy taking on
            new challenges and collaborating with clients to bring ideas to life
            through high quality user interface.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
export default About
