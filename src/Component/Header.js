import { NavLink } from 'react-router-dom'
import { FaAngleUp, FaBars } from 'react-icons/fa'
const Header = ({ handleClick, sideBar, width }) => {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <h2>
          Abeeb<span>don</span>
        </h2>
      </NavLink>
      {width >= 760 ? (
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
      ) : (
        <div id="menu-icon">
          <div onClick={handleClick}>
            {sideBar ? <FaAngleUp /> : <FaBars />}
          </div>
        </div>
      )}
    </header>
  )
}
export default Header
