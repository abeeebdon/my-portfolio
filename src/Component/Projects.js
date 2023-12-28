import Project from './Project'

const Projects = ({ projects, setProjects }) => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />
        })}
      </div>
    </section>
  )
}
export default Projects
