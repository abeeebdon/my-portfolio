import { FaChevronUp } from 'react-icons/fa'
import sushi from '../images/Majestic Sushi.png'
import fylo from '../images/desktop.jpg'
import femp from '../images/desktop-preview.jpg'
import odin from '../images/odin.jpg'
import facebook from '../images/download.png'

const Projects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfoli-box">
          <img src={femp} alt="femp" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>A project from frontend mentor</p>
            <a
              href="https://abeebdonfemp.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <FaChevronUp />
            </a>
          </div>
        </div>
        <div className="portfoli-box">
          <img src={sushi} alt="majestic-sushi" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>A three web pages for a restaurant</p>
            <a
              href="https://majestic-sushi.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <FaChevronUp />
            </a>
          </div>
        </div>
        <div className="portfoli-box">
          <img src={fylo} alt="desktop" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Fylo Landing Page</p>
            <a
              href="https://abeebdon-fylo-landing-page.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <FaChevronUp />
            </a>
          </div>
        </div>

        <div className="portfoli-box">
          <img src={odin} height="420px" alt="img" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>A dummy of ODIN sign up Page</p>
            <a
              href="https://abeebdonodinproject.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <FaChevronUp />
            </a>
          </div>
        </div>
        <div className="portfoli-box">
          <img src={facebook} alt="download" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>A dummy of facebook menu page</p>
            <a href="https://abeebdon-fylo-landing-page.netlify.app/">
              <FaChevronUp />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
