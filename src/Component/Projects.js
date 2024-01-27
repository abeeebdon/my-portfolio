import { FaChevronUp } from 'react-icons/fa'

const Projects = ({ project }) => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        {project.map((proj) => {
          const { name, image, link } = proj

          return (
            <div className="portfoli-box">
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
