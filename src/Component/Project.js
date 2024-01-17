import { FaChevronUp } from 'react-icons/fa'

const Project = ({ project }) => {
  const { name, image, link } = project
  return (
    <div className="portfoli-box">
      <img src={image} alt={image} />
      <div className="portfolio-layer">
        <p>{name}</p>
        <a href={link}>
          <FaChevronUp />
        </a>
      </div>
    </div>
  )
}
export default Project
