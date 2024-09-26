import { skills } from './Data'
import FadeComponent from './FadeComponent'
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="my-skills">
        <h1 className="heading" style={{ color: 'red' }}>
          My Skills
        </h1>
      </div>
      <div className="flex">
        {skills.map((skill, index) => {
          return (
            <FadeComponent key={index} index={index}>
              <div className="grid-image">
                <img src={skill.image} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            </FadeComponent>
          )
        })}
      </div>
    </section>
  )
}
export default Skills
