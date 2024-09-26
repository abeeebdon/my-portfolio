import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Home = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h3>Hello, it's Me</h3>
        <h1>Abeeb Maroof</h1>
        <h3>
          I am a <span>Frontend Developer</span>
        </h3>
        <p>
          I am highly experienced in creating responsive web pages with great
          user interface and user experience
        </p>
        <div className="github-link">
          <a
            href="https://github.com/abeeebdon"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/13JHMJn6lYmiokmuwLlU12pZQT1rPRrdtH9HT_n7w6c8/edit?usp=drivesdk"
            rel="noreferrer"
          >
            MY CV
          </a>
        </div>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: 100, y: -100 },
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: 'easeIn',
        }}
      >
        <div className="image">
          <img
            src="./pics-removebg-preview.png"
            alt="my_pics"
            className="img"
          />
        </div>
      </motion.div>
    </section>
  )
}
export default Home
