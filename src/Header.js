import { FaBars } from "react-icons/fa";
import { buttons } from "./Data";

const Header = ({ handleClick, sideBar, setTheme }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 p-4 lg:px-[3%] lg:py-4 bg-white dark:bg-gray-900 shadow-md"
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-4xl font-semibold text-gray-900 dark:text-white"
        >
          Abeeb<span className="text-portfolio-mc">don</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden max-[760px]:hidden md:flex items-center gap-8 text-lg">
          {buttons.map((button) => (
            <a
              key={button.id}
              href={`#${button.id}`}
              className="transition duration-300 hover:text-portfolio-mc text-gray-800 dark:text-gray-200"
            >
              {button.text}
            </a>
          ))}
          {/* Theme Toggle */}
          {/* <button
            id="theme-toggle"
            title="Toggle Dark Mode"
            onClick={setTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            <FaMoon />
          </button> */}
        </nav>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleClick}
          className="md:hidden cursor-pointer text-3xl text-portfolio-mc"
        >
          {!sideBar && <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
