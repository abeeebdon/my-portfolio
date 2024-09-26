import { FaChevronUp } from 'react-icons/fa'
import { project } from './Data'
import FadeComponent from './FadeComponent'
const Projects = () => {
  return (
    <section className="portfolio" id="projects">
      <h2 className="heading">
        <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        {project.map((proj, index) => {
          const { name, image, link } = proj

          return (
            <FadeComponent key={index} index={index}>
              <div className="portfoli-box">
                <img src={image} alt={image} />
                <div className="portfolio-layer">
                  <p>{name}</p>
                  <a href={link} target="_blank" rel="noreferrer">
                    <FaChevronUp />
                  </a>
                </div>
              </div>
            </FadeComponent>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
