import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="skill">My Skills</NavLink>
      <NavLink to="projects">My Projects</NavLink>
    </nav>
  )
}
export default Sidebar
