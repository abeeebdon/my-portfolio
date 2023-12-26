import { NavLink } from 'react-router-dom'
const Sidebar = ({ handleClick }) => {
  return (
    <aside>
      <div className="sidebar" onClick={handleClick}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="skill">My Skills</NavLink>
        <NavLink to="projects">Projects</NavLink>
      </div>
    </aside>
  )
}
export default Sidebar
