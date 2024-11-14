import { project } from './Data'
const Projects = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold mb-0 p-0 text-red-500">Projects</p>
        <p className="text-3xl font-bold mb-10">
          I have experience working on multiple projects, some of which I
          highlighted below
        </p>
      </div>
      <div className="portfolio-container">
        {project.map((proj, index) => {
          const { name, image, link, details, stack } = proj

          return (
            <div
              style={{
                borderRadius: '2rem',
                paddingBottom: '1rem',
                boxShadow:
                  '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              }}
            >
              <a href={link} target="_blank" rel="noreferrer">
                <div className="portfoli-box">
                  <img src={image} alt={image} />
                </div>
                <div className="text-[16px] flex flex-col gap-2 p-4 min-h-[180px]">
                  <h2 className="text-[2rem] font-bold" style={{ margin: 0 }}>
                    {name}
                  </h2>
                  <p className="text"> {details}</p>
                  <p className="text">{stack}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
