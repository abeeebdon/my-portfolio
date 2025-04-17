import { FaTimes } from "react-icons/fa";
import { buttons } from "./Data";

const Sidebar = ({ handleClick, setSideBar }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside>
      <div className="icon-wrapper">
        <FaTimes className="cancel-icon" onClick={() => setSideBar(false)} />
      </div>
      <div className="sidebar" onClick={handleClick}>
        {buttons.map((button) => (
          <button key={button.id} onClick={() => scrollToSection(button.id)}>
            {button.text}
          </button>
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
