import { FaChevronUp } from 'react-icons/fa'
import { project } from './Data'
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
            <div key={index} className="portfoli-box">
              <img src={image} alt={image} />
              <div className="portfolio-layer">
                <p>{name}</p>
                <a href={link}>
                  <FaChevronUp />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
