import { project } from "./Data";

const Projects = () => {
  return (
    <div style={{ background: "#0A0F2C80" }}>
      <section
        id="projects"
        className="max-w-screen-xl px-4 py-6 md:py-10 mx-auto"
      >
        <div className="flex flex-col gap-2 text-center mb-16">
          <p className="text-3xl font-bold p-0 text-portfolio-mc">
            My Projects
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10  md:grid-cols-2 md:mt-8 md:pb-32 sm:grid-cols-2">
          {project.map(({ name, image, link, details, stack }, index) => {
            return (
              <div
                key={index}
                className="rounded-[2rem] pb-4 shadow-xl shadow-[#FFCC33] border-[#bad63b] border overflow-hidden group"
              >
                <a href={link} target="_blank" rel="noreferrer">
                  <div className="relative overflow-hidden flex h-[250px]">
                    <img
                      src={image}
                      alt={name}
                      className="w-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="text-base flex flex-col gap-2 p-4 min-h-[180px]">
                    <h2 className="text-3xl font-bold mb-1 text-portfolio-mc">
                      {name}
                    </h2>
                    <p className="text-lg my-1 mb-2"> {details}</p>
                    <p className="text-lg my-1">{stack}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Projects;
