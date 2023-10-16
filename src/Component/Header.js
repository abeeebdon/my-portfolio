import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
const Header = ({ onClick }) => {
  const click = () => {
    onClick()
  }
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <h2>
          Abeeb<span>don</span>
        </h2>
      </NavLink>
      <div id="menu-icon">
        <button onClick={click}>
          <FaBars />
        </button>
      </div>
      <nav className="navbar">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>

        <NavLink to="about" className="navlink">
          About
        </NavLink>
        <NavLink to="skill" className="navlink">
          My Skills
        </NavLink>
        <NavLink to="projects" className="navlink">
          My Projects
        </NavLink>
      </nav>
    </header>
  )
}
export default Header
