import { skills } from './Data'
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="my-skills">
        <h1 className="heading" style={{ color: 'red' }}>
          My Skills
        </h1>
      </div>
      <div className="flex">
        {skills.map((skill) => {
          return (
            <div className="grid-image" key={skill.id}>
              <img src={skill.image} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Skills
