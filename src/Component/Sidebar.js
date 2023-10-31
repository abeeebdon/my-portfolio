import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="about">
        <p>About</p>
      </NavLink>
      <NavLink to="skills">
        <p>My Skills</p>
      </NavLink>
      <NavLink to="projects">
        <p>Projects</p>
      </NavLink>
    </div>
  )
}
export default Sidebar
