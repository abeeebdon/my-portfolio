import { FaBars } from "react-icons/fa";
import { buttons } from "./Data";

const Header = ({ handleClick, sideBar }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full p-4 z-10 bg-portfolio-sbg lg:px-[3%] lg:py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="text-4xl font-semibold cursor-default"
        >
          <h2>
            Abeeb<span className="text-portfolio-mc">don</span>
          </h2>
        </button>
        <nav className="flex justify-between gap-4 text-xl max-[760px]:hidden">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => scrollToSection(button.id)}
              className="text-xl ml-16 transition duration-300 hover:text-portfolio-mc"
            >
              {button.text}
            </button>
          ))}
        </nav>
        <div
          onClick={handleClick}
          className="cursor-pointer md:hidden text-3xl text-portfolio-mc"
        >
          {!sideBar && <FaBars />}
        </div>
      </div>
    </header>
  );
};
export default Header;
