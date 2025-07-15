import { skills } from "./Data";

const Skills = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #101624, #1C2238)",
      }}
      className="bg-gradient-to-br from-[#101624] to-[#1C2238]"
    >
      <section
        id="skills"
        className="max-w-screen-xl mx-auto md:h-screen p-4 pt-8  pb-16"
      >
        <div className="mb-8 text-center">
          <p className="text-3xl font-bold mb-0 p-0 text-portfolio-mc">
            My Skills
          </p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center max-[450px]:grid max-[450px]:grid-cols-2">
          {skills.map(({ name, image }, index) => {
            return (
              <div
                key={index}
                className="w-fit p-4 my-4 max-[450px]:my-4 max-[450px]:w-full max-[450px]:flex max-[450px]:flex-col max-[450px]:justify-center max-[450px]:items-center max-[450px]:gap-4 max-[350px]:block"
              >
                <img
                  src={image}
                  alt={name}
                  className="block w-[80px] h-[80px] rounded-full mx-auto mb-2"
                />
                <p className="text-center text-3xl max-[450px]:text-left">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Skills;
