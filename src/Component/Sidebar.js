import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <p>Home</p>

      <NavLink to="/">
        <p>About</p>
      </NavLink>
      <NavLink to="/">
        <p>My Skills</p>
      </NavLink>
      <NavLink to="/">
        <p>Projects</p>
      </NavLink>
    </div>
  )
}
export default Sidebar
