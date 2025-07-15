import { project } from "./Data";

const Projects = () => {
  return (
    <div>
      <section
        id="projects"
        className="max-w-screen-xl px-4 py-6 md:py-10 mx-auto"
      >
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold">Featured Projects</h2>

          <div class="w-24 h-1 bg-yellow-500 dark:bg-yellow-400 mx-auto mt-4"></div>

          <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            This is where I showcase my work. Each project is more than just
            code; it's a case study in problem-solving. Click on any project to
            see a detailed breakdown of its purpose, the development process,
            and the technologies used. This section provides tangible proof of
            my skills in action.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10  md:grid-cols-2 md:mt-8 md:pb-32 sm:grid-cols-2">
          {project.map(
            ({ name, image, tags, link, details, github }, index) => {
              return (
                <div
                  key={index}
                  className="project-card rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-[200px] object-cover transition duration-500 ease-in-out group-hover:scale-110"
                  />

                  <div className="p-6 min-h-[180px]">
                    <h3 className="text-xl font-bold mb-2">{name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {details}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="tags bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div class="flex space-x-4 mt-8">
                      <a
                        id="modal-live-link"
                        href={link}
                        target="_blank"
                        class="bg-yellow-500 text-white font-bold py-2 px-5 rounded-lg transition-transform hover:scale-105 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300"
                      >
                        Live Demo
                      </a>
                      <a
                        id="modal-repo-link"
                        href={github}
                        target="_blank"
                        class="bg-gray-200 text-gray-800 font-bold py-2 px-5 rounded-lg transition-transform hover:scale-105 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      >
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
};
export default Projects;
