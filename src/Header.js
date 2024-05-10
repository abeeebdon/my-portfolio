import { FaAngleUp, FaBars } from 'react-icons/fa'
const Header = ({ handleClick, sideBar, width }) => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#home" className="logo">
          <h2>
            Abeeb<span>don</span>
          </h2>
        </a>
        {width >= 760 ? (
          <nav className="navbar">
            <a href="#home" className="navlink">
              Home
            </a>
            <a href="#about" className="navlink">
              About
            </a>
            <a href="#skills" className="navlink">
              My Skills
            </a>
            <a href="#projects" className="navlink">
              My Projects
            </a>
          </nav>
        ) : (
          <div id="menu-icon">
            <div onClick={handleClick}>
              {sideBar ? <FaAngleUp /> : <FaBars />}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
