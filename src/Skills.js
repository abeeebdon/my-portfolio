import { skills } from './Data'
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div>
        <p className="text-2xl font-bold mb-0 p-0 text-red-500">My Skills</p>
        <p className="text-3xl font-bold mb-10">
          I have experience working on multiple projects, Below are some of the
          skills i have learned and mastered.
        </p>
      </div>

      <div className="skills-con">
        {skills.map((skill, index) => {
          return (
            <div className="grid-image" key={index}>
              <img
                src={skill.image}
                alt={skill.name}
                style={{
                  width: '80px',
                  height: '80px',
                  textAlign: 'center',
                  borderRadius: '100%',
                  margin: 'auto',
                }}
              />
              <p>{skill.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Skills
