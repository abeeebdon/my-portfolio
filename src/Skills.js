import { skills } from "./Data";

const Skills = () => {
  return (
    <div className="">
      <section
        id="skills"
        className="max-w-screen-xl mx-auto md:h-screen p-4 pt-8  pb-16"
      >
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold">My Tech Stack</h2>
          <div class="w-24 h-1 bg-yellow-500 dark:bg-yellow-400 mx-auto mt-4"></div>
          <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here is a collection of the key technologies and tools I work with.
            This isn't just a list; it represents the toolkit I use to build
            robust, scalable, and visually appealing applications. By hovering
            over each skill, you can get a feel for the technologies I am most
            proficient in.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center max-[450px]:grid max-[450px]:grid-cols-2">
          {skills.map(({ name, image }, index) => {
            return (
              <div
                key={index}
                className="skill-card flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={name}
                  className="block w-[80px] h-[80px] rounded-full mx-auto mb-2"
                />
                <h3 class="font-semibold">{name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Skills;
