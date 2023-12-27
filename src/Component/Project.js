import { FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Project = ({ project }) => {
  const { id, name, image, link } = project
  return (
    <div className="portfoli-box">
      <img src={image} alt={image} />
      <div className="portfolio-layer">
        <p>{name}</p>
        <Link to={`/projects/${id}`}>
          <FaChevronUp />
        </Link>
      </div>
    </div>
  )
}
export default Project
