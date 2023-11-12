import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="skill">My Skills</NavLink>
        <NavLink to="projects">Projects</NavLink>
      </div>
    </aside>
  )
}
export default Sidebar
