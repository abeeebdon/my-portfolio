import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import project from '../Data'

const ProjectPage = () => {
  const { id } = useParams()
  const post = project.find((pro) => pro.id.toString() === id)
  const { name, image, link, desc, skills } = post
  console.log(name)
  return (
    <article className="projectPage">
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <div className="project-link">
          <a href="#">GIT REPO </a>
          <a href="#">Page </a>
        </div>
      </div>
      <div className="description">
        <p className="desc">{desc[0]}</p>
        <div>
          <p>It is created with</p>

          {skills.map((skill) => {
            return <li key={skill}>{skill}</li>
          })}
          <p>{desc[1]}</p>
        </div>
      </div>
    </article>
  )
}
export default ProjectPage
