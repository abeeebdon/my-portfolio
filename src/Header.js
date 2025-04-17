import { FaAngleUp, FaBars } from "react-icons/fa";
import { buttons } from "./Data";

const Header = ({ handleClick, sideBar }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <button onClick={() => scrollToSection("home")} className="logo">
          <h2>
            Abeeb<span>don</span>
          </h2>
        </button>
        <nav className="navbar">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => scrollToSection(button.id)}
              className="navlink"
            >
              {button.text}
            </button>
          ))}
        </nav>
        <div id="menu-icon">
          <div onClick={handleClick}>
            {sideBar ? <FaAngleUp /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
