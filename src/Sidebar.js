import { FaTimes } from "react-icons/fa";
import { buttons } from "./Data";

const Sidebar = ({ setSideBar }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close sidebar after clicking a link
    setSideBar(false);
  };

  return (
    <aside className="fixed top-0 right-0 w-4/5 max-w-[300px] h-screen z-20 bg-gray-600 md:hidden">
      <div className="pt-8 text-right pr-4 pl-4">
        <FaTimes
          className="text-3xl pt-1 cursor-pointer inline-block"
          onClick={() => setSideBar(false)}
        />
      </div>
      <div className="flex flex-col mt-8 gap-6 p-8 pl-12">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => scrollToSection(button.id)}
            className="text-white text-3xl text-center hover:text-red-600"
          >
            {button.text}
          </button>
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
